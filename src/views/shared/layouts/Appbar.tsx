import {
  AppBar,
  Container,
  Toolbar,
  Button,
  Box,
  Stack,
  Typography,
  IconButton,
} from '@mui/material';
import { useTheme, Theme } from '@mui/material/styles';
import Image from 'next/image';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useUltra } from '@ultra-alliance/react-ultra';
import { DRAWER_WIDTH } from '../../../constants/dimensions';
import LoginModal from '../modals/Login';
import MenuBreadscrumb from '../breadscrumbs/MenuBreadscrumb';
import React from 'react';

interface AppbarProps {
  handleDrawerToggle: () => void;
}

export default function Appbar({ handleDrawerToggle }: AppbarProps) {
  const theme = useTheme();
  const { isAuthenticated } = useUltra();

  return (
    <AppBar
      elevation={0}
      position="fixed"
      sx={{
        bgcolor: 'primary',
        width: { md: `calc(100% - ${DRAWER_WIDTH}px)` },
        ml: { md: `${DRAWER_WIDTH}px` },
        borderBottom: (theme: Theme) => `1px solid ${theme.palette.divider}`,
      }}
    >
      <Container>
        <Toolbar sx={{ width: '100%' }}>
          <IconButton
            color="inherit"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: 'none' } }}
          >
            <MoreVertIcon />
          </IconButton>

          <MenuBreadscrumb />
          <Box sx={{ flexGrow: 1 }} />
          <Stack direction="row" gap={1}>
            <LoginModal />
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
