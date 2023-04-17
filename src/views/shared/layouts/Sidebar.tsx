import React from 'react';
import Image from 'next/image';
import {
  AddBoxRounded,
  ViewTimelineRounded,
  Article,
  PageviewRounded,
  ViewCarouselRounded,
} from '@mui/icons-material';
import {
  Avatar,
  Badge,
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Toolbar,
  Tooltip,
  Typography,
  useTheme,
} from '@mui/material';
import { DRAWER_WIDTH } from '@/constants/dimensions';
import { LINKS } from '@ultra-alliance/ultra-sdk';

type SideBarProps = {
  open?: boolean;
  guilds?: any[];
  onClickUltra?: () => void;
  onClickNewGuild?: () => void;
  onClickTimeLine?: () => void;
  mobileOpen?: boolean;
  handleDrawerToggle?: () => void;
  container?: any;
};

Sidebar.defaultProps = {
  open: false,
  guilds: [],
  onClickUltra: () => {},
  onClickNewGuild: () => {},
  onClickTimeLine: () => {},
  mobileOpen: false,
  handleDrawerToggle: () => {},
  container: undefined,
};

export default function Sidebar(props: SideBarProps) {
  const theme = useTheme();

  const renderDrawerHeader = () => {
    return (
      <ListItemButton
        href={LINKS.DOWNLOAD_ULTRA}
        target="_blank"
        sx={{
          minHeight: 48,
          position: 'relative',
          width: '100%',
          justifyContent: 'center',
          px: 1,
        }}
      >
        <ListItemIcon
          sx={{
            minWidth: 0,
            mr: 0,
            justifyContent: 'center',
          }}
        >
          <Typography variant="h6" component="div" sx={{ color: 'white' }}>
            ᕫ
          </Typography>
        </ListItemIcon>
      </ListItemButton>
    );
  };

  const renderListItem = (
    title: string,
    icon: any,
    link: string,
    imageSrc?: string,
  ) => {
    return (
      <Tooltip title={title} placement="right" arrow>
        <ListItem disablePadding sx={{ display: 'block' }}>
          <ListItemButton
            href={link}
            target="_blank"
            sx={{
              minHeight: 48,
              justifyContent: 'center',
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: 'auto',
                justifyContent: 'center',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              {imageSrc ? (
                <Avatar
                  sx={{
                    backgroundColor: 'secondary.light',
                    color: 'white',
                    fontWeight: 'bold',
                  }}
                  variant="rounded"
                  imgProps={{
                    style: {
                      borderRadius: '50%',
                    },
                  }}
                  srcSet={imageSrc}
                ></Avatar>
              ) : (
                icon
              )}
            </ListItemIcon>
          </ListItemButton>
        </ListItem>
      </Tooltip>
    );
  };

  const renderGuildListItem = (guild: any, index: number) => {
    const title = guild.name;
    const imageSrc = guild.iconUrl;
    return (
      <Tooltip key={guild.id} title={title} placement="right" arrow>
        <ListItem disablePadding sx={{ display: 'block' }}>
          <ListItemButton
            selected={false}
            sx={{
              minHeight: 48,
              justifyContent: 'center',
              px: 1,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: 'auto',
                justifyContent: 'center',
              }}
            >
              <Badge
                badgeContent={index % 2 == 0 ? 4 : 0}
                color="error"
                variant="dot"
              >
                <Avatar
                  sx={{
                    backgroundColor: 'secondary.light',
                    color: 'white',
                    fontWeight: 'bold',
                  }}
                  variant="rounded"
                  srcSet={imageSrc}
                >
                  {title[0]}
                </Avatar>
              </Badge>
            </ListItemIcon>
          </ListItemButton>
        </ListItem>
      </Tooltip>
    );
  };

  const renderSearchListItem = (text: string) => {
    const icon =
      text === 'Ultra Documentation' ? (
        <Article fontSize="large" />
      ) : (
        <PageviewRounded fontSize="large" />
      );
    return (
      <Tooltip key={text} title={text} placement="right" arrow>
        <ListItem disablePadding sx={{ display: 'block' }}>
          <ListItemButton
            selected={text === 'Search'}
            sx={{
              minHeight: 48,
              justifyContent: 'center',
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: 'auto',
                justifyContent: 'center',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              {icon}
            </ListItemIcon>
          </ListItemButton>
        </ListItem>
      </Tooltip>
    );
  };

  const renderDrawer = () => {
    return (
      <div>
        <Toolbar
          disableGutters
          sx={{
            width: 'auto',
            position: 'relative',
            margin: '0px',
            paddingLeft: '0px',
            paddingRight: '0px',
            backgroundColor: 'primary.main',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <ListItem disablePadding sx={{ display: 'block', width: '100%' }}>
            {renderDrawerHeader()}
          </ListItem>
        </Toolbar>

        <Divider />
        <List>
          {renderListItem(
            'Ultra Times',
            undefined,
            LINKS.ULTRA_TIMES,
            'https://pbs.twimg.com/profile_images/1569433807580708867/JXHPG6Fa_400x400.jpg',
          )}
          {renderListItem(
            'Ultra is Life',
            undefined,
            LINKS.ULTRA_IS_LIFE,
            'https://www.ultraislife.com/en/assets/icons/icon-72x72.png',
          )}
          {renderListItem(
            'Ultra Documentation',
            <Article />,
            LINKS.ULTRA_DOCS,
            undefined,
          )}
          {renderListItem(
            'Block Explorer',
            <ViewCarouselRounded />,
            LINKS.ULTRA_EXPLORER,
            undefined,
          )}
          <Divider />
          {props.guilds?.map((guild: any, index: number) =>
            renderGuildListItem(guild, index),
          )}
        </List>
      </div>
    );
  };

  return (
    <Box
      component="nav"
      sx={{ width: { md: DRAWER_WIDTH }, flexShrink: { md: 0 } }}
      aria-label="mailbox folders"
    >
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <Drawer
        container={props.container}
        variant="temporary"
        open={props.mobileOpen}
        onClose={() => props.handleDrawerToggle?.()}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', sm: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            bgcolor: 'background.default',
            boxSizing: 'border-box',
            width: DRAWER_WIDTH,
          },
        }}
      >
        {renderDrawer()}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', sm: 'none', md: 'block' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: DRAWER_WIDTH,
          },
        }}
        open
      >
        {renderDrawer()}
      </Drawer>
    </Box>
  );
}
