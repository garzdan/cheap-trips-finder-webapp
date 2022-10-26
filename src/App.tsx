import React, { useState } from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
import Navbar from "./components/Navbar/Navbar";
import TripSearch from "./components/TripSearch/TripSearch";
import {Box, Card, CircularProgress, Container, LinearProgress, Stack} from "@mui/material";
import TripsList from "./components/TripsList/TripsList";
import FlightsModal from "./components/FlightsModal/FlightsModal";
import Logo from "./components/Logo/Logo";
import AirportsModal from "./components/AirportsModal/AirportsModal";

function App() {
  const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;
  const [departure, setDeparture] = useState<Airport|null>(null);
  const [departures, setDepartures] = useState<Airport[]>([])
  const [arrival, setArrival] = useState<Airport|null>(null);
  const [arrivals, setArrivals] = useState<Airport[]>([]);
  const [isFlightsModalOpen, setIsFlightsModalOpen] = useState(false);
  const [isAirportsModalOpen, setIsAirportsModalOpen] = useState(false);

  const fetchTrips = async (): Promise<Trip[]> => {
    const res = await axios(`${apiBaseUrl}/api/v1/trips`);
    return res.data.data;
  }

  const fetchFlights = async (): Promise<Flight[]> => {
    const res = await axios(`${apiBaseUrl}/api/v1/flights`);
    return res.data.data;
  }

  const fetchAirports = async (): Promise<Airport[]> => {
    const res = await axios(`${apiBaseUrl}/api/v1/airports`);
    setDepartures(res.data.data);
    return res.data.data;
  }

  const getArrivalsForDeparture = (departure: Airport, trips: Trip[]): Airport[] => {
    return trips.filter((trip) => {
      return trip.departure.code === departure.code;
    }).map((trip) => {
      return trip.arrival;
    })
  };

  const handleDepartureChange = (departure: Airport|null) => {
    setDeparture(departure);

    if (!departure) {
      setArrivals([]);
      setArrival(null);
    } else {
      setArrivals(getArrivalsForDeparture(departure, trips ?? []));
    }
  }

  const handleArrivalChange = (arrival: Airport|null) => {
    setArrival(arrival);
  }

  const handleFlightsModalOpen = () => {
    setIsFlightsModalOpen(true);
  }

  const handleFlightsModalClose = () => {
    setIsFlightsModalOpen(false);
  }

  const handleAirportsModalOpen = () => {
    setIsAirportsModalOpen(true);
  }

  const handleAirportsModalClose = () => {
    setIsAirportsModalOpen(false);
  }

  const {
    isLoading: areTripsLoading,
    error: tripsError,
    data: trips,
  } = useQuery(['trips'], fetchTrips);

  const {
    isLoading: areFlightsLoading,
    error: flightsError,
    data: flights,
  } = useQuery(['flights'], fetchFlights);

  const {
    isLoading: areAirportsLoading,
    error: airportsError,
    data: airports,
  } = useQuery(['airports'], fetchAirports);

  const isLoading = areAirportsLoading || areFlightsLoading || areTripsLoading;

  return (
    isLoading ? (
      <Box
        width={'100%'}
        height={'100vh'}
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        sx={{
          background: '#fff',
          color: '#FF00A4',
        }}
      >
        <Box
          p={2}
          width={{
            xs: '80%',
            sm: '50%',
            md: '40%',
          }}
        >
          <Stack sx={{ width: '100%', color: '#333' }} spacing={2}>
            <Logo variant={'h3'} />
            <LinearProgress color="inherit" />
          </Stack>
        </Box>
      </Box>
    ) : (
      <div className="App">
        <Navbar
          onFlightsSelection={handleFlightsModalOpen}
          onAirportsSelection={handleAirportsModalOpen}
        />
        <TripSearch
          arrival={arrival}
          departure={departure}
          departures={departures}
          arrivals={arrivals}
          onDepartureChange={handleDepartureChange}
          onArrivalChange={handleArrivalChange}
        />
        <Container>
          <Box py={9}>
              {trips && trips.length > 0 &&
                <TripsList
                  trips={trips.filter((trip) => {
                    return departure ? (trip.departure.code === departure.code) : true;
                  }).filter((trip) => {
                    return arrival ? (trip.arrival.code === arrival.code) : true;
                  })}
                />
              }
          </Box>
        </Container>
        <FlightsModal
          flights={flights}
          isFlightModalOpen={isFlightsModalOpen}
          onFlightModalClose={handleFlightsModalClose}
        />
        <AirportsModal
          airports={airports}
          isAirportModalOpen={isAirportsModalOpen}
          onAirportModalClose={handleAirportsModalClose}
        />
      </div>
    )
  );
}

export default App;
