"use client";
import { Divider, Flex, Image, List, Tag, Typography } from "antd";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { BackgroundGradient } from "./background-gradient";
import { CarousellView } from "../web/CarousellView";

interface TimelineEntry {
  title: string;
  name: string;
  content?: React.ReactNode;
  logo?: string;
  dates: string;
  position: string;
  pointers: string[];
  images?: boolean;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  console.log(data[0].images);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <BackgroundGradient className="rounded-[22px]  bg-slate-950 dark:bg-zinc-900">
      <div
        className="w-full font-sans md:px-8"
        style={{
          background: "rgb(21 16 48 / var(--tw-bg-opacity))",
          borderRadius: "1rem",
        }}
        ref={containerRef}
      >
        <div
          className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10 "
          style={{
            borderRadius: "1rem",
          }}
        >
          <h2 className="text-lg md:text-4xl mb-4 text-black dark:text-white ">
            Work Experience
          </h2>
          <h2>Singaporean</h2>
        </div>

        <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex justify-start pt-8 md:pt-8 md:gap-2"
            >
              <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                  <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
                </div>

                <Flex vertical>
                  <Divider />
                  <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-neutral-500 dark:text-neutral-500 ">
                    {/* {item.title} */}

                    {item.logo ? (
                      <div
                        style={{
                          padding: "2rem",
                          marginRight: "4rem",
                        }}
                      >
                        <Image src={item.logo} preview={false} />
                      </div>
                    ) : (
                      item.title
                    )}
                  </h3>
                  <Typography.Text style={{}}>{item.dates}</Typography.Text>
                  <Typography.Text type="success" style={{}}>
                    {item.position}
                  </Typography.Text>
                  <Divider dashed style={{}}>
                    <Typography.Title level={5}>Showcase</Typography.Title>
                  </Divider>
                  {item.images && (
                    <div
                      style={{
                        // height: "20rem",
                        // scale: 0.5,
                        paddingLeft: "5rem",
                      }}
                    >
                      <CarousellView
                        name={item.name.toLowerCase()}
                      ></CarousellView>
                    </div>
                  )}
                </Flex>
              </div>

              <div className="relative pl-20 pr-4 md:pl-4 w-full">
                <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
                  {item.title}
                </h3>
                {/* {item.content}{" "} */}
                <List
                  size="small"
                  dataSource={item.pointers}
                  renderItem={(item) => (
                    <div>
                      <Divider></Divider>
                      <List.Item
                        style={{
                          padding: "0.1rem",
                          justifyContent: "center",
                        }}
                      >
                        <Typography.Paragraph
                          className="xs:text-xs sm:text-sm md:text-md lg:text-lg xl:text-xm"
                          style={{
                            // fontSize: "0.5rem",
                            fontWeight: "normal",
                            listStyleType: "disc",
                          }}
                        >
                          {item}
                        </Typography.Paragraph>
                      </List.Item>
                    </div>
                  )}
                ></List>
              </div>
            </div>
          ))}
          <div
            style={{
              height: height + "px",
            }}
            className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
          >
            <motion.div
              style={{
                height: heightTransform,
                opacity: opacityTransform,
              }}
              className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
            />
          </div>
        </div>
      </div>
    </BackgroundGradient>
  );
};
