import { createStore } from "tinybase";
import { dataDocGrid } from "./DataDocGrid";

export const store = createStore().setTables(dataDocGrid);
