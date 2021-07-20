import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

// interface userViewProps{
//     userId:string
// }



function UserView() {
    const params = useParams<{userId: string}>()
    
    useEffect(()=>{
        console.log(params)
    },[])
    
   
    return (
        <div>
            <h1>Usuário - { params.userId }</h1>
        </div>
    )
}

export default UserView
