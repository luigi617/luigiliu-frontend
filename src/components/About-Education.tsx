import React from 'react';
import TextImageRowComponent from './TextImageRowComponent';
import styles from '../css/About-Education.module.scss'
import dagomariImage from '../assets/images/dagomari.jpeg';
import bocconiImage from '../assets/images/bocconi.jpg';
import nusImage from '../assets/images/nus.png';
import columbiaImage from '../assets/images/columbia.jpg';

const AboutEducation: React.FC = () => {
    return (
        <div className={styles.aboutEducationContainer}>
            <div className={styles.educationContainer}>
            
            <TextImageRowComponent
                text={
                <>
                    <h2>IIS P. Dagomari | High School</h2>
                    <p>
                    I studied Corporate Information Systems (Sistemi Informativi Aziendali). Throughout these five years, I focused on both economics and computer science. While I was impressed by the power of programming, I love understanding human behavior and how the world operates.
                    </p>
                </>
                }
                imageSrc={dagomariImage}
            />
        
            <TextImageRowComponent
                reverse
                text={
                <>
                    <h2>Bocconi University | Bachelor</h2>
                    <p>
                    During my undergraduate studies, I pursued both Economics and Computer Science, trying to determine which field I enjoyed more. As I gained more knowledge, I realized that Economics gave me the ability to view the world more rationally and identify the social problems humans face, while Computer Science provided me with the tools to address these issues. Since then, I no longer struggled with choosing between the two paths—I wanted to combine them.
                    </p>
                </>
                }
                imageSrc={bocconiImage}
            />
            <TextImageRowComponent
                text={
                <>
                    <h2>National University of Singapore | Exchange</h2>
                    <p>
                    Thanks to my first two years of hard work, I earned a merit-based exchange opportunity at the National University of Singapore. I had the chance to experience how Asian education differs from that in Italy and to observe the priorities of people living in one of the most advanced cities in the world. During this time, I also traveled extensively, visiting Thailand, the Philippines, Malaysia, and China
                    </p>
                </>
                }
                imageSrc={nusImage}
            />
            
            <TextImageRowComponent
                reverse
                text={
                <>
                    <h2>Columbia University | Master</h2>
                    <p>
                    I felt the need for more hands-on experience in computer science and wanted a clearer vision of the future path of machine learning, including deep learning, reinforcement learning, natural language processing, and artificial intelligence in general. This led me to pursue a master's degree in computer science, which I am currently attending. Additionally, I aim to explore other branches of computer science that I genuinely believe will help me stay updated and support my future career.
                    </p>
                </>
                }
                imageSrc={columbiaImage}
            />
            
            </div>
        </div>
      );
};

export default AboutEducation;
