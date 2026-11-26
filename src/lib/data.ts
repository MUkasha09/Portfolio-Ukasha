export interface Project {
    id: number
    title: string
    description: string
    tags: string[]
    category: string
    github?: string
    demo?: string
    featured: boolean
}

export interface Skill {
    name: string
    category: string
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
        tags: ["Chatbot", "NLP", "RAG", "Customer Support"],
        category: "Conversational AI",
        featured: true,
    },
    {
        id: 2,
        title: "AI Mail Handler Agent",
        description: "Built an intelligent email management agent for automated classification, routing, prioritization, and response generation.",
        tags: ["Automation", "Email", "ML", "NLP"],
        category: "Automation",
        featured: true,
    },
    {
        id: 3,
        title: "Elliott Wave Analysis AI System",
        description: "Developed an AI system for swing detection, Elliott Wave validation, chart annotation, and trade setup generation.",
        tags: ["Finance", "AI", "Trading", "Time Series"],
        category: "Financial AI",
        featured: true,
    },
    {
        id: 4,
        title: "RAG-Based Knowledge Assistant",
        description: "Built a Retrieval-Augmented Generation chatbot using LLMs and vector databases for accurate document-based question answering.",
        tags: ["RAG", "LLM", "Vector DB", "Knowledge"],
        category: "Conversational AI",
        featured: true,
    },
    {
        id: 5,
        title: "Business Process Automation Platform (n8n)",
        description: "Designed and implemented multiple automation workflows to eliminate repetitive tasks and improve operational efficiency using n8n.",
        tags: ["n8n", "Automation", "Workflow", "Integration"],
        category: "Automation",
        featured: false,
    },
    {
        id: 6,
        title: "Document Intelligence & Data Extraction System",
        description: "Automated extraction, processing, and analysis of information from PDFs, reports, and business documents.",
        tags: ["OCR", "Data Extraction", "Automation", "NLP"],
        category: "Document AI",
        featured: false,
    },
    {
        id: 7,
        title: "Multi-Agent AI Workflow System",
        description: "Developed AI agents that collaborate to perform complex tasks, data processing, and decision support.",
        tags: ["Multi-Agent", "AI", "Collaboration", "Workflow"],
        category: "AI Systems",
        featured: false,
    },
    {
        id: 8,
        title: "Enterprise API Integration Solutions",
        description: "Created automated integrations between business applications, databases, CRM systems, and third-party services.",
        tags: ["API", "Integration", "Enterprise", "Automation"],
        category: "Integration",
        featured: false,
    },
    {
        id: 9,
        title: "Plant Disease Detection App",
        description: "Built a web-based plant disease detection app to identify and diagnose plant health issues using computer vision.",
        tags: ["Computer Vision", "Agriculture", "Web App", "Deep Learning"],
        category: "Computer Vision",
        featured: false,
    },
    {
        id: 10,
        title: "AI-Powered Reporting and Notification System",
        description: "Automated report generation, monitoring, alerts, and stakeholder notifications with AI-driven insights.",
        tags: ["Reporting", "Notifications", "AI", "Monitoring"],
        category: "Automation",
        featured: false,
    },
    {
        id: 11,
        title: "Abnormal Meter Detection (MEPCO)",
        description: "Developed a CNN and YOLO-based system to detect fake meter reading images and identify anomalies for MEPCO.",
        tags: ["CNN", "YOLO", "Anomaly Detection", "Computer Vision"],
        category: "Computer Vision",
        featured: true,
    },
    {
        id: 12,
        title: "LLM-Based Conversational AI Applications",
        description: "Developed custom AI assistants using GPT models for business support, knowledge management, and workflow automation.",
        tags: ["LLM", "GPT", "Conversational AI", "Business"],
        category: "Conversational AI",
        featured: true,
    },
]

export const skills: Skill[] = [
    // Machine Learning & AI
    { name: "Python", category: "ML & AI" },
    { name: "TensorFlow", category: "ML & AI" },
    { name: "PyTorch", category: "ML & AI" },
    { name: "Scikit-learn", category: "ML & AI" },
    { name: "Keras", category: "ML & AI" },

    // Deep Learning
    { name: "CNN", category: "Deep Learning" },
    { name: "RNN/LSTM", category: "Deep Learning" },
    { name: "Transformers", category: "Deep Learning" },
    { name: "GANs", category: "Deep Learning" },
    { name: "Transfer Learning", category: "Deep Learning" },

    // Data Science
    { name: "Pandas", category: "Data Science" },
    { name: "NumPy", category: "Data Science" },
    { name: "Matplotlib", category: "Data Science" },
    { name: "SQL", category: "Data Science" },
    { name: "Apache Spark", category: "Data Science" },

    // MLOps & Tools
    { name: "Docker", category: "MLOps" },
    { name: "Git", category: "MLOps" },
    { name: "AWS", category: "MLOps" },
    { name: "MLflow", category: "MLOps" },
    { name: "Kubernetes", category: "MLOps" },

    // AI Chatbots & Agents
    { name: "Conversational AI", category: "AI Chatbots & Agents" },
    { name: "Chatbot Development", category: "AI Chatbots & Agents" },
    { name: "Dialogue Systems", category: "AI Chatbots & Agents" },
    { name: "Prompt Engineering", category: "AI Chatbots & Agents" },
    { name: "RAG", category: "AI Chatbots & Agents" },
    { name: "LLM Integration", category: "AI Chatbots & Agents" },
    { name: "Multi-Agent Systems", category: "AI Chatbots & Agents" },
    { name: "Agent Orchestration", category: "AI Chatbots & Agents" },
]

export const experiences: Experience[] = [
    {
        title: "Computer Engineer",
        company: "MEPCO – Multan, Pakistan",
        period: "Apr 2026 — Present",
        description: "Working on AI and automation solutions for energy utilities, including customer support chatbots and anomaly detection systems for meter readings.",
    },
    {
        title: "AI Engineer",
        company: "SKR Engineering Solution – Australia",
        period: "Jan 2026 — Present",
        description: "Built AI-driven systems for automation, data processing, and decision support, including multi-agent workflows and integration solutions.",
    },
    {
        title: "NLP Engineer",
        company: "Elevvo – Egypt",
        period: "Sep 2025 — Jan 2026",
        description: "Designed and implemented NLP pipelines and intelligent assistants for customer-facing applications, with a focus on text classification, intent extraction, and language understanding.",
    },
]

export const socialLinks: SocialLink[] = [
    { name: "GitHub", url: "https://github.com/mukasha09", icon: "github" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/mukasha09/", icon: "linkedin" },
    { name: "Email", url: "mailto:1718ukashae2@gmail.com", icon: "mail" },
]

// Derived from the projects so every filter matches at least one project.
export const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))]

// Put your resume at public/resume.pdf, then set this to "/resume.pdf".
// While it is null, no download button is shown (a dead button is worse than none).
export const resumeUrl: string | null = null
