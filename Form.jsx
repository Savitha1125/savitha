// import { useState } from "react";
// import "./Form.css"; 

// function Form() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const [errors, setErrors] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });

//   const nameRegex = /^[A-Za-z]{2,20}$/;
//   const emailRegex = /^\S+@\S+\.\S+$/; 
//   const passwordRegex = /^[a-zA-Z0-9@#_]{4,8}$/;

//   const myForm = (e) => {
//     e.preventDefault();
//     let newErrors = { name: "", email: "", password: "" };
//     let isValid = true;

//     if (name === "") {
//       newErrors.name = "Name is required!";
//       isValid = false;
//     } else if (!nameRegex.test(name)) {
//       newErrors.name = "Name must be letters only!";
//       isValid = false;
//     }

//     if (email === "") {
//       newErrors.email = "Email is required!";
//       isValid = false;
//     } else if (!emailRegex.test(email)) {
//       newErrors.email = "Enter a valid email!";
//       isValid = false;
//     }

//     if (password === "") {
//       newErrors.password = "Password is required!";
//       isValid = false;
//     } else if (!passwordRegex.test(password)) {
//       newErrors.password = "Password must be characters!";
//       isValid = false;
//     }
//     setErrors(newErrors);

//     if (isValid) {
//       alert("Form Submitted! "); 
//       setName("");
//       setEmail("");
//       setPassword(""); 
//       setErrors({ name: "", email: "", password: "" });
//     }
//   };

//   const getClass = (value, regex) => {
//     if (value === "") return "input whiteBox";   
//     return regex.test(value) ? "input greenBox" : "input redBox"; 
//   };

//   return (
//     <form onSubmit={myForm} className="form">
//       <label htmlFor="name">Name:</label><br />
//       <input
//         id="name"
//         type="text"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//         className={getClass(name, nameRegex)}
//       />
//       {errors.name && <p className="error">{errors.name}</p>} 
//       <br />

//       <label htmlFor="email">Email:</label><br />
//       <input
//         id="email"
//         type="text"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         className={getClass(email, emailRegex)}
//       />
//       {errors.email && <p className="error">{errors.email}</p>}
//       <br />

//       <label htmlFor="password">Password:</label><br />
//       <input
//         id="password"
//         type="password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         className={getClass(password, passwordRegex)}
//       />
//       {errors.password && <p className="error">{errors.password}</p>}
//       <br />

//       <button type="submit" className="btn">Submit</button>
//     </form>
//   );
// }

// export default Form;
