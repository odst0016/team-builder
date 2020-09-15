import React from "react";
import Form from "./Form";
import "./App.css";

const teamList = [
  { name: "Nathan", email: "odst0016@gmail.com", role: "Front-end" },
];

const initalFormValues = {
  name: "",
  email: "",
  role: "",
};

function App() {
  return (
    <div>
      <h1>Team Mates</h1>
      <Form teamList={teamList} initalFormValues={initalFormValues} />
    </div>
  );
}

export default App;
