export async function GET(request) {

    try {

        // Obtener el id del producto desde la URL
        const url = new URL(request.url);
        const id = url.pathname.split('/').pop();

        // Obtener productos de Firebase
        const response = await fetch(`https://daybook-460dd-default-rtdb.firebaseio.com/products.json`); 
        if (!response.ok) {
            throw new Error('Error al obtener productos de la base de datos');
        }

        let data = await response.json();
        const products = data;


        // Buscar el producto por ID
        const product = products.find(product => product.id === Number(id));

        if (!product) {
            return new Response(JSON.stringify({ error: 'Producto no encontrado' }), {
                status: 404,
                headers: { 'Content-Type': 'application/json' },
            });
        }

        return new Response(JSON.stringify(product), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });

    } catch (error) {
        
        return new Response(JSON.stringify({ error: 'Error al procesar la solicitud: ' + error.message }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
        
    }
}