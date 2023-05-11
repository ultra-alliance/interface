import { Close } from '@mui/icons-material';
import { IconButton } from '@mui/material';

export default function CloseButton({ onClick }: { onClick?: () => void }) {
  return (
    <IconButton
      onClick={() => {
        if (onClick) {
          onClick();
        }
      }}
      sx={{
        bgcolor: '#ffffff1a',
        borderRadius: 2,
        height: 'fit-content',
      }}
    >
      <Close />
    </IconButton>
  );
}
