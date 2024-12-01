import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Todos from './Todos';

const initialState = [
  { task: "task1", status: false, id: 1 },
  { task: "task2", status: true, id: 2 }
];

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { ...action.payload, id: Date.now() }];
    case 'DELETE_TODO':
      return state.filter(todo => todo.id !== action.payload);
    case 'TOGGLE_TODO':
      return state.map(todo =>
        todo.id === action.payload
          ? { ...todo, status: !todo.status }
          : todo
      );
    default:
      return state;
  }
}

const store = createStore(reducer);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Todos />
      </div>
    </Provider>
  );
}

export default App;
