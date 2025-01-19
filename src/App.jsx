import { useState } from "react";
import "./App.css";

function App() {
  const [height, setHeight] = useState(""); // Height in cm
  const [weight, setWeight] = useState(""); // Weight in kg
  const [bmi, setBMI] = useState("");
  const [status, setStatus] = useState("");
  const [err, seterr] = useState("");

  const calculateBMI = () => {
    if (height && weight) {
      const heightInMeters = height / 100;
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      setBMI(bmiValue);

      if (bmiValue < 18.5) {
        setStatus("Underweight");
      } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
        setStatus("Normal weight");
      } else if (bmiValue >= 25 && bmiValue < 29.9) {
        setStatus("Overweight");
      } else {
        setStatus("Obese");
      }
    } else {
      seterr("Please enter valid height and weight");
    }
  };

  const resetFields = () => {
    setHeight("");
    setWeight("");
    setBMI("");
    setStatus("");
    seterr("")
  };

  return (
    <div className="container">
      <h1>BMI Calculator</h1>
      <p>{err}</p>
      <div>
        <label htmlFor="txtHeight">Height (cm):</label>
        <input
          id="txtHeight"
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="txtWeight">Weight (kg):</label>
        <input
          id="txtWeight"
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </div>
      <div className="btnGroup">
        <button onClick={calculateBMI}>Calculate</button>
        <button onClick={resetFields}>Reset</button>
      </div>
      {bmi && (
        <div>
          <p>Your BMI is: {bmi}</p>
          <p>BMI Status: {status}</p>
        </div>
      )}
    </div>
  );
}

export default App;
