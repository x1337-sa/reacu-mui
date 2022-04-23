import {React , useState} from 'react'
import { AppBar, Box, Toolbar, styled, Typography, InputBase , Badge, Avatar, Menu, MenuItem  } from "@mui/material";
import PetsIcon from '@mui/icons-material/Pets';
import MailIcon from '@mui/icons-material/EmailOutlined';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: 'space-between',
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
  
}));

const Icons = styled("Box")(({ theme }) => ({
  display:"none" , gap:"20px", alignItems:"center",
  [theme.breakpoints.up("sm")]:{
    display:"flex",
  }
}));

const UserBox = styled("Box")(({ theme }) => ({
  display:"flex" , gap:"10px", alignItems:"center",
  [theme.breakpoints.up("sm")]:{
    display:"none",
  }
}));



export const Navbar = () => {
  const [open, setOpen] = useState(false)
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>Test </Typography>
        <PetsIcon sx={{ display: { xs: "block", sm: "none" } }} />
        <Search><InputBase placeholder="search..." /></Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <MailIcon  />
          </Badge>
          <Badge badgeContent={2} color="error">
            <NotificationsNoneIcon  />
          </Badge>
          <Avatar  sx={{width:30, height:30}} 
          
          onClick={(e)=>setOpen(true)}
          />
          
        </Icons>
        <UserBox onClick={(e)=>setOpen(true)}>
        <Avatar  sx={{width:30, height:30}} />
        <Typography variant='span'>
          a6lq
        </Typography>
        </UserBox>
      </StyledToolbar>

      <Menu
        id="basic-menu"
        // anchorEl={anchorEl}
        //open={open}
        open={open}
        onClose={(e)=>setOpen(false)}
        anchorOrigin={{
          vertical:'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical:'top',
          horizontal: 'right',
        }}
        // onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}

export default Navbar;