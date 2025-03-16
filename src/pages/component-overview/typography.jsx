import { useEffect, useState } from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import MainCard from 'components/MainCard';
import Divider from '@mui/material/Divider';

export default function ComponentTypography() {
  const [bids, setBids] = useState([]);

  // Mock Data - Replace this with real API call
  useEffect(() => {
    const mockBids = [
      { id: 1, item: 'MacBook Pro', currentBid: '$1200', highestBidder: 'John Doe' },
      { id: 2, item: 'iPhone 14', currentBid: '$850', highestBidder: 'Alice Smith' },
      { id: 3, item: 'Gaming Chair', currentBid: '$300', highestBidder: 'Michael Brown' },
    ];

    setBids(mockBids);
  }, []);

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={8} lg={6}>
        <Stack sx={{ gap: 3 }}>
          <MainCard title="Live Bids">
            <Stack sx={{ gap: 1.5 }}>
              {bids.length > 0 ? (
                bids.map((bid) => (
                  <Stack key={bid.id} sx={{ p: 2, border: '1px solid #ddd', borderRadius: 2 }}>
                    <Typography variant="h6">{bid.item}</Typography>
                    <Typography variant="body1">
                      <strong>Current Bid:</strong> {bid.currentBid}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      <strong>Highest Bidder:</strong> {bid.highestBidder}
                    </Typography>
                    <Divider sx={{ my: 1 }} />
                  </Stack>
                ))
              ) : (
                <Typography variant="body1">No live bids available.</Typography>
              )}
            </Stack>
          </MainCard>
        </Stack>
      </Grid>
    </Grid>
  );
}
