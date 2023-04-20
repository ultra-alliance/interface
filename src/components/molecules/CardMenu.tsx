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
} from '@mui/material';
import { Box } from '@mui/system';
import useBreakPoint from '@/hooks/useBreakpoint';
import { useLocalisation } from '@ultra-alliance/react-ultra';
import { tUniqManifested } from '@ultra-alliance/ultra-sdk';
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
  name?: string;
  subName?: React.ReactNode;
  overlineText?: string;
  menus?: {
    id: number;
    name: string;
    link: string;
    onClick: () => void;
    tabContent?: React.ReactNode;
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
          }}
        />
      );
    }
    return (
      <Avatar
        variant="rounded"
        sx={{
          bgcolor: 'primary.light',
          width: 100,
          height: 100,
          boxShadow: theme => theme.shadows[3],
        }}
        src={AvatarProps?.src}
        {...AvatarProps}
      />
    );
  };

  const renderTabs = () => {
    if (!menus || menus.length === 0) {
      return null;
    }

    return (
      <Card
        variant="elevation"
        elevation={2}
        sx={{
          position: 'relative',
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0,
        }}
      >
        <Tabs
          orientation={isLg ? 'horizontal' : 'vertical'}
          allowScrollButtonsMobile
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
              '&:hover': {
                color: 'white',
                transition: 'all 0.2s ease-in-out',
              },
            },
            '& .MuiTab-root.Mui-selected': {
              fontWeight: 'bold',
              color: 'white',
            },
          }}
        >
          {menus.map((menu, index) => (
            <Tab
              key={`${menu.id}-${index}`}
              label={menu.name}
              onClick={menu.onClick}
              value={menu.id}
              id={`full-width-tab-${index}`}
              aria-controls={`full-width-tabpanel-${index}`}
            />
          ))}
        </Tabs>
      </Card>
    );
  };

  return (
    <Box sx={{}}>
      <Card
        elevation={2}
        variant="elevation"
        sx={{
          border: '1px solid',
          borderColor: 'divider',
          borderBottom: 'none',
          width: '100%',
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
          background: theme =>
            `linear-gradient(to ${!isLg ? 'top' : 'right'}, ${
              theme.palette.background.default
            } 40%, transparent 200%), url(${AvatarProps?.src ?? ''})
            })`,
        }}
      >
        <Box
          sx={{
            p: 3,
            gap: 3,
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
              >
                {name ?? (
                  <Skeleton
                    variant="text"
                    sx={{
                      width: '100px',
                    }}
                  />
                )}
              </Typography>
              <Typography
                textAlign={isLg ? 'left' : 'center'}
                variant="subtitle2"
                sx={{ fontWeight: 'bold' }}
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
      </Card>
      {renderTabs()}
    </Box>
  );
}
