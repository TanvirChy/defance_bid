// import axios from "axios";
// import React, { useState } from "react";

// import './winnerForm.css'


// const WinnerForm = () => {
//   const [name, setName] = useState("");
//   const [desc, setDesc] = useState("");
//   const [email, setEmail] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const newWinner = {
//       name,
//       desc,
//       email
//     };
//     try {
//       await axios.post("/winners", newWinner);
//       window.location.replace("/");
//     } catch (err) {}
//   };

//   return (
//     <div className="winformcon">
//       <form className="winform" onSubmit={handleSubmit}>
//         <div className="winwrap">
//           <div className="winelement">
//             <label className="winlabel">Name:</label>
//             <input
//               type="text"
//               className="wininput"
//               placeholder="Enter Name:"
//               value={name}
//               autoFocus={true}
//               onChange={(e) => setName(e.target.value)}
//             />
//           </div>
//           <div>
//             <label className="winlabel">Description:</label>
//             <input
//             className="wininput"
//               type="text"
//               placeholder="Enter Enter:"
//               value={desc}
//               onChange={(e) => setDesc(e.target.value)}
//             />
//           </div>
//           <div>
//             <label className="winlabel">Email:</label>
//             <input
//             className="wininput"
//               type="text"
//               placeholder="Enter Enter:"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>
//         </div>
//         <button className="winbtn" type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default WinnerForm;
