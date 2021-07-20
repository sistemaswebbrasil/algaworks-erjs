/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react"
import { useParams } from "react-router"
import usePageTitle from "../../core/hooks/usePageTitle"

export default function UserView () {
  usePageTitle('User')
  const params = useParams<{ userId: string }>()
  
  useEffect(() => {
    console.log(params)  
  }, [])

  return <div>
    <h1>Usuário - { params.userId }</h1>
  </div>
}