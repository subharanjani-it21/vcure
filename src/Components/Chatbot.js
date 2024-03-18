import React, { useState } from "react";
import "../Styles/Chatbot.css";

function Chatbot({ onClose }) {
  const [messages, setMessages] = useState([]);
  const [patientData, setPatientData] = useState(null);

  const handleClose = () => {
    onClose();
  };

  const handleSendMessage = (message) => {
    if (message.startsWith("ID:")) {
      const id = message.substring(3).trim();
      // Sample patient data for demonstration
      const patients = [
        { id: "873", name: "John Doe", age: 30, conditions: [ "Cough"],
        medications: [ "Cough Syrup"],
        allergies: ["Penicillin"],
        lastAppointment: "2023-12-10",
        nextAppointment: "2024-03-10",
        chancesofcausing: ["tuberculosis"],
        reasonofcausing: ["active-smoking"," ","passive-smoking"," ","bacteria"],
        stages:["primary infection"," ","latent TB infection"," ","active TB disease"]},
        { id: "2", name: "Alice Smith", age: 45,  condition: "Headache" },
        { id: "3", name: "Bob Johnson", age: 50, condition: "Back Pain" },
        { id: "4", name: "Emily Brown", age: 25,  condition: "Allergies" },
        { id: "5", name: "Michael Davis", age: 35,  condition: "Fatigue" }
      ];
      const patient = patients.find((p) => p.id === id);
      setPatientData(patient);
    } else {
      setMessages([...messages, { text: message, sender: "user" }]);
    }
  };
  

  return (
    <div className="chatbot-container-large">
      <div className="chatbot-header">
        <span>Chatbot</span>
        <button onClick={handleClose}>Close</button>
      </div>
      <div className="chatbot-messages">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`message ${message.sender === "user" ? "user" : "bot"}`}
          >
            {message.text}
          </div>
        ))}
        {patientData && (
          <div className="patient-data">
            <h3>Patient Data</h3>
            <table>
              <tbody>
                <tr>
                  <td>ID:</td>
                  <td>{patientData.id}</td>
                </tr>
                <tr>
                  <td>Name:</td>
                  <td>{patientData.name}</td>
                </tr>
                <tr>
                  <td>Age:</td>
                  <td>{patientData.age}</td>
                </tr>
                <tr>
                  <td>Previous Status:</td>
                  <td>{patientData.conditions}</td>
                </tr>
                <tr>
                  <td>medications undergone:</td>
                  <td>{patientData.medications }</td>
                </tr>
                <tr>
                  <td>Allergies:</td>
                  <td>{patientData.allergies }</td>
                </tr>
                <tr>
                  <td>lastAppointment:</td>
                  <td>{patientData.lastAppointment}</td>
                </tr>
                <tr>
                  <td>NextAppointment:</td>
                  <td>{patientData.nextAppointment}</td>
                </tr>
                <tr>
                  <td>Chances of causing:</td>
                  <td>{patientData.chancesofcausing}</td>
                </tr>
                <tr>
                  <td>Reason:</td>
                  <td>{patientData.reasonofcausing}</td>
                </tr>
                <tr>
                  <td>Stages:</td>
                  <td>{patientData.stages}</td>
                </tr>

              </tbody>
            </table>
          </div>
        )}
      </div>
      <div className="chatbot-input">
        <input
          type="text"
          placeholder="Type your message..."
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSendMessage(e.target.value);
              e.target.value = "";
            }
          }}
        />
        <button onClick={() => handleSendMessage()}>Send</button>
      </div>
    </div>
  );
}

export default Chatbot;
