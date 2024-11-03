import React from 'react';
import styles from '../../css/articles/GeneralArticle.module.scss';
import image1 from '../../assets/images/articles/1.png';
import image2 from '../../assets/images/articles/2.jpg';
import image3 from '../../assets/images/articles/3.jpg';
import image4 from '../../assets/images/articles/4.jpg';
import image5 from '../../assets/images/articles/5.jpg';
import image6 from '../../assets/images/articles/6.png';
import image7 from '../../assets/images/articles/7.png';
import image8 from '../../assets/images/articles/8.jpg';

// Define the component with React.FC (React Functional Component)
const ArticleHumanActivityRecognitionUsingObjectDetection: React.FC = () => {
  const title = "Human Activity Recognition Using Object Detection";
  return (
    <div className={styles.articleContainer}>
      <div className={styles.article}>
        <h1 className={styles.title}>{title}</h1>

        <h2 className={styles.subtitle}>Introduction and Application</h2>

        <p className={styles.paragraph}>
        Object detection is a key task in computer vision, focused on identifying and locating objects within digital images. It involves training machines to "see" in a manner similar to humans by recognizing and categorizing objects based on their semantic classes. Object detection addresses the question, "What objects are where?" This technology has broad applications in various industries, including autonomous vehicles, cashier-less retail, security and surveillance, and face detection.
        </p>

        <p className={styles.paragraph}>
        The importance of object detection lies in its ability to help machines understand and interact with their surroundings. I am going to focus on Human Activity Recognition (HAR) using Visual Object Detection presented by S. W. Pienaar and R. Malekian. HAR is crucial as It enables machines to interpret and respond to human movements, enhancing human-computer interaction, surveillance, and automation systems. The final goal is to come up with a way to train a model that has the ability to localize and capture the states of a person (lying down vs standing up) using a Single Shot Detector (SSD) model.
        </p>

        <h2 className={styles.subtitle}>Methods</h2>


        <p className={styles.paragraph}>
        There are two main approaches for object detection with deep learning:
        </p>
        <ol className={styles.orderedList}>
          <li>Use pre-trained object detectors, which can identify common objects like people or vehicles
          without additional training.</li>
          <li>Create a custom detector from scratch or use transfer learning, which allows you to fine-tune
          a pre-trained model for your specific needs. Transfer learning offers faster results compared to training from scratch since the model has already learned from large datasets.</li>
        </ol>

        <p className={styles.paragraph}>
        If you decide to create a custom object detector, the first step is to gather input images. Before applying machine learning techniques, it's essential to preprocess these images. This involves resizing them to meet the model’s input requirements and normalizing pixel values for consistency. Additionally, data augmentation techniques like rotation, flipping, and cropping can be used to enhance dataset diversity and improve the model's ability to generalize.
        </p>

        <p className={styles.paragraph}>
        When provided with a preprocessed input image, the object detection model identifies regions that share features with those defined in the training dataset, recognizing them as the same object. In this sense, object detection is a type of pattern recognition. Rather than recognizing objects directly, the model detects combinations of properties like size, shape, and color, classifying regions based on visual patterns learned from manually annotated training data.
        </p>

        <p className={styles.paragraph}>
        Although different model families utilize distinct architectures, deep learning models for object detection typically follow a similar general structure. They consist of a backbone, neck, and head.
        </p>

        <img className={styles.image} src={image1} alt={title} />
        <p className={styles.paragraph}>
        The backbone is responsible for extracting features from the input image, often utilizing part of a pre-trained classification model. This feature extraction generates multiple feature maps at different resolutions, which are passed to the neck. The neck concatenates these feature maps, preparing them for the next stage. Finally, the architecture passes the combined feature maps to the head, which predicts bounding boxes and classification scores for each set of features.
        </p>
        <p className={styles.paragraph}>
        This process is mainly carried out using one of two approaches: Single-Stage Object Detector and Two-Stage Object Detector.
        </p>
        <p className={styles.paragraph}>
        In a Two-Stage Object Detector, object localization and classification are separated in the head. It first extracts regions of interest, called object proposals, and then performs classification and localization only on these proposals. In contrast, a Single-Stage Object Detector combines these tasks, using the extracted features directly for both classification and bounding box regression. Two-stage detectors generally offer higher localization accuracy, while single-stage detectors are faster.
        </p>
        <img className={styles.image} src={image2} alt={title} />
        <p className={styles.paragraph}>
        There are several machine learning approaches for object detection, but recent advancements have largely focused on convolutional neural networks (CNNs). Among these, R-CNN, YOLO, and SSD are the two most commonly discussed in object detection research.
        </p>
        <p className={styles.paragraph}>
        <strong>R-CNN (Region-Based Convolutional Neural Network)</strong> is a two-stage detector that generates around 2,000 region proposals per image using region proposal methods. These regions are resized to a uniform size and passed through separate networks for feature extraction and classification. Each region is ranked based on its classification confidence, and regions with significant overlap (based on IoU) are discarded in favor of higher-scoring ones. The remaining top-ranked regions form the model's output. R-CNN, however, is computationally expensive and slow. Fast R-CNN and Faster R-CNN are subsequent modifications that streamline the architecture, reducing processing time while improving accuracy.
        </p>
        <img className={styles.image} src={image3} alt={title} />
        <p className={styles.paragraph}>
        <strong>YOLO (You Only Look Once)</strong> is a family of single-stage detectors built on Darknet, an open-source CNN framework. Introduced in 2016, YOLO emphasizes speed, making it ideal for real-time object detection and earning it a reputation as a state-of-the-art detector. Unlike R-CNN, which processes image regions through multiple networks, YOLO uses a single network for both feature extraction and classification. YOLO also predicts fewer bounding boxes—less than 100 per image—compared to R-CNN's 2,000 proposals. While YOLO is faster and produces fewer background false positives, it has a slightly higher localization error. Over time, updates to YOLO have improved both its speed and accuracy.
        </p>
        <img className={styles.image} src={image4} alt={title} />
        <img className={styles.image} src={image5} alt={title} />
        <p className={styles.paragraph}>
        <strong>SSD (Single Shot Multibox Detector)</strong> uses the VGG-16 model pre-trained on ImageNet as its base model for extracting useful image features. SSD makes use of multiple feature maps from different layers of the network. These maps capture different levels of abstraction—lower layers capture finer details while higher layers capture more semantic, high-level information. Unlike YOLO, SSD does not split the image into grids of arbitrary size but predicts offset of predefined anchor boxes (aka default boxes) for every location of the feature map. These boxes act as candidates for detecting objects of different shapes and sizes. Then, SSD checks each of these default boxes to determine if they match an object’s ground truth bounding box. Finally, For each default box, SSD predicts the probability of each object class, and it also predicts the offsets (or adjustments) to the default box so that it can better fit the actual object.
        </p>
        <img className={styles.image} src={image6} alt={title} />
        <p className={styles.paragraph}>
        Back to Human Activity Recognition: After collecting the data, approximately 80% will be used for training the model, while the remaining 20% will be used for testing. Additionally, to further enhance the variability of each image, image augmentation and labeling need to be performed as previously mentioned. The model chosen for this task is SSD (Single Shot Detector). It is a single-shot detector, meaning that it requires only one image to detect multiple objects. After applying transfer learning on an existing model and using new images for training, the model's performance is evaluated on untrained data. The result of the detection on untrained data is as follows:
        </p>
        <img className={styles.image} src={image7} alt={title} />

        <h2 className={styles.subtitle}>Insights</h2>
        <p className={styles.paragraph}>
        To build a Human Activity Recognition (HAR) application that distinguishes between a person lying down and standing up using a Single Shot Detector (SSD) model, I would leverage existing pre-trained deep learning models and frameworks.
        </p>
        <p className={styles.paragraph}>
        I would start by selecting a pre-trained SSD model trained on large datasets like COCO or Pascal VOC, which already include the 'person' class. This provides a solid foundation since the model has learned general features relevant to human detection. A PyTorch implementation of the Single Shot MultiBox Detector can be found <a className={styles.alink} href="https://github.com/amdegroot/ssd.pytorch" target="_blank" rel="noopener noreferrer">here</a>, which includes pre-training on the COCO and VOC datasets. Alternatively, a pre-trained detection model on the COCO 2017 dataset is available <a className={styles.alink} href="https://github.com/tensorflow/models/blob/master/research/object_detection/g3doc/tf2_detection_zoo.md" target="_blank" rel="noopener noreferrer">here</a>. Since the goal is to build a real-time detection system, models like SSD MobileNet are efficient and suitable for deployment on devices with limited computational resources. There are other pre-trained models available on platforms like GitHub or Hugging Face, which also serve as good starting points.
        </p>
        <p className={styles.paragraph}>
        Another potential model choice is YOLO, which is well-suited for real-time object detection. There are several versions of YOLO, such as YOLOv4, YOLOv5, and up to YOLOv9, with pre-trained models available on platforms like Hugging Face and other repositories. This diagram provides a comprehensive explanation of how a YOLO-based model can be used for Human Activity Recognition, not limited to distinguishing between standing up and lying down, but also for detecting other activities.
        </p>
        <img className={styles.image} src={image8} alt={title} />
        <p className={styles.paragraph}>
        To address the specific detection problem, I would need to gather a new dataset of images featuring people in various poses, specifically focusing on lying down and standing up. To ensure robustness, the dataset should include variations in lighting conditions, camera angles, backgrounds, clothing, and body types. Once collected, the images would need to be labeled accordingly. Tools such as LabelImg, CVAT (Computer Vision Annotation Tool), and Labelbox can assist with image labeling, depending on the project's scale. I would also consider applying data augmentation techniques to increase dataset variability and improve model generalization.
        </p>
        <p className={styles.paragraph}>
        Once the dataset is prepared, I would fine-tune the pre-trained SSD model using the collected images, selecting an appropriate loss function and implementing regularization techniques to avoid overfitting. After the training phase, I would evaluate the model using metrics such as Mean Average Precision (mAP), precision, recall, F1-score, and Intersection over Union (IoU) to assess the accuracy of the bounding box predictions.
        </p>

        <h3 className={styles.referencesHeading}>References</h3>
        <ul className={styles.referencesList}>
        <li>
          S. W. Pienaar and R. Malekian, "Human Activity Recognition using Visual Object Detection," 2019 IEEE 2nd Wireless Africa Conference (WAC), Pretoria, South Africa, 2019, pp. 1-5, doi: <a href="https://doi.org/10.1109/AFRICA.2019.8843417" target="_blank" rel="noopener noreferrer">10.1109/AFRICA.2019.8843417</a>.
        </li>
        <li>
          Weng, L. (2018, December 27). Object Detection for Dummies Part 4: Fast Detection Models. Lil'Log. Retrieved from <a href="https://lilianweng.github.io/posts/2018-12-27-object-recognition-part-4/" target="_blank" rel="noopener noreferrer">https://lilianweng.github.io/posts/2018-12-27-object-recognition-part-4/</a>.
        </li>
        <li>
          Thakur, N. (2019). A Detailed Introduction to Two-Stage Object Detectors. Medium. Retrieved from <a href="https://namrata-thakur893.medium.com/a-detailed-introduction-to-two-stage-object-detectors-d4ba0c06b14e" target="_blank" rel="noopener noreferrer">https://namrata-thakur893.medium.com/a-detailed-introduction-to-two-stage-object-detectors-d4ba0c06b14e</a>.
        </li>
        <li>
          MathWorks. (n.d.). What Is Object Detection? Retrieved October 2023, from <a href="https://www.mathworks.com/discovery/object-detection.html" target="_blank" rel="noopener noreferrer">https://www.mathworks.com/discovery/object-detection.html</a>.
        </li>
        <li>
          IBM Cloud Education. (n.d.). Object Detection. Retrieved October 2023, from <a href="https://www.ibm.com/topics/object-detection" target="_blank" rel="noopener noreferrer">https://www.ibm.com/topics/object-detection</a>.
        </li>
        <li>
          Redmon, J., Divvala, S., Girshick, R., & Farhadi, A. (2016). You Only Look Once: Unified, Real-Time Object Detection. In Proceedings of the IEEE Conference on Computer Vision and Pattern Recognition (CVPR) (pp. 779–788). IEEE. <a href="https://doi.org/10.1109/CVPR.2016.91" target="_blank" rel="noopener noreferrer">https://doi.org/10.1109/CVPR.2016.91</a>.
        </li>
        <li>
          Ren, S., He, K., Girshick, R., & Sun, J. (2017). Faster R-CNN: Towards Real-Time Object Detection with Region Proposal Networks. IEEE Transactions on Pattern Analysis and Machine Intelligence, 39(6), 1137–1149. <a href="https://doi.org/10.1109/TPAMI.2016.2577031" target="_blank" rel="noopener noreferrer">https://doi.org/10.1109/TPAMI.2016.2577031</a>.
        </li>
        <li>
          Lin, T.-Y., Dollár, P., Girshick, R., He, K., Hariharan, B., & Belongie, S. (2017). Feature Pyramid Networks for Object Detection. In Proceedings of the IEEE Conference on Computer Vision and Pattern Recognition (CVPR) (pp. 2117–2125). <a href="https://doi.org/10.1109/CVPR.2017.106" target="_blank" rel="noopener noreferrer">https://doi.org/10.1109/CVPR.2017.106</a>.
        </li>
        <li>
          Liu, W., Anguelov, D., Erhan, D., Szegedy, C., Reed, S., Fu, C.-Y., & Berg, A. C. (2016). SSD: Single Shot MultiBox Detector. In European Conference on Computer Vision (ECCV) (pp. 21–37). Springer. <a href="https://doi.org/10.1007/978-3-319-46448-0_2" target="_blank" rel="noopener noreferrer">https://doi.org/10.1007/978-3-319-46448-0_2</a>.
        </li>
        <li>
          Mustafa, Tanveer & Dhavale, Sunita & Kuber, M.. (2020). Performance Analysis of Inception-v2 and Yolov3-Based Human Activity Recognition in Videos. SN Computer Science. 1. <a href="https://doi.org/10.1007/s42979-020-00143-w" target="_blank" rel="noopener noreferrer">https://doi.org/10.1007/s42979-020-00143-w</a>.
        </li>
      </ul>

      </div>
    </div>
  );
};

export default ArticleHumanActivityRecognitionUsingObjectDetection;
