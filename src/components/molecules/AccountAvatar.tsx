import {
  Avatar,
  AvatarProps,
  Stack,
  StackProps,
  Typography,
  TypographyProps,
} from '@mui/material';

interface AccountAvatarProps {
  AvatarProps?: AvatarProps;
  TypographyProps?: TypographyProps;
  text?: string;
  secondaryText?: string;
  isBoxEnd?: boolean;
  StackProps?: StackProps;
}

export default function AccountAvatar({
  AvatarProps,
  TypographyProps,
  text,
  secondaryText,
  isBoxEnd,
  StackProps,
}: AccountAvatarProps) {
  const avatar = <Avatar {...AvatarProps} />;
  const content = (
    <Typography fontWeight="bold" {...TypographyProps}>
      {text} <span style={{ opacity: 0.6 }}>{secondaryText}</span>
    </Typography>
  );
  const items = isBoxEnd ? [content, avatar] : [avatar, content];
  return (
    <Stack
      direction="row"
      alignItems="center"
      gap={1}
      width="fit-content"
      {...StackProps}
    >
      {items}
    </Stack>
  );
}
