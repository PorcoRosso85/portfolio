import { createStore, createIndexes } from "tinybase";

const store = createStore();
const indexes = createIndexes(store);

export { store, indexes };
