import { ConfigProvider, theme } from "antd";
import {
  createContext,
  useEffect,
  useState,
  type PropsWithChildren,
} from "react";

type ColorModeContextType = {
  mode: string;
  setMode: (mode: string) => void;
};
import "./index.css";

export const ColorModeContext = createContext<ColorModeContextType>(
  {} as ColorModeContextType
);

export const ColorModeContextProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const colorModeFromLocalStorage = localStorage.getItem("colorMode");
  // const isSystemPreferenceDark = window?.matchMedia(
  //   "(prefers-color-scheme: dark)"
  // ).matches;

  // const systemPreference = isSystemPreferenceDark ? "dark" : "light";
  const [mode, setMode] = useState(colorModeFromLocalStorage || "dark");

  useEffect(() => {
    window.localStorage.setItem("colorMode", mode);
  }, [mode]);

  const setColorMode = () => {
    if (mode === "light") {
      setMode("dark");
    } else {
      setMode("light");
    }
  };

  const { darkAlgorithm, defaultAlgorithm } = theme;

  return (
    <ColorModeContext.Provider
      value={{
        setMode: setColorMode,
        mode,
      }}
    >
      <ConfigProvider
        card={{
          className: "",
        }}
        theme={{
          token: {
            colorPrimary: "#020617",
            borderRadius: 2,
          },
          components: {
            Card: {
              // colorBgContainer: "#19647E ",
              colorBgContainer: "rgb(21 16 48 / var(--tw-bg-opacity))",
              fontFamily: "Arial",
              algorithm: true,
              // colorBorder: "#020617",
            },
          },
          algorithm: mode === "light" ? defaultAlgorithm : darkAlgorithm,
        }}
      >
        {children}
      </ConfigProvider>
    </ColorModeContext.Provider>
  );
};
