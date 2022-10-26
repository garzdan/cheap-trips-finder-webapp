import React, {SyntheticEvent} from 'react';
import {Autocomplete, Box, Card, Container, Grid, TextField, Typography} from "@mui/material";
import BackgroundImage from '../../assets/images/home-background.jpg';

const TripSearch: React.FC<TripSearchProps> = ({
  arrival,
  departure,
  arrivals,
  departures,
  onArrivalChange,
  onDepartureChange
}) => {

  const handleDepartureChange = (event: SyntheticEvent<Element, Event>, value: Airport|null) => {
    onDepartureChange(value);
  }

  const handleArrivalChange = (event: SyntheticEvent<Element, Event>, value: Airport|null) => {
    onArrivalChange(value);
  }

  return (
    <Box position={'relative'}>
      <Box
        display="flex"
        alignItems="center"
        position="relative"
        borderRadius="xl"
        py={9}
        sx={{
          backgroundImage: `url(${BackgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "50%",
          overflow: "hidden",
          justifyContent: "center",
          "@media (max-width: 959px)": {
            borderRadius: "0",
          },
        }}
      >
        <Container>
          <Card>
            <Box py={{xs: 5, md: 9}} px={{xs: 2, sm: 5}}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <Autocomplete
                    id="trip-from"
                    options={departures}
                    sx={{ width: '100%' }}
                    renderInput={(params) => <TextField {...params} label="From" />}
                    getOptionLabel={(option: Airport) => `${option.name} (${option.code})`}
                    onChange={handleDepartureChange}
                    value={departure}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Autocomplete
                    id="trip-to"
                    options={arrivals}
                    sx={{ width: '100%' }}
                    renderInput={(params) => <TextField {...params} label="To" />}
                    getOptionLabel={(option: Airport) => `${option.name} (${option.code})`}
                    onChange={handleArrivalChange}
                    value={arrival}
                  />
                </Grid>
              </Grid>
            </Box>
          </Card>
        </Container>
      </Box>
    </Box>
  );
};

export default TripSearch;