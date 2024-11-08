import { useEffect, useState } from 'react';
import { Link, Navigate, useLocation } from 'react-router-dom';
import Card from '../Components/Card';
import Search from '../Components/Search';

function Productos() {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const searchQuery = searchParams.get('q') || '';  

    useEffect(() => {
    
        const fetchProductos = async () => {
            try {
                const response = await fetch(`/api/items?q=${searchQuery}`);
                if (!response.ok) {
                    throw new Error('Error al obtener los productos');
                }
                const data = await response.json();
                setProductos(data); 
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProductos();
    }, [searchQuery]); 

    if (loading) return <div className='text-4xl'>Cargando...</div>;
    if (error) return <div className='text-4xl'>Error: {error}</div>;

    return (
        <>
            <div className='flex items-center top-0 space-x-3 w-full'>
                <img 
                    src="/shopping-bags-65b616.webp" 
                    alt="Bazar Universal" 
                    className="img-fluid w-[10%] h-[10%] lg:w-12 cursor-pointer"
                    onClick={() => Navigate('/compras')} 
                />
                <Search />
            </div>

            <h1 className='text-center text-2xl font-bold mb-4'>Lista de Productos</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

                {productos.map((producto) => (

                    <Link key={producto.id}
                        className='p-4 rounded-lg shadow-md hover:shadow-lg hover:text-white transition-shadow duration-300'
                        to={`/detalle-producto/${producto.id}`}>

                        <Card producto={producto} />   

                    </Link>
                ))}
            </div>
        </>
    );
}

export default Productos;
