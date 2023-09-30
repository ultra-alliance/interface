import React from 'react';
import {
  Avatar,
  Card,
  Chip,
  Divider,
  Skeleton,
  Stack,
  Tab,
  Tabs,
  Typography,
  useTheme,
  AvatarProps,
  TypographyProps,
  BoxProps,
} from '@mui/material';
import { Box } from '@mui/system';
import useBreakPoint from '@/hooks/useBreakpoint';
import { useLocalisation } from '@ultra-alliance/react-ultra';
import Image from 'next/image';

function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export interface CardMenuProps {
  page: number;
  onTabChange: (event: React.SyntheticEvent, newValue: number) => void;
  AvatarProps?: AvatarProps;
  name?: React.ReactNode;
  nameProps?: BoxProps;
  subNameProps?: BoxProps;
  subName?: React.ReactNode;
  overlineText?: React.ReactNode;
  menus?: {
    id: number;
    name: string;
    link: string;
    onClick: () => void;
    tabContent?: React.ReactNode;
    visible?: boolean;
    disabled?: boolean;
  }[];
}

export default function CardMenu({
  AvatarProps,
  name,
  subName,
  overlineText,
  menus,
  page,
  onTabChange,
  nameProps,
  subNameProps,
}: CardMenuProps) {
  const { isLg, isMd } = useBreakPoint();
  const { baseCurrency } = useLocalisation();

  const renderAvatar = () => {
    if (!name) {
      return (
        <Skeleton
          variant="rectangular"
          sx={{
            width: '100px',
            height: '100px',
            marginInline: !isLg ? 'auto' : '',
          }}
        />
      );
    }
    return (
      <Avatar
        variant="rounded"
        sx={{
          color: 'grey.200',
          width: 100,
          height: 100,
          boxShadow: theme => theme.shadows[3],
          marginInline: !isLg ? 'auto' : '',
        }}
        {...AvatarProps}
      />
    );
  };

  const renderTabs = () => {
    if (!menus || menus.length === 0) {
      return null;
    }

    return (
      <Tabs
        orientation={isLg ? 'horizontal' : 'vertical'}
        TabIndicatorProps={{
          style: { display: 'none' },
        }}
        scrollButtons="auto"
        value={page}
        variant="scrollable"
        onChange={(_e, value) => onTabChange(_e, value)}
        sx={{
          '& .MuiTabs-indicator': {
            bgcolor: 'primary.main',
            opacity: '1',
            width: 5,
          },

          '& .MuiTab-root': {
            color: '#ffffff3',
            fontWeight: 'bold',
            transition: '0.2s',

            borderRadius: 1,
            '&:hover': {
              color: 'primary.light',
              backgroundColor: 'inherit',
              svg: {
                transition: '0.2s',

                color: 'primary.light',
              },
            },
            '&:active': {
              backgroundColor: 'primary.main',
              color: 'white',
              svg: {
                color: 'white',
              },
            },
          },
          '& .MuiTab-root.Mui-selected': {
            fontWeight: 'bold',
            backgroundColor: 'primary.main',
            color: 'white',
            svg: {
              color: 'white',
            },
          },
        }}
      >
        {menus.map((menu, index) => (
          <Tab
            disableFocusRipple
            key={`${menu.id}-${index}`}
            label={menu.name}
            onClick={menu.onClick}
            value={menu.id}
            disabled={menu.disabled}
            sx={{
              m: 0.5,
              display:
                menu.visible === undefined
                  ? 'flex'
                  : menu.visible
                  ? 'flex'
                  : 'none',
            }}
            id={`full-width-tab-${index}`}
            aria-controls={`full-width-tabpanel-${index}`}
          />
        ))}
      </Tabs>
    );
  };

  return (
    <Box sx={{}}>
      <Card
        elevation={0}
        sx={{
          width: '100%',
        }}
      >
        <Box
          sx={{
            background: theme =>
              `linear-gradient(to ${!isLg ? 'top' : 'right'}, ${
                theme.palette.background.default
              } 40%, transparent 200%), url(${AvatarProps?.src ?? ''})
            })`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <Box
            sx={{
              p: 2,
              gap: 2,
              pt: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: isLg ? '' : 'center',
              flexDirection: isLg ? 'row' : 'column',
            }}
          >
            {renderAvatar()}

            <Box>
              <Stack
                direction="column"
                gap={0}
                sx={{
                  alignItems: isLg ? 'flex-start' : 'center',
                }}
              >
                <Typography
                  textAlign={isLg ? 'left' : 'center'}
                  variant="h6"
                  sx={{ fontWeight: 'bold' }}
                  component={'div'}
                  {...nameProps}
                >
                  {name ?? (
                    <Skeleton
                      variant="text"
                      sx={{
                        width: '70px',
                      }}
                    />
                  )}
                </Typography>
                <Typography
                  textAlign={isLg ? 'left' : 'center'}
                  variant="subtitle2"
                  sx={{ fontWeight: 'bold' }}
                  component={'div'}
                  {...subNameProps}
                >
                  {subName}
                </Typography>
                <Typography
                  variant="overline"
                  textAlign={isLg ? 'left' : 'center'}
                >
                  {name ? (
                    overlineText
                  ) : (
                    <Skeleton
                      variant="text"
                      sx={{
                        width: '60px',
                      }}
                    />
                  )}
                </Typography>
              </Stack>
            </Box>
          </Box>
          {renderTabs()}
        </Box>
      </Card>
    </Box>
  );
}
