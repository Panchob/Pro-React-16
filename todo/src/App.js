import React, { Component } from 'react';
import { TodoBanner, TodoBNanner } from "./TodoBanner";
import { TodoCreator } from "./TodoCreator"
import { todoRow, TodoRow } from "./TodoRow"


export default class App extends Component
{
  constructor(props) {
    super(props);
    this.state = {
      userName: "Panchob",
      todoItems: [{
                    action: "Buy Flowers",
                    done: false },
                  {
                    action: "Get Shoes",
                    done: false
                  },
                  {
                    action: "Collect Tickets",
                    done: true
                  },
                  {
                    action: "Call Joe",
                    done: false
                  }],
      newItemText: "" 
    }
  }

  updateNewStateValue = (event) => {
    this.setState({
      newItemText: event.target.value
    });
  }

  createNewToDo = (task) =>{
    if (!this.state.todoItems.find(item =>item.action === task)) {
      this.setState({
        todoItems:[...this.state.todoItems,
                   {
                    action: task,
                    done: false
                   }]
      });
    }
  }

  toggleTodo = (todo) => this.setState({
    todoItems: this.state.todoItems.map(item =>
      item.action === todo.action ? {...item, done: !item.done} : item)
  });

  todoTableRows = () =>
  this.state.todoItems.map(item =>
    <TodoRow key={ item.action } item={ item } callback={ this.toggleTodo } />
    )

  render = () =>
      <div>
        <TodoBanner name={ this.state.userName } tasks={ this.state.todoItems}/>
        <div className="container-fluid">
          <TodoCreator callback={this.createNewToDo}/>
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Description</th>
                <th>Done</th>
              </tr>
              </thead>
              <tbody>
                { this.todoTableRows() }
              </tbody>
          </table>
        </div>
    </div>
}

