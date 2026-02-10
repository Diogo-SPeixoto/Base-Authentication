import { AlertCircle, Eye, EyeOff, LucideProps } from "lucide-react"
import { Label } from "./ui/label"
import { Input } from "./ui/input"
import { HTMLInputTypeAttribute } from "react"

interface InputFormProps{
  error?: string[]
  Icon: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>
  name: string
  type?:HTMLInputTypeAttribute
  placeholder: string
  required?: boolean
  disabled?: boolean
  children?: React.ReactNode
  title: string
}

export const InputForm = ({ 
  error, Icon, name, type="text", placeholder,
  required=false, disabled=false, title,
  children
}:InputFormProps)=>{
  return(
    <div className="space-y-2">
      <Label htmlFor={name}>{title}</Label>
      <div className="relative">
        <Icon className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
        <Input
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          className={`pl-9 ${Boolean(error?.length) ? "border-destructive focus-visible:ring-destructive" : ""}`}
          required={required}
          disabled={disabled}
        />
        {children}

      </div>
      {Boolean(error?.length) && (
        error?.map(element =>{
          return (
            <p className="text-sm text-destructive flex items-center gap-1">
              <AlertCircle className="h-3 w-3" />
              { element }
            </p>
          )
        })
      )}
    </div>
  )
}