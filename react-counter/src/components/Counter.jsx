import {useState, useEffect} from 'react'
import './Counter.css'

export default function Counter() { 
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log(`Le compteur a changé : ${count}`);
    }, [count]);
    return (
        <div>
            <button onClick = {() => setCount((count) => count + 1)}> Incréménter </button>
            <button onClick = {() => setCount((count) => count - 1)}> Décrémenter </button>
            {count < 0 ? <p style={{ color: '#ff0000' }}> Le compteur est à {count} </p> : <p style={{ color: "#009f18"}}> Le compteur est à : {count} </p>}
        
            <button onClick = {() => setCount(0)}> Réinitialiser </button>
        </div>
    )
}