import React, { useState } from "react";
import Formulario from "./components/Formulario";

function App() {
  // Estado para almacenar los valores de los inputs
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
  });

  // Manejar el cambio en los inputs
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Manejar el envío del formulario (sin guardar datos por el momento)
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos del formulario:", formData);
  };

  return (
    <div>
      <Formulario
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default App;
