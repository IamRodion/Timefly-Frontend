/* eslint-disable no-unused-vars */
import axios from "axios";

export const handleTimeEntry = async (documento) => {
  let fullName = "";
  let workerId = "";
  let entryType = "";

  try {
    // 1. Obtener los datos del empleado
    let employeeData;
    try {
      const response = await axios.get(`/api/Worker/employee/${documento}/`);
      employeeData = response.data;
      console.log("Datos", employeeData);
    } catch (error) {
      throw new Error("El documento ingresado no existe, contacte con el administrador. " /* + (error.response?.data || error.message) */);
    }

    fullName = `${employeeData.firstname} ${employeeData.lastname}`;

    // 2. Obtener el último registro de tiempo del empleado
    let lastEntry;
    try {
      const response = await axios.get(`/api/TimeEntry/employee_last_entry/${documento}/`);
      lastEntry = response.data;
      console.log("Último registro de ", fullName, " ", lastEntry);
    } catch (error) {
      throw new Error("Error al obtener el último registro de tiempo del empleado: " + (error.response?.data || error.message));
    }

    workerId = lastEntry.worker;

    // 3. Enviar la entrada de tiempo
    try {
      if (lastEntry.entry_type === "IN") {
        await axios.post("/api/TimeEntry/", {
          entry_type: "OUT",
          worker: workerId,
        });
        entryType = "salida";
        console.log("Salida registrada con éxito");
      } else {
        await axios.post("/api/TimeEntry/", {
          entry_type: "IN",
          worker: workerId,
        });
        entryType = "entrada";
        console.log("Entrada registrada con éxito");
      }
    } catch (error) {
      throw new Error("Error al enviar la entrada de tiempo: " + (error.response?.data || error.message));
    }

    // 4. Obtener todos los registros de tiempo del empleado
    try {
      const response = await axios.get(`/api/TimeEntry/employee_id/${documento}/`);
      const timeEntries = response.data;
      console.log("Todos los registros de ", fullName, " ", timeEntries);
    } catch (error) {
      throw new Error("Error al obtener todos los registros de tiempo del empleado: " + (error.response?.data || error.message));
    }

    return { status: "success", message: "Se ha registrado correctamente la " + (entryType) + " de " + (fullName)  };
  } catch (error) {
    console.error("Error:", error.message);
    return { status: "error", message: error.message };
  }
};
