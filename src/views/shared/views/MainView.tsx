import { Box, Grid, Grow } from '@mui/material';
import React from 'react';
import CardMenu, { CardMenuProps } from '@/components/molecules/CardMenu';
import { LoadingIndicator } from '@/components';

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
  visible?: boolean;
}

function TabPanel(props: TabPanelProps) {
  let { children, value, index, visible, ...other } = props;
  if (visible === undefined) visible = true;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && visible && (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
          }}
        >
          {children}
        </Box>
      )}
    </div>
  );
}

interface MainViewProps {
  cardMenuProps: CardMenuProps;
  isLoading?: boolean;
}

export default function MainView({ cardMenuProps, isLoading }: MainViewProps) {
  return (
    <>
      <Grid container columns={12} columnSpacing={2} rowSpacing={2}>
        <Grid item xs={12} lg={3}>
          <CardMenu {...cardMenuProps} />
        </Grid>
        <Grid item xs={12} lg={9}>
          {!isLoading ? (
            <>
              {cardMenuProps?.menus?.map((menu, index) => (
                <Grow
                  in={index + 1 === cardMenuProps.page}
                  unmountOnExit
                  key={`tab-${index}`}
                >
                  <Box>
                    <TabPanel value={cardMenuProps.page} index={index + 1}>
                      {menu.tabContent}
                    </TabPanel>
                  </Box>
                </Grow>
              ))}
            </>
          ) : (
            <LoadingIndicator />
          )}
        </Grid>
      </Grid>
    </>
  );
}
