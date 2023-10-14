import { Header } from "./components/Header";
import { Assignments } from "./components/Assignments";
import { useState } from "react";

function App() {
  const [assignments, setAssignments] = useState([]);

  const addAssignment = (newAssignment) => {
    setAssignments([...assignments, {title:newAssignment , completed:false}])
  }
  
  const deleteAssignment = (index) => {
    const updatedAssignments = [...assignments];
    updatedAssignments.splice(index,1);
    setAssignments(updatedAssignments);
  }

  const toggleCompleted = (index) => {
    const updatedAssignments = [...assignments];
    updatedAssignments[index].completed = !updatedAssignments[index].completed;
    setAssignments(updatedAssignments);
  }
  return (
    <>
      <Header onAddAssignment = {addAssignment} />
      <Assignments assignments={assignments} onDeleteAssignment = {deleteAssignment} onToggleCompleted={toggleCompleted} />
    </>
  );
}

export default App;