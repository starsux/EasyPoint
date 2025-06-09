import styles from "@/app/styles/components.module.css";

export function Title({ title = "", button, handleButton}: any) {


  return (
    <div className={styles.tilteContainer}>
      <h2>{title}</h2>
      {button != undefined ? <div className={styles.titleButton} onClick={handleButton}>{button}</div> : undefined}
    </div>

  );
}

export function Section({ title = "" }) {


  return (
    <div className={styles.section}>
      <h3>{title}</h3>
    </div>
  )
}

