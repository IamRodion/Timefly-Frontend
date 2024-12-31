import React, { useState } from "react";
import Title from "./components/Title";
import Button from "./components/Button";
import Clock from "./components/Clock";
import Form from "./components/Form";

function App() {
  const [inputValue, setInputValue] = useState("");

  const fetchWorkerId = async (employeId) => {
    try {
      const response = await fetch(
        "https://iamrodion.pythonanywhere.com/api/Worker/"
      );
      const workers = await response.json();
      const worker = workers.find((w) => w.employe_id === employeId);
      return worker ? worker.id : null;
    } catch (error) {
      console.error("Error fetching worker data:", error);
      return null;
    }
  };

  const sendTimeEntry = async (entryType, workerId) => {
    try {
      const response = await fetch(
        "https://iamrodion.pythonanywhere.com/api/TimeEntry/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            entry_type: entryType,
            worker: workerId,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to send time entry");
      }

      console.log("Time entry sent successfully");
    } catch (error) {
      console.error("Error sending time entry:", error);
    }
  };

  const handleButtonClick = async (entryType) => {
    const workerId = await fetchWorkerId(inputValue);
    if (workerId) {
      await sendTimeEntry(entryType, workerId);
    } else {
      console.error("Worker not found");
    }
  };

  return (
    <div className="container text-center my-4">
      <div className="row justify-content-md-center my-2">
        <Title text="TimeFly" size="display-4"></Title>
        <Clock></Clock>
        <Form setInputValue={setInputValue}></Form>
      </div>
      <div className="row justify-content-md-center my-2">
        <div className="col-6">
          <Button
            color="success"
            text="Entrada"
            onClick={() => handleButtonClick("IN")}
          ></Button>
        </div>
        <div className="col-6">
          <Button
            color="danger"
            text="Salida"
            onClick={() => handleButtonClick("OUT")}
          ></Button>
        </div>
      </div>
    </div>
  );
}

export default App;
