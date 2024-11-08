export async function GET(request) {
    const url = new URL(request.url);
    const query = url.searchParams.get('q') || '';
    
    console.log("Query recibido:", query);  

    try {
        // Obtener productos de Firebase
        const response = await fetch('https://daybook-460dd-default-rtdb.firebaseio.com/products.json');
        console.log("Respuesta cruda de Firebase:", response); 

        if (!response.ok) {
            throw new Error('Error al obtener productos de la base de datos');
        }

        const data = await response.json();
        console.log("Datos obtenidos de Firebase:", data); 

        const products = data;

        // Filtrar productos por marca, categoría o nombre
        const filteredProducts = products.filter(product =>
            (product.brand && product.brand.toLowerCase().includes(query.toLowerCase())) ||
            (product.category && product.category.toLowerCase().includes(query.toLowerCase())) ||
            (product.title && product.title.toLowerCase().includes(query.toLowerCase()))
        );

        console.log("Productos filtrados:", filteredProducts); 

        // Respuesta exitosa
        return new Response(JSON.stringify(filteredProducts), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });

    } catch (error) {
        console.error("Error al procesar la solicitud:", error); 

        return new Response(JSON.stringify({ error: error.message }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}
