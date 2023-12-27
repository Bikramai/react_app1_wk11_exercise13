import { useState } from "react";
import ProductList from "./components/ProductList";

function App() {
  const[category, setCategory] = useState('');
  
  
  return(
    <div>
      <select className="form-select" onChange={(event) => setCategory(event.target.value)}>
        <option value=""></option>
        <option value="Clothing">Clothing</option>
        <option value="Household">Household</option>
      </select>
      <ProductList category={category} />
    </div>
  );
}

// Effect Clean Up 
// import { useEffect } from "react";


//   const connect = () => console.log('Connecting')
//   const disconnect = () => console.log('Disconnecting');

//   function App() {
//     useEffect(() => {
//       connect();

//       return () => disconnect();
//     });
  
//     return <div></div>

//   }

export default App;
