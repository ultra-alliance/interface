import React from 'react';
import { Grid, Box, Divider, Avatar } from '@mui/material';
import { LINKS } from '@ultra-alliance/ultra-sdk';
import App from '../shared/layouts/App';
import useBreakPoint from '@/hooks/useBreakpoint';
import { UosBackground } from '@/components/anims';
import Hero from './components/Hero';
import LatestFactories from './components/LatestFactories';
import CardText from '@/components/molecules/CardText';

const HomeView = () => {
  const { isSm } = useBreakPoint();

  return (
    <>
      <App footer={true}>
        <React.Fragment>
          <Box
            position={'absolute'}
            top={0}
            left={0}
            width={'100%'}
            height={'100%'}
          >
            <UosBackground height={isSm ? '500px' : '300px'} width="100%" />
          </Box>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12} md={7} lg={7}>
              <Hero />
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={5}
              lg={5}
              gap={2}
              display={'flex'}
              alignItems={'center'}
            >
              <Grid
                container
                alignItems={'center'}
                display={'flex'}
                spacing={2}
              >
                <LatestFactories />
              </Grid>
            </Grid>
          </Grid>
          <Divider>
            <Avatar
              src={'/ultra-icon-white.png'}
              sx={{
                bgcolor: 'primary.main',
              }}
              imgProps={{
                sx: {
                  width: 16,
                  height: 16,
                },
              }}
              variant="circular"
            />
          </Divider>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <CardText
                alt="Ultra"
                title="Official Documentation"
                subtitle="Learn all you need to know about the Ultra Operating System."
                src={'/ultra-blockchain.png'}
                onClick={() => {
                  window.open(LINKS.ULTRA_DOCS, '_blank');
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <CardText
                alt="Ultra Tech Alliance"
                title="Utilities Packages"
                subtitle="Start building your own Ultra application with our packages!"
                src={'/utilities-packages.png'}
                onClick={() => {
                  window.open('https://docs.ultra-alliance.tech', '_blank');
                }}
              />
            </Grid>
          </Grid>
        </React.Fragment>
      </App>
    </>
  );
};

export default HomeView;
