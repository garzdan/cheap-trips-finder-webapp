import React from 'react';
import {Box, Modal, Typography} from "@mui/material";
import AirportList from "../AirportList/AirportList";

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  maxWidth: '100%',
  bgcolor: 'background.paper',
  boxShadow: 24,
  borderRadius: 4,
  background: '#f4f4f4',
  p: 2,
  maxHeight: '80%',
  overflowY: 'scroll',
  '-ms-overflow-style': 'none',
  'scrollbarwidth': 'none',
  '&::-webkit-scrollbar': {
    display: 'none'
  }
};

const AirportsModal: React.FC<AirportsModalProps> = (
  {
    isAirportModalOpen,
    onAirportModalClose,
    airports,
  }) => {
  return (
    <div>
      <Modal
        keepMounted
        open={isAirportModalOpen}
        onClose={onAirportModalClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="keep-mounted-modal-title"
            variant="h5" component="h2"
            sx={{cursor: 'default', marginBottom: 2}}
          >
            Airports
          </Typography>
          <AirportList airports={airports!}/>
        </Box>
      </Modal>
    </div>
  );
}

export default AirportsModal;