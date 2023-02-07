import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

// Global style overrides
import styles from "./styles";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const overrides = {
  config,
  ...styles,
  components: {},
};

export default extendTheme(overrides);
