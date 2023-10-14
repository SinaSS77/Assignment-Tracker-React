import React from "react";
import { Assignment } from "../Assignment";
import styles from "./assignments.module.css";

export function Assignments({ assignments, onDeleteAssignment, onToggleCompleted }) {
  return (
    <section className={styles.assignments}>
      <header className={styles.header}>
        <div>
          <p>Created Assignments</p>
          <span>1</span>
        </div>

        <div>
          <p className={styles.textPurple}>Completed Assignments</p>
          <span>1 of 1</span>
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