import { cookies } from "next/headers"
import { redirect } from "next/navigation";

export default async function Layout({ children }: { children: React.ReactNode }){
  const cookiesList = await cookies()
  const isLoggedIn = cookiesList.get("accessToken")

  if(isLoggedIn){
    redirect('/dashboard');
  }

  return <>{ children }</>
} 