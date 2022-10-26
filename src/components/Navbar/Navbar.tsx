import React from 'react';
import {
  AppBar,
  Box,
  Container,
  Divider, Drawer, IconButton,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  List, Button,
} from "@mui/material";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import MenuIcon from '@mui/icons-material/Menu';
import Logo from "../Logo/Logo";

const drawerWidth = 240;
const navItems = ['Home', 'Airports', 'Flights'];

const Navbar: React.FC<NavbarProps> = ({ onFlightsSelection, onAirportsSelection}) => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box
      sx={{ textAlign: 'center' }}
      display={'flex'}
      flexDirection={'column'}
      alignItems={'center'}
      onClick={handleDrawerToggle}
    >
      <Typography variant="h6" sx={{ my: 2 }}>
        <Logo variant={'h6'} />
      </Typography>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton
            sx={{textAlign: 'center', width: '100%', '&:hover': {color: '#FF00A4'}}}
            onClick={onAirportsSelection}
          >
            <ListItemText primary={'Airports'}/>
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton
            sx={{textAlign: 'center', width: '100%', '&:hover': {color: '#FF00A4'}}}
            onClick={onFlightsSelection}
          >
            <ListItemText primary={'Flights'}/>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position={'static'} style={{background: "#fff"}}>
        <Container maxWidth={'xl'}>
          <Toolbar disableGutters>
            <Box
              display={'flex'}
              justifyContent={'space-between'}
              width={'100%'}
            >
              <Box
                display={'flex'}
                justifyContent={'flex-start'}
                alignItems={'center'}
              >
                <TravelExploreIcon sx={{mr: 0.5, color: "#333"}} />
                <Typography
                  variant="h6"
                  noWrap
                  component="a"
                  href="/"
                  sx={{
                    mr: 2,
                    display: { xs: 'flex' },
                    fontWeight: 700,
                    letterSpacing: '.1rem',
                    color: '#333',
                    textDecoration: 'none',
                  }}
                >
                  Cheap<span style={{color: "#FF00A4"}}>Trips</span>
                </Typography>
              </Box>
              <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                <Button
                  sx={{ color: '#333', '&:hover': { color: '#FF00A4'} }}
                  onClick={onAirportsSelection}
                >
                  Airports
                </Button>
                <Button
                  sx={{ color: '#333', '&:hover': { color: '#FF00A4'} }}
                  onClick={onFlightsSelection}
                >
                  Flights
                </Button>
              </Box>
              <IconButton
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: 'none' }, color: "#333" }}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  );
};

export default Navbar;