import { CurrencyExchange } from '@mui/icons-material';
import { Avatar, Stack, SxProps, Typography } from '@mui/material';

export interface PageTitleProps {
  icon?: React.ReactNode;
  title?: string;
  fadedTitle?: string;
  sx?: SxProps;
}

const PageTitle = ({ icon, title, fadedTitle, sx }: PageTitleProps) => {
  return (
    <Stack direction="row" spacing={2} alignItems={'center'} sx={sx}>
      <Avatar
        sx={{
          width: 48,
          height: 48,
          bgcolor: '#ffffff1a',
        }}
        variant="circular"
      >
        {icon}
      </Avatar>
      <Typography variant="h6" component="div">
        {title}
        <span style={{ opacity: 0.6 }}> {fadedTitle}</span>
      </Typography>
    </Stack>
  );
};

PageTitle.defaultProps = {
  icon: <CurrencyExchange />,
  title: 'Purchase on',
  fadedTitle: 'Uniq Marketplace',
};

export default PageTitle;
