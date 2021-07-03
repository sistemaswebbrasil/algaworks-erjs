import { useState } from "react"


export default function Person() {

    const [person, setPerson] = useState<string>()

    setTimeout(() => {
        setPerson((state) => {
            console.log(state)
            return "Adriano"
        })
    }, 2000);


    return <div><h1>perfil</h1><p>Este é o perfil do {person}</p>

    </div>
}