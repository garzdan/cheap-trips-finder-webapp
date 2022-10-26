import React from 'react';
import AirportCard from "../AirportCard/AirportCard";
import {Stack} from "@mui/material";

const AirportList: React.FC<AirportListProps> = ({ airports }) => {
  return (
    <Stack spacing={2}>
      {airports.map((airport) => {
        return <AirportCard airport={airport} />
      })}
    </Stack>
  );
}

export default AirportList;