import { MenuItem, Select, SelectChangeEvent } from '@mui/material';

interface SelectFilterOrderProps {
  sortOrder: 'asc' | 'desc' | 'recent';
  handleSortOrderChange: (
    event: SelectChangeEvent<'asc' | 'desc' | 'recent'>,
  ) => void;
  isLoading: boolean;
}

export default function SelectFilterOrder({
  sortOrder,
  handleSortOrderChange,
  isLoading,
}: SelectFilterOrderProps) {
  return (
    <Select
      value={sortOrder}
      onChange={handleSortOrderChange}
      size="small"
      variant="filled"
      disabled={isLoading}
      sx={{}}
      renderValue={value => {
        return value === 'asc'
          ? 'Price ascending'
          : value === 'desc'
          ? 'Price descending'
          : 'Recently listed';
      }}
    >
      <MenuItem value="asc">
        <b>Price ascending </b>
      </MenuItem>
      <MenuItem value="desc">
        <b> Price descending</b>
      </MenuItem>
      <MenuItem value="recent">
        <b>Recently listed</b>
      </MenuItem>
    </Select>
  );
}
