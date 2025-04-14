import AppName from "./components/AppName.jsx"
import TodoItem from "./components/TodoItems.jsx"
import AddTodo from "./components/AddTodo.jsx"
import "./App.css"
import { useContext, useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage.jsx";
import { ItemContext } from "./store/ItemContext.jsx";

function App() {

  let todoItems = [

    //   {
    //   todoName : "admire suraj",
    //   todoDate: "6/03/2025",
    //   button: "click"
    // },
    // {
    //   todoName: "fuck rahul",
    //   todoDate: "8/03/1025",
    //   button: "click"
    // },
    // {
    //   todoName: "fuck agian rahul pandit",
    //   todoDate: "10/03/2025",
    //   button: "fuck"
    // }

  ];

  // const newContext = useContext();

  const [items, setItems] = useState(todoItems)

  const addNewItem = (nameNew, dateNew) => {
    // console.log(`Date: ${dateNew} Name: ${nameNew}`)
    let newitems = { todoName: nameNew, todoDate: dateNew }
    setItems((currchange) => [...currchange, newitems]
    )
  }

  let deleteItem = (todoItemDelete, todoDateDelete) => {
    const deleteTodo = items.filter((item) =>  item.todoName !== todoItemDelete || item.todoDate !== todoDateDelete );
    setItems(deleteTodo);
    // console.log(`${todoDateDelete} ${todoItemDelete}`)
  }

  // let newList = [{ todoName: 'suraj', todoDate: 'today' }];

  return (
    <ItemContext.Provider value={{ items: items, addNewItem: addNewItem, deleteItem: deleteItem }}>
      <center className='todo-container'>
        <AppName></AppName>
        <AddTodo ></AddTodo>
        <WelcomeMessage />
        <TodoItem></TodoItem>
      </center>
    </ItemContext.Provider>
  )
}

export default App
