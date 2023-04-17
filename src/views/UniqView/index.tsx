import { LoyaltyRounded, StorageRounded } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Card,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Skeleton,
  Typography,
} from "@mui/material";
import React from "react";
import HTMLHead from "../shared/HTMLHead";
import App from "../shared/layouts/App";
import UniqCardMenu from "./UniqCardMenu";
import usePagination from "@/hooks/usePagination";
import { useRouter } from "next/router";
import { useUltraQuery, useUltra } from "@ultra-alliance/react-ultra";
import InfoCard from "@/components/molecules/InfoCard";
import Description from "./Overview/Description";
import Information from "./Overview/Information";
import { LoadingIndicator } from "@/components";
import Specifications from "./Overview/Specification";
import Details from "./Gallery/Details";
import Pictures from "./Gallery/Pictures";

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          {children}
        </Box>
      )}
    </div>
  );
}

export default function UniqView() {
  const { ultra } = useUltra();
  const { currentPage, jump } = usePagination({ items: [], itemsPerPage: 10 });
  const router = useRouter();
  const { uniqId } = router.query;

  const {
    data: uniq,
    isLoading,
    fetchData,
  } = useUltraQuery({
    queryFn: async () => {
      return await ultra?.getUniqManifested(uniqId as string);
    },
    callback: (data) => {},
    autofetch: false,
  });

  React.useEffect(() => {
    if (uniqId) {
      fetchData();
    }
  }, [uniqId]);

  return (
    <>
      <HTMLHead />
      <App>
        <Grid container columns={12} columnSpacing={2} rowSpacing={2}>
          <Grid item xs={12} lg={3}>
            <UniqCardMenu
              uniq={uniq}
              uosPriceInBaseCurrency={0.32}
              onTabChange={(_e, v) => jump(v)}
              menus={[
                {
                  id: 1,
                  name: "Overview",
                  link: "/account/overview",
                  onClick: () => {},
                },
                {
                  id: 2,
                  name: "Gallery",
                  link: "/account/gallery",
                  onClick: () => {},
                },
              ]}
              page={currentPage}
            />
          </Grid>
          <Grid item xs={12} lg={9}>
            {uniq ? (
              <>
                <TabPanel value={currentPage} index={1}>
                  <Description description={uniq?.manifest?.description} />
                  <Information uniqData={uniq} />
                  <Specifications uniqData={uniq} />
                </TabPanel>
                <TabPanel value={currentPage} index={2}>
                  <Pictures uniqData={uniq} />
                  <Details uniqData={uniq} />
                </TabPanel>
              </>
            ) : (
              <LoadingIndicator />
            )}
          </Grid>
        </Grid>
      </App>
    </>
  );
}
