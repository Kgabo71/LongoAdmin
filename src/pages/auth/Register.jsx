import { useState } from 'react';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

// Sample ticket data (this can be replaced with API data)
const tickets = [
  { id: 1, sender: 'John Doe', message: 'I am unable to login.', ticketNumber: 'TKT12345' },
  { id: 2, sender: 'Jane Smith', message: 'Payment issue on checkout.', ticketNumber: 'TKT12346' }
];

export default function Register() {
  const [responses, setResponses] = useState({});

  const handleResponseChange = (ticketId, value) => {
    setResponses(prev => ({ ...prev, [ticketId]: value }));
  };

  const handleSendResponse = (ticketId) => {
    console.log(`Response for ticket ${ticketId}:`, responses[ticketId]);
    // Here, you would send the response to your backend API
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Stack direction="row" sx={{ alignItems: 'baseline', justifyContent: 'space-between', mb: 2 }}>
          <Typography variant="h3">Support Ticketing</Typography>
          <Typography component={Link} to="/dashboard" variant="body1" sx={{ textDecoration: 'none' }} color="primary">
            Back to Dashboard
          </Typography>
        </Stack>
      </Grid>
      {tickets.map(ticket => (
        <Grid item xs={12} key={ticket.id}>
          <Card>
            <CardContent>
              <Typography variant="h6">Ticket #{ticket.ticketNumber}</Typography>
              <Typography variant="subtitle1">Sender: {ticket.sender}</Typography>
              <Typography variant="body2" sx={{ mb: 2 }}>{ticket.message}</Typography>
              <TextField
                fullWidth
                label="Response"
                variant="outlined"
                multiline
                rows={3}
                value={responses[ticket.id] || ''}
                onChange={(e) => handleResponseChange(ticket.id, e.target.value)}
              />
              <Button 
                variant="contained" 
                color="primary" 
                sx={{ mt: 2 }}
                onClick={() => handleSendResponse(ticket.id)}
              >
                Send Response
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
