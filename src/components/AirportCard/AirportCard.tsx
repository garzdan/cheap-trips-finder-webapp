import React from 'react';
import {Box, Card, Typography} from "@mui/material";

const AirportCard: React.FC<AirportCardProps> = ({ airport }) => {
  return (
    <Card>
      <Box
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        p={2}
      >
        <Typography
          variant="h6"
          noWrap
          sx={{
            fontWeight: 700,
            color: '#333',
            textTransform: 'uppercase',
            cursor: 'default',
          }}
        >
          {`${airport.name} (${airport.code})`}
        </Typography>
      </Box>
    </Card>
  );
}

export default AirportCard;