import axios from "axios";

export const handleTimeEntry = async (documento) => {
  try {
    // 1. Obtener los datos del empleado
    const { data: employeeData } = await axios.get(`/api/Worker/employee/${documento}/`);
    console.log("GET", employeeData);
    const workerId = employeeData.id;


    // 2. Enviar la entrada de tiempo
    await axios.post("/api/TimeEntry/", {
      entry_type: "OUT",
      worker: workerId,
    });

    console.log("Entrada registrada con éxito");
  } catch (error) {
    console.error("Error:", error.response?.data || error.message);
  }
};