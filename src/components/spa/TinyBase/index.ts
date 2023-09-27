import { createStore } from "tinybase";

const store = createStore();

store.setTable("users", {
  1: {
    name: "John Doe",
    age: 12,
    isVerified: true,
  },
});

store.setTables({
  1: {
    title: "hello world",
    body: "hello world",
  },
});

console.log(store.getTables());
console.log(store.getTable("users"));
