import { Avatar, AvatarProps, Chip, ChipProps } from '@mui/material';
import { formatNumeralAbreviation } from '@ultra-alliance/ultra-sdk';

interface UniqChipProps {
  label?: string;
  ChipProps?: ChipProps;
  IconProps?: AvatarProps;
}

export default function UniqChip({
  label,
  ChipProps,
  IconProps,
}: UniqChipProps) {
  return (
    <Chip
      variant="filled"
      sx={{
        borderRadius: 2,
        p: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: 'fit-content',
      }}
      label={label ?? undefined}
      avatar={
        <Avatar
          src="/uniq-icon.svg"
          sx={{ bgcolor: 'transparent' }}
          {...IconProps}
        />
      }
      {...ChipProps}
    />
  );
}
