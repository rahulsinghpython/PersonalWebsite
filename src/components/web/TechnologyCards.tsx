import React, { useEffect, useState } from "react";
import { FocusCards } from "../ui/focus-cards";

const technologyImages = import.meta.glob(
  "/src/assets/technologies/*.{png,jpg,jpeg,svg}"
);

const capitalizeFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const TechnologyCards: React.FC = () => {
  const [skills, setSkills] = useState<{ title: string; src: string }[]>([]);
  useEffect(() => {
    const loadImages = async () => {
      const entries = await Promise.all(
        Object.entries(technologyImages).map(async ([filePath, importFn]) => {
          const fileName = filePath.split("/").pop() || "";
          const title = capitalizeFirstLetter(fileName.replace(/\.\w+$/, ""));
          const module = await importFn();
          const src = (module as { default: string }).default;
          return { title, src };
        })
      );
      setSkills(entries);
    };

    loadImages();
  }, []);

  return (
    <div
      style={
        {
          // width: "20%",
        }
      }
    >
      <FocusCards cards={skills}></FocusCards>
    </div>
  );
};
