import { tParticipant, tRaffle } from '@/types';
import {
  Avatar,
  Box,
  Card,
  CardActionArea,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from '@mui/material';
import { ultraColors } from '@ultra-alliance/uikit';
import PriceDisplayRatio from './PriceDisplayRatio';
import { useUltra } from '@ultra-alliance/react-ultra';
import { formatTimeSinceNow } from '@ultra-alliance/ultra-sdk';
import useBreakPoint from '@/hooks/useBreakpoint';

interface RaffleParticipationCardProps {
  participation?: tParticipant;
  raffle?: tRaffle;
  onClick?: () => void;
}

export default function RaffleParticipationCard({
  participation,
  raffle,
  onClick,
}: RaffleParticipationCardProps) {
  const { marketPrices } = useUltra();
  const { isSm } = useBreakPoint();
  return (
    <Card
      sx={{
        width: '100%',
        background: ultraColors.eclipseTwilight,
        border: '1px solid',
        borderColor: '#cccccc5a',
        boxShadow: theme => theme.shadows[8],
        transition: 'all 0.5s ease',
        transformOrigin: 'center top',
        '&:hover': {
          border: '2px solid',
          transition: 'all 0.2s ease',
          borderColor: theme => theme.palette.primary.main,
          transform: 'scale(1.03)',
          height: 'calc(100% + 5px)',
        },
      }}
    >
      <CardActionArea
        onClick={onClick}
        sx={{
          height: '100%',
        }}
      >
        <List disablePadding sx={{}}>
          <ListItem
            secondaryAction={
              !isSm && (
                <PriceDisplayRatio
                  coreLiquidityBalance={raffle?.reward_amount}
                  uosPriceInBaseCurrency={marketPrices?.USD}
                />
              )
            }
          >
            <ListItemAvatar>
              <Avatar>1</Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                  <span style={{ opacity: 0.6, fontWeight: 'normal' }}>
                    Raffle #{raffle?.id}
                    {' | '}
                  </span>
                  By {raffle?.influencer}
                </Typography>
              }
              primaryTypographyProps={{
                fontWeight: 'bold',
              }}
              secondary={
                <Typography
                  variant="overline"
                  sx={{
                    color: 'text.secondary',
                    fontWeight: 'bold',
                  }}
                >
                  <span
                    style={{
                      opacity: 0.6,
                      fontWeight: 'normal',
                    }}
                  >
                    Participated{'  '}
                  </span>
                  {formatTimeSinceNow(participation?.participated_at)}
                </Typography>
              }
            />
          </ListItem>
          {isSm && (
            <Box pb={2}>
              <PriceDisplayRatio
                coreLiquidityBalance={raffle?.reward_amount}
                uosPriceInBaseCurrency={marketPrices?.USD}
              />
            </Box>
          )}
        </List>
      </CardActionArea>
    </Card>
  );
}
