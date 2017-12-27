export default class Store {
  constructor(reducers = {}, initialState = {}) {
    this.reducers = reducers;
    this.state = {};

    // Reduce initial state
    this.reduce(initialState, {});
  }

  getState() {
    return this.state;
  }

  dispatch(action) {
    // pass state through all reducers
    this.state = this.reduce(this.state, action);
  }

  reduce(state, action) {
    const nextState = {};
    const keys = Object.keys(this.reducers);
    for (let i = 0; i < keys.length; i += 1) {
      const slice = keys[i];
      nextState[slice] = this.reducers[slice](state, action);
    }
    return nextState;
  }
}
