const Home = () => {
    return (
        <div className="mx-auto my-auto">
            
            <p className="text-center mb-3 text-2xl lg:text-4xl">Bienvenido a Bazar Universal</p>

            <div className="flex justify-center items-center mb-3">
                <img src="/src/assets/shopping-bags-65b616.webp" alt="Bazar Universal" className="img-fluid w-[30%] h-[30%] lg:w-[20] lg:w-[30%]" />
            </div>

            <div className="flex">
                <input type="text" id="search" 
                        className="bg-gray-50 border border-gray-300 text-gray-900 lg:text-lg rounded-l-lg focus:border-gray-700 focus:ring-white dark:focus:ring-white block w-full 
                                lg:p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-100 dark:text-white
                                md:text-lg md:px-2 text-sm p-2" 
                                placeholder="Buscar productos..." required />
                <button type="submit" className="p-3 rounded-r-lg text-md ">Buscar</button>
            </div>

        </div>
    )
}

export default Home;