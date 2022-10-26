interface TripSearchProps {
  arrival: Airport|null;
  departure: Airport|null;
  departures: Airport[];
  arrivals: Airport[];
  onArrivalChange: (arrival: Airport|null) => void;
  onDepartureChange: (departure: Airport|null) => void;
}