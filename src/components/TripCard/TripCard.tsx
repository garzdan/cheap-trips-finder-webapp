import React from 'react';
import {Box, Card} from "@mui/material";
import TripLine from "../TripLine/TripLine";
import Price from "../Price/Price";

const TripCard: React.FC<TripCardProps> = ({ trip }) => {
  return (
    <Card>
      <Box
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        p={2}
      >
        <Box display={'flex'} flex={3}>
          <TripLine stages={trip.stages} />
        </Box>
        <Box flex={1}>
          <Price amount={trip.cost} />
        </Box>
      </Box>
    </Card>
  );
}

export default TripCard;