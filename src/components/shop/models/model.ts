import store from "../services/store";

const Model = (table) => {
  const add = (object) => {
    const id = crypto.randomUUID();
    store.setRow(table, id, object);
    return { [id]: object };
  };
  const update = (id, object) =>
    store.setPartialRow(table, id, object).getRow(table, id);
  const remove = (id) => store.delRow(table, id);
  const byId = (id) => store.getRow(table, id);
  const all = () => store.getTable(table);

  return {
    add,
    update,
    remove,
    byId,
    all,
  };
};

export default Model;
