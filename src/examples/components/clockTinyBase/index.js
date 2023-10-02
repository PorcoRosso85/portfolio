import { createStore } from "tinybase/cjs";
const store = createStore();

const setTime = () => {
  store.setCell("t1", "r1", "c1", new Date().toLocaleTimeString());
};
setTime();

const update = () => {
  document.body.innerHTML = store.getCell("t1", "r1", "c1");
};
update();

store.addCellListener("t1", "r1", "c1", update);

setInterval(setTime, 1000);
