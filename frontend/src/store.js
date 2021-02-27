import { createStore } from "easy-peasy";

const books = {
  items: [{ name: "my book" }, { name: "his book" }],
};

const model = { books };

const store = createStore(model, {
  disableImmer: true,
});
export default store;
