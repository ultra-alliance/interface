import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {
  Avatar,
  CardActionArea,
  Chip,
  Divider,
  Grow,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Skeleton,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import {
  formatCurrencyValue,
  formatUosBalance,
  tTokenA,
  type tListedUniq,
  tFactoryManifested,
  formatNumeralAbreviation,
} from '@ultra-alliance/ultra-sdk';
import Image from 'next/image';
import {
  CURRENCIES,
  tCurrency,
  useLocalisation,
  useUltra,
} from '@ultra-alliance/react-ultra';
import UniqCreator from '../atoms/UniqCreator';
import PriceDisplayRatio from './PriceDisplayRatio';
import { tParticipant, tRaffle } from '@/types';
import RaffleChipState from './RaffleChipState';

type RaffleCardProps = {
  raffle?: tRaffle;
  participants?: tParticipant[];
  onClick?: () => void;
};

RaffleCard.defaultProps = {
  onClick: () => {},
};

export default function RaffleCard({
  raffle,
  participants,
  onClick,
}: RaffleCardProps) {
  const { id, influencer, reward_amount } = raffle || {};
  const { marketPrices } = useUltra();
  const theme = useTheme();
  const [isHovered, setIsHovered] = React.useState(false);
  const { baseCurrency } = useLocalisation();

  const handleOver = () => setIsHovered(curr => !curr);
  return (
    <Box position={'relative'}>
      <Card
        elevation={1}
        onMouseEnter={handleOver}
        onMouseLeave={handleOver}
        sx={{
          border: '1px solid',
          borderColor: '#cccccc5a',
          boxShadow: theme => theme.shadows[8],
          transition: 'all 0.5s ease',
          background: theme =>
            `linear-gradient(180deg, rgba(150,150,150,0.1) 0%, rgba(150,150,150,0) 100%), linear-gradient(180deg, #3c3846 0%,  #3c3846 100%)`,
          '&:hover': {
            border: '2px solid',

            transition: 'all 0.2s ease',
            borderColor: theme => theme.palette.primary.main,
            transform: 'scale(1.04)',
          },
        }}
      >
        <CardActionArea
          onClick={onClick}
          sx={{
            boxShadow: 'inset 0px 0px 0px 2px rgba(0,0,0,0.3)',
          }}
        >
          <CardContent
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 1,
              p: 2,
            }}
          >
            <PriceDisplayRatio
              coreLiquidityBalance={reward_amount}
              baseCurrency={CURRENCIES[1]}
              uosPriceInBaseCurrency={marketPrices?.USD}
            />
            <Divider sx={{ width: '100%' }} />
            <List
              sx={{ width: '100%', justifyContent: 'center', display: 'flex' }}
              disablePadding
            >
              <ListItem sx={{ width: 'fit-content' }}>
                <ListItemAvatar>
                  <Avatar sx={{}}>{id}</Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={'By ' + influencer}
                  secondary={
                    participants
                      ? formatNumeralAbreviation(participants?.length) +
                        ' participants'
                      : undefined
                  }
                />
              </ListItem>
            </List>
          </CardContent>
        </CardActionArea>
      </Card>
      <Box
        sx={{
          position: 'absolute',
          display: 'flex',
          transition: 'all 0.5s ease',
          top: isHovered ? '-15px' : '-10px',
          left: isHovered ? '-15px' : '-10px',
        }}
      >
        <Grow in={true} unmountOnExit>
          <Box>
            <RaffleChipState active={raffle?.active} closed={raffle?.closed} />
          </Box>
        </Grow>
      </Box>
    </Box>
  );
}
