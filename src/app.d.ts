interface Airport {
  id: number;
  name: string;
  code: string;
  lat: number;
  lng: number
}

interface Flight {
  id: number;
  departure: Airport;
  arrival: Airport;
  cost: number;
}

interface Trip {
  id: number;
  departure: Airport;
  arrival: Airport;
  stages: TripStage[];
  cost: number;
}

interface TripStage {
  code: string;
  name: string
}