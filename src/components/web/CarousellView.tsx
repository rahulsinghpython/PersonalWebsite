import { Carousel, Image, Typography } from "antd";
// import path from "path";
import React, { useEffect, useState } from "react";

type CarousellViewProps = {
  name: string;
};

export const CarousellView: React.FC<CarousellViewProps> = (
  props: CarousellViewProps
) => {
  const [imagePaths, setImagePaths] = useState<
    Record<string, () => Promise<unknown>>
  >({});

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
    setImagePaths(paths);
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
      {Object.entries(imagePaths).map(([filePath]) => {
        if (filePath.endsWith(".mp4")) {
          // console.log(filePath);
          return (
            <div>
              <Typography.Title level={4}>
                {getFileName(filePath)}
              </Typography.Title>
              <video autoPlay loop muted src={filePath}></video>
            </div>
          );
        }
        return (
          <div>
            <Typography.Title level={4}>
              {getFileName(filePath)}
            </Typography.Title>
            <Image
              src={filePath}
              title={getFileName(filePath)}
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
  console.log(filePath.split("/").pop()?.split(".")[0]);
  const file_name = filePath.split("/").pop()?.split(".")[0];
  const file_name_split = file_name?.split("_");
  if (file_name_split) {
    file_name_split[0] =
      file_name_split[0].charAt(0).toUpperCase() + file_name_split[0].slice(1);
    return file_name_split.join(" ");
  }

  //   return filePath.split("/").pop()?.split(".")[0] || "";
}
