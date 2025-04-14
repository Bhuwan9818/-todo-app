import { useContext, useRef, useState } from "react"
import style from './AddTodo.module.css'
import { FaAddressBook } from "react-icons/fa";
import { ItemContext } from "../store/ItemContext";

function AddTodo() {
    const todoNameRef = useRef();
    const todoDateRef = useRef();
    const contextList = useContext(ItemContext)
    const addContext = contextList.addNewItem;

    const newNameDate = (event) =>{
        event.preventDefault();
        const todoName1 = todoNameRef.current.value;
        const todoDate1 = todoDateRef.current.value;
        addContext(todoName1,todoDate1);
        todoDateRef.current.value = '';
        todoNameRef.current.value = '';
    }

    return (
        <div className={`${style.cont} container`}>
            <form className={style.row1} onSubmit={newNameDate}>
                <div className={`col-4 ${style.colNew}`}>
                    <input type="text" placeholder="Enter todo here" ref={todoNameRef}/>
                </div>
                <div className={`col-4 ${style.colNew}`}>
                    <input type="date" ref={todoDateRef}/>
                </div>
                <div className={`col-4 ${style.colNew}`}>
                    <button type="submit" className="btn btn-success"><FaAddressBook /></button>
                </div>
            </form>
        </div>
    )
}

export default AddTodo