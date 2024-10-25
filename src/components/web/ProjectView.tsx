import { title } from "process";
import { Card, Carousel } from "../ui/apple-cards-carousel";
import uniadPhoto from "@/assets/carousel/uniad/dashboard_overview.png";

const data = [
  {
    category: "Web App",
    title: "Tuition Centre Management System",
    src: uniadPhoto,
    content: (
      <div className="dark:text-white">
        <div>--</div>
        <div>--</div>
        <div>--</div>
        <div>--</div>
        <div>--</div>
        <div>--</div>
        <div>--</div>
        <div>--</div>
      </div>
    ),
  },
  {
    category: "S2T",
    title: "Speech to Text",
    src: "",
    content: "",
  },
  {
    category: "Etavolt",
    title: "E-commerce Platform",
    src: "",
    content: "",
  },
];

export function ProjectView() {
  const cards = data.map((project, index) => (
    <Card key={project.src} card={project} index={index} layout={true} />
  ));
  return (
    <div className="w-full h-full  ">
      <Carousel items={cards} />
    </div>
  );
}
