// /* eslint-disable react/prop-types */

// // Componente del input para manejar las bandas de una resistencia

// const Input = ({ value, name, onChange, opc }) => {
    
//     const colorMap = {
//         Negro: "black",
//         Marrón: "brown",
//         Rojo: "red",
//         Naranja: "orange",
//         Amarillo: "yellow",
//         Verde: "green",
//         Azul: "blue",
//         Violeta: "violet",
//         Gris: "gray",
//         Blanco: "white",
//         Oro: "gold",
//         Plata: "silver"
//     };

//     return (
//         <div>
//             <label className="px-3 ">{name}</label>
//             <select 
//                 className="mx-3 text-black" 
//                 name={name} 
//                 value={value} 
//                 onChange={onChange}
//                 style={{ backgroundColor: colorMap[value], color: value === "Blanco" ? 'black' : 'white' }}  
//             >
//                 <option value="">Selecciona una opción</option>
//                 {opc.map((opcion, index) => (
//                     <option 
//                         key={index} 
//                         value={opcion.color} 
//                         style={{ backgroundColor: colorMap[opcion.color], color: opcion.color === "Blanco" ? 'black' : 'white' }}  
//                     >
//                         {opcion.color}
//                     </option>
//                 ))}
//             </select>
//         </div>
//     );
// };

// export default Input;