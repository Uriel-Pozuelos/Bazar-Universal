const Card = ({ producto, isDetalle = false, handleComprar}) => {
    return (
        <div className="border border-gray-300 rounded-lg overflow-hidden p-4 flex flex-col 
                        lg:flex-row items-center lg:items-start gap-4">

            <img 
                src={producto.thumbnail} 
                alt={producto.title} 
                className="rounded-lg w-full lg:w-1/2 md:w-1/2 sm:w-1/3 sm:rounded-full h-auto object-cover"
                />

            <div className="flex-1 p-3 text-balance text-lg lg:text-xl lg:space-y-5 lg:text-left">
                <h2 className="lg:text-4xl text-3xl font-semibold mb-10 ">{producto.title}</h2>
                <p><strong>Descripción:</strong> {producto.description}</p>
                <p><strong>Precio:</strong> ${producto.price}</p>
                <p><strong>Categoría:</strong> {producto.category}</p>
                <p>
                    <strong>Puntuación:</strong> {producto.rating}
                    <span className="text-yellow-500 lg:ml-3">
                        {Array.from({ length: Math.floor(producto.rating) }).map((_, index) => (
                            <i key={index} className="fas fa-star"></i>
                        ))}
                    </span>
                    </p>    

                {isDetalle && (
                    <>
                        <p><strong>Marca:</strong> {producto.brand}</p>
                        <p><strong>Descuento:</strong> {producto.discountPercentage}%</p>
                        <p><strong>Stock:</strong> {producto.stock}</p>

                        <button 
                            className="w-full p-3 rounded-lg text-md bg-yellow-400 text-black mt-3 "
                            onClick={() => handleComprar()}>

                            Comprar  

                        </button>   
                    </>
                )}
            </div>
        </div>
    );
};



export default Card;
