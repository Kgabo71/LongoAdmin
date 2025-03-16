import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import MainCard from 'components/MainCard';

// Mock data for bids
const mockBids = [
  { id: 1, amount: 500, status: 'active' },
  { id: 2, amount: 750, status: 'accepted' },
  { id: 3, amount: 300, status: 'history' },
  { id: 4, amount: 900, status: 'active' },
  { id: 5, amount: 450, status: 'history' }
];

export default function ComponentShadow() {
  const theme = useTheme();
  const [bids, setBids] = useState([]);

  useEffect(() => {
    // Simulating API call
    setBids(mockBids);
  }, []);

  return (
    <Grid container spacing={3}>
      {/* Active Bids */}
      <Grid item xs={12}>
        <MainCard title="Active Bids">
          {bids.filter(bid => bid.status === 'active').map(bid => (
            <Stack key={bid.id} direction="row" justifyContent="space-between" alignItems="center" sx={{ p: 2 }}>
              <Typography variant="subtitle1">Bid #{bid.id} - ${bid.amount}</Typography>
              <Button variant="contained" color="primary">View</Button>
            </Stack>
          ))}
        </MainCard>
      </Grid>

      {/* Accepted Offers */}
      <Grid item xs={12}>
        <MainCard title="Accepted Offers">
          {bids.filter(bid => bid.status === 'accepted').map(bid => (
            <Stack key={bid.id} direction="row" justifyContent="space-between" alignItems="center" sx={{ p: 2 }}>
              <Typography variant="subtitle1">Bid #{bid.id} - ${bid.amount}</Typography>
              <Typography color="success.main">Accepted</Typography>
            </Stack>
          ))}
        </MainCard>
      </Grid>

      {/* Bid History */}
      <Grid item xs={12}>
        <MainCard title="Bid History">
          {bids.filter(bid => bid.status === 'history').map(bid => (
            <Stack key={bid.id} direction="row" justifyContent="space-between" alignItems="center" sx={{ p: 2 }}>
              <Typography variant="subtitle1">Bid #{bid.id} - ${bid.amount}</Typography>
              <Typography color="text.secondary">Completed</Typography>
            </Stack>
          ))}
        </MainCard>
      </Grid>
    </Grid>
  );
}

BidsPage.propTypes = {
  bids: PropTypes.array
};
