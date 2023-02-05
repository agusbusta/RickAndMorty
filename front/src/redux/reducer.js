import { ADD_FAVORITE, CLEAN_FAVORITE, DELETE_FAVORITE, FILTER, GET_FAVORITES, ORDER } from "./action-types";

const initialState = {
    myFavorites: [],
    allCharacters: [],
}
const reducer = (state = initialState, { type, payload }) => {
    switch(type){
        case ADD_FAVORITE:
            return {
                ...state,
            }
        case GET_FAVORITES:
            return {
                ...state,
                myFavorites: [...state.myFavorites, ...payload],
                allCharacters: [...state.myFavorites],   
            }
        case CLEAN_FAVORITE:
            return {
                myFavorites: [],
                allCharacters: []
            }

        case DELETE_FAVORITE:
            return {
                ...state,
                myFavorites: state.myFavorites.filter(char => char.id !== payload)
            }

        case FILTER:
            const myFavorites = state.myFavorites;
            const myFavoritesFiltered = myFavorites.filter(char => char.gender === payload)
            return{
                ...state,
                myFavorites: myFavoritesFiltered
            }

            case ORDER:
                return {
                  ...state,
                  myFavorites: 
                    payload === "Ascendente" 
                    ? state.myFavorites.sort((a, b) => a.id > b.id ? 1 : - 1) 
                    : payload === "Descendente" 
                    ? state.myFavorites.sort((a, b) => a.id > b.id ? -1 : 1)
                    : payload === "All"
                    ? state.myFavorites
                    : state.myFavorites
                };
              

        default: 
            return {...state}
    }
}


export default reducer;