import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Box,
  Toolbar,
  Container,
  Button,
  Menu,
  MenuItem,
  useTheme,
  useMediaQuery,
  IconButton,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'; // Importing MenuIcon for the hamburger menu
import logo from './Images/jackielogo.png'; // Ensure this path is correct for your project structure

const pages = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Quiz', path: '/quiz' },
  { name: 'Reviews', path: '/reviews' },
];

const secondaryPages = [
  { name: 'Vlogs', path: '/vlogs' },
  { name: 'Travel', path: '/travel' },
  { name: 'Diary', path: '/diary' },
];

const shopOptions = [
  { name: 'MyStyle', path: '/mystyle' },
  { name: 'Big Beauty Bag', path: '/beautybag' },
  { name: 'VintageVibes Merch', path: '/vintagevibesmerch' },
];

const tutorialOptions = [
  { name: 'View All', path: '/tutorials' },
  { name: 'Trending Now', path: '/trends' },
  { name: 'Pop Culture', path: '/popculture' },
  { name: 'Time Travel Tutorials', path: '/vintagevibes' },
  { name: 'All About Hair', path: '/hair' },
];

function ResponsiveAppBar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElShop, setAnchorElShop] = useState(null);
  const [anchorElTutorials, setAnchorElTutorials] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOpenShopMenu = (event) => {
    setAnchorElShop(event.currentTarget);
  };

  const handleCloseShopMenu = () => {
    setAnchorElShop(null);
  };

  const handleOpenTutorialsMenu = (event) => {
    setAnchorElTutorials(event.currentTarget);
  };

  const handleCloseTutorialsMenu = () => {
    setAnchorElTutorials(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: '#FDEDEF' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between', flexWrap: 'wrap', alignItems: 'center' }}>
          <IconButton component={Link} to="/" sx={{ p: 0, mr: 2 }}>
            <img src={logo} alt="Logo" style={{ height: '50px' }} />
          </IconButton>

          {isMobile ? (
            <div>
              <IconButton
                size="large"
                aria-label="navigation menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                sx={{ color: '#745B4F' }}
              >
                <MenuIcon />
              </IconButton>
              <Menu
  id="menu-appbar"
  anchorEl={anchorElNav}
  anchorOrigin={{
    vertical: 'bottom',
    horizontal: 'left',
  }}
  keepMounted
  transformOrigin={{
    vertical: 'top',
    horizontal: 'left',
  }}
  open={Boolean(anchorElNav)}
  onClose={handleCloseNavMenu}
  sx={{
    display: { xs: 'block', md: 'none' },
    '.MuiPaper-root': {
      bgcolor: 'white',
      fontFamily: 'GFS Didot, sans-serif', // Ensures font consistency in mobile menu

      color: '#745B4F',
    },
    '.MuiMenuItem-root': {
      fontFamily: 'GFS Didot, sans-serif', // Ensures font consistency in mobile menu
      fontSize: '1rem',
      '&:hover': {
        bgcolor: '#f4e2e1',
      },
    },
  }}
>

                {[...pages, ...secondaryPages].map((page) => (
                  <MenuItem key={page.name} onClick={handleCloseNavMenu} component={Link} to={page.path}>
                    <Typography textAlign="center">{page.name}</Typography>
                  </MenuItem>
                ))}
                {shopOptions.map((option) => (
                  <MenuItem key={option.name} onClick={handleCloseNavMenu} component={Link} to={option.path}>
                    <Typography textAlign="center">{option.name}</Typography>
                  </MenuItem>
                ))}
                {tutorialOptions.map((option) => (
                  <MenuItem key={option.name} onClick={handleCloseNavMenu} component={Link} to={option.path}>
                    <Typography textAlign="center">{option.name}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </div>
          ) : (
            <Box sx={{ display: 'flex', flexGrow: 1, alignItems: 'center' }}>
              {pages.map((page) => (
                <Button
                  key={page.name}
                  component={Link}
                  to={page.path}
                  sx={{ my: 2, color: '#745B4F', display: 'block', fontSize: '1rem', fontFamily: 'GFS Didot, sans-serif', mx: 2 }}
                >
                  {page.name}
                </Button>
              ))}
              <Button
                onClick={handleOpenTutorialsMenu}
                sx={{ my: 2, color: '#745B4F', display: 'block', fontSize: '1rem', fontFamily: 'GFS Didot, sans-serif', mx: 2 }}
              >
                Tutorials
              </Button>
              <Menu
                id="tutorials-menu"
                anchorEl={anchorElTutorials}
                keepMounted
                open={Boolean(anchorElTutorials)}
                onClose={handleCloseTutorialsMenu}
                sx={{
                  '.MuiPaper-root': {
                    bgcolor: 'white',
                    color: '#745B4F',
                  },
                  '.MuiMenuItem-root': {
                    fontFamily: 'GFS Didot, sans-serif',
                    fontSize: '1rem',
                    '&:hover': {
                      bgcolor: '#f4e2e1',
                    },
                  },
                }}
              >
                {tutorialOptions.map((option) => (
                  <MenuItem key={option.name} onClick={handleCloseTutorialsMenu} component={Link} to={option.path}>
                    {option.name}
                  </MenuItem>
                ))}
              </Menu>
              <Button
                onClick={handleOpenShopMenu}
                sx={{ my: 2, color: '#745B4F', display: 'block', fontSize: '1rem', fontFamily: 'GFS Didot, sans-serif', mx: 2 }}
              >
                Shop
              </Button>
              <Menu
                id="shop-menu"
                anchorEl={anchorElShop}
                keepMounted
                open={Boolean(anchorElShop)}
                onClose={handleCloseShopMenu}
                sx={{
                  '.MuiPaper-root': {
                    bgcolor: 'white',
                    color: '#745B4F',
                  },
                  '.MuiMenuItem-root': {
                    fontFamily: 'GFS Didot, sans-serif',
                    fontSize: '1rem',
                    '&:hover': {
                      bgcolor: '#f4e2e1',
                    },
                  },
                }}
              >
                {shopOptions.map((option) => (
                  <MenuItem key={option.name} onClick={handleCloseShopMenu} component={Link} to={option.path}>
                    {option.name}
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          )}

          {!isMobile && (
            <Box sx={{ display: 'flex', flexGrow: 0, alignItems: 'center' }}>
              {secondaryPages.map((page) => (
                <Button
                  key={page.name}
                  component={Link}
                  to={page.path}
                  sx={{ my: 2, color: '#745B4F', display: 'block', fontSize: '1rem', fontFamily: 'GFS Didot, sans-serif', mx: 2 }}
                >
                  {page.name}
                </Button>
              ))}
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
