import styles from "./header.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { uppercase } from "../../helpers/stringHelpers";
import { useState } from "react";

interface HeaderProps {
  onAddAssignment: (newAssignment: string) => void;
}

export function Header({onAddAssignment} : HeaderProps) {

  const [newAssignment, setNewAssignment] = useState ("");
  const isCreateDesabled = newAssignment.trim() === "";

  const handleCreateAssignment = () => {
    if(newAssignment.trim() !== "") {
      onAddAssignment(newAssignment);
      setNewAssignment("")
    }

  };
 
  return (
    <header className={styles.header}>
      <h1>{uppercase("bcit")} Assignment Tracker</h1>
      <form className={styles.newAssignmentForm}>
        <input 
           placeholder="Add a new assignment" 
           type="text"
           value={newAssignment}
           onChange={(e) => setNewAssignment(e.target.value)} />
        <button onClick={handleCreateAssignment}  disabled={isCreateDesabled}>
          Create <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header>
  );
}
