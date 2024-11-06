// // COmponente de calculadora para manejar las resistencias

// import { useState } from "react";
// import Input from "./Input"

// const Calculadora = () => {
//     const [bandas, setBandas] = useState({
//         banda1: 'Negro',
//         banda2: 'Negro',
//         banda3: 'Negro',
//         banda4: 'Oro',
//     });

//     const colores =[
//         { color: "Negro", valor: 0 },
//         { color: "Marrón", valor: 1 },
//         { color: "Rojo", valor: 2 },
//         { color: "Naranja", valor: 3 },
//         { color: "Amarillo", valor: 4 },
//         { color: "Verde", valor: 5 },
//         { color: "Azul", valor: 6 },
//         { color: "Violeta", valor: 7 },
//         { color: "Gris", valor: 8 },
//         { color: "Blanco", valor: 9 },
//     ];

//     const tolerancias = [
//         {color: "Oro", valor:5},
//         {color: "Plata", valor:10}
//     ]

//     const handlechange = (e) => {
//         const { name, value } = e.target;
//         setBandas({
//             ...bandas,
//             [name]:value
//         });
//     }

//     const valores = {
//         Negro: 0,
//         Marrón: 1,
//         Rojo: 2,
//         Naranja: 3,
//         Amarillo: 4,
//         Verde: 5,
//         Azul: 6,
//         Violeta: 7,
//         Gris: 8,
//         Blanco: 9,
//         Oro: 0.1,
//         Plata: 0.01,
//     };

    
//     const calcular = () => {
//         const banda1Val = valores[bandas.banda1];
//         const banda2Val = valores[bandas.banda2];
//         const multi = Math.pow(10,valores[bandas.banda3]);
//         const resistencia = (banda1Val * 10 + banda2Val) * multi;

//         return resistencia;

//     }


//     return (
//         <div>
//             <h1>Calculadora de resistencias</h1>
//             <Input name="banda1" value={bandas.banda1} onChange={handlechange} opc={colores} />
//             <Input name="banda2" value={bandas.banda2} onChange={handlechange} opc={colores} />
//             <Input name="banda3" value={bandas.banda3} onChange={handlechange} opc={colores} />
//             <Input name="banda4" value={bandas.banda4} onChange={handlechange} opc={tolerancias} />

//             <div>
//                 <h1 className="text-2xl">Resistencia: {calcular()} Ω Ohms</h1>
//             </div>
//         </div>
//     )
// };

// export default Calculadora;
