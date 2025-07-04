export interface Event {
    id: string;
    title: string;
    date: string;
    location: string;
    description: string;
    fullDetails: string;
}

export const events: Event[] = [
    {
        id: "1",
        title: "React Conf 2025",
        date: "2025-08-20",
        location: "Bangalore",
        description: "A React conference by the community.",
        fullDetails:
            "React Conf 2025 is a must-attend for frontend developers. Hear from core contributors, explore cutting-edge features, and attend advanced workshops. The event includes community networking sessions and hackathons. It's the perfect opportunity to stay updated with the React ecosystem.",
    },
    {
        id: "2",
        title: "Next.js Conf",
        date: "2025-09-10",
        location: "Noida",
        description: "The latest on Next.js, Vercel, and fullstack.",
        fullDetails:
            "This conference focuses on building production-grade fullstack apps using Next.js. You'll get to interact with the Vercel team, learn about ISR, App Router, and new features in Next.js 15. Networking, code labs, and live demos await all developers.",
    },
    {
        id: "3",
        title: "JavaScript Conf",
        date: "2025-10-10",
        location: "Bangalore",
        description: "The latest on JavaScript, its frameworks and libraries.",
        fullDetails:
            "Join top JS engineers, framework authors, and library maintainers to deep-dive into JavaScript's future. Topics include ES2025, modern patterns, and meta-frameworks. There will also be panel discussions and lightning talks from community leaders.",
    },
    {
        id: "4",
        title: "DevOps India Summit",
        date: "2025-11-05",
        location: "Hyderabad",
        description: "India's largest DevOps event for engineers and SREs.",
        fullDetails:
            "Dive into the world of CI/CD, infrastructure as code, observability, and platform engineering. The summit features hands-on Kubernetes and GitOps workshops. Connect with industry experts from top Indian startups and global enterprises.",
    },
    {
        id: "5",
        title: "AI & ML Expo",
        date: "2025-12-01",
        location: "Mumbai",
        description: "Explore the latest advancements in AI and ML.",
        fullDetails:
            "This expo covers generative AI, MLOps, computer vision, and natural language processing. Attend keynotes from researchers and developers at the forefront of AI innovation. Don’t miss out on live model deployments and use case showcases.",
    },
    {
        id: "6",
        title: "CloudNative India",
        date: "2026-01-15",
        location: "Delhi",
        description: "A conference on cloud-native tech and tooling.",
        fullDetails:
            "Kubernetes, container orchestration, microservices, and security are the focus here. The event will include case studies from Indian SaaS companies using cloud-native at scale. Participate in lightning talks and tool demos by CNCF contributors.",
    },
    {
        id: "7",
        title: "Tech Leadership Summit",
        date: "2026-02-22",
        location: "Delhi",
        description: "Where engineering leaders and architects meet.",
        fullDetails:
            "Designed for senior engineers and tech leads, this summit covers scaling teams, technical decision-making, and software architecture. It features talks from CTOs and roundtable discussions about career paths, hiring, and culture building.",
    },
    {
        id: "8",
        title: "Open Source India",
        date: "2026-03-12",
        location: "Mumbai",
        description: "Celebrating the open-source community in India.",
        fullDetails:
            "This event showcases open-source projects, contributors, and maintainers from all over India. Learn how to start contributing, maintain a library, and scale an open-source project. Includes community-driven workshops and contribution sprints.",
    },
    {
        id: "9",
        title: "Mobile Dev Conf",
        date: "2026-04-05",
        location: "Noida",
        description: "Latest in mobile app development for Android/iOS.",
        fullDetails:
            "Covering React Native, Flutter, Swift, and Kotlin, this conference brings together top mobile engineers. Sessions include performance optimization, cross-platform trade-offs, and publishing strategies. Great for both beginners and seasoned developers.",
    },
];
  