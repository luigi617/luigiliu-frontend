import React from 'react';
import TextImageRowComponent from './TextImageRowComponent';
import styles from '../css/About-Education.module.scss'
import baseStyles from '../css/base.module.scss'
import dagomariImage from '../assets/images/dagomari.jpeg';
import bocconiImage from '../assets/images/bocconi.jpg';
import nusImage from '../assets/images/nus.png';
import columbiaImage from '../assets/images/columbia.jpg';
import thesis from '../assets/pdf/thesis.pdf'

const educations = [
    {
        key: "columbia",
        title: "Columbia University | Master",
        description: "I felt the need for more hands-on experience in computer science and sought a clearer vision for my future—whether as a software engineer, machine learning engineer, PhD researcher, or in another role. This motivated me to pursue a master's degree in computer science, which I am currently undertaking. My focus has been on learning Natural Language Processing, Computer Vision, Algorithms, and developing software engineering skills. Additionally, I aim to explore other branches of computer science that I believe will help me stay current and support my future career aspirations.",
        image: columbiaImage,
        reverse: false,
        courses: ["Natural Languge Processing", "Computer Vision", "Cloud Computing", "Advanced Algorithms", "Computer Network"]
    },
    {
        key: "nus",
        title: "National University of Singapore | Exchange",
        description: "Thanks to my hard work during the first two years of my bachelor's degree, I earned a merit-based exchange opportunity at the National University of Singapore. This experience allowed me to explore how Asian education differs from that in Italy and to observe the technological advancements in one of the most advanced cities in the world. During this time, I also had the opportunity to travel extensively, visiting Thailand, the Philippines, Malaysia, and China.",
        image: nusImage,
        reverse: true,
        courses: ["Data Structure & Algorithms", "Feature Engineering for Machine Learning", "Predictive Analytics in Business"],
    },
    {
        key: "bocconi",
        title: "Bocconi University | Bachelor",
        description: "I graduated with a bachelor's degree in Economics and Computer Science, earning 110 cum laude, maintaining a GPA of 30/30 (equivalent to 4.0 in the US grading system), and receiving a full-tuition merit scholarship. During this time, I sought to determine which field I enjoyed more. As I gained deeper knowledge, I realized that Economics equipped me with the ability to view the world more rationally and identify the social problems humans face, while Computer Science provided the tools to address these issues. From that point on, I no longer struggled with choosing between the two paths—I wanted to combine them.",
        image: bocconiImage,
        reverse: false,
        courses: ["Fundamentals of Computer Science", "Computer Programming", "Big Data and Databases", "Machine Learning", "Econometrics", "Information Technology Law", "Advanced Statistics", "Game Theory"],
        thesis: {
            name: "Analysis of Bandits with Replenishable Knapsacks: Algorithms and Applications",
            file: thesis
        }
    },
    {
        key: "dagomari",
        title: "IIS P. Dagomari | High School",
        description: "I graduated in Corporate Information Systems (Sistemi Informativi Aziendali) with 100 cum laude. During these five years, I focused on both economics and computer science. While I was impressed by the power of programming, I also developed a deep appreciation for understanding human behavior and how the world operates.",
        image: dagomariImage,
        reverse: true,
    },

]

const AboutEducation: React.FC = () => {
    return (
        <div className={styles.aboutEducationContainer}>
            <div className={styles.educationContainer}>
                {educations.map((education) => 
                    <TextImageRowComponent
                    key={education.key}
                    reverse={education.reverse}
                    text={
                    <>
                        <h2>{education.title}</h2>
                        <p>
                        {education.description}
                        </p>
                        {education.courses &&
                        <p>
                        Courses: {education.courses.join(", ")}
                        </p>
                        }
                        {education.thesis &&
                        <p>
                        Thesis: <a className={baseStyles.alink} href={education.thesis.file} target="_blank" rel="noopener noreferrer">{education.thesis.name}</a>
                        </p>
                        }
                    </>
                    }
                    imageSrc={education.image}
                />
                )}
            
            </div>
        </div>
      );
};

export default AboutEducation;
