import React from 'react';
import { Grid, AppBar, Toolbar, Typography, Box, IconButton, Menu, MenuItem, Card, CardContent, Avatar, Button, Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MessageIcon from '@mui/icons-material/Message';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PeopleIcon from '@mui/icons-material/People';
import ReceiptIcon from '@mui/icons-material/Receipt';
import PostAddIcon from '@mui/icons-material/PostAdd';
import PaymentIcon from '@mui/icons-material/Payment';
import { LineChart } from '@mui/x-charts/LineChart';
import { styled } from '@mui/system';

const AppBarStyled = styled(AppBar)({
  backgroundColor: '#fff',
  boxShadow: 'none',
  borderBottom: '1px solid #e0e0e0',
});

const Grow = styled('div')({
  flexGrow: 1,
});

const CardStyled = styled(Card)({
  width: '90%',
  // margin: '5px',
});

const CardContentStyled = styled(CardContent)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

const CardIcon = styled(Avatar)({
  fontSize: '2rem',
  borderRadius: '50%',
  padding: '10px',
});

const month = [1, 10, 30, 50, 70, 90, 100];

const notifications = ['Notification 1', 'Notification 2', 'Notification 3'];
const messages = ['Message 1', 'Message 2', 'Message 3'];
const chartData = [1000, 2000, 5000, 7000, 10000, 8000, 9500];

export default function Dashboard() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [messageEl, setMessageEl] = React.useState(null);
  const [accountEl, setAccountEl] = React.useState(null);

  const handleMenu = (event, setFunction) => {
    setFunction(event.currentTarget);
  };

  const handleClose = (setFunction) => {
    setFunction(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBarStyled position="static">
        <Toolbar>
          <Typography variant="h5" color="textPrimary">
            Profile
          </Typography>
          <Typography variant="body2" color="textSecondary" sx={{ ml: 2 }}>
            Profile
          </Typography>
          <Grow />
          <IconButton edge="end" color="inherit" onClick={(e) => handleMenu(e, setAnchorEl)} >
            <NotificationsIcon />
          </IconButton>
          <Menu anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={() => handleClose(setAnchorEl)} >
            {notifications.map((notification, index) => (
              <MenuItem key={index}>{notification}</MenuItem>
            ))}
          </Menu>

          <IconButton edge="end" color="inherit" onClick={(e) => handleMenu(e, setMessageEl)}>
            <MessageIcon />
          </IconButton>
          <Menu anchorEl={messageEl} keepMounted open={Boolean(messageEl)} onClose={() => handleClose(setMessageEl)} >
            {messages.map((message, index) => (
              <MenuItem key={index}>{message}</MenuItem>
            ))}
          </Menu>

          <IconButton edge="end" color="inherit" onClick={(e) => handleMenu(e, setAccountEl)} >
            <AccountCircleIcon />
          </IconButton>
          <Menu
            anchorEl={accountEl} keepMounted open={Boolean(accountEl)} onClose={() => handleClose(setAccountEl)} >
            <MenuItem>
              <Typography variant="h6">Account</Typography>
            </MenuItem>
            <MenuItem>
              <Avatar />
            </MenuItem>
            <MenuItem>
              <Button variant="contained" color="primary">
                Log out
              </Button>
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBarStyled>
      <Box sx={{ p: 3, borderRadius: '9px', boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.3)', margin: '10px', backgroundColor:'#fff' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-around', mt: 2 }}>
          <Grid container direction="row" justifyContent="center" alignItems="center"  >
            <Grid item xs={3} >
              <CardStyled>
                <CardContentStyled>
                  <Grid container direction="row" justifyContent="center" alignItems="center">
                    <Grid item xs={3} container justifyContent="center">
                      <CardIcon sx={{ backgroundColor: '#00CA92'}}>
                        <PeopleIcon />
                      </CardIcon>
                    </Grid>
                    <Grid item xs={9} container justifyContent="center">
                      <Box ml={2}>
                        <Typography variant="body2">New Users</Typography>
                        <Typography variant="h6">1234</Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={12} >
                      <Typography variant="body2" >Number of new users</Typography>
                    </Grid>
                  </Grid>
                </CardContentStyled>
              </CardStyled>
            </Grid>
            <Grid item xs={3}>
              <CardStyled>
                <CardContentStyled>
                  <Grid container direction="row" justifyContent="center" alignItems="center">
                    <Grid item xs={3} container justifyContent="center">
                      <CardIcon sx={{ backgroundColor: '#E93B77', }}>
                        <PaymentIcon />
                      </CardIcon>
                    </Grid>
                    <Grid item xs={9} container justifyContent="center">
                      <Box ml={2}>
                        <Typography variant="body2">Today's Transactions</Typography>
                        <Typography variant="h6">5678</Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={12} >
                      <Typography variant="body2" sx={{ top: '100px' }}>+55% than last week</Typography>
                    </Grid>
                  </Grid>
                </CardContentStyled>
              </CardStyled>
            </Grid>
            <Grid item xs={3}>
              <CardStyled>
                <CardContentStyled>
                  <Grid container direction="row" justifyContent="center" alignItems="center">
                    <Grid item xs={3} container justifyContent="center">
                      <CardIcon sx={{ backgroundColor: '#63B967'}}>
                        <ReceiptIcon />
                      </CardIcon>
                    </Grid>
                    <Grid item xs={9} container justifyContent="center">
                      <Box ml={2}>
                        <Typography variant="body2">New Recipes</Typography>
                        <Typography variant="h6">4321</Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={12} >
                      <Typography variant="body2" >Number of new recipes</Typography>
                    </Grid>
                  </Grid>
                </CardContentStyled>
              </CardStyled>
            </Grid>
            <Grid item xs={3}>
              <CardStyled>
                <CardContentStyled >
                  <Grid container direction="row" justifyContent="center" alignItems="center">
                    <Grid item xs={3} container justifyContent="center">
                      <CardIcon sx={{ backgroundColor: '#1E78E9', }}>
                        <PostAddIcon />
                      </CardIcon>
                    </Grid>
                    <Grid item xs={9} container justifyContent="center">
                      <Box ml={2}>
                        <Typography variant="body2">New Posts</Typography>
                        <Typography variant="h6">8765</Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={12} >
                      <Typography variant="body2">Number of new posts</Typography>
                    </Grid>
                  </Grid>
                </CardContentStyled>
              </CardStyled>
            </Grid>
          </Grid>
        </Box>

        <Box sx={{ mt: 4, px: 2 }}>
          <Typography variant="h6" sx={{margin:' 15px 0px', color:'rgba(1, 94, 68, 0.5)', fontWeight:'bold'}}>Last 6 months</Typography>
          <Box sx={{ borderRadius: '9px', boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.3)' }}>
          <LineChart 
            xAxis={[{ data: month }]}
            yAxis={[
              { id: 'linearAxis', scaleType: 'linear' },
              { id: 'logAxis', scaleType: 'log' },
            ]}
            series={[
              { yAxisKey: 'linearAxis', data: month, label: 'last month' },
              { yAxisKey: 'logAxis', data: month, label: 'this month' },
            ]}
            leftAxis="linearAxis"
            rightAxis="logAxis"
            height={400}
          />
          </Box>
        </Box>

        <Box sx={{ mt: 4, px: 2 }}>
          <Typography variant="h6" sx={{color:'rgba(1, 94, 68, 0.5)', fontWeight:'bold'}}>Last transitions</Typography>
          <Table sx={{ p: 3, borderRadius: '9px', boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.2)', margin: '10px', justifyContent: "center",color:'#015E44'  }}>
            <TableHead sx={{color:'#015E44'}}>
              <TableRow>
                <TableCell align="center" sx={{color:'#015E44'}}>Trans Id</TableCell>
                <TableCell align="center" sx={{color:'#015E44'}}>User</TableCell>
                <TableCell align="center" sx={{color:'#015E44'}}>Seller</TableCell>
                <TableCell align="center" sx={{color:'#015E44'}}>Product</TableCell>
                <TableCell align="center" sx={{color:'#015E44'}}>Amount</TableCell>
                <TableCell align="center" sx={{color:'#015E44'}}>Price</TableCell>
                <TableCell align="center" sx={{color:'#015E44'}}>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Array.from(Array(7).keys()).map((index) => (
                <TableRow key={index}>
                  <TableCell align="center" sx={{color:'#015E44'}}>#{index + 1}</TableCell>
                  <TableCell align="center" sx={{color:'#015E44'}}>User {index + 1}</TableCell>
                  <TableCell align="center" sx={{color:'#015E44'}}>Seller {index + 1}</TableCell>
                  <TableCell align="center" sx={{color:'#015E44'}}>Product {index + 1}</TableCell>
                  <TableCell align="center" sx={{color:'#015E44'}}>{Math.floor(Math.random() * 100)}</TableCell>
                  <TableCell align="center" sx={{color:'#015E44'}}>{Math.floor(Math.random() * 1000)}</TableCell>
                  <TableCell align="center" sx={{color:'#015E44'}}>{index % 2 === 0 ? 'Completed' : 'Pending'}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </Box>
    </Box>
  );
}
