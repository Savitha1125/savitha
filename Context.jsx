// import React,{useContext,createContext} from "react";
// const myContext=createContext(null);
// function Child(){
//       return(
//       <myContext.Provider value='Hello Context 123'>
//       <h1>Context</h1>
//       <App />
//       </myContext.Provider>
//       );
// }
// function App(){
//       const value=useContext(myContext);
//       console.log("context value:",value);
//       return <p>value:{value}</p>
// }
// export default Child;


// import React,{useContext,createContext} from "react";
// const userContext=createContext("");
// function Apps(){
//             const value=useContext(userContext);
//             return <h2>value:{value}</h2>

// }
// function Child(){
//       return(
//             <userContext.Provider value="hii">
//             <h3>The hook returns the value of the context: value = useContext(Context). The hook also makes sure to re-render the component when the context value changes.</h3>
//             <p>The second way is by using a render function supplied as a child to Context.</p>
//             <Apps/>
//             <Apps/>
//             </userContext.Provider>
//       );
// }
      
// export default Child;
// import React,{useContext,createContext,useState} from "react";
// const UserContext=createContext('');
// function Child() {
//       const {name,setName} = useContext(UserContext);
//   return(
//       <div>
//             <h2>{name}</h2>
//             <button onClick={()=>setName("Savitha")}>button</button>
//             <button onClick={()=>setName("nikil")}>Change</button>      
//             </div>
//   )
  
// }

// function Parent() {
//       const [name,setName]=useState("Karthi");
//       const value={name,setName};
//   return (
//     <UserContext.Provider value= {value}>
//       <Child />
//     </UserContext.Provider>
//   );
// }
// export default Parent;