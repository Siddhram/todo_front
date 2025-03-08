import React from "react"
interface mybutton{
    button:number,
    onclk?:()=>{}
}
const Button:React.FC<mybutton>=({button,onclk})=>{
    
    return <div className="">
        <button onClick={()=>{
            onclk(button+1)
        }}>{button}</button>
    </div>
}
export default Button