import { useState } from "react";
import styles from "./assignment.module.css";
import { TbTrash } from "react-icons/tb";

export function Assignment({ assignment, onDelete }) {
  const [completed, setCompleted] = useState(assignment.completed);
  const handleToggleCompleted = () => {
    setCompleted(!completed);
  };

  return (
    <div className={styles.assignment}>
      <div>
        <button onClick={handleToggleCompleted} className={completed ? styles.checkContainer : ""}>
          <div />
        </button>

        <p>{assignment.title}</p>
      </div>
      <button onClick={onDelete} className={styles.deleteButton}>
        <TbTrash size={20} />
      </button>
    </div>
  );
}
