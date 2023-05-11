import { Avatar, Box, TextField } from '@mui/material';
import { CURRENCIES } from '@ultra-alliance/react-ultra';

interface InputUosPriceProps {
  value?: number;
  handleValueChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  error?: boolean;
  helperText?: string;
}

export default function InputUosPrice({
  value,
  handleValueChange,
  placeholder,
  error,
  helperText,
}: InputUosPriceProps) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
      <Avatar
        sx={{
          color: 'action.active',
          bgcolor: 'primary.main',
          mr: 1,
          my: 1,
          width: 36,
          height: 36,
        }}
      >
        {CURRENCIES[0].symbol}
      </Avatar>
      <TextField
        fullWidth
        id="input-with-sx"
        variant="outlined"
        size="small"
        type="number"
        value={value}
        onChange={handleValueChange}
        placeholder={placeholder}
        sx={{
          mt: 1,
        }}
        inputProps={{
          sx: {
            bgcolor: 'background.paper',
            borderColor: '1px solid #ffffff9a',
          },
        }}
        error={error}
        helperText={helperText}
      />
    </Box>
  );
}
