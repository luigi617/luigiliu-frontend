import React from 'react';
import styles from '../css/About-Work.module.scss'
import TextImageRowComponent from './TextImageRowComponent';
import euroingroImage from '../assets/images/about/euroingro.jpeg';
import unicreditImage from '../assets/images/about/unicredit.jpeg';
import amazonImage from '../assets/images/about/amazon.jpg';
import ecobambuImage from '../assets/images/about/ecobambu.jpg';
import decenergyImage from '../assets/images/about/decenergy.jpg';
import articulateaiImage from '../assets/images/about/articulateai.jpg';
import mathworksImage from '../assets/images/about/mathworks.jpg';
import DescriptionSkillsSection from './About-Work-DescriptionSkillsSection';

const workExperiences = [
    {
        key: "mathworks",
        title: "MathWorks | SDE Intern in EDG",
        description: "Incoming summer internship.",
        skills: [
        ],
        image: mathworksImage,
        reverse: false
    },
    {
        key: "articulateai",
        title: "Articulate AI | Columbia University | Research Assistant",
        description: "I will work on the open-source project: Agent First Organization.",
        skills: [
            { name: 'Python', level: 100 },
            { name: 'NLP', level: 100 },
            { name: 'LangChain', level: 80 },
            { name: 'OpenAI API', level: 90 },
        ],
        image: articulateaiImage,
        reverse: true
    },
    {
        key: "decenergy",
        title: "Dec Energy | Software Development Engineer",
        description: "I developed a photovoltaic plant exchange platform using React, incorporating analytics dashboards and management tools for plant proposals. I automated proposal generation by extracting key information from PDFs with Hugging Face’s pre-trained NER models and mapping entities to form fields through predefined rules. Additionally, I led a team of three research students in automating photovoltaic plant proposals, overseeing NER model development and UI/UX design.",
        skills: [
            { name: 'React', level: 70 },
            { name: 'Django', level: 90 },
            { name: 'Fast API', level: 80 },
            { name: 'NLP', level: 100 },
            { name: 'Machine Learning', level: 100 },
        ],
        image: decenergyImage,
        reverse: false
    },
    {
        key: "ecobambu",
        title: "EcoBambù | Software Development Engineer",
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
    {
        key: "amazon",
        title: "Amazon | Business Intelligence Engineer Intern",
        description: "I allocated fulfillment center resources for PICS vendors by developing a Linear Programming pipeline, reducing workload balancing costs and improving inventory placement. I engineered machine learning models with 86% accuracy to predict inbound appointment scheduling across EU marketplaces, identified key causal factors, and introduced new metrics for long-term investments. Additionally, I created QuickSight dashboards using SQL and PySpark for real-time tracking of PICS vendors and fulfillment centers, enabling proactive and reactive allocation adjustments.",
        skills: [
            { name: 'AWS', level: 100 },
            { name: 'Python', level: 100 },
            { name: 'SQL', level: 90 },
            { name: 'Linear Programming', level: 100 },
            { name: 'Machine Learning', level: 100 },
            { name: 'QuickSight', level: 75 },
        ],
        image: amazonImage,
        reverse: false,
    },
    {
        key: "unicredit",
        title: "UniCredit Bank | Data Analyst Intern",
        description: "I analyzed numerous key risk elements for End-to-End Risk Self-Assessment in payments using Palantir, effectively identifying and mitigating potential payment fraud threats. By restructuring SQL queries with advanced indexing and logic modifications, I significantly enhanced pipeline performance. Additionally, I collaborated with cross-functional teams to organize risk self-assessment data from fragmented warehouses, thereby improving team efficiency and ensuring a more streamlined risk management process.",
        skills: [
            { name: 'Palantir', level: 80 },
            { name: 'Python', level: 90 },
            { name: 'SQL', level: 100 },
            { name: 'PySpark', level: 80 },
        ],
        image: unicreditImage,
        reverse: true,
    },
    {
        key: "euroingro",
        title: "Euroingro | Software Development Engineer",
        description: "I launched a B2B e-commerce platform using AWS EC2, Django, PostgreSQL, JavaScript, and CSS/HTML. I designed a promotional system allowing partners to sponsor shops and products and implemented a real-time notification system with Redis for order updates, enhancing supplier management. Additionally, I developed RESTful APIs for product management, supplier analytics, and customer service, ensuring a seamless user experience.",
        skills: [
            { name: 'Django', level: 100 },
            { name: 'PostgreSQL', level: 90 },
            { name: 'Javascript', level: 85 },
            { name: 'CSS/HTML', level: 60 },
            { name: 'Docker', level: 80 },
            { name: 'Flutter', level: 70 },
        ],
        image: euroingroImage,
        reverse: false,
    },
]

const AboutWork: React.FC = () => {
    

    return (
        <div className={styles.aboutWorkContainer}>
            <div className={styles.workContainer}>
            {workExperiences.map((experience) => 
                <TextImageRowComponent
                key={experience.key}
                reverse={experience.reverse}
                text={
                <>
                    <h2>{experience.title}</h2>
                    <DescriptionSkillsSection
                        description={
                            <><p>{experience.description}</p></>}
                        skills={experience.skills} />
                </>
                }
                imageSrc={experience.image}
            />
            )}
            
            
            </div>
        </div>
      );
};

export default AboutWork;
