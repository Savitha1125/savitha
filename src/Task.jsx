// import React, { useReducer, useState } from "react";

// const initialProducts = [
//   { id: 1, name: "Shampoo", quantity: 4 },
//   { id: 2, name: "Biscuit", quantity: 7 },
//   { id: 3, name: "Cake", quantity: 5 },
// ];

// const initialCart = [];

// function cartReducer(state, action) {
//   switch (action.type) {
//     case "ADD_TO_CART":
//       const existing = state.find(i => i.name === action.payload.name);
//       if (existing) {
//         return state.map(i =>
//           i.name === action.payload.name
//             ? { ...i, quantity: i.quantity + 1 }
//             : i
//         );
//       } else {
//         return [...state, { ...action.payload, quantity: action.payload.quantity || 1 }];
//       }
//     case "REMOVE":
//       return state.filter(i => i.id !== action.payload);
//     default:
//       return state;
//   }
// }

// function App() {
//   const [products, setProducts] = useState(initialProducts);
//   const [cart, dispatch] = useReducer(cartReducer, initialCart);
//   const [search, setSearch] = useState("");
//   const [nextId, setNextId] = useState(4); 
//   const [newProduct, setNewProduct] = useState("");

//   const handleAddProduct = () => {
//     if (newProduct.trim() === "") return;
//     const product = { id: nextId, name: newProduct.trim(), quantity: 1 };
//     setProducts([...products, product]);
//     setNextId(nextId + 1);
//     setNewProduct("");
//   };

//   const filteredProducts = products.filter(p =>
//     p.name.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div style={{ padding: "20px" }}>
//       <h1>Products</h1>

//       <div style={{ marginBottom: "20px" }}>
//         <input
//           type="text"
//           value={search}
//           onChange={e => setSearch(e.target.value)}
//           placeholder="Search product"
//           style={{ marginRight: "10px" }}
//         />
//         <input
//           type="text"
//           value={newProduct}
//           onChange={e => setNewProduct(e.target.value)}
//           placeholder="Add new product"
//           style={{ marginRight: "10px" }}
//         />
//         <button onClick={handleAddProduct}>Add Product</button>
//       </div>

//       {/* Product Table */}
//       <table border="1" style={{ marginBottom: "20px", width: "70%" }}>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Name</th>
//             <th>Quantity</th>
//             <th>Add to Cart</th>
//           </tr>
//         </thead>
//         <tbody>
//           {filteredProducts.map(p => (
//             <tr key={p.id}>
//               <td>{p.id}</td>
//               <td>{p.name}</td>
//               <td>{p.quantity}</td>
//               <td>
//                 <button onClick={() => dispatch({ type: "ADD_TO_CART", payload: p })}>
//                   Add to Cart
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {/* Cart Table */}
//       <h2>Cart</h2>
//       <table border="1" style={{ width: "70%" }}>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Name</th>
//             <th>Quantity</th>
//             <th>Remove</th>
//           </tr>
//         </thead>
//         <tbody>
//           {cart.map(item => (
//             <tr key={item.id}>
//               <td>{item.id}</td>
//               <td>{item.name}</td>
//               <td>{item.quantity}</td>
//               <td>
//                 <button onClick={() => dispatch({ type: "REMOVE", payload: item.id })}>
//                   Remove
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default App;
