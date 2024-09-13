import React from "react";
import "./../../../assets/css/photo.css";

const AboutSection = () => {
  return (
    <div className="about-area" id="about">
      <div className="container">
        <div
          className="title right "
          style={{
            height: "160px",
          }}
        >
          <p>About Me</p>
        </div>
        <div className="about">
          <div className="about-details">
            <p>
              Hello! I'm Md Kamal Hosen, a passionate web developer. I develop
              web applications and mobile applications (android). My core skill
              is based on JavaScript and I love to do most of the things using
              JavaScript. I love to make the web more open to the world. I have
              graduated with a bachelor's degree in Computer Science Engineering
              from Chandigarh University at Punjab, India in 2020. I am
              available for any kind of job opportunity that suits my interests.
            </p>
            <div className="about-action">
              <a
                class="btn-full btn-full-bg"
                href="https://github.com/zonayedpca/zonayed.me/raw/master/src/data/file/MyResume.pdf"
                rel="noopener noreferrer"
                target="_blank"
              >
                Get Resume
              </a>
              <a class="btn-full btn-full-border" href="#skill">
                My Skills
              </a>
            </div>
          </div>
          <div className="about-image">
            <div className="image">
              <img className="content__photo" alt="profile" src="/hosen.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
