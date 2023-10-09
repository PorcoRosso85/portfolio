import { createStore } from "tinybase";

const store = createStore();
store.setValue("v1", "Hello");
store.setCell("t1", "r1", "c1", "World");
const hello = store.getValue("v1") + " " + store.getCell("t1", "r1", "c1");
// console.log(store.getValue("v1") + " " + store.getCell("t1", "r1", "c1"));
(document.querySelector(".hello") as HTMLElement).textContent = hello;
