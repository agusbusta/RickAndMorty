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
            const { allCharacters } = state;
            const allCharsFiltered = allCharacters.filter(char => char.gender === payload)
            return{
                ...state,
                myFavorites: allCharsFiltered
            }

        case ORDER:
            return{
                ...state,
                myFavorites: 
                    payload === "Ascendente" 
                    ? state.allCharacters.sort((a, b) => a.id > b.id ? 1 : - 1) 
                    : payload === "Descendente" 
                    ? state.allCharacters.sort((a, b) => a.id > b.id ? -1 : 1) 
                    : state.allFavs
            }

        default: 
            return {...state}
    }
}

export default reducer;