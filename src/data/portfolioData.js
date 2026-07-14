export const portfolioData = {
  personalInfo: {
    name: "Dhaneshwari Nerti",
    title: "Cloud & DevOps Engineer",
    tagline: "Engineering Graduate passionate about AWS Cloud, DevOps, Infrastructure Automation, Linux, Docker, and Kubernetes.",
    resumeUrl: "/assets/resume.pdf", 
    profilePhotoUrl: "/assets/profile.jpeg",
    socials: {
      github: "https://github.com/daneshwarinerti",
      linkedin: "https://www.linkedin.com/in/dhaneshwari-nerti",
      email: "mailto:daneshwarinerti0604@gmail.com",
      emailAddress: "daneshwarinerti0604@gmail.com",
      phone: "9741750604",
      phoneDial: "tel:9741750604"
    }
  },
  about: {
    educationBrief: "Recently completed my Bachelor of Engineering in Information Science from Basaveshwara Engineering College (Graduated in 2026).",
    passions: [
      "AWS Cloud & Core Services",
      "DevOps Tooling & Automation Pipelines",
      "Infrastructure as Code (IaC)",
      "Linux Systems Administration",
      "Containerization & Orchestration (Docker & Kubernetes)"
    ],
    philosophy: "Instead of only completing certifications, I actively enjoy building real-world cloud projects to strengthen my practical skills. I am actively looking for opportunities as a Cloud Engineer or DevOps Engineer where I can continue learning while contributing to production environments."
  },
  skills: [
    {
      id: "skill-1",
      title: "CI/CD Pipelines",
      description: "Automated build, test, and deployment workflows using Jenkins, GitHub Actions, and more.",
      type: "jenkins"
    },
    {
      id: "skill-2",
      title: "Infrastructure as Code",
      description: "Terraform and CloudFormation for provisioning and managing cloud resources.",
      type: "terraform"
    },
    {
      id: "skill-3",
      title: "Containerization",
      description: "Docker and Kubernetes for container orchestration and microservices architecture.",
      type: "docker"
    },
    {
      id: "skill-4",
      title: "Cloud & AWS",
      description: "Hands-on experience with AWS services like EC2, S3, IAM, RDS, and ECS for cloud-based deployments.",
      type: "aws"
    },
    {
      id: "skill-5",
      title: "Monitoring & Logging",
      description: "Using tools like Prometheus, Grafana, and AWS CloudWatch to monitor system performance and troubleshoot issues effectively.",
      type: "monitoring"
    }
  ],
  projects: [
    {
      id: "project-1",
      title: "AWS Infrastructure Automation using CloudFormation",
      description: "Designed and deployed a complete AWS infrastructure using CloudFormation to achieve a highly available deployment environment.",
      features: [
        "Custom VPC with Public & Private Subnets mapping",
        "Internet Gateway, NAT Gateways & custom Route Tables",
        "Auto Scaling Group (ASG) configuration for elastic EC2 instances",
        "Application Load Balancer (ALB) routing and secure Security Groups"
      ],
      technologies: ["AWS", "CloudFormation", "EC2", "VPC", "ALB", "Auto Scaling"],
      imageUrl: "/assets/projects/aws-automation.png",
      githubUrl: "https://github.com/daneshwarinerti/cloudformation-project",
      liveUrl: "https://github.com/daneshwarinerti/cloudformation-project"
    },
    {
      id: "project-2",
      title: "Automated Image Processing Pipeline",
      description: "Built a serverless, event-driven image processing application automating file processing on upload.",
      features: [
        "Upload images directly to an Amazon S3 source bucket",
        "AWS Lambda execution triggered automatically by upload event",
        "Validation of image type and file name sanitization",
        "Copying processed images to a destination bucket and logging stats to CloudWatch"
      ],
      technologies: ["AWS Lambda", "Amazon S3", "CloudWatch", "IAM", "Python"],
      imageUrl: "/assets/projects/image-pipeline.png",
      githubUrl: "https://github.com/daneshwarinerti/aws-image-processing",
      liveUrl: "https://github.com/daneshwarinerti/aws-image-processing"
    },
    {
      id: "project-3",
      title: "Containerized Application Deployment using Amazon ECS",
      description: "Dockerized a sample microservice and deployed it onto Amazon Elastic Container Service.",
      features: [
        "Docker multi-stage image builds push configurations",
        "Pushed image storage inside Amazon ECR repositories",
        "Wrote ECS Task Definitions and configured container tasks",
        "ECS Service orchestration, Load Balancer rules, and rolling deployments"
      ],
      technologies: ["Docker", "Amazon ECS", "Amazon ECR", "AWS"],
      imageUrl: "/assets/projects/ecs-deployment.png",
      githubUrl: "https://github.com/daneshwarinerti/ecs-project",
      liveUrl: "https://github.com/daneshwarinerti/ecs-project"
    },
    {
      id: "project-4",
      title: "Attendance Management System",
      description: "Developed a complete web-based Student Attendance Management System running inside docker containers.",
      features: [
        "Student attendance tracking and admin dashboards",
        "Role-based secure authentication model",
        "Full CRUD operations powered by a MySQL database storage engine",
        "Docker container deployments and multi-container coordination"
      ],
      technologies: ["PHP", "MySQL", "Docker"],
      imageUrl: "/assets/projects/attendance-system.png",
      githubUrl: "https://github.com/daneshwarinerti/attendance-management",
      liveUrl: "https://github.com/daneshwarinerti/attendance-management"
    }
  ],
  experience: [
    {
      role: "Intern",
      company: "Infobell IT Solutions Pvt. Ltd.",
      companyLogo: "/assets/infobell-logo.png",
      location: "Bengaluru, Karnataka, India",
      duration: "February 2026 – May 2026 (4 Months)",
      description: "Worked as a Cloud & DevOps Intern, gaining practical experience in AWS cloud services, Linux administration, networking, infrastructure automation, and deployment workflows. Collaborated on real-world infrastructure tasks while learning industry best practices for cloud operations and DevOps.",
      highlights: [
        "Designed and configured AWS networking components including VPC, Public & Private Subnets, Route Tables, Internet Gateway, NAT Gateway, Security Groups, and Network ACLs.",
        "Worked with AWS services including EC2, S3, IAM, CloudWatch, Lambda, ECS, ECR, and CloudFormation.",
        "Gained hands-on experience in Linux system administration, shell scripting, and user management.",
        "Built and deployed containerized applications using Docker and Amazon ECS.",
        "Learned Infrastructure as Code (IaC) concepts using AWS CloudFormation.",
        "Configured monitoring and logging using Amazon CloudWatch.",
        "Worked with Git and GitHub for version control and project collaboration.",
        "Strengthened networking knowledge including TCP/IP, routing, subnetting, DNS, and OSI model."
      ]
    }
  ],
  education: {
    degree: "Bachelor of Engineering",
    major: "Information Science",
    college: "Basaveshwara Engineering College, Bagalkot",
    duration: "Graduated in 2026",
    cgpa: "8.4 / 10.0" 
  },
  workshops: [
    {
      name: "AWS Cloud Workshop",
      issuer: "Algo Tutor",
      duration: "12 Days",
      description: "Completed a 12-day hands-on AWS workshop covering core cloud concepts and practical implementation using AWS services."
    }
  ]
};
