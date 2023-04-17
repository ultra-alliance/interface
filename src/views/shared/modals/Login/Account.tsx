import * as React from "react";

import {
  AccountBoxRounded,
  GroupAddRounded,
  LogoutRounded,
  MoreHorizRounded,
  Telegram,
  Twitter,
  YouTube,
} from "@mui/icons-material";
import {
  Box,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Button,
  Avatar,
  Chip,
  Typography,
} from "@mui/material";
import useBreakPoint from "@/hooks/useBreakpoint";
import { useUltra } from "@ultra-alliance/react-ultra";
import { formatName, formatUosBalance } from "@ultra-alliance/ultra-sdk";
import { toast } from "react-toastify";

export default function AvatarMenu() {
  const { logout, account } = useUltra();
  const { isSm } = useBreakPoint();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const onClickViewProfile = () => {
    // goToAccount(account?.name);
    handleClose();
  };

  const onClickLogout = () => {
    logout({
      throwOnError: true,
    }).then(() => {
      toast.success("Logged out");
    });
    handleClose();
  };

  const menus: any = [
    // {
    //   name: "View Profile",
    //   icon: <AccountBoxRounded sx={{ mr: 2 }} />,
    //   onClick: onClickViewProfile,
    //   divider: true,
    // },

    {
      name: "Log out",
      icon: <LogoutRounded sx={{ mr: 2 }} />,
      onClick: onClickLogout,
    },
  ];

  return (
    <React.Fragment>
      <Stack direction="row" spacing={1} alignItems={"center"}>
        <Avatar
          sx={{
            display: isSm ? "none" : "flex",
            height: 22,
            width: 22,
            fontSize: 10,
            color: "white",
            fontWeight: "bold",
            bgcolor: "primary.main",
          }}
        >
          ᕫ
        </Avatar>
        <Typography variant="overline" display={isSm ? "none" : "block"}>
          <span style={{ textTransform: "lowercase" }}>x </span>
          {formatUosBalance(account?.core_liquid_balance?.split(" ")[0] || 0)}
        </Typography>
        <Button
          onClick={handleClick}
          startIcon={
            isSm ? null : (
              <Avatar
                variant="rounded"
                sx={{
                  height: 28,
                  width: 28,
                  mr: isSm ? 0 : 0.5,
                  bgcolor: "primary.light",
                }}
              />
            )
          }
          color="secondary"
          sx={{ color: "white" }}
          variant="text"
        >
          {isSm && account ? (
            <Avatar
              variant="rounded"
              sx={{
                height: 28,
                width: 28,
                mr: isSm ? 0 : 0.5,
                bgcolor: "primary.light",
              }}
            />
          ) : (
            formatName({
              name: account?.account_name || "",
              num: 3,
            })
          )}
        </Button>
      </Stack>

      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            borderColor: "divider",
            borderWidth: 1,
            borderStyle: "solid",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        {menus.map((menu: any, index: number) => (
          <div key={menu.name}>
            <MenuItem
              key={menu.name}
              disabled={menu.disabled}
              onClick={menu.onClick}
            >
              {menu.icon} {menu.name}
            </MenuItem>
            {menu.divider && <Divider />}
          </div>
        ))}
      </Menu>
    </React.Fragment>
  );
}
