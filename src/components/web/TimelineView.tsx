import { Card, Divider, Typography } from "antd";
import { Timeline } from "../ui/timeline";

export const TimelineView: React.FC = () => {
  const data = [
    {
      title: "Uniad",
      name: "uniad",
      logo: "https://www.uniad.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fblue.400e6488.png&w=3840&q=75",
      dates: "Aug 2024 - Present",
      position: "Lead Software Engineer",
      pointers: [
        `Developed a Enterprise Solution for tuition centres`,
        `Led a team of 5 developers to deliver a scalable and secure platform for 1000+ users`,
        `Implemented a CI/CD pipeline to automate deployment and testing processes`,
        `RDMS design and implementation for the platform`,
      ],
      images: true,
    },
    {
      title: "Etavolt",
      name: "etavolt",
      logo: "https://etavolt.com/wp-content/uploads/2023/02/etalogonew-2-768x241-1.png",
      dates: "Aug 2023 - Jun 2024",
      position: "Software Engineer",
      pointers: [
        `Led full stack development of a customer acquisition platform that increased efficiency by 150% and transformed the company's product offerings.`,
        `Completed 2 successful software development cycles with React, 
        ThreeJS, and Python, resulting in a 3D modelling software for mesh using point cloud and LiDAR data.`,
        `Delivered technical presentations to clients, investors, and stakeholders, showcasing our technologies`,
      ],
      images: true,
    },
    {
      title: "Software & Simulation Techologies (S2T)",
      name: "s2t",
      logo: "https://www.s2t.ai/images/svg/s2t-logo.svg",
      dates: "Jun 2021 - Jun 2023",
      position: "Data Engineer, Jr. Team Lead",
      pointers: [
        `Designed and developed scalable microservices architecture using Python, Docker,
 and Kubernetes, increasing system uptime by 200% and reducing latency by 50%.`,
        ` Built high-availability applications with containerization and orchestration tools,
 ensuring 99.9% uptime and zero downtime deployments.`,
        `Developed high-performance in-house APIs using Flask and FastAPI, handling over
 10,000 requests per second.`,
        `Migrated and optimized C++ legacy codes, achieving a 300% performance
 improvement with Python.`,
        ` Implemented cloud services using Azure Web Services and AWS, including
 serverless computing, storage, and database services`,
        ` Led API development team and presented software solutions at international
 business trips.`,
      ],
    },
  ];
  return (
    <Card
      style={{
        borderRadius: "22px",
      }}
    >
      <Timeline data={data}></Timeline>
    </Card>
  );
};
