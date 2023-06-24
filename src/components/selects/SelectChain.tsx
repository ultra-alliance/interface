import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Stack } from '@mui/material';
import { CHAINS } from '@ultra-alliance/ultra-sdk';
import { useUltra } from '@ultra-alliance/react-ultra';

const chains = ['mainnet, testnet, local'];

export default function SelectChain() {
  const { chain, changeChain } = useUltra();

  const handleChange = async (event: SelectChangeEvent) => {
    await changeChain(event.target.value as keyof typeof CHAINS);
  };

  return (
    <Stack direction={'row'} alignItems={'center'} gap={2}>
      <FormControl
        sx={{ minWidth: 120 }}
        fullWidth
        size="small"
        variant="filled"
      >
        <InputLabel id="demo-select-small-label">Using</InputLabel>
        <Select
          label="Using"
          labelId="demo-select-small-label"
          id="demo-select-small"
          fullWidth
          value={chain?.name.toUpperCase()}
          onChange={handleChange}
        >
          {Object.keys(CHAINS).map((_chain, i) => (
            <MenuItem key={i} value={_chain}>
              {_chain.charAt(0).toUpperCase() +
                _chain.slice(1).toLocaleLowerCase()}

              {i === 2 && ' Network'}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Stack>
  );
}
