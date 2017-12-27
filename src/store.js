const reduce = function reduce(state, action) {
  const nextState = {};
  const keys = Object.keys(this.reducers);
  for (let i = 0; i < keys.length; i += 1) {
    const slice = keys[i];
    nextState[slice] = this.reducers[slice](state[slice], action);
  }
  return nextState;
};

export default class Store {
  constructor(reducers = {}, initialState = {}) {
    this.reducers = reducers;
    this.state = {};

    this.state = reduce.call(this, initialState, {});
  }

  getState() {
    return this.state;
  }

  dispatch(action) {
    this.state = reduce.call(this, this.state, action);
  }
}
