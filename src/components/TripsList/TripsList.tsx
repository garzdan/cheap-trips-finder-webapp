import React from 'react';
import TripCard from "../TripCard/TripCard";
import {Box, Stack} from "@mui/material";

const TripsList: React.FC<TripsListProps> = ({ trips }) => {
  return (
    <Stack spacing={2}>
      {trips.map(trip => <TripCard trip={trip} />)}
    </Stack>
  );
}

export default TripsList
