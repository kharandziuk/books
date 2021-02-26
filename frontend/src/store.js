import { createStore, action, thunk, computed, persist } from "easy-peasy";

import _ from "lodash";

const books = {
  items: [{ name: "my book" }, { name: "his book" }],
};

const model = { books };

const store = createStore(model, {
  disableImmer: true,
});
export default store;
