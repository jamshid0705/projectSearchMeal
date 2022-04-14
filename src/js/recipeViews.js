 import icons from '../img/icons.svg';
 
 class view{
   #recipeContainer=document.querySelector('.recipe')
   #data
   
   #clear(){
    this.#recipeContainer.innerHTML='';
   }

   recipeView=function(data){
      this.#data=data;
      if(!data) return;
      this.#clear()
      this.#recipeShowView(this.#data)
   }

   spinner(){
     let html=`<div class="spinner">
     <svg>
       <use href="${icons}.svg#icon-loader"></use>
     </svg>
   </div>`
   this.#clear();
   this.#recipeContainer.insertAdjacentHTML('afterbegin',html);
   }

   #ingredients=function(obj){
    let a= (obj.ingredients).map(function(val){
        return `<li class="recipe__ingredient">
        <svg class="recipe__icon">
          <use href="${icons}#icon-check">${val.unit}</use>
        </svg>
        <div class="recipe__quantity">${val.quantity}</div>
        <div class="recipe__description">
          <span class="recipe__unit">g</span>
          ${val.description}
        </div>
      </li>`
     })
     return a;
  }

   #recipeShowView(obj){
      let html=`<figure class="recipe__fig">
      <img src="${obj.image}" alt="Tomato" class="recipe__img" />
      <h1 class="recipe__title">
        <span>${obj.name}</span>
      </h1>
    </figure>
    
    <div class="recipe__details">
      <div class="recipe__info">
        <svg class="recipe__info-icon">
          <use href="${icons}#icon-clock"></use>
        </svg>
        <span class="recipe__info-data recipe__info-data--minutes">${obj.time}</span>
        <span class="recipe__info-text">minutes</span>
      </div>
      <div class="recipe__info">
        <svg class="recipe__info-icon">
          <use href="${icons}#icon-users"></use>
        </svg>
        <span class="recipe__info-data recipe__info-data--people">${obj.servings}</span>
        <span class="recipe__info-text">servings</span>
    
        <div class="recipe__info-buttons">
          <button class="btn--tiny btn--increase-servings">
            <svg>
              <use href="${icons}#icon-minus-circle"></use>
            </svg>
          </button>
          <button class="btn--tiny btn--increase-servings">
            <svg>
              <use href="${icons}#icon-plus-circle"></use>
            </svg>
          </button>
        </div>
      </div>
    
      <div class="recipe__user-generated">
        <svg>
          <use href="${icons}#icon-user"></use>
        </svg>
      </div>
      <button class="btn--round">
        <svg class="">
          <use href="${icons}#icon-bookmark-fill"></use>
        </svg>
      </button>
    </div>
    
    <div class="recipe__ingredients">
      <h2 class="heading--2">Recipe ingredients</h2>
      <ul class="recipe__ingredient-list">
        
    ${this.#ingredients(obj).join('')}
    
      </ul>
    </div>
    
    <div class="recipe__directions">
      <h2 class="heading--2">How to cook it</h2>
      <p class="recipe__directions-text">
        This recipe was carefully designed and tested by
        <span class="recipe__publisher">The Pioneer Woman</span>. Please check out
        directions at their website.
      </p>
      <a
        class="btn--small recipe__btn"
        href="${obj.url}"
        target="_blank"
      >
        <span>Directions</span>
        <svg class="search__icon">
          <use href="${icons}#icon-arrow-right"></use>
        </svg>
      </a>
      </div>`
     
      this.#recipeContainer.insertAdjacentHTML('afterbegin',html)
    }
 }

 export default new view()