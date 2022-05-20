import React from "react";
import NextImage from "../../elements/Image/Image";

import styles from "./Work.module.scss";

const Work = ({ works }: any) => {
  const listProject = works?.map((work: any, index: number) => (
    <li className={styles['work-item']} key={index}>
      <div className={styles['work-item-content']}>
        <div>
          <div className={styles['content-type']}>Featured Project</div>
          <h3 className={styles['content-title']}>
            <a href={work.attributes.url} target="_blank" rel="noreferrer">{work.attributes.name}</a>
          </h3>
          <div className={styles['content-description']}>{work.attributes?.description}</div>
          <ul className={styles['content-stack']}>
            {work.attributes?.tags.data.map((tag: any) => <li key={tag.id}>{tag.attributes?.name}</li>)}
          </ul>
        </div>
      </div>
      <div className={styles['work-item-image']}>
        <a href={work.attributes?.url} target="__blank">
          <div className="img">
            <NextImage image={work?.attributes?.image} />
          </div>
        </a>
      </div>
    </li>
  ));

  return (
    <section id="work" className={styles['work-container']}>
      <h2 className="section-title">Some Things I&apos;ve Built</h2>

      <ul className={styles['work-list']}>{listProject}</ul>
    </section>
  );
};

export default Work;
