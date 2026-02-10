import { GetUser } from "@/app/api/getUser"

export default async function Dashboard (){
  const data = await GetUser()

  return(
    <div className="flex flex-col w-full items-center h-full p-10">
      <h1>Usuario Logado</h1>

      <p>Dados:</p>
      <p>{data.name}</p>
      <p>{data.email}</p>

    </div>
  )
}