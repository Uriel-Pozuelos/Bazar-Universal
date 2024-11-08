import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Search = () => {
    const [search, setSearch] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();

        if (!search.trim()) {
            setError('Debe ingresar al menos un caracter para realizar la búsqueda.');
            return;
        }

        setError('');
        navigate(`/productos?q=${search}`);
    };

    return (
        <form className="flex flex-col items-center" onSubmit={handleSearch}>
            <div className="flex w-full">
                <input 
                    type="text" 
                    id="search" 
                    className="bg-gray-50 border border-gray-300 text-gray-900 lg:text-lg rounded-l-lg focus:border-gray-700 focus:ring-white dark:focus:ring-white block w-full 
                                lg:p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-100 dark:text-white
                                md:text-lg md:px-2 text-sm p-2" 
                    placeholder="Buscar productos..." 
                    onChange={(e) => setSearch(e.target.value)} 
                />
                <button type="submit" className="p-3 rounded-r-lg text-md bg-[#1a1a1a] text-white">
                    Buscar
                </button>
            </div>

            {error && <p className="text-red-500 mt-2 text-sm">{error}</p>}
        </form>
    );
}

export default Search;