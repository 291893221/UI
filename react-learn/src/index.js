import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoList from './component/TodoList';
import HelloWorld from './page/helloWorld/HelloWorld'
import TodoListAntd from './component/TodoListAntd'
import TodoListAntdSearch from './component/TodoListAntdSearch'
import TodoListAntdSearchSelect from './component/TodoListAntdSearchSelect'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <TodoListAntdSearchSelect/>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
