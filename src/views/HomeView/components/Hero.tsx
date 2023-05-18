import PageTitle from '@/components/molecules/PageTitle';
import useBreakPoint from '@/hooks/useBreakpoint';
import usePageRedirect from '@/hooks/usePageRedirect';
import { Avatar, Button, Stack, Typography, useTheme } from '@mui/material';
import { LINKS } from '@ultra-alliance/ultra-sdk';
import { TypeAnimation } from 'react-type-animation';

export default function Hero() {
  const { isSm } = useBreakPoint();
  const theme = useTheme();
  const { goToFactories, gotToListed } = usePageRedirect();

  return (
    <Stack textAlign={'start'} gap={2} my={'auto'} padding={4} sx={{}}>
      <PageTitle
        title="Welcome to"
        fadedTitle="Ultra Tech Alliance"
        icon={<Avatar src={'/uta-logo-purple.png'} />}
        sx={{}}
      />

      <Typography
        variant="subtitle1"
        color="text.primary"
        sx={{ mx: isSm ? 'auto' : 0 }}
        maxWidth={500}
        minWidth={250}
        textAlign={isSm ? 'center' : 'start'}
      >
        The <i>Ultra Tech Alliance</i> is a community of{' '}
        <TypeAnimation
          sequence={[
            'developers', // Types 'One'
            5000, // Waits 1s
            'designers', // Deletes 'One' and types 'Two'
            5000, // Waits 2s
            'innovators', // Types 'Three' without deleting 'Two'
            5000, //
            () => {
              console.log('Sequence completed');
            },
          ]}
          speed={10}
          wrapper="span"
          cursor={true}
          repeat={Infinity}
          style={{
            fontSize: '1em',
            display: 'inline-block',
            color: theme.palette.primary.light,
          }}
        />
        building cool stuff on the{' '}
        <span
          style={{
            color: theme.palette.primary.light,
            fontWeight: 'bold',
          }}
        >
          UOS
        </span>
      </Typography>
      <Stack
        direction={isSm ? 'column' : 'row'}
        gap={2}
        justifyContent={'flex-start'}
      >
        <Button
          variant={'outlined'}
          size="small"
          sx={{ color: 'primary.light' }}
          onClick={() => {
            gotToListed();
          }}
        >
          Marketplace
        </Button>
        <Button
          variant={'outlined'}
          size="small"
          sx={{ color: 'primary.light' }}
          onClick={() => {
            goToFactories();
          }}
        >
          Factories
        </Button>
        <Button
          variant={'contained'}
          size="small"
          target="_blank"
          href={LINKS.DOWNLOAD_ULTRA}
        >
          Download Ultra
        </Button>
      </Stack>
    </Stack>
  );
}
