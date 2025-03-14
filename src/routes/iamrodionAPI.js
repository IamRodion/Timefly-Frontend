import axios from "axios";

export const handleTimeEntry = async (documento) => {
  try {
    // 1. Obtener los datos del empleado
    const { data: employeeData } = await axios.get(`/api/Worker/employee/${documento}/`);
    console.log("GET", employeeData);
    const workerId = employeeData.id;

    // 2. Obtener los registros de tiempo del empleado
    const { data: timeEntries } = await axios.get(`/api/TimeEntry/${workerId}/`);
    console.log("Time Entries", timeEntries);

    /* // 3. Obtener el último registro basado en el atributo "time"
    const lastEntry = timeEntries.sort((a, b) => new Date(b.time) - new Date(a.time))[0];
    console.log("Último registro", lastEntry); */

    // 4. Enviar la entrada de tiempo
    await axios.post("/api/TimeEntry/", {
      entry_type: "OUT",
      worker: workerId,
    });

    console.log("Entrada registrada con éxito");
  } catch (error) {
    console.error("Error:", error.response?.data || error.message);
  }
};