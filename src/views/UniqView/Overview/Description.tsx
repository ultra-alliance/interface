import React from "react";
import InfoCard from "@/components/molecules/InfoCard";
import { Button, Divider, Skeleton, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
interface DescriptionProps {
  description?: string;
}

export default function Description({ description }: DescriptionProps) {
  const [extended, setExtended] = React.useState(false);

  function renderDescription() {
    if (extended) {
      return description;
    }
    if (description && description.length > 200) {
      return description?.slice(0, 200) + "...";
    }
    return description;
  }

  return (
    <InfoCard title="Description">
      <Typography paragraph sx={{ p: 2, whiteSpace: "pre-wrap" }}>
        {description ? (
          renderDescription()
        ) : (
          <Skeleton variant="rectangular" height={100} />
        )}
      </Typography>
      <Button
        variant="text"
        fullWidth
        sx={{
          color: "white",
        }}
        startIcon={<ExpandMoreIcon />}
        onClick={() => setExtended(!extended)}
      >
        {extended ? "Show less" : "Show more"}
      </Button>
    </InfoCard>
  );
}
