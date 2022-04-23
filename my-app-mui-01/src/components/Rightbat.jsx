import React from 'react'
import { Avatar, AvatarGroup, Box , ListItemAvatar , ListItemText ,Divider , List , ListItem } from "@mui/material"
import Typography from '@mui/material/Typography';

export const Rightbat = () => {
  return (
    <Box


      flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }} >

      <Box position="fixed">
        <Typography variant='h6' fontWeight={100}>
          Online Friends
        </Typography>
        <AvatarGroup max={6}>
          <Avatar alt="Remy Sharp" src="https://avatarfiles.alphacoders.com/320/320023.jpg" />
          <Avatar alt="Travis Howard" src="https://avatarfiles.alphacoders.com/244/244811.jpg" />
          <Avatar alt="Cindy Baker" src="https://avatarfiles.alphacoders.com/226/226225.jpg" />
          <Avatar alt="Agnes Walker" src="https://avatarfiles.alphacoders.com/219/219361.png" />
          <Avatar alt="Trevor Henderson" src="https://avatarfiles.alphacoders.com/219/219361.png" />
          <Avatar alt="Trevor Henderson" src="https://avatarfiles.alphacoders.com/219/219361.png" />
          <Avatar alt="Trevor Henderson" src="https://avatarfiles.alphacoders.com/219/219361.png" />
        </AvatarGroup>

        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://avatarfiles.alphacoders.com/219/219361.png" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="https://avatarfiles.alphacoders.com/226/226225.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="https://avatarfiles.alphacoders.com/244/244811.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>

      </Box>
    </Box>
  )
}

export default Rightbat;