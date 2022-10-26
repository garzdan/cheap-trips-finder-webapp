import React from 'react';
import {Typography} from "@mui/material";

const Price: React.FC<PriceProps> = ({ amount, currency = 'usd' }) => {
  return (
    <Typography
      variant="h6"
      noWrap
      sx={{
        fontWeight: 700,
        color: '#333',
        textTransform: 'uppercase',
        cursor: 'default',
      }}
    >
      {`${amount/100} ${currency}`}
    </Typography>
  )
}

export default Price;