import React from 'react';
import {
  Avatar,
  Box,
  CircularProgress,
  Container,
  Divider,
  Grid,
  LinearProgress,
  Link,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Stack,
  Typography,
  Zoom,
} from '@mui/material';
import { useUltra, useUltraQuery } from '@ultra-alliance/react-ultra';
import Image from 'next/image';
import ViewCarouselIcon from '@mui/icons-material/ViewCarousel';
import usePageRedirect from '@/hooks/usePageRedirect';
export default function Footer() {
  const { ultra } = useUltra();
  const { goToAccount } = usePageRedirect();
  const { data, isLoading, fetchData } = useUltraQuery({
    queryFn: async () => {
      const info = await ultra?.getInfo();
      if (!info) return undefined;

      return { info };
    },
  });

  // timer to reftech data each 5min, this is a hack to avoid the cache
  React.useEffect(() => {
    const timer = setInterval(() => {
      fetchData();
    }, 20000); // 10sec = 10000
    return () => clearInterval(timer);
  }, []);

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container component={'footer'}>
      <Grid container spacing={2} marginBottom={2}>
        <Grid item xs={12} sm={6} md={3}>
          <Stack
            direction="column"
            spacing={1}
            justifyContent={'center'}
            alignItems={'center'}
            sx={{ width: '100%' }}
          >
            <Image
              src="/uta-logo-purple.png"
              alt="logo"
              width={120}
              height={120}
            />
          </Stack>
        </Grid>
        <Zoom in={!isLoading}>
          <Grid item xs={12} sm={6} md={9} width={'100%'}>
            {/* <LinearProgress
              variant={'indeterminate'}
              sx={{ width: '100%', height: '4px', mb: 1 }}
            /> */}
            <Stack
              direction="row"
              spacing={1}
              justifyContent={'space-between'}
              sx={{ width: '100%' }}
              alignItems={'center'}
            >
              {isLoading && <CircularProgress size={20} />}
              <Typography variant="body2" color="inherit" fontWeight="bold">
                {isLoading
                  ? 'Fetching blockchain info...'
                  : `Head Block n°${data?.info?.head_block_num}`}
              </Typography>
              <Typography variant="overline" color="inherit" fontWeight="bold">
                {isLoading || !data
                  ? ''
                  : new Date(data?.info?.head_block_time).toLocaleString()}
              </Typography>
            </Stack>

            <List
              sx={{
                width: '100%',
                display: 'flex-wrap',
              }}
            >
              <ListItemButton disableGutters disableRipple disableTouchRipple>
                <ListItemAvatar>
                  <Avatar
                    variant="rounded"
                    sx={{
                      bgcolor: 'primary.light',
                    }}
                  >
                    <ViewCarouselIcon />
                  </Avatar>
                </ListItemAvatar>

                <ListItemText
                  primary={data?.info?.head_block_producer}
                  secondary="Head Block Producer"
                />
              </ListItemButton>
            </List>
          </Grid>
        </Zoom>
      </Grid>
    </Container>
  );
}
