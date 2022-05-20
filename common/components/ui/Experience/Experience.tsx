import React, { useState } from "react";
import styles from "./Experience.module.scss";

const Experience = ({ experiences, ref }: any) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const jobsList = experiences?.map((job: any, index: number) => {
    return (
      <button
        key={index}
        id={`list-${index}`}
        className={activeIndex === index ? styles.active : undefined}
        onClick={() => setActiveIndex(index)}
      >
        {job.attributes.name}
      </button>
    )
  });

  const jobsActive = experiences[activeIndex];
  const jobPannelActive = (
    <div className={styles["job-panel"]}>
      <h3>
        {jobsActive?.attributes?.role} <span>@ {jobsActive?.attributes?.name}</span>
      </h3>
      <p className={styles["job-panel-time"]}>{jobsActive?.attributes?.time}</p>

      <ul>
        {jobsActive?.attributes?.tasks?.data?.map((task: any) => (
          <li key={task?.id}>{task?.attributes?.name}</li>
        ))}
      </ul>
    </div>
  );

  return (
    <section id="experience" ref={ref} className={styles["exp-container"]}>
      <h2 className="section-title">Where I&apos;ve Worked</h2>

      <div className={styles["exp-content"]}>
        <div className={styles["job-list"]}>{jobsList}</div>
        {jobPannelActive}
      </div>
    </section>
  );
};

export default Experience;
