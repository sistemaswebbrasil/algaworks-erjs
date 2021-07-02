import { useState } from "react"


export default function Person() {

    const [person, setPerson] = useState(['Adriano', 'João', 'Beatriz'])

    setTimeout(() => {
        setPerson((state) => {
            console.log(state)
            return [...state, 'Cleberson']
        })
    }, 20000);


    return <div><h1>perfil</h1><p>Este é o perfil do {person}</p>

    </div>
}