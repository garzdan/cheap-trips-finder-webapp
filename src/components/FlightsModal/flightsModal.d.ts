interface FlightsModalProps {
  flights: Flight[]|undefined;
  isFlightModalOpen: boolean;
  onFlightModalClose: () => void;
}