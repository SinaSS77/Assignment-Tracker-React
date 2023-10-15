import { useState } from "react";
import styles from "./assignment.module.css";
import { TbTrash } from "react-icons/tb";
import { GiCheckMark } from "react-icons/gi";

interface AssignmentProps {
  assignment: { title: string; completed: boolean };
  onDelete: () => void;
}

export function Assignment({ assignment, onDelete } : AssignmentProps) {
  const [completed, setCompleted] = useState(assignment.completed);
  const handleToggleCompleted = () => {
    setCompleted(!completed);
  };

  return (
    <div className={styles.assignment}>
      <div className={styles.title}>
      <button onClick={handleToggleCompleted} className={styles.checkContainer}>
          <div >
            {completed && <GiCheckMark className={styles.svg}/>}
          </div>
        </button>

        <p>{assignment.title}</p>
      </div>
      <button onClick={onDelete} className={styles.deleteButton}>
        <TbTrash size={20} />
      </button>
    </div>
  );
}
