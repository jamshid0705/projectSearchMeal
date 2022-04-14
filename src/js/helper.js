import { async } from "regenerator-runtime";

export const getjson=async function(url){
  try{
    const data=await fetch(url);
    const dataJson=await data.json();
    return dataJson;
  } catch(err){
    alert(err)
  }
  
}