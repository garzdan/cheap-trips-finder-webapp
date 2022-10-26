import React from 'react';
import {Box, Card} from "@mui/material";
import TripLine from "../TripLine/TripLine";
import Price from "../Price/Price";

const FlightCard: React.FC<FlightCardProps> = ({ flight }) => {
  const tripLineStages = [
    {
      name: flight.departure.name,
      code: flight.departure.code
    },
    {
      name: flight.arrival.name,
      code: flight.arrival.code
    },
  ]
  return (
    <Card>
      <Box
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        p={2}
      >
        <Box display={'flex'} flex={3}>
          <TripLine stages={tripLineStages} />
        </Box>
        <Box flex={1}>
          <Price amount={flight.cost} />
        </Box>
      </Box>
    </Card>
  );
}

export default FlightCard;