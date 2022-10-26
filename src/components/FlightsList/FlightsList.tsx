import React from 'react';
import {Stack} from "@mui/material";
import FlightCard from "../FlightCard/FlightCard";

const FlightsList: React.FC<FlightsListProps> = ({ flights }) => {
  return (
    <Stack spacing={2}>
      {flights.map((flight) => {
        return <FlightCard flight={flight} />
      })}
    </Stack>
  );
}

export default FlightsList;