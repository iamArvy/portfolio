import image from "@/assets/images/myimg.jpeg";
import resume from "@/assets/documents/resume.pdf";

export const profile = {
  name: "Oluwaseyi Oke",
  image: "/images/myimg.jpeg",
  role: "Web Developer and Backend Engineer",
  bio: "I'm a Full-Stack Web Developer, Cloud Solutions Architect specializing in AWS cloud-native solutions. I design and build scalable, secure, and high-performance applications, leveraging automation and modern development practices to streamline workflows and optimize efficiency. With a strong DevOps mindset, I focus on reliability, cost optimization, and seamless deployments to deliver robust digital solutions.",
  resume,
  email: "okeoluwaseyimarvellous@gmail.com",
};

export const stack: {
  category: string;
  items: { name: string; tagline: string }[];
}[] = [
  {
    category: "Frontend",
    items: [
      { name: "Nuxt.js", tagline: "Vue meta-framework" },
      { name: "Vue.js", tagline: "Progressive UI framework" },
      { name: "Inertia.js", tagline: "SPA-like monolith bridge" },
      { name: "JavaScript", tagline: "Core language" },
      { name: "TypeScript", tagline: "Typed JavaScript" },
      { name: "Tailwind CSS", tagline: "Utility-first styling" },
      { name: "Shadcn UI", tagline: "Component system" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "NestJS", tagline: "Scalable Node framework" },
      { name: "Laravel", tagline: "PHP backend framework" },
      { name: "PHP", tagline: "Server-side language" },
      { name: "PostgreSQL", tagline: "Relational database" },
      { name: "MySQL", tagline: "Relational database" },
      { name: "MongoDB", tagline: "NoSQL document DB" },
      { name: "Redis", tagline: "Cache & in-memory store" },
    ],
  },
  {
    category: "DevOps & Cloud",
    items: [
      { name: "AWS", tagline: "Cloud platform" },
      { name: "CloudFormation", tagline: "Infrastructure as code" },
      { name: "Terraform", tagline: "Infrastructure as code" },
      { name: "Docker", tagline: "Containerization" },
      { name: "GitHub Actions", tagline: "CI/CD pipelines" },
    ],
  },
];
