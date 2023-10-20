import { Assignment } from "../Assignment";
import styles from "./assignments.module.css";

interface AssignmentItem {
  title: string;
  completed: boolean;
}

interface AssignmentsProps {
  assignments: AssignmentItem[];
  onDeleteAssignment: (index: number) => void;
  onToggleCompleted: (index: number) => void;
}

export function Assignments({
  assignments,
  onDeleteAssignment,
  onToggleCompleted,
}: AssignmentsProps) {
  const completedAssignments = assignments.filter((assignment) => assignment.completed);

  return (
    <section className={styles.assignments}>
      <header className={styles.header}>
        <div>
          <p>Created Assignments</p>
          <span>{assignments.length}</span>
        </div>

        <div>
          <p className={styles.textPurple}>Completed Assignments</p>
          <span>
            {completedAssignments.length} of {assignments.length}
          </span>
        </div>
      </header>

      <div className={styles.list}>
        {assignments.map((assignment, index) => (
          <Assignment
            key={index}
            assignment={assignment}
            onToggleCompleted={() => onToggleCompleted(index)}
            onDelete={() => onDeleteAssignment(index)}
          />
        ))}
      </div>
    </section>
  );
}