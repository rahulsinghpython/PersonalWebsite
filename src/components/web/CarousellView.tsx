import { Carousel, Image, Typography } from "antd";
import React, { useEffect, useState } from "react";

type CarousellViewProps = {
  name: string;
};

export const CarousellView: React.FC<CarousellViewProps> = (
  props: CarousellViewProps
) => {
  const [imagePaths, setImagePaths] = useState<
    { title: string; src: string }[]
  >([]);

  useEffect(() => {
    let paths: Record<string, () => Promise<unknown>> = {};
    if (props.name === "etavolt") {
      paths = import.meta.glob(
        "/src/assets/carousel/etavolt/*.{png,jpg,jpeg,svg,mp4}"
      );
    } else if (props.name === "s2t") {
      paths = import.meta.glob("/src/assets/carousel/s2t/*.{png,jpg,jpeg,svg}");
    } else if (props.name === "uniad") {
      paths = import.meta.glob(
        "/src/assets/carousel/uniad/*.{png,jpg,jpeg,svg}"
      );
    }

    const loadImages = async () => {
      const entries = await Promise.all(
        Object.entries(paths).map(async ([filePath, importFn]) => {
          const fileName = filePath.split("/").pop() || "";
          const title = getFileName(fileName) || "";
          const module = await importFn();
          const src = (module as { default: string }).default;
          return { title, src };
        })
      );
      setImagePaths(entries);
    };

    loadImages();
  }, [props.name]);

  return (
    <Carousel
      dots
      dotPosition="bottom"
      autoplay
      autoplaySpeed={3000}
      style={{
        maxWidth: "100%",
        maxHeight: "100%",
        width: "20rem",
      }}
    >
      {imagePaths.map((image) => {
        if (image.src.endsWith(".mp4")) {
          return (
            <div>
              <Typography.Title level={4}>{image.title}</Typography.Title>
              <video autoPlay loop muted src={image.src}></video>
            </div>
          );
        }
        return (
          <div>
            <Typography.Title level={4}>{image.title}</Typography.Title>
            <Image
              src={image.src}
              title={image.title}
              style={{
                borderRadius: "0.5rem",
              }}
            ></Image>
          </div>
        );
      })}
    </Carousel>
  );
};

function getFileName(filePath: string) {
  const file_name = filePath.split("/").pop()?.split(".")[0];
  const file_name_split = file_name?.split("_");
  if (file_name_split) {
    file_name_split[0] =
      file_name_split[0].charAt(0).toUpperCase() + file_name_split[0].slice(1);
    return file_name_split.join(" ");
  }
}
