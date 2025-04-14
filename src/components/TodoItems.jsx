import { useContext } from "react"
import { ItemContext } from "../store/ItemContext.jsx"
import Item1 from "./TodoItem1.jsx"
// import Item2 from "./TodoItem2.jsx"

function TodoItem() {
    const listContext = useContext(ItemContext)
    const todoList = listContext.items;
    // console.log(fromContext);
    return (
        <>
            {todoList.map((item,i)=>(
                <Item1 key={i}  todoName={item.todoName} todoDate={item.todoDate} todoButton={item.button}></Item1>
            ))}
        </>
    )
}

export default TodoItem