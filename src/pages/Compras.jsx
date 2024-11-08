import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Compras = () => {

    const [compras, setCompras] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {

        const obtenerCompras = async () => {
            
            try {
                
                const response = await fetch('/api/compras');
                if (!response.ok) {
                    throw new Error('Error al obtener las compras');
                }
                const data = await response.json();
                setCompras(Object.values(data));
                setLoading(false);

            } catch (error) {
                
                console.error('Error:', error);
                setError(true);
                
                setLoading(false);
            }
        };
        
        obtenerCompras();

    }, []);

    if (loading) return <h1 className="text-4xl">Cargando compras...</h1>;
    if (error) return <h1 className="text-4xl">Error al cargar las compras</h1>;

    return (
        <div className="w-full">
            <h1 className="text-6xl mb-3">Compras</h1>
            <ul className="border border-300 p-3 text-left text-xl w-full rounded-lg">
                {compras.length > 0 ? (
                    compras.map((compra, index) => (
                        <li key={index} className="overflow-hidden p-4 flex flex-col gap-4 h-full items-center">
                            
                            <img className="rounded-lg h-auto object-cover w-full h-full sm:w-1/3 sm:rounded-full" src={compra.thumbnail} alt={compra.title} />
                            <div className="flex-1 p-3 text-balance text-lg lg:text-xl lg:space-y-5 space-y-2 text-left h-full">
                                <p><strong>Nombre:</strong> {compra.title}</p>
                                <p><strong>Cantidad:</strong> {compra.quantity}</p>
                                <p><strong>Fecha:</strong> {new Date(compra.date).toLocaleString()}</p>
                            </div>
                        </li>
                    ))
                ) : (
                    <p>No se encontraron compras.</p>
                )}
            </ul>

            <Link to={'/'} className="">
                <button className="p-3 text-black rounded-lg text-md bg-yellow-400 mt-4 w-full">Salir</button>
            </Link>
        </div>
    );
}

export default Compras;
