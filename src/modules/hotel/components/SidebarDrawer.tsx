import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import { Typography } from "@mui/material";
import { AppBar, Drawer, DrawerHeader } from "../utils/configDrawer";

import LogoutIcon from "@mui/icons-material/Logout";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import BedroomParentIcon from "@mui/icons-material/BedroomParent";
import MapsHomeWorkIcon from "@mui/icons-material/MapsHomeWork";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useLogOut } from "../../auth/hooks/useLogOut";
import { useNavigate } from "react-router-dom";

const optionsMenu = [
  { title: "Crear Hotel", icon: <AddCircleIcon />, to: "/create" },
  { title: "Mis hoteles", icon: <BedroomParentIcon />, to: "/my-hotels" },
  { title: "Todos los Hoteles", icon: <MapsHomeWorkIcon />, to: "/" },
  { title: "Mi perfil", icon: <AccountCircleIcon />, to: "/my-profile" },
];

export const SidebarDrawer = ({ title }: { title: string }) => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { logOutFire } = useLogOut();

  const handleRoute = (route: string) => {
    navigate(route);
  };

  return (
    <>
      <AppBar position="fixed" open={open} sx={{}}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={() => setOpen(true)}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" noWrap >
            {title}
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={() => setOpen(false)}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />

        <List>
          {optionsMenu.map(({ title, icon, to }, index) => (
            <ListItem key={title} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                onClick={() => handleRoute(to)}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {icon}
                </ListItemIcon>
                <ListItemText primary={title} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}

          <ListItem key={title} disablePadding sx={{ display: "block" }}>
            <ListItemButton
              onClick={() => logOutFire()}
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText
                primary={"Cerrar Sesion"}
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};
