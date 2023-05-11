import { Info } from '@mui/icons-material';
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
  Tooltip,
} from '@mui/material';

export interface ListItemData {
  visible: boolean;
  secondaryAction?: React.ReactNode;
  tooltip?: string;
  primaryText?: React.ReactNode;
  children?: React.ReactNode;
  secondaryText?: React.ReactNode;
  info?: boolean;
}

export interface DataListProps {
  listItems: ListItemData[];
  withDivider: boolean;
}

DataList.defaultProps = {
  withDivider: true,
};

function DataList({ listItems, withDivider }: DataListProps) {
  return (
    <List>
      {listItems.map((item, index) => (
        <Box
          key={index}
          sx={{
            display: !item.visible ? 'none' : 'block',
          }}
        >
          <ListItem
            sx={{ my: 1 }}
            secondaryAction={
              item?.secondaryAction && (
                <Stack direction={'row'} spacing={1} alignItems={'center'}>
                  {item.secondaryAction}
                </Stack>
              )
            }
          >
            <ListItemText
              sx={{}}
              primary={
                item?.primaryText && (
                  <Tooltip disableFocusListener arrow title={item.tooltip}>
                    <Stack
                      direction={'row'}
                      spacing={2}
                      gap={1}
                      alignItems={'center'}
                      width={'fit-content'}
                    >
                      {item?.info && (
                        <ListItemAvatar>
                          <Info
                            sx={{
                              color: 'primary.light',
                              opacity: 0.5,
                            }}
                          />
                        </ListItemAvatar>
                      )}
                      <Box>{item.primaryText}</Box>
                    </Stack>
                  </Tooltip>
                )
              }
              secondary={item?.secondaryText && item.secondaryText}
            />
            {item?.children && <Box width={'100%'}>{item.children}</Box>}
          </ListItem>

          {withDivider && index !== listItems.length - 1 && (
            <Divider sx={{ mx: 2 }} />
          )}
        </Box>
      ))}
    </List>
  );
}

export default DataList;
