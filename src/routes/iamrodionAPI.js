/* eslint-disable no-unused-vars */
import axios from "axios";

export const handleTimeEntry = async (documento) => {
  let fullName = "";
  let workerId = "";
  let entryType = "";
  let url = "https://iamrodion.pythonanywhere.com";

  try {
    // 1. Obtener los datos del empleado
    let employeeData;
    try {
      //const response = await axios.get(`/api/Worker/employee/${documento}/`);
      const response = await axios.get(`${url}/api/Worker/employee/${documento}/`);
      employeeData = response.data;
      //console.log("Datos", employeeData);
    } catch (error) {
      const errorMessage = error.response?.data?.error || error.message || "Error desconocido";
      throw new Error("El documento ingresado no existe, contacte con el administrador. " /* + errorMessage */);
    }

    fullName = `${employeeData.firstname} ${employeeData.lastname}`;

    // 2. Obtener el último registro de tiempo del empleado
    let lastEntry;
    try {
      // const response = await axios.get(`/api/TimeEntry/employee_last_entry/${documento}/`);
      const response = await axios.get(`${url}/api/TimeEntry/employee_last_entry/${documento}/`);
      lastEntry = response.data;
      //console.log("Último registro de ", fullName, " ", lastEntry);
    } catch (error) {
      const errorMessage = error.response?.data?.error || error.message || "Error desconocido";
      // Verificar si el mensaje de error es "Worker has no entries"
      if (errorMessage === "Worker has no entries") {
        lastEntry = { entry_type: "OUT" }; // Asignar "OUT" a lastEntry
      } else {
        throw new Error("Error al obtener el último registro de tiempo del empleado: " + errorMessage);
      }
    }

    workerId = lastEntry.worker;

    // 3. Enviar la entrada de tiempo
    try {
      if (lastEntry.entry_type === "IN") {
        // await axios.post("/api/TimeEntry/", {
        await axios.post(`${url}/api/TimeEntry/`, {
          entry_type: "OUT",
          worker: workerId,
        });
        entryType = "salida";
        //console.log("Salida registrada con éxito");
      } else {
        // await axios.post("/api/TimeEntry/", {
        await axios.post(`${url}/api/TimeEntry/`, {
          entry_type: "IN",
          worker: workerId,
        });
        entryType = "entrada";
        //console.log("Entrada registrada con éxito");
      }
    } catch (error) {
      const errorMessage = error.response?.data?.error || error.message || "Error desconocido";
      throw new Error("Error al enviar la entrada de tiempo: " + errorMessage);
    }

    // 4. Obtener todos los registros de tiempo del empleado
    try {
      // const response = await axios.get(`/api/TimeEntry/employee_id/${documento}/`);
      const response = await axios.get(`${url}/api/TimeEntry/employee_id/${documento}/`);
      const timeEntries = response.data;
      //console.log("Todos los registros de ", fullName, " ", timeEntries);
    } catch (error) {
      const errorMessage = error.response?.data?.error || error.message || "Error desconocido";
      throw new Error("Error al obtener todos los registros de tiempo del empleado: " + errorMessage);
    }

    return { status: "success", message: "Se ha registrado correctamente la " + (entryType) + " de " + (fullName)  };
  } catch (error) {
    console.error("Error:", error.message);
    return { status: "error", message: error.message };
  }
};
