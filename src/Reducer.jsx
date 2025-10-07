// import React, { useReducer, useState } from "react";
// import './App.css';

// function todoReducer(state, action) {
//   switch(action.type) {
//     case "ADD":
//       return [...state, { name: action.payload.name, id: action.payload.id, status: false }];
//     case "TOGGLE":
//       return state.map(todo =>
//         todo.id === action.payload ? { ...todo, status: !todo.status } : todo
//       );
//     case "DELETE":
//       return state.filter(todo => todo.id !== action.payload);
//     default:
//       return state;
//   }
// }
// const initialTodos= [
//   { id: 101, name: "Savitha", status: true },
//   { id: 102, name: "Karthi", status: false },
//   { id: 103, name: "Nikil", status: true },
//   { id: 104, name: "Nila", status: false },
// ];

// function TodoTable() {
//   const [todos, dispatch] = useReducer(todoReducer, initialTodos);
//   const [input, setInput] = useState("");

//   const [nextId, setNextId] = useState(105);

//   const handleAdd = () => {
//     if (input.trim() !== "") {
//       dispatch({ type: "ADD", payload: { name: input, id: nextId } });
//       setNextId(nextId + 1);
//       setInput("");
//     }
//   };

//   return (
//     <div>
//       <h2>TODO LIST</h2>
//       <input  
//         type="text"
//         value={input}
//         onChange={e => setInput(e.target.value)}
//         placeholder="Enter Name"
//       />
//       <button onClick={handleAdd}>Add</button>
//       <table border="1">
//         <thead>
//           <tr>
//             <th className="s1">ID</th>
//             <th className="s1">Name</th>
//             <th className="s1">Status</th>
//             <th className="s">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {todos.map(todo => (
//             <tr key={todo.id}>
//               <td>{todo.id}</td>
//               <td>{todo.name}</td>
//               <td>{todo.status ? "True" : "False"}</td>
//               <td>
//                 <button className={todo.status ? "toggle-true": "toggle-false"}
//                   onClick={() => dispatch({ type: "TOGGLE", payload: todo.id })}
//                 >
//                   TOGGLE
//                 </button>
//                 <button className="click"
//                   onClick={() => dispatch({ type: "DELETE", payload: todo.id })}
//                 >
//                   DELETE
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default TodoTable;


