import Store from './store';

const todoReducer = function reducer(state, action) {
  switch (action.type) {
    case 'ADD_TODO': {
      const todo = action.payload;
      const items = state && state.items
        ? [...state.items, todo]
        : [todo];
      return {
        ...state,
        items,
      };
    }
    default:
      return state;
  }
};

const reducers = {
  todos: todoReducer,
};

const initialState = {
  items: [],
};

const store = new Store(reducers, initialState);

const addTodo = {
  type: 'ADD_TODO',
  payload: 'Set timer to 10min',
};

const addTodo2 = {
  type: 'ADD_TODO',
  payload: 'Stop timer after 10min',
};

console.log(JSON.stringify(store.getState()));
store.dispatch(addTodo);
console.log(JSON.stringify(store.getState()));
store.dispatch(addTodo2);
console.log(JSON.stringify(store.getState()));
