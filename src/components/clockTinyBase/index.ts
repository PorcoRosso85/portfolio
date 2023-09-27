import { createStore } from "tinybase/lib/types/store/with-schemas";
const store = createStore();

const setTime = (() => {
  store.setCell("t1", "r1", "c1", new Date().toLocaleTimeString());
})();

const update = (() => {
  document.body.innerHTML = store.getCell("t1", "r1", "c1");
})();
