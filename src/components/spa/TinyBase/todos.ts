import { createStore } from "tinybase";
const store = createStore();

export const add = (todoObject) => {
  const id = crypto?.randomUUID();
  store.setRow("todos", id, todoObject);

  return { [id]: store.getRow("todos", id) };
};

export const update = (todoId, todoObject) =>
  store.setPartialRow("todos", todoId, todoObject).getRow("todos", todoId);

export const remove = (todoId) => store.delRow("todos", todoId);

export const findById = (todoId) => store.getRow("todos", todoId);

export const findAll = () => store.getTable("todos");

add({
  title: "Learn about TinyBase",
  descripton: "Client-side reactive data stores!",
  due: "2023-02-17",
  priority: "normal",
  done: false,
});

console.log(findAll());
export { store };
