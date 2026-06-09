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
        title: "MEPCO AI Customer Support Chatbot",
        description: "Developed an AI-powered chatbot for customer assistance, information retrieval, and support automation for MEPCO.",
        image: "https://images.unsplash.com/photo-1581091012184-7f1f2cdbc73c?w=800&h=600&fit=crop",
        tags: ["Chatbot", "NLP", "RAG", "Customer Support"],
        category: "Conversational AI",
        github: "https://github.com",
        demo: "https://demo.com",
        featured: true,
    },
    {
        id: 2,
        title: "AI Mail Handler Agent",
        description: "Built an intelligent email management agent for automated classification, routing, prioritization, and response generation.",
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop",
        tags: ["Automation", "Email", "ML", "NLP"],
        category: "Automation",
        github: "https://github.com",
        demo: "https://demo.com",
        featured: true,
    },
    {
        id: 3,
        title: "Elliott Wave Analysis AI System",
        description: "Developed an AI system for swing detection, Elliott Wave validation, chart annotation, and trade setup generation.",
        image: "https://images.unsplash.com/photo-1556155092-490a1ba16284?w=800&h=600&fit=crop",
        tags: ["Finance", "AI", "Trading", "Time Series"],
        category: "Financial AI",
        github: "https://github.com",
        demo: "https://demo.com",
        featured: true,
    },
    {
        id: 4,
        title: "RAG-Based Knowledge Assistant",
        description: "Built a Retrieval-Augmented Generation chatbot using LLMs and vector databases for accurate document-based question answering.",
        image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=600&fit=crop",
        tags: ["RAG", "LLM", "Vector DB", "Knowledge"],
        category: "Conversational AI",
        github: "https://github.com",
        demo: "https://demo.com",
        featured: true,
    },
    {
        id: 5,
        title: "Business Process Automation Platform (n8n)",
        description: "Designed and implemented multiple automation workflows to eliminate repetitive tasks and improve operational efficiency using n8n.",
        image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=600&fit=crop",
        tags: ["n8n", "Automation", "Workflow", "Integration"],
        category: "Automation",
        github: "https://github.com",
        demo: "https://demo.com",
        featured: false,
    },
    {
        id: 6,
        title: "Document Intelligence & Data Extraction System",
        description: "Automated extraction, processing, and analysis of information from PDFs, reports, and business documents.",
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=600&fit=crop",
        tags: ["OCR", "Data Extraction", "Automation", "NLP"],
        category: "Document AI",
        github: "https://github.com",
        demo: "https://demo.com",
        featured: false,
    },
    {
        id: 7,
        title: "Multi-Agent AI Workflow System",
        description: "Developed AI agents that collaborate to perform complex tasks, data processing, and decision support.",
        image: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?w=800&h=600&fit=crop",
        tags: ["Multi-Agent", "AI", "Collaboration", "Workflow"],
        category: "AI Systems",
        github: "https://github.com",
        demo: "https://demo.com",
        featured: false,
    },
    {
        id: 8,
        title: "Enterprise API Integration Solutions",
        description: "Created automated integrations between business applications, databases, CRM systems, and third-party services.",
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop",
        tags: ["API", "Integration", "Enterprise", "Automation"],
        category: "Integration",
        github: "https://github.com",
        demo: "https://demo.com",
        featured: false,
    },
    {
        id: 9,
        title: "Plant Disease Detection App",
        description: "Built a web-based plant disease detection app to identify and diagnose plant health issues using computer vision.",
        image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=800&h=600&fit=crop",
        tags: ["Computer Vision", "Agriculture", "Web App", "Deep Learning"],
        category: "Computer Vision",
        github: "https://github.com",
        demo: "https://demo.com",
        featured: false,
    },
    {
        id: 10,
        title: "AI-Powered Reporting and Notification System",
        description: "Automated report generation, monitoring, alerts, and stakeholder notifications with AI-driven insights.",
        image: "https://images.unsplash.com/photo-1531497865140-7f1ea2fb271b?w=800&h=600&fit=crop",
        tags: ["Reporting", "Notifications", "AI", "Monitoring"],
        category: "Automation",
        github: "https://github.com",
        demo: "https://demo.com",
        featured: false,
    },
    {
        id: 11,
        title: "Abnormal Meter Detection (MEPCO)",
        description: "Developed a CNN and YOLO-based system to detect fake meter reading images and identify anomalies for MEPCO.",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop",
        tags: ["CNN", "YOLO", "Anomaly Detection", "Computer Vision"],
        category: "Computer Vision",
        github: "https://github.com",
        featured: true,
    },
    {
        id: 12,
        title: "LLM-Based Conversational AI Applications",
        description: "Developed custom AI assistants using GPT models for business support, knowledge management, and workflow automation.",
        image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=800&h=600&fit=crop",
        tags: ["LLM", "GPT", "Conversational AI", "Business"],
        category: "Conversational AI",
        github: "https://github.com",
        demo: "https://demo.com",
        featured: true,
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

    // AI Chatbots & Agents
    { name: "Conversational AI", category: "AI Chatbots & Agents", level: 90 },
    { name: "Chatbot Development", category: "AI Chatbots & Agents", level: 90 },
    { name: "Dialogue Systems", category: "AI Chatbots & Agents", level: 85 },
    { name: "Prompt Engineering", category: "AI Chatbots & Agents", level: 85 },
    { name: "RAG", category: "AI Chatbots & Agents", level: 85 },
    { name: "LLM Integration", category: "AI Chatbots & Agents", level: 85 },
    { name: "Multi-Agent Systems", category: "AI Chatbots & Agents", level: 80 },
    { name: "Agent Orchestration", category: "AI Chatbots & Agents", level: 80 },
]

export const experiences: Experience[] = [
    {
        title: "Computer Engineer",
        company: "MEPCO – Multan, Pakistan",
        period: "2026/04/20 - Current",
        description: "Working on AI and automation solutions for energy utilities, including customer support chatbots and anomaly detection systems for meter readings.",
    },
    {
        title: "NLP Engineer",
        company: "Elevvo – Egypt",
        period: "2024 - 2026",
        description: "Designed and implemented NLP pipelines and intelligent assistants for customer-facing applications, with a focus on text classification, intent extraction, and language understanding.",
    },
    {
        title: "AI Engineer",
        company: "SKR Engineering Solution – Australia",
        period: "2022 - 2024",
        description: "Built AI-driven systems for automation, data processing, and decision support, including multi-agent workflows and integration solutions.",
    },
]

export const socialLinks: SocialLink[] = [
    { name: "GitHub", url: "https://github.com/mukasha09", icon: "github" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/mukasha09/", icon: "linkedin" },
    { name: "Twitter", url: "https://twitter.com", icon: "twitter" },
    { name: "Email", url: "mailto:1718ukashae2@gmail.com", icon: "mail" },
]

export const categories = ["All", "Computer Vision", "NLP", "Data Science", "ML Systems"]
