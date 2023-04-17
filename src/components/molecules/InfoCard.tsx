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
    <Box
      sx={{
        boxShadow: theme => theme.shadows[5],
      }}
    >
      <Card
        variant="elevation"
        elevation={3}
        sx={{
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
          border: '1px solid',
          borderColor: 'divider',

          borderBottom: 'none',
        }}
      >
        <Box
          sx={{
            px: 2,
            py: 1,
            display: 'flex',
            borderBottom: '1px solid',
            borderColor: 'divider',
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
        }}
        variant="outlined"
        elevation={1}
      >
        {children}
      </Card>
    </Box>
  );
}

export default InfoCard;
