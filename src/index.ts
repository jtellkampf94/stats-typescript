import { HtmlReport } from "./reportTargets/HtmlReport";
import { Summary } from "./Summary";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { ConsoleReport } from "./reportTargets/ConsoleReport";
import { MatchReader } from "./MatchReader";
import { CsvFileReader } from "./CsvFileReader";

// Create an object that satifies the 'DataReader' iterface
const csvFileReader = new CsvFileReader("football.csv");
// Create an instance of MatchReader and pass in something
// satisfying the 'DataReader' Interface
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

const summary = new Summary(new WinsAnalysis("Man United"), new HtmlReport());
summary.buildAndPrintReport(matchReader.matches);
