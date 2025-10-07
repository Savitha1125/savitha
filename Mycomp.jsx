import { useState } from "react";
import Child from "./Child";


const Mycomp=()=>{
      const [x,y]=useState("raja")
      const [name,setname]=useState({name:"sasii"})
      // const [count,setcounty]=useState(0)
      const [data,setdata]=useState(
            [
                  {
                        name:"savitha",
                        age:21, 
                        dob:"12/01/1995"
                  },
                  {
                        name:"dharanya",
                        age:21,
                        dob:"12/01/1995"
                  },
                  {
                        name:"yadav",
                        age:21,
                        dob:"12/01/1995"
                  },
                  {
                        name:"mounika",
                        age:21,
                        dob:"12/01/1995"
                  },
                  {
                        name:"kabishankar",
                        age:21,
                        dob:"12/01/1995"
                  },
            ]
      )
      return (
            <div>
                  <h2> name is {x}</h2>
                  <h2> name is {name.name}</h2>
                  <button onClick={()=>{y("dhinakar")}}>click</button>
                 {
                  data.map((item)=> <Child res={item} />)
                 }       
            </div>
      )
}
export default Mycomp;