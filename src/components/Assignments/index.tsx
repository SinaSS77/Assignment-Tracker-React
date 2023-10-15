import { Assignment } from "../Assignment";
import styles from "./assignments.module.css";

interface AssignmentsProps {
  assignments: { title: string; completed: boolean; }[];
  onDeleteAssignment: (index: number) => void;
  onToggleCompleted: (index: number) => void;
}

export function Assignments({
  assignments,
  onDeleteAssignment,
  onToggleCompleted,
}: AssignmentsProps) {
  return (
    <section className={styles.assignments}>
      <header className={styles.header}>
        <div>
          <p>Created Assignments</p>
          <span>{assignments.length}</span>
        </div>

        <div>
          <p className={styles.textPurple}>Completed Assignments</p>
          <span>1 of {assignments.length}</span>
        </div>
      </header>

      <div className={styles.list}>
        {assignments.map((assignment, index) => (
          <Assignment
            key={index}
            assignment={assignment}
            onDelete={() => onDeleteAssignment(index)}
            onToggleCompleted={() => onToggleCompleted(index)}
          />
        ))}
      </div>
    </section>
  );
}