export interface Project {
    id: number
    title: string
    description: string
    image: string
    tags: string[]
    category: string
    github?: string
    demo?: string
    featured: boolean
}

export interface Skill {
    name: string
    category: string
    level: number
}

export interface Experience {
    title: string
    company: string
    period: string
    description: string
}

export interface SocialLink {
    name: string
    url: string
    icon: string
}

export const projects: Project[] = [
    {
        id: 1,
        title: "Image Classification System",
        description: "Deep learning model for multi-class image classification using CNN architecture. Achieved 95% accuracy on test dataset with data augmentation and transfer learning techniques.",
        image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=600&fit=crop",
        tags: ["Python", "TensorFlow", "Keras", "CNN"],
        category: "Computer Vision",
        github: "https://github.com",
        demo: "https://demo.com",
        featured: true,
    },
    {
        id: 2,
        title: "NLP Sentiment Analysis",
        description: "Natural language processing model for sentiment analysis on customer reviews. Implemented using BERT and achieved state-of-the-art results on multiple datasets.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
        tags: ["Python", "PyTorch", "BERT", "Transformers"],
        category: "NLP",
        github: "https://github.com",
        demo: "https://demo.com",
        featured: true,
    },
    {
        id: 3,
        title: "Predictive Analytics Dashboard",
        description: "End-to-end ML pipeline for sales forecasting with interactive dashboard. Deployed using Docker and AWS with automated model retraining.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
        tags: ["Python", "Scikit-learn", "Docker", "AWS"],
        category: "Data Science",
        github: "https://github.com",
        demo: "https://demo.com",
        featured: false,
    },
    {
        id: 4,
        title: "Object Detection System",
        description: "Real-time object detection using YOLO architecture for autonomous vehicle applications. Optimized for edge deployment with TensorRT.",
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop",
        tags: ["Python", "YOLO", "OpenCV", "TensorRT"],
        category: "Computer Vision",
        github: "https://github.com",
        featured: true,
    },
    {
        id: 5,
        title: "Recommendation Engine",
        description: "Collaborative filtering recommendation system for e-commerce platform. Handles millions of users with matrix factorization and deep learning approaches.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
        tags: ["Python", "TensorFlow", "Spark", "Redis"],
        category: "ML Systems",
        github: "https://github.com",
        demo: "https://demo.com",
        featured: true,
    },
    {
        id: 6,
        title: "Time Series Forecasting",
        description: "LSTM-based model for stock price prediction and anomaly detection. Implemented with feature engineering and ensemble methods for robust predictions.",
        image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=600&fit=crop",
        tags: ["Python", "LSTM", "Pandas", "NumPy"],
        category: "Data Science",
        github: "https://github.com",
        featured: false,
    },
]

export const skills: Skill[] = [
    // Machine Learning & AI
    { name: "Python", category: "ML & AI", level: 95 },
    { name: "TensorFlow", category: "ML & AI", level: 90 },
    { name: "PyTorch", category: "ML & AI", level: 90 },
    { name: "Scikit-learn", category: "ML & AI", level: 95 },
    { name: "Keras", category: "ML & AI", level: 85 },

    // Deep Learning
    { name: "CNN", category: "Deep Learning", level: 90 },
    { name: "RNN/LSTM", category: "Deep Learning", level: 85 },
    { name: "Transformers", category: "Deep Learning", level: 80 },
    { name: "GANs", category: "Deep Learning", level: 75 },
    { name: "Transfer Learning", category: "Deep Learning", level: 85 },

    // Data Science
    { name: "Pandas", category: "Data Science", level: 95 },
    { name: "NumPy", category: "Data Science", level: 95 },
    { name: "Matplotlib", category: "Data Science", level: 90 },
    { name: "SQL", category: "Data Science", level: 85 },
    { name: "Apache Spark", category: "Data Science", level: 75 },

    // MLOps & Tools
    { name: "Docker", category: "MLOps", level: 85 },
    { name: "Git", category: "MLOps", level: 90 },
    { name: "AWS", category: "MLOps", level: 80 },
    { name: "MLflow", category: "MLOps", level: 75 },
    { name: "Kubernetes", category: "MLOps", level: 70 },
]

export const experiences: Experience[] = [
    {
        title: "Senior Machine Learning Engineer",
        company: "AI Tech Solutions",
        period: "2022 - Present",
        description: "Leading ML initiatives and developing production-ready models for computer vision and NLP applications. Architecting scalable ML pipelines and mentoring junior engineers in best practices.",
    },
    {
        title: "Machine Learning Engineer",
        company: "Data Analytics Corp",
        period: "2020 - 2022",
        description: "Developed and deployed multiple ML models for predictive analytics and recommendation systems. Collaborated with cross-functional teams to integrate ML solutions into production environments.",
    },
    {
        title: "Data Scientist",
        company: "Innovation Labs",
        period: "2018 - 2020",
        description: "Built statistical models and performed data analysis to drive business insights. Implemented end-to-end ML workflows from data collection to model deployment.",
    },
]

export const socialLinks: SocialLink[] = [
    { name: "GitHub", url: "https://github.com/mukasha09", icon: "github" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/mukasha09/", icon: "linkedin" },
    { name: "Twitter", url: "https://twitter.com", icon: "twitter" },
    { name: "Email", url: "mailto:1718ukashae2@gmail.com", icon: "mail" },
]

export const categories = ["All", "Computer Vision", "NLP", "Data Science", "ML Systems"]
