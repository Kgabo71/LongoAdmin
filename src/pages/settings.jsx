import { useState } from 'react';
import { Switch, Button, TextField, Typography, Card, CardContent } from '@mui/material';

const Settings = () => {
  const [email, setEmail] = useState('');
  const [notifications, setNotifications] = useState(true);

  const handleSave = () => {
    console.log('Settings saved:', { email, notifications });
    alert('Settings updated successfully!');
  };

  return (
    <div className="p-6 max-w-lg mx-auto">
      <Typography variant="h4" className="mb-4">Settings</Typography>
      <Card className="p-4 shadow-md">
        <CardContent>
          {/* Email Settings */}
          <div className="mb-6">
            <Typography variant="h6">Email</Typography>
            <TextField
              fullWidth
              label="Enter your email"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-2"
            />
          </div>
          
          {/* Notification Settings */}
          <div className="mb-6 flex items-center justify-between">
            <Typography variant="h6">Notifications</Typography>
            <Switch
              checked={notifications}
              onChange={() => setNotifications(!notifications)}
            />
          </div>
          
          {/* Save Button */}
          <Button variant="contained" color="primary" fullWidth onClick={handleSave}>
            Save Settings
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Settings;
