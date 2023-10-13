import { Header } from "./components/Header";
import { Assignments } from "./components/Assignments";
import { useState, ChangeEvent, FormEvent } from "react";

function App() {
  const [assignment, setAssignment] = useState<string>('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAssignment(e.target.value);
  }


 
  return (
    <>
      <Header assignment={assignment} handleInputChange={handleInputChange}/>
      <Assignments />
    </>
  );
}

export default App;
