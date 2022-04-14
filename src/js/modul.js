
import { Api_url } from "./config.js";

import { getjson } from "./helper.js";

export const state={
  recipe:{},
}


export const modul=async function(id){
  try{
   const dataJson=await getjson(Api_url+id);
   const obj=dataJson.data.recipe;
   console.log(obj);

  state.recipe={
     id:obj.id,
     time:obj.cooking_time,
     image:obj.image_url,
     ingredients:obj.ingredients,
     publisher:obj.publisher,
     servings:obj.servings,
     name:obj.title,
     url:obj.source_url,
   }
  return state.recipe; 
  } catch(err){
    alert(err);
  }
}