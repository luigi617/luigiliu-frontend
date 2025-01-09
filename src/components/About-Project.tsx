import React from 'react';
import baseStyles from '../css/base.module.scss'
import styles from '../css/About-Project.module.scss'
import TextImageRowComponent from './TextImageRowComponent';
import ecobambuImage from '../assets/images/about/ecobambu.jpg';
import liveStreamingImage from '../assets/images/about/livestreaming.jpg';
import realgesturexImage from '../assets/images/about/realgesturex.jpg';
import DescriptionSkillsSection from './About-Work-DescriptionSkillsSection';
import realGestureXReport from '../assets/pdf/RealGestureX-Report.pdf'
const projects = [
    {
        key: "livestreaming",
        title: "Live Streaming Platform | Full-stack Engineer",
        description: "I led a team of 6 to develop a microservices-based live streaming platform featuring real-time commenting and a recommendation system. I implemented socket-based connections for video transfer, used FFmpeg for video chunking, and employed HLS for broadcasting. I also designed an item-based collaborative filtering system to personalize recommendations and streamlined deployment with a CI/CD pipeline using GitHub Actions, deploying microservices to AWS EC2.",
        github: "https://github.com/team-name-4153",
        skills: [
            { name: 'Flask', level: 100 },
            { name: 'WebSocket', level: 100 },
            { name: 'AWS', level: 100 },
            { name: 'MySQL', level: 80 },
        ],
        image: liveStreamingImage,
        reverse: true,
    },
    {
        key: "realgesturex",
        title: "RealGestureX | Computer Vision",
        description: "I developed a real-time hand gesture recognition system leveraging YOLOv8 for precise tracking and a dual-model architecture comprising ResNet34 for static gestures and ResNet34 with LSTM for dynamic gestures, achieving over 97% accuracy on both models. To enable fine-tuning for real-time recognition, I created a custom dataset using Python scripts and MediaPipe to generate hand bounding boxes, ensuring robust training for the hand gesture recognition models.",
        github: "https://github.com/luigi617/RealGestureX",
        report: realGestureXReport,
        skills: [
            { name: 'YOLOv8', level: 100 },
            { name: 'LSTM', level: 100 },
            { name: 'ResNet34', level: 100 },
            { name: 'MediaPipe', level: 100 },
        ],
        image: realgesturexImage,
        reverse: false,
    },
    {
        key: "ecobambu",
        title: "EcoBambù | Full-stack Engineer",
        description: "I launched a scarf e-commerce website using Django, PostgreSQL, Nginx, and AWS Lightsail, creating a new revenue stream. I designed a product management and display system that increased marketing reach by 23% and integrated Stripe for secure payment processing, streamlining customer transactions.",
        skills: [
            { name: 'Django', level: 100 },
            { name: 'PostgreSQL', level: 90 },
            { name: 'JS/CSS/HTML', level: 70 },
            { name: 'Docker', level: 80 },
            { name: 'Nginx', level: 80 },
            { name: 'AWS lightsail', level: 100 },
        ],
        image: ecobambuImage,
        reverse: true,
    },
]

const AboutProject: React.FC = () => {
    

    return (
        <div className={styles.aboutProjectContainer}>
            <div className={styles.projectContainer}>
            {projects.map((project) => 
                <TextImageRowComponent
                key={project.key}
                reverse={project.reverse}
                text={
                <>
                    <h2>{project.title}</h2>
                    <DescriptionSkillsSection
                        description={
                            <>
                            <p>{project.description}</p>
                            {project.github &&
                            <p>
                            GitHub: <a className={baseStyles.alink} href={project.github} target="_blank" rel="noopener noreferrer">{project.github}</a>
                            </p>
                            }
                            {project.report &&
                            <p>
                            Report: <a className={baseStyles.alink} href={project.report} target="_blank" rel="noopener noreferrer">Click Here</a>
                            </p>
                            }
                            </>}
                        skills={project.skills} />
                </>
                }
                imageSrc={project.image}
            />
            )}
            
            
            </div>
        </div>
      );
};

export default AboutProject;
