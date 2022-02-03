import { add } from "@packages/shared";

const a = 2;
const b = 3;
const result = add(a, b);

const infoA = document.querySelector("#a");
const infoB = document.querySelector("#b");
const infoResult = document.querySelector("#result");

infoA.textContent = a;
infoB.textContent = b;
infoResult.textContent = result;
