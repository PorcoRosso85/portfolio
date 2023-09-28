import { createStore, createIndexes, createRelationships } from "tinybase";

const store = createStore();
const indexes = createIndexes(store);
const relations = createRelationships(store);

export { store, indexes, relations };
