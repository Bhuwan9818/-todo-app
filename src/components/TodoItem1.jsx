import { useContext } from "react";
import style from "./TodoItem1.module.css"
import { MdDelete } from "react-icons/md";
import { ItemContext } from "../store/ItemContext";

function Item1({ todoName,todoDate}) {
    const listContext = useContext(ItemContext)
    const tododelete = listContext.deleteItem;
    return (
        <div className={`container mt-2 ${style.cont}`}>
            <div className={`${style["fontInc"]} row`}>
                <div className={`col-4 ${style.colNew}`}>
                    {todoName}
                </div>
                <div className={`col-4 ${style.colNew}`}>
                    {todoDate}
                </div>
                <div className={`col-4 ${style.colNew}`}>
                    <button type="button" className="btn btn-danger" onClick={()=>tododelete(todoName,todoDate)}><MdDelete /></button>
                </div>
            </div>
        </div>
    )
}

export default Item1