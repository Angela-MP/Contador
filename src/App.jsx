import { useState } from "react";
function App() {

  const [cuenta, setCuenta] = useState(0);

  const handleClick = () => {
    setCuenta(cuenta + 1)
  };

  const handleResta = () => {
    setCuenta(cuenta - 1)
  };  

  const handleReset = () => {
    setCuenta(cuenta - cuenta)
  };  

  return (
    <div className="App">
      <h3 className="text-center">Contador</h3>
      <hr />
        <h2 className="text-center">{cuenta}</h2>
      <hr />
      <div style={{
        display:"flex",
        justifyContent:"flex-end",
        marginRight: "5px",
      }}>
              <button type="button" className="btn btn-primary" onClick={handleClick}>+1</button> 
              <button type="button" className="btn btn-primary" onClick={handleResta}>-1</button>
              <button type="button" className="btn btn-danger" onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}

export default App;
