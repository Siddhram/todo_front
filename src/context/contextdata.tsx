import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { backendurl } from "../url";
export interface inter{
    todo:Todo[],
    func:()=>Promise<void>,
    addtodo:()=>Promise<void>,
    updatetodo:()=>Promise<void>,
    deletetodo:()=>Promise<void>,

}
export interface Todo{
  text:string,
  dis?:string,
  iscompleted?:boolean
}
export const Contextdata=createContext<inter|undefined>( {todo: [],
  func: async () => {},
  addtodo: async () => {},
  updatetodo: async () => {},
  deletetodo: async () => {},});

export const ContextdataProvider:React.FC<{children:React.ReactNode}>=({children})=>{
    const[tododata,settododata]=useState<Todo[]>([])
    const featchtodo=async()=>{
      const res=await axios.get(`${backendurl()}/get`);
      // console.log(res.data);
      
      settododata(res.data)
    }
    const addtodo=async({text,dis,iscompleted}:Todo)=>{
      const res=await axios.post(`${backendurl()}/add`,{
text,
dis,
iscompleted
      })
      console.log(res.data);
      // featchtodo()
    }
    const updatetodo=async(bod)=>{
     const res=await axios.post(`${backendurl()}/update/${bod._id}`,bod)
     featchtodo()
    }
    
    const deletetodo=async({id})=>{
      const res=await axios.post(`${backendurl()}/delete/${id}`);
      featchtodo()
    }
    useEffect(()=>{
        featchtodo()
    },[updatetodo,deletetodo])
  return <Contextdata.Provider value={{todo:tododata,func:featchtodo,addtodo:addtodo,deletetodo,updatetodo}}>{children}</Contextdata.Provider>
}

