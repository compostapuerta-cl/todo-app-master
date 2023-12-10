import React from "react";
import { CreateTodoButton } from "./components/CreateTodoButton";
import { TodoCounter } from "./components/TodoCounter";
import { TodoItem } from "./components/TodoItem";
import { TodoList } from "./components/TodoList";
import { TodoSearch } from "./components/TodoSearch";

// const defaultTodos = [
//   { text: "Cortar cebolla", completed: false },
//   { text: "Cortar tomate", completed: false },
//   { text: "Caminar", completed: false },
//   { text: "Lanzar la Pelota", completed: false },
// ];

function useLocalStorage (itemName, initialValue) {
  const localStorageItem = localStorage.getItem(itemName)

  let parsedItem;
  
  if(!localStorageItem){
    localStorage.setItem(itemName, JSON.stringify(initialValue))
    parsedItem = initialValue
  } else {
    parsedItem = JSON.parse(localStorageItem)
  }

  const [item, setItem] = React.useState(parsedItem);

  const saveItem = (newItem) => {
    const stringifiedItem = JSON.stringify(newItem)
    localStorage.setItem(itemName, stringifiedItem)
    setItem(newItem)
  }

  return [
    item,
    saveItem,
  ]
}

function App() {
  const [todos, saveTODOS] = useLocalStorage('TODOS_V1', []);


  const [searchValue, setSearchValue] = React.useState("");
  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (searchValue.length <= 0) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();

      return todoText.includes(searchText);
    });
  }

  const filterTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    return todoIndex
  }

  

  const toggleCompleteTodo = (text) => {
    const todoIndex = filterTodo(text);

    const newTodos = [...todos];

    if (!newTodos[todoIndex].completed) {
      newTodos[todoIndex].completed = true;
    } else {
      newTodos[todoIndex].completed = false;
    }

    saveTODOS(newTodos);
  };

  const deleteTodo = (text) => {
    const todoIndex = filterTodo(text);

    const newTodos = [...todos];

    newTodos.splice(todoIndex, 1);

    saveTODOS(newTodos);
  };

  return (
    <>
      <TodoCounter total={totalTodos} completed={completedTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <TodoList>
        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => toggleCompleteTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      <CreateTodoButton />
    </>
  );
}

export default App;
