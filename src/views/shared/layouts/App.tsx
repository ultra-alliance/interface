import * as React from "react";
import {
  Container,
  Box,
  Divider,
  Toolbar,
  Typography,
  Link,
} from "@mui/material";
//import Footer from "./Footer";
import Appbar from "./Appbar";
import Sidebar from "./Sidebar";
import { DRAWER_WIDTH } from "@/constants/dimensions";
import Footer from "./Footer";
// import { GuildModel } from "@/models/guild.model";

interface AppProps {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children?: React.ReactNode;
  footer?: boolean;
  guilds: any[];
}

App.defaultProps = {
  footer: true,
  guilds: [],
};

export default function App(props: AppProps) {
  const { window, children, footer } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box
      sx={{
        backgroundColor: "secondary.main",
        minHeight: "100%",
      }}
    >
      <Appbar handleDrawerToggle={handleDrawerToggle} />
      <Sidebar
        mobileOpen={mobileOpen}
        container={container}
        guilds={props.guilds}
        handleDrawerToggle={handleDrawerToggle}
        // onClickUltra={goToHome}
      />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: { md: `calc(100% - ${DRAWER_WIDTH}px)` },
          ml: { md: `${DRAWER_WIDTH}px` },
        }}
      >
        <Container sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
          <Toolbar />
          {children}
        </Container>
        <Divider sx={{ my: 3 }} />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "secondary.main",
            color: "white",
            width: "100%",
          }}
        >
          <Box
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"center"}
            width={"fit-content"}
          >
            <Typography
              variant="overline"
              textAlign={"center"}
              color="inherit"
              fontWeight="bold"
            >
              Not endorsed by or affiliated with Ultra
            </Typography>
            <Typography variant="body2" color="inherit">
              Made with 💜 by{" "}
              <Link
                href="/"
                sx={{
                  color: "white",
                  fontWeight: "bold",
                  textDecoration: "none",
                  "&:hover": {
                    textDecoration: "underline",
                  },
                }}
              >
                Ultra Tech Alliance
              </Link>{" "}
              - {new Date().getFullYear()}
            </Typography>
          </Box>
        </Box>
        <Divider sx={{ my: 3 }} />

        {footer && <Footer />}
      </Box>
    </Box>
  );
}
