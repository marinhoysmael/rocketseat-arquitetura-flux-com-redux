import React, { Component } from 'react';

/**
 * responsavel por atualizar os componentes da aplicação 
 * quando tiver alguma alteração
 */
import { Provider } from 'react-redux';
import store from './store';


import  TodoList from './ToDoList';
import Counter from './Counter';

class App extends Component {
  render(){
    return (
      <Provider store={store}>
        <TodoList/>
        <Counter />
      </Provider>
    );
  }
}

export default App;