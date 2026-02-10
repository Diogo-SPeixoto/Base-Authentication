import { cookies } from "next/headers"

export async function GetUser(){
  const cookieslist = await cookies()

  try {
    const response = await fetch('http://localhost:3333/users/me', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        cookie: cookieslist.toString()
      },
    })

    if(!response.ok){
      const error = await response.json()
      console.log("Error retrieving user data.", error)
      return
    }

    const dataUser = await response.json()
    
    return dataUser

  } catch (error) {
    return console.error(error)
  }
}