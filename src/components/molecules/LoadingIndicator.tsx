import * as React from "react";
import { LinearProgress, Typography } from "@mui/material";

export default function LoadingIndicator() {
  const randomNftTexts = [
    "Discover Unique collectibles",
    "Loading incredibles images",
    "Upgrading the NFT standard",
    "Downloading cool content",
    "Entering the UOS",
  ];

  const [randomText, setRandomText] = React.useState<string>(randomNftTexts[0]);

  // Change the random text every 3 seconds
  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setRandomText(
        randomNftTexts[Math.floor(Math.random() * randomNftTexts.length)]
      );
    }, 3000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div style={{ height: "300px" }}>
      <Typography variant="overline" align="center" sx={{ mt: 2 }}>
        {randomText}
      </Typography>
      <LinearProgress variant="indeterminate" />
    </div>
  );
}
