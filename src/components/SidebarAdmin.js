import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import StoreIcon from '@mui/icons-material/Store';
import PersonIcon from '@mui/icons-material/Person';
import PostAddIcon from '@mui/icons-material/PostAdd';
import ReportIcon from '@mui/icons-material/Report';
import Avatar from '@mui/material/Avatar';
import myImage from '../assets/logo-bar@2x.png';


const drawerWidth = 300;

export default function SidebarSeller() {

  const category = [
    {
      name: 'Dashboards',
      icon: <EqualizerIcon style={{ color: "white", fontSize: '30px'}}/>
    },
    {
      name: 'Users',
      icon: <PersonIcon style={{ color: "white", fontSize: '30px'}}/>
    },
    {
      name: 'Posts',
      icon: <PostAddIcon style={{ color: "white", fontSize: '30px'}}/>
    },
    {
      name: 'Shop',
      icon: <StoreIcon style={{ color: "white", fontSize: '30px'}}/>
    },
    {
      name: 'Reports',
      icon: <ReportIcon style={{ color: "white", fontSize: '30px'}}/>
    },
]  

  return (
    <Box sx={{ display: 'flex' ,}}>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            marginLeft: '30px',
            marginTop: '30px',
            marginBottom: "30px",
            borderRadius: '10px',
            maxHeight: '850px',
            backgroundColor : '#00AD7C',
            color : 'white'
          },
        }}
        variant="permanent"
        anchor="left"
      >
          <img src={myImage} alt="Logo"
            style={{width : 200 , height : 60, margin : '20px', position: 'relative', top: '0', left : '30px'}}
          />
        <Divider variant='middle' style={{backgroundColor : '#f5f5f5',marginBottom: '10px' }}/>
        <List style={{margin : '0px 20px', maxHeight: '40px'}}>
          <Avatar
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
            sx={{ width: 30, height: 30 }}
          />
          <p style={{margin : '0', position: 'relative', top: '-30px', left : '-15px', fontSize: '20px'}}>Username</p>
        </List>
        <Divider variant='middle'style={{backgroundColor : '#f5f5f5', marginBottom: '20px'}}/>
        <List>
          {category.map((item) => (
            <ListItem key={item.name} disablePadding
            sx={{
                marginBottom: '20px',
                backgroundColor : '#52D681',
                width: '270px',
                position: 'relative',
                left: '15px',
                borderRadius: '4px'
            }}
            >
              <ListItemButton>
                <ListItemIcon >
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.name}/>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider variant='middle'style={{backgroundColor : '#f5f5f5', marginBottom: '20px'  }}/>
      </Drawer>
    </Box>
  );
}
