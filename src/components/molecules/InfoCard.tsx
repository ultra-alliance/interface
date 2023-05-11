import {
  Box,
  Card,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Skeleton,
  Typography,
} from '@mui/material';

interface InfoCardProps {
  children?: React.ReactNode;
  title: string;
}

InfoCard.defaultProps = {
  children: <Skeleton variant="rectangular" height={100} />,
  title: 'Ultra Operating System',
};

function InfoCard({ children, title }: InfoCardProps) {
  return (
    <Box sx={{}}>
      <Card
        variant="elevation"
        elevation={0}
        sx={{
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,

          borderBottom: 'none',
        }}
      >
        <Box
          sx={{
            px: 2,
            py: 1,
            display: 'flex',
          }}
        >
          <Typography fontWeight={'bold'} variant="subtitle1" component="h1">
            {title}
          </Typography>
        </Box>
      </Card>
      <Card
        sx={{
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0,
          bgcolor: 'transparent',
          border: '0px',
        }}
        variant="outlined"
      >
        {children}
      </Card>
    </Box>
  );
}

export default InfoCard;
