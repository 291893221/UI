import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoList from './components/TodoList';
import HelloWorld from './pages/helloWorld/HelloWorld'
import TodoListAntd from './components/TodoListAntd'
import TodoListAntdSearch from './components/TodoListAntdSearch'
import TodoListAntdSearchSelect from './components/TodoListAntdSearchSelect'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <TodoListAntdSearchSelect/>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
