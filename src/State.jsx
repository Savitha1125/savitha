import { useState } from "react";
function Savi(){
      const[name,setName]=useState("Savitha");
      const[age,setAge]=useState(20);
      const[id,setId]=useState(101);
      const[count,setCount]=useState(0);
      return(
            <div>
                  <h2>{name} {age}years old</h2>
                  <button onClick={()=>setName("Karthi")}>Change Name</button><br/><br/>
                  <button onClick={()=>setAge(age+1)}>Increase Age</button>
                  <button onClick={()=>setAge(age-1)}>Decrease Age</button>
                  <h2>Count:-{count}</h2>
                  <button onClick={()=>setCount(count+1)}>Increase Count</button>
                  <h3>ID:{id}</h3>
                  <button onClick={()=>setId(id+1)}>Increase ID</button>
                  <button onClick={()=>setId(id-1)}>Decrease ID</button>
            </div>
      )
}
export default Savi;