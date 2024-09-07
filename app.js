import { random, people } from "./utilis/data.js";
import showPeople from "./utilis/showPeople.js";
import getElement from "./utilis/getElement.js";

const container = getElement(".container");
const btn = getElement(".btn");
const container1 = getElement(".container1");
console.log(container1);

btn.addEventListener("click", () => {
  container.innerHTML = showPeople(people);
});
