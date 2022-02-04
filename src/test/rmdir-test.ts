import { rmdir } from "../fileApi/rmdir";

const deleteDataDir = async (dirname: string) => {
  let result = await rmdir(dirname);
  console.log(`'${result}' dir deleted`);
};

deleteDataDir("./data/today");
