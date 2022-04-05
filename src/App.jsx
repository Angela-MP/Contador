import { useState } from "react";
function App() {

  const [cuenta, setCuenta] = useState(0);
  const [paso, setPaso] = useState(1);

  const handlePlusClick = () => {
    setCuenta(cuenta + paso)
  };

  const handleMinusClick = () => {
    setCuenta(cuenta - paso)
  };  

  const handleResetClick = () => {
    setCuenta(cuenta - cuenta)
    setPaso(1);
  };  

  const handleInputChange = (e) => {
    if (isNaN(e.target.value)) {
      return;
    }
    setPaso (Number(e.target.value));
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

              <label> 
                Paso
              <input 
                id="paso"
                name="paso"
                type="text" 
                style={{width:"60px", marginLeft:"5px"}} 
                onChange={handleInputChange}
                value={paso}/>
              </label>
       
              <button 
                type="button" 
                className="btn btn-primary" 
                style={{ marginLeft: "10px"}} 
                onClick={handlePlusClick}>
                  Suma  
              </button> 

              <button 
                type="button" 
                className="btn btn-danger" 
                style={{ marginLeft: "10px"}} 
                onClick={handleResetClick}>
                  Reset
              </button>
              
              <button 
                type="button" 
                className="btn btn-primary" 
                style={{ marginLeft: "10px"}} 
                onClick={handleMinusClick}>
                  Resta
              </button>
              
      </div>
    </div>
  );
}

export default App;
