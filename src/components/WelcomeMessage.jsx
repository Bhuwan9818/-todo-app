import style from './Welcome.module.css'
import { ItemContext } from '../store/ItemContext'
import { useContext } from 'react'

function WelcomeMessage(){
    const todoContextList = useContext(ItemContext)
    const todoContext = todoContextList.items;
    return (
        todoContext.length === 0 && 
        <div>
            <h1 className={style.welcome}>Nothing to work</h1>
            <h1 className={style.welcome}>If you want to add something you can.</h1>
        </div>
    )
}

export default WelcomeMessage