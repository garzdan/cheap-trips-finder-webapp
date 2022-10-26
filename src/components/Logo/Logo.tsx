import React from 'react'
import {Box, Typography} from "@mui/material";

function TravelExploreIcon(props: { sx: { color: string; mr: number } }) {
  return null;
}

const Logo: React.FC<LogoProps> = ({ variant = 'h6'}) => {
  return (
    <Box
      display={'flex'}
      justifyContent={'flex-start'}
      alignItems={'center'}
    >
      <TravelExploreIcon sx={{mr: 0.5, color: "#333"}} />
      <Typography
        variant={variant}
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
  );
}

export default Logo;