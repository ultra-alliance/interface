import * as React from 'react';
import {
  Container,
  Box,
  Divider,
  Toolbar,
  Typography,
  Link,
  Paper,
  Grid,
  Button,
  List,
  ListItemButton,
  ListItemAvatar,
  ListItemText,
  ListItem,
  Avatar,
} from '@mui/material';
//import Footer from "./Footer";
import Appbar from './Appbar';
import Sidebar from './Sidebar';
import { DRAWER_WIDTH } from '@/constants/dimensions';
import Footer from './Footer';
import HTMLHead from '../HTMLHead';
import { ultraColors } from '@ultra-alliance/uikit';
import { UosBackground } from '@/components/anims';
import { Twitter } from '@mui/icons-material';
import useBreakPoint from '@/hooks/useBreakpoint';
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
  const { isSm } = useBreakPoint();
  const { window, children, footer } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      {' '}
      <HTMLHead />
      <Box
        sx={{
          backgroundColor: 'secondary.main',
          minHeight: '100%',
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
          <Container
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 3,
            }}
          >
            <Toolbar />
            {children}
          </Container>
          <Divider sx={{ my: 3 }} />
          <Container>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'secondary.main',
                    color: 'white',
                    width: '100%',
                  }}
                >
                  <Box
                    display={'flex'}
                    flexDirection={'column'}
                    alignItems={'center'}
                    justifyContent={'center'}
                    width={'fit-content'}
                  >
                    <Typography
                      variant="overline"
                      textAlign={'center'}
                      color="inherit"
                      fontWeight="bold"
                    >
                      Not endorsed by nor affiliated with Ultra
                    </Typography>

                    <Typography variant="body2" color="inherit">
                      Made with 💜 by{' '}
                      <Link
                        href="/"
                        sx={{
                          color: 'white',
                          fontWeight: 'bold',
                          textDecoration: 'none',
                          '&:hover': {
                            textDecoration: 'underline',
                          },
                        }}
                      >
                        Ultra Tech Alliance
                      </Link>{' '}
                      - {new Date().getFullYear()}
                    </Typography>
                    <Typography
                      variant="overline"
                      textAlign={'center'}
                      color="inherit"
                      fontStyle={'italic'}
                      fontSize={'0.7rem'}
                    >
                      The Ultra logos are trademarks of Ultra Corporation
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <Box
                  display={'flex'}
                  justifyContent={isSm ? 'center' : 'flex-end'}
                  alignItems={'center'}
                  height={'100%'}
                  width={'100%'}
                >
                  <List
                    disablePadding
                    sx={{
                      display: 'flex',
                      width: 'fit-content',
                      marginInline: 'auto',
                    }}
                  >
                    <ListItem
                      disablePadding
                      sx={{
                        width: 'fit-content',
                      }}
                    >
                      <ListItemButton
                        target="_blank"
                        href={'https://twitter.com/UltraAllianceHQ'}
                        sx={{
                          borderRadius: 2,
                          transition: 'all 0.2s ease-in-out',
                        }}
                      >
                        <ListItemAvatar>
                          <Twitter sx={{ color: 'white' }} />
                        </ListItemAvatar>{' '}
                        <ListItemText primary={'Twitter'} />
                      </ListItemButton>
                    </ListItem>
                    <ListItem
                      disablePadding
                      sx={{
                        width: 'fit-content',
                      }}
                    >
                      <ListItemButton
                        sx={{
                          borderRadius: 2,
                          transition: 'all 0.2s ease-in-out',
                          width: 'fit-content',
                        }}
                        target="_blank"
                        href={'https://discord.gg/JtBbqdh2K2'}
                      >
                        <ListItemAvatar>
                          <Avatar
                            sx={{
                              bgcolor: 'transparent',
                            }}
                            imgProps={{
                              sx: {
                                ml: -1,
                                height: 16,
                                width: 'auto',
                              },
                            }}
                            src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0a6cc3c481a15a141738_icon_clyde_white_RGB.png"
                          />
                        </ListItemAvatar>{' '}
                        <ListItemText primary={'Discord'} />
                      </ListItemButton>
                    </ListItem>
                  </List>
                </Box>
              </Grid>
            </Grid>
          </Container>
          <Divider sx={{ my: 3 }} />

          {footer && <Footer />}
        </Box>
      </Box>
    </>
  );
}
