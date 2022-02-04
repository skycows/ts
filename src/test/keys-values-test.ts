import { makeFakeData, IFake } from "../fake/makeFakeData";

const data: IFake = makeFakeData();
const keys = Object.keys(data);
console.log("keys:", keys);
const values = Object.values(data);
console.log("values:", values);
