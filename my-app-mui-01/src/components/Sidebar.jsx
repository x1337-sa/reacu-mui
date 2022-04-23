import React from 'react'
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import PeopleIcon from '@mui/icons-material/People';
import StorefrontIcon from '@mui/icons-material/Storefront';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import Switch from '@mui/material/Switch';
import ModeNightIcon from '@mui/icons-material/ModeNight';

export const Sidebar = () => {
  return (
    <Box  flex={1} p={2} sx={{display:{xs:"none", sm:"block"}}}>
    <Box position="fixed">
    <List>
    
    <ListItem disablePadding>
      <ListItemButton compnent="a" href="#home">
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="Homepage" />
      </ListItemButton>
    </ListItem>

    <ListItem disablePadding>
      <ListItemButton compnent="a" href="#Pages">
        <ListItemIcon>
          <MenuBookIcon />
        </ListItemIcon>
        <ListItemText primary="Pages" />
      </ListItemButton>
    </ListItem>

    <ListItem disablePadding>
      <ListItemButton compnent="a" href="#Group">
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Groups" />
      </ListItemButton>
    </ListItem>

    <ListItem disablePadding>
      <ListItemButton compnent="a" href="#MarketPlace">
        <ListItemIcon>
          <StorefrontIcon />
        </ListItemIcon>
        <ListItemText primary="Market Place" />
      </ListItemButton>
    </ListItem>

    <ListItem disablePadding>
      <ListItemButton compnent="a" href="#Friends">
        <ListItemIcon>
          <PersonAddIcon />
        </ListItemIcon>
        <ListItemText primary="Friends" />
      </ListItemButton>
    </ListItem>
    
    <ListItem disablePadding>
      <ListItemButton compnent="a" href="#Setting">
        <ListItemIcon>
          <SettingsIcon />
        </ListItemIcon>
        <ListItemText primary="Setting" />
      </ListItemButton>
    </ListItem>

    <ListItem disablePadding>
      <ListItemButton compnent="a" href="#Profile">
        <ListItemIcon>
          <AccountBoxIcon />
        </ListItemIcon>
        <ListItemText primary="Profile" />
      </ListItemButton>
    </ListItem>

    <ListItem disablePadding>
      <ListItemButton compnent="a" href="#Profile">
        <ListItemIcon>
          <ModeNightIcon />
        </ListItemIcon>
        
        <Switch />

      </ListItemButton>
    </ListItem>

    </List>
    </Box>

    </Box>
   
  )
}

export default Sidebar;