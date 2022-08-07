import React, { useCallback, useMemo, useReducer, useRef, useState } from "react";
import { useCharacters } from "../Hooks/UseCharacters";
import { Search } from "../Search/Search";
import './Characters.scss';

const initialState = {
    favorites: []
}

const favoriteReducer = (state: any, action: any) => {
    switch(action.type){
        case 'ADD_TO_FAVORITES' : 
            return {
                ...state,
                favorites: [...state.favorites, action.payload]
            };
        default: 
            return state;
    }
}

const API_URL = 'https://rickandmortyapi.com/api/character';

export const Characters = () =>
{
    const characters = useCharacters(API_URL);
    const [state, dispatch] = useReducer(favoriteReducer, initialState);
    const [search, setSearch] = useState(''); 
    const searchInput = useRef<HTMLInputElement>(null);

    const handleClick = (favorite: any) => 
    {
        dispatch({ type: 'ADD_TO_FAVORITES', payload: favorite})
    }

    const handleSearch = useCallback(() => {
        searchInput.current && setSearch(searchInput.current.value);
    }, []);

    const filteredCharacters = useMemo(() => 
        characters.filter((character: any) => character.name.toLowerCase().includes(search.toLowerCase()))
    , [characters, search]);
    

    return (
        <div>
            <div>
                <ul>
                    {state && state.favorites.map((favorite: any) => 
                        <li key={favorite.id}>{favorite.name}</li>
                    )}
                </ul>
            </div>
            <Search search={search} searchInput={searchInput} handleSearch={handleSearch} />
            <div className="CharactersContent">
                {filteredCharacters && filteredCharacters.map((character: any) => 
                    <div className="Characters">
                        <div>
                            <h2 key={character.id}>{character.name}</h2>
                        </div>
                        <div>
                            <img src={character.image} alt={character.name} />
                        </div>
                        <button onClick={() => handleClick(character)}>Add to Favorite</button>
                    </div>
                )}
            </div>
        </div>
    );
}