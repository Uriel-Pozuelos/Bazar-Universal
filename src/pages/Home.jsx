import { useNavigate } from "react-router-dom";
import Search from "../Components/Search";

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="mx-auto my-auto">
            <p className="text-center mb-3 text-3xl lg:text-4xl">Bienvenido a Bazar Universal</p>

            <div className="flex justify-center items-center mb-3">
                <img 
                    src="/shopping-bags-65b616.webp" 
                    alt="Bazar Universal" 
                    className="img-fluid w-[30%] h-[30%] lg:w-[30%] cursor-pointer"
                    onClick={() => navigate('/compras')} 
                />
            </div>

            <Search />

        </div>
    );
};

export default Home;
