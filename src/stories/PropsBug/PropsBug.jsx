import React from "react";
import data from "./data";

console.log({ data }); // {"a":1,"b":2,"c":4}
const modif1 = Object.assign(data, { c: 4 });
console.log({ modif1 });
// const modif2 = Object.assign({ ...data }, { c: 5 });
// const modif3 = Object.assign(Object.clone(data), { c: 6 });

export const PropsBug = () => {
  return <div>{JSON.stringify(data)}</div>;
};
