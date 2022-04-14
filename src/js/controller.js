const { async } = require("regenerator-runtime");

const recipeContainer = document.querySelector('.recipe');


import * as modul from './modul.js';

import view from './recipeViews.js';

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// https://forkify-api.herokuapp.com/v2



///////////////////////////////////////
const showRuntime=async function(){
 try{
  let id=window.location.hash.slice(1);
  console.log(id)

   view.spinner()
   
   await modul.modul(id)
   
   view.recipeView(modul.state.recipe);
 } catch(err){
   alert(err)
 }
  
}

window.addEventListener('hashchange',showRuntime);