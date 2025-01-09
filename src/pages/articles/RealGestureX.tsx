import React from 'react';
import styles from '../../css/articles/GeneralArticle.module.scss';
import image9 from '../../assets/images/articles/9.jpg';
import image10 from '../../assets/images/articles/10.jpg';
import image11 from '../../assets/images/articles/11.jpg';
import image12 from '../../assets/images/articles/12.jpg';
import realGestureXReport from '../../assets/pdf/RealGestureX-Report.pdf'

// Define the component with React.FC (React Functional Component)
const RealGestureX: React.FC = () => {
  const title = "RealGestureX: Advanced Hand Tracking and Gesture Recognition System";
  return (
    <div className={styles.articleContainer}>
      <div className={styles.article}>
        <h1 className={styles.title}>{title}</h1>

        <h2 className={styles.subtitle}>Introduction</h2>

        <p className={styles.paragraph}>
        RealGestureX is a sophisticated real-time hand tracking and gesture recognition system designed to enhance human-computer interaction, particularly in AR/VR environments and interactive web interfaces. The project explores two distinct architectures to balance performance and resource efficiency:
        </p>

        <ol className={styles.orderedList}>
          <li>YOLOv8 + ResNet34 with LSTM: This GPU-based architecture offers high performance and accuracy for both static and dynamic gestures.</li>
          <li>MediaPipe + Lightweight Neural Network with LSTM: A CPU-based alternative that is resource-efficient and suitable for devices with lower computational power.</li>
        </ol>

        <p className={styles.paragraph}>
        These architectures allow for independent optimization of each component, facilitating targeted improvements and scalability.
        </p>

        <h2 className={styles.subtitle}>Custom Dataset Creation</h2>


        <p className={styles.paragraph}>
        To train and evaluate the system, a comprehensive dataset was created using MediaPipe, encompassing various lighting conditions to ensure robustness:
        </p>
        <ol className={styles.orderedList}>
          <li>Lighting Conditions: Data was collected under three distinct lighting scenarios—dark, mixed, and bright—to enhance the model's adaptability to different environments.</li>
          <li>Static Gestures: Over 1,000 samples were captured for each static gesture, including open palm, peace sign, and fist, among others.</li>
          <li>Dynamic Gestures: Sequences for dynamic gestures, such as swipe up and wave, were recorded using a 15-frame buffer, with over 200 samples per gesture to capture temporal dynamics effectively.</li>
        </ol>

        <img className={styles.image} src={image9} alt={title} />

        <h2 className={styles.subtitle}>Network Architecture: GPU-Based System</h2>

        <ol className={styles.orderedList}>
          <li>Hand Tracking: YOLOv8 provides fast, high-precision hand localization, essential for real-time applications.</li>
          <li>Static Gesture Recognition: ResNet34 processes individual hand images efficiently, leveraging deep learning for accurate classification.</li>
          <li>Dynamic Gesture Recognition: A combination of ResNet34 and LSTM models analyzes temporal sequences, capturing both spatial and temporal features for dynamic gesture classification.</li>
        </ol>
        <img className={styles.image} src={image10} alt={title} />

        <h2 className={styles.subtitle}>Network Architecture: CPU-Based System</h2>

        <ol className={styles.orderedList}>
          <li>Hand Tracking: MediaPipe handles hand landmark detection, offering a lightweight solution suitable for devices with limited computational power.</li>
          <li>Static Gesture Recognition: A streamlined feedforward neural network processes hand landmarks to classify static gestures efficiently.</li>
          <li>Dynamic Gesture Recognition: A bidirectional LSTM network analyzes sequences of hand landmarks, capturing temporal dependencies crucial for recognizing dynamic gestures.</li>
        </ol>

        <h2 className={styles.subtitle}>Results</h2>

        <p className={styles.paragraph}>
        Although the architecture based on MediaPipe performs better in real-world applications—thanks to MediaPipe’s ability to filter out the background and handle various conditions while providing only hand landmarks, which simplifies and improves gesture recognition — I focus on an architecture that takes an image as input.
        </p>
        <p className={styles.paragraph}>
        For static gesture recognition, the following results were achieved: training accuracy of 99.24%, validation accuracy of 99.34%, and test accuracy of 99.13%.
        On the other hand, for dynamic gesture recognition, the following results were achieved: training accuracy of 99.29%, validation accuracy of 99.18%, and test accuracy of 96.81%.
        </p>

        <p className={styles.paragraph}>
        Here are 2 graphs of YOLOv8 results:
        </p>
        <img className={styles.image} src={image11} alt={title} />

        <p className={styles.paragraph}>
        Here are the results of static and dynamic models, respectively:
        </p>
        <img className={styles.image} src={image12} alt={title} />

        <h2 className={styles.subtitle}>Conclusion</h2>
        <p className={styles.paragraph}>
        RealGestureX exemplifies a balanced approach to leveraging advanced machine learning architectures for gesture recognition while addressing hardware constraints. Its adaptability and high performance make it a promising foundation for real-time interactive systems, paving the way for more natural and efficient human-computer interactions.
        </p>

        <h3 className={styles.referencesHeading}>Complete Report & GitHub</h3>
        <p className={styles.paragraph}>
        GitHub: <a className={styles.alink} href="https://github.com/luigi617/RealGestureX" target="_blank" rel="noopener noreferrer">https://github.com/luigi617/RealGestureX</a>
        </p>
        <p className={styles.paragraph}>
        Report: <a className={styles.alink} href={realGestureXReport} target="_blank" rel="noopener noreferrer">Click Here</a>
        </p>
        <h3 className={styles.referencesHeading}>References</h3>
        <ul className={styles.referencesList}>
          <li>
            Mupparapu Sohan, Thotakura Ram, and Venkata Ch, "A Review on YOLOv8 and Its Advancements," Applied Sciences, pp. 529-545, 01 2024.
          </li>
          <li>
            Muhammad Yaseen, "What is yoloV8: An in-depth exploration of the internal features of the next-generation object detector," 2024.
          </li>
          <li>
            Huadong Huang, Binyu Wang, Jiannan Xiao, and Tianyu Zhu, "Improved small-object detection using yoloV8: A comparative study," Applied and Computational Engineering, vol. 41, pp. 80-88, 02 2024.
          </li>
          <li>
            Jenny Cifuentes, Pierre Boulanger, Minh Tu Pham, Flavio Prieto, and Richard Moreau, "Gesture classification using lstm recurrent neural networks," in 2019 41st Annual International Conference of the IEEE Engineering in Medicine and Biology Society (EMBC), 2019, pp. 6864-6867.
          </li>
          <li>
            Riyad Rafiq, Syed Araiub Karim, and Mark Albert, "An lstm-based gesture-to-speech recognition system," 06 2023, vol. 2023, pp. 430-438.
          </li>
          <li>
            Kaiming He, Xiangyu Zhang, Shaoqing Ren, and Jian Sun, "Deep residual learning for image recognition," 2015.
          </li>
          <li>
            Yuejiao Wang, Zhanjun Hao, Xiaochao Dang, Zhenyi Zhang, and Mengqiao Li, "Ultrasonics: A highly robust gesture and sign language recognition method based on ultrasonic signals," Sensors, vol. 23, pp. 1790, 02 2023.
          </li>
          <li>
            Okan Köprüklü, Ahmet Gunduz, Neslihan Kose, and Gerhard Rigoll, "Real-time hand gesture detection and classification using convolutional neural networks," 2019.
          </li>
          <li>
            Naziba Basnin, Lutfun Nahar, and Mohammad Hossain, "An Integrated CNN-LSTM Model for Micro Hand Gesture Recognition," pp. 379-392, 02 2021.
          </li>
          <li>
            Rishabh Agrawal and Nikita Singhal, "Real time hand gesture recognition for human computer interaction," 02 2016, pp. 470-475.
          </li>
          <li>
            Angjoo Kanazawa, Michael J. Black, David W. Jacobs, and Jitendra Malik, "End-to-end recovery of human shape and pose," 2018.
          </li>
          <li>
            J. Yashas and G. Shivakumar, "Hand gesture recognition: A survey," 05 2019, pp. 3-8.
          </li>
          <li>
            Francesco Sabbarese, Luciano Magliulo, Pietro Carratù, and Marco Romano, "Hand gesture recognition using recurrent neural networks and synthetic data generation," 07 2023.
          </li>
          <li>
            Meng Wu, "Gesture recognition based on deep learning: A review," EAI Endorsed Transactions on e-Learning, vol. 10, 03 2024.
          </li>
          <li>
            Mazhar Awan, Awais Yasin, Mazin Mohammed, Robertas Damaševičius, Rytis Maskeliunas, and Karrar Hameed, "Real-time hand gesture recognition based on deep learning yoloV3 model," Applied Sciences, vol. 11, pp. 4164, 05 2021.
          </li>
          <li>
            Abu Saleh Musa Miah, Md. Al Hasan, and Jungpil Shin, "Dynamic hand gesture recognition using multi-branch attention based graph and general deep learning model," IEEE Access, vol. PP, pp. 1-1, 01 2023.
          </li>

        </ul>

      </div>
    </div>
  );
};

export default RealGestureX;
