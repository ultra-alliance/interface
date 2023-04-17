import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemText,
  Stack,
  Tooltip,
} from "@mui/material";

export interface ListItemData {
  visible: boolean;
  secondaryAction?: React.ReactNode;
  tooltip?: string;
  primaryText?: React.ReactNode;
  children?: React.ReactNode;
  secondaryText?: React.ReactNode;
}

export interface DataListProps {
  listItems: ListItemData[];
}

function DataList({ listItems }: DataListProps) {
  return (
    <List>
      {listItems.map((item, index) => (
        <Box
          key={index}
          sx={{
            display: !item.visible ? "none" : "block",
          }}
        >
          <ListItem
            sx={{
              my: 1,
            }}
            secondaryAction={
              <Stack direction={"row"} spacing={1} alignItems={"center"}>
                {item.secondaryAction}
              </Stack>
            }
          >
            <ListItemText
              primary={
                <Stack
                  direction={"row"}
                  spacing={2}
                  gap={1}
                  alignItems={"center"}
                >
                  <Tooltip disableFocusListener arrow title={item.tooltip}>
                    <Box>{item.primaryText}</Box>
                  </Tooltip>
                </Stack>
              }
              secondary={item.secondaryText}
            />
          </ListItem>
          {item.children}
          {index !== listItems.length - 1 && <Divider sx={{ mx: 2 }} />}
        </Box>
      ))}
    </List>
  );
}

export default DataList;
