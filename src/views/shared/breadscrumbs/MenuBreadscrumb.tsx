import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import GrainIcon from '@mui/icons-material/Grain';
import Image from 'next/image';
import usePageRedirect from '@/hooks/usePageRedirect';
import { useRouter } from 'next/router';

function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function MenuBreadscrumb() {
  const { goToHome } = usePageRedirect();
  const params = useRouter();
  const { uniqId } = params.query;
  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link
          underline="hover"
          sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
          color="inherit"
          onClick={() => goToHome()}
        >
          <Image
            style={{ marginRight: '4px' }}
            src="/uta-logo-purple.png"
            alt="logo"
            width={20}
            height={20}
          />
          <Typography sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}>
            Ultra Alliance
          </Typography>
        </Link>
        {uniqId && (
          <Typography color="text.primary">Factory #{uniqId}</Typography>
        )}
      </Breadcrumbs>
    </div>
  );
}
