import useBreakPoint from '@/hooks/useBreakpoint';
import usePageRedirect from '@/hooks/usePageRedirect';
import {
  Avatar,
  Grid,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Skeleton,
} from '@mui/material';
import {
  useLocalisation,
  useUltra,
  useUltraQuery,
} from '@ultra-alliance/react-ultra';
import { tFactory, tFactoryManifested } from '@ultra-alliance/ultra-sdk';
import { useMemo } from 'react';

export default function LatestFactories() {
  const { goToFactory } = usePageRedirect();
  const { baseCurrency } = useLocalisation();
  const { marketPrices, isAuthenticated, ultra } = useUltra();
  const { isSm } = useBreakPoint();

  const styles = useMemo(() => {
    return {
      avatarDimensions: {
        mr: isSm ? 0 : 3,
        width: isSm ? '100%' : 50,
        height: isSm ? '100%' : 50,
      },
      listItemButton: {
        mr: isSm ? 0 : 3,
        borderRadius: 2,
        width: isSm ? '100%' : 'auto',
        height: isSm ? '100%' : 'auto',
        margin: isSm ? 0 : 'auto',
        padding: isSm ? 0 : 'auto',
      },
    };
  }, [isSm]);
  const { avatarDimensions, listItemButton } = styles;

  const { data, isLoading } = useUltraQuery({
    queryFn: async () => {
      const res = await ultra?.api.getTableRows<tFactory>({
        table: 'factory.b',
        code: 'eosio.nft.ft',
        scope: 'eosio.nft.ft',
        config: {
          json: true,
          limit: 4,
          reverse: true,
        },
      });

      const manifested: tFactoryManifested[] = [];
      if (!res?.rows) return [];
      for (let i = 0; i < res?.rows.length; i++) {
        try {
          const fact = await ultra?.api.getFactoryManifested(res.rows[i].id, {
            square: true,
          });
          if (fact) {
            manifested.push(fact);
          }
        } catch (error) {
          console.error(error);
        }
      }

      return manifested;
    },
    autofetch: true,
  });

  return (
    <>
      {(!isLoading ? data : [{}, {}, {}, {}])?.map(
        (factory: tFactoryManifested | any, index: number) => (
          <Grid
            item
            xs={6}
            sm={6}
            md={6}
            lg={6}
            key={index}
            columnGap={0}
            rowGap={0}
          >
            <ListItemButton
              sx={listItemButton}
              onClick={() => {
                if (typeof factory?.data?.id === 'number')
                  goToFactory(factory?.data?.id);
              }}
            >
              {isLoading ? (
                <Skeleton variant="rounded" sx={avatarDimensions} />
              ) : (
                <Avatar
                  sx={avatarDimensions}
                  src={factory?.manifest?.media?.images?.square}
                />
              )}
              {!isSm && (
                <ListItemText
                  primary={
                    factory?.manifest?.name ?? (
                      <Skeleton variant="text" width={100} height={35} />
                    )
                  }
                />
              )}
            </ListItemButton>
          </Grid>
        ),
      )}
    </>
  );
}
