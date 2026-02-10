import Link from "next/link"
import { CardFooter } from "../ui/card"
import { Button } from "../ui/button"
import { GoogleIcon } from "@/public/icons/google-icon"

interface FooterAuthProps{
  isLoading: boolean;
  href:string;
  page:string;
  text:string;
}

export const FooterAuth = ({isLoading, href, page, text}:FooterAuthProps)=>{
  return(
    <CardFooter className="flex flex-col gap-4 justify-center">
      <div className="flex flex-col gap-4 w-full">
        <div className="relative w-full">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-border" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-card px-2 text-muted-foreground">Or continue with</span>
          </div>
        </div>

        <Button
          type="button"
          variant="outline"
          className="w-full bg-transparent"
          onClick={()=>{}}
          disabled={isLoading}
        >
          <GoogleIcon />
          Continue with Google
        </Button>
      </div>

      <p className="text-sm text-muted-foreground">
        {text}{" "}
        <Link href={href} className="text-primary hover:underline font-medium">
          {page}
        </Link>
      </p>
    </CardFooter>
  )
}