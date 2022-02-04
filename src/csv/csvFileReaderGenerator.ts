import { readFileGenerator } from "../fileApi";
import { zip } from "../utils";

export function* csvFileReaderGenerator(finename: string, delim: string = ",") {
  let header = [];

  for (let line of readFileGenerator(finename)) {
    if (!header.length) {
      header = line.split(delim);
    } else {
      yield zip(header, line.split(delim));
    }
  }
}
