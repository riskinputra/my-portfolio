import styles from "./About.module.scss";
import Image from "next/image";

const About = () => {
  const skills = [
    { name: "Javascript" },
    { name: "Vue" },
    { name: "Nuxt.js" },
    { name: "React" },
  ];

  const listSkills = skills.map((skill, index) => (
    <li key={index}>{skill.name}</li>
  ));

  return (
    <section id="about" className={styles["about-container"]}>
      <h2 className="section-title">About</h2>

      <div className={styles["about-content"]}>
        <div className="content-desc">
          <div>
            <p>
              I am a Frontend Engineer with about 4 years of experience. I
              graduated from Hacktiv8 Coding Bootcamp in 2018. I enjoy the logic
              and stucture of coding and always strive to write elegant and
              effecient code.
            </p>
            <p>
              Currently i&apos;m working at adtech company at{" "}
              <a href="https://stickearn.com">Stickearn</a>
              and develop LMS for internal at{" "}
              <a href="https://learning.kompasgramedia.com">
                Learning Kompas Gramedia
              </a>
            </p>

            <p>Here are a few technologies I’ve been working with recently:</p>
          </div>

          <ul className={styles["content-skill"]}>{listSkills}</ul>
        </div>

        <div className={styles["content-profile"]}>
          <div className={styles["wrapper-profile"]}>
            <Image
              layout="responsive"
              className={styles["wrapper-profile-image"]}
              data-testid="navbar-logo"
              src="/assets/images/photo.png"
              alt="profile"
              height={260}
              width={260}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
