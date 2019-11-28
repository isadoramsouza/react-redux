import React, { Component } from "react";
import PageHeader from "../template/pageHeader";
import TodoForm from "../todo/todoForm";
import TodoList from "../todo/todoList";

export default class Todo extends Component {
  render() {
    return (
      <div>
        <br></br>
        <PageHeader name="Tarefas" small="Cadastro"></PageHeader>
        <TodoForm />
        <TodoList />
      </div>
    );
  }
}
