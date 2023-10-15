import { useState } from "react";
import styles from "./assignment.module.css";
import { TbTrash, AiOutlineCheckCircle } from "react-icons/tb";

export function Assignment({ assignment, onDelete }) {
  const [completed, setCompleted] = useState(assignment.completed);
  const handleToggleCompleted = () => {
    setCompleted(!completed);
  };

  return (
    <div className={styles.assignment}>
      <div className={styles.title}>
      <button onClick={handleToggleCompleted} className={styles.checkContainer}>
          <div >
            {completed && <AiOutlineCheckCircle className="svg"/>}
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
