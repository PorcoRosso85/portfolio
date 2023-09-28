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

store.setRow("users", 2, {
  name: "Jane Doe",
  age: 15,
  isVerified: true,
});

console.log(store.getTables());
console.log(store.getTable("users"));
console.log(store.getRow("users", "1"));
console.log(store.getRow("users", "2"));

store.delRow("users", 2);
console.log(store.getRow("users", "2"));
// store.delTables();

// Will update table 'users' row '1' name with James Doe
store.setCell("users", "1", "name", "James Doe");

// Will append table 'users' row '1' with a new cell 'address'
store.setCell("users", "1", "address", "North Pole");
console.log(store.getTable("users"));
console.log(store.getRow("users", "1"));
console.log(store.getCell("users", "1", "address"));

export { store };
