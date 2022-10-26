interface AirportsModalProps {
  airports: Airport[]|undefined;
  isAirportModalOpen: boolean;
  onAirportModalClose: () => void;
}