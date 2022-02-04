import * as fs from "fs";

export function* readFileGenerator(filename: string): any {
  let fd: any;

  try {
    fd = fs.openSync(filename, "rs");
    const status = fs.fstatSync(fd);
    const bufferSize = Math.min(status.size, 1024);
    const buffer = Buffer.alloc(bufferSize + 4);
    let filepos = 0,
      line;

    while (filepos > -1) {
      [line, filepos] = readLine(fd, buffer, bufferSize, filepos);
      if (filepos > -1) {
        yield line;
      }
    }
    yield buffer.toString();
  } catch (e) {
    console.error("readLine", e.message);
  } finally {
    fd && fs.closeSync(fd);
  }
}

function readLine(
  fd: any,
  buffer: Buffer,
  bufferSize: number,
  position: number
): [string, number] {
  let line = "",
    readSize;
  const crSize = "\n".length;

  while (true) {
    readSize = fs.readSync(fd, buffer, 0, bufferSize, position);

    if (readSize > 0) {
      const temp = buffer.toString("utf8", 0, readSize);
      const index = temp.indexOf("\n");

      if (index > -1) {
        line += temp.substring(0, index);
        position += index + crSize;
        break;
      } else {
        line += temp;
        position += temp.length;
      }
    } else {
      position = -1;
      break;
    }
  }

  return [line.trim(), position];
}
