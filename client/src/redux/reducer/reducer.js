import {GET_PRODUCTOS,TYPE_DIETA,FILTRO_POR_ORDEN_ALFABETICO,POST_RECIPES,FILTRO_POR_ORDEN_SCORE,FILTRO_POR_ORDEN_DIETA,FILTRO_POR_INPUT,FILTER_BY_SEARCHBAR} from '../actions/typeaction'

const initialstate = {
    recipes: [],
    recipesAll: [],
    types: [],
}

 const reducer = (state = initialstate, action)=> {
 switch(action.type){
    case GET_PRODUCTOS:
        return {
            ...state,
            recipes: action.payload
        }
        case TYPE_DIETA:
            return {
                ...state,
                types: action.payload
            }
            case FILTRO_POR_ORDEN_ALFABETICO:
                let OrdenAlf = action.payload === 'desen'?state.recipes.sort((a,b)=>{
                    a.name = a.name.toLowerCase();
                    b.name = b.name.toLowerCase();
                    if (a.name === b.name) {
                        return 0;
                    }
                    if(a.name < b.name) {
                        return -1;
                    } return 1;
                }) : state.recipes.sort((a,b)=>{
                    a.name = a.name.toLowerCase();
                    b.name = b.name.toLowerCase();
                    if (a.name === b.name) {
                        return 0;
                    }
                    if(a.name < b.name) {
                        return -1;
                    } return 1;
                }).reverse()
                return {
                    ...state,
                    recipes: OrdenAlf
                }
            case FILTRO_POR_ORDEN_SCORE:
                let OrdenSco = action.payload === 'menor' ? state.recipes.sort((a,b)=>{
                    if (a.healthScore === b.healthScore) {
                        return 0;
                    }
                    if(a.healthScore < b.healthScore) {
                        return -1;
                    } return 1;
                }) :state.recipes.sort((a,b)=>{
              
                    if (a.healthScore === b.healthScore ) {
                        return 0;
                    }
                    if(a.healthScore > b.healthScore) {
                        return -1;
                    } return 1;
                }) 
            return{
                ...state,
                recipes: OrdenSco
            }
            case FILTRO_POR_ORDEN_DIETA:
                let OrdenDie = state.recipes.filter(a => {
                    if (a.diets.length > 0){
                        if(a.diets.find(e => e === action.payload)) return a
                    }
                } )
                return {
                    ...state,
                    recipes: OrdenDie
                }
            case FILTRO_POR_INPUT:
                let Inp = state.recipes.filter(a =>{
                    let name = a.name.toLowerCase(); 
                    if(name.includes(action.payload))return a;
                    
                });
                return {
                    ...state,
                    recipes: Inp
                }
            case FILTER_BY_SEARCHBAR:
                let addRecipe = state.recipesAll;
                return {
                          ...state,
                          recipes: action.payload,
                          recipesAll: addRecipe
                      } 
                case POST_RECIPES:
                    return {
                        ...state,
                    }

    default:
        return {...state}
 }


}

export default reducer;
