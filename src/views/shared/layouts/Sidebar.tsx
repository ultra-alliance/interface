import React from 'react';
import {
  Article,
  ViewCarouselRounded,
  HomeRepairService,
  PointOfSale,
  Factory,
  LocalGroceryStore,
  Casino,
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
import usePageRedirect from '@/hooks/usePageRedirect';
import { useUltra } from '@ultra-alliance/react-ultra';
import useNetworkColor from '@/hooks/useNetworkColor';

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

type tListItem = {
  disabled?: boolean;
  tooltip: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  imgSrc?: string;
  link?: string;
};

export default function Sidebar(props: SideBarProps) {
  const theme = useTheme();
  const { goToFactories, gotToListed, goToRaffles } = usePageRedirect();
  const { chain } = useUltra();
  const { color } = useNetworkColor();

  function renderAppIcon({
    icon = <></>,
    adaptative = false,
    key = '',
  }): React.ReactNode {
    return (
      <Avatar
        key={key}
        sx={{
          backgroundColor: adaptative ? color : 'primary.main',
          color: 'white',
          fontWeight: 'bold',
        }}
        variant="rounded"
      >
        {icon}
      </Avatar>
    );
  }

  const list: tListItem[] = [
    {
      disabled: chain?.name !== 'local',
      tooltip: 'Ultra Raffles',
      icon: renderAppIcon({
        icon: <Casino />,
        adaptative: true,
      }),

      onClick: () => {
        goToRaffles();
      },
    },
    {
      tooltip: 'Uniq Factories',
      icon: renderAppIcon({
        icon: <Factory />,
        adaptative: true,
      }),
      onClick: () => {
        goToFactories();
      },
    },
    {
      tooltip: 'Uniq for sale',
      icon: renderAppIcon({
        icon: <LocalGroceryStore />,
        adaptative: true,
      }),
      onClick: () => {
        gotToListed();
      },
    },
    {
      tooltip: 'Ultra Times',
      link: LINKS.ULTRA_TIMES,
      imgSrc: '/ultra-times.png',
    },
    {
      tooltip: 'Ultra is Life',
      link: LINKS.ULTRA_IS_LIFE,
      imgSrc: '/ultra-is-life.png',
    },
    {
      tooltip: 'U Merch ',
      link: 'https://www.umerch.xyz',
      imgSrc: '/umerch.png',
    },
    {
      tooltip: 'Ultropia',
      link: 'https://ultropia.io/',
      imgSrc: '/ultropia.png',
    },
    {
      tooltip: 'Ultra Documentation',
      icon: <Article />,
      link: LINKS.ULTRA_DOCS,
    },
    {
      tooltip: 'Ultra Block Explorer',
      icon: <ViewCarouselRounded />,
      link: LINKS.ULTRA_EXPLORER,
    },
    {
      tooltip: 'Ultra Faucet',
      icon: <PointOfSale />,
      link: 'https://faucet.testnet.app.ultra.io',
    },
    {
      tooltip: 'Ultra Ecosystem Links',
      icon: <HomeRepairService />,
      link: 'https://ultraio.freshdesk.com/support/solutions/articles/80001069021',
    },
  ];

  const renderDrawerHeader = () => {
    return (
      <ListItemButton
        href={LINKS.DOWNLOAD_ULTRA}
        target="_blank"
        sx={{
          minHeight: 48,
          background: color,
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
    icon?: any,
    link?: string,
    imageSrc?: string,
    onClick?: () => void,
    disabled?: boolean,
    key: string = '',
  ) => {
    return (
      <Tooltip title={!disabled && title} placement="right" arrow key={key}>
        <ListItem disablePadding sx={{ display: 'block' }}>
          <ListItemButton
            disabled={disabled}
            href={link ?? ''}
            onClick={() => {
              if (onClick) {
                onClick();
              }
            }}
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
            backgroundColor: color,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <ListItem disablePadding sx={{ display: 'block', width: '100%' }}>
            {renderDrawerHeader()}
          </ListItem>
        </Toolbar>

        <List>
          {list?.map((item: any, index: number) =>
            renderListItem(
              item.tooltip,
              item.icon,
              item.link,
              item.imgSrc,
              item.onClick,
              item.disabled,
              index.toString() + '-list-item',
            ),
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
            bgcolor: 'background.paper',
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
            bgcolor: 'background.paper',
          },
        }}
        open
      >
        {renderDrawer()}
      </Drawer>
    </Box>
  );
}
