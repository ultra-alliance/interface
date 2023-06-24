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

export default function LatestFactories() {
  const { goToFactory } = usePageRedirect();
  const { baseCurrency } = useLocalisation();
  const { marketPrices, isAuthenticated, ultra } = useUltra();

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
      console.log('res', res);
      for (let i = 0; i < res?.rows.length; i++) {
        console.log('res.rows[i].id', res.rows[i].id);
        try {
          const fact = await ultra?.api.getFactoryManifested(res.rows[i].id, {
            square: true,
          });
          if (fact) {
            manifested.push(fact);
          }
        } catch (error) {
          console.log('error', error);
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
          <Grid item xs={6} sm={6} md={6} lg={6} key={index}>
            <ListItemButton
              sx={{ borderRadius: 2 }}
              onClick={() => {
                if (typeof factory?.data?.id === 'number')
                  goToFactory(factory?.data?.id);
              }}
            >
              <ListItemAvatar>
                {!isLoading ? (
                  <Avatar
                    sx={{
                      width: 50,
                      height: 50,
                      mr: 3,
                    }}
                    src={factory?.manifest?.media?.images?.square}
                  />
                ) : (
                  <Skeleton
                    variant="rounded"
                    width={50}
                    height={50}
                    sx={{ mr: 3 }}
                  />
                )}
              </ListItemAvatar>
              <ListItemText
                primary={
                  factory?.manifest?.name ?? (
                    <Skeleton variant="text" width={100} height={35} />
                  )
                }
              />
            </ListItemButton>
          </Grid>
        ),
      )}
    </>
  );
}
