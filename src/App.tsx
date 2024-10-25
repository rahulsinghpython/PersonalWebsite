import { useState } from "react";
import "./App.css";
import { GlobeDemo } from "./components/ui/globedemo";
import { LampContainer, LampTitle } from "./components/ui/lamp";
import { motion } from "framer-motion";
import { Card, Flex, App as AntdApp, Layout } from "antd";
import { ColorModeContextProvider } from "./contexts/color-mode";
import { ProfileView } from "./components/web/ProfileView";

function App() {
  return (
    <ColorModeContextProvider>
      <div className="bg-slate-950 w-full bg-gradient-to-b overflow-hidden">
        <Flex vertical>
          <LampContainer>
            <motion.h1
              initial={{ opacity: 0.5, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3,
                duration: 1,
                ease: "easeInOut",
              }}
              className=" bg-gradient-to-br from-slate-100 to-slate-300 py-4
        bg-clip-text text-center text-4xl font-medium 
        text-transparent md:text-7xl w-full"
            >
              <ProfileView></ProfileView>
            </motion.h1>
          </LampContainer>
          <div
            style={{
              marginTop: "10rem",
            }}
          >
            <GlobeDemo></GlobeDemo>
          </div>
        </Flex>
      </div>
    </ColorModeContextProvider>
  );
}

export default App;
