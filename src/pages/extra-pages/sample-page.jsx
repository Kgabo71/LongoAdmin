import { useState } from 'react';
import { Switch, Button, TextField, Typography, Card, CardContent, MenuItem, Select } from '@mui/material';

const SettingsPage = () => {
  const [email, setEmail] = useState('');
  const [defaultEmail, setDefaultEmail] = useState('');
  const [smtp, setSmtp] = useState('');
  const [port, setPort] = useState('');
  const [googleCloudApiKey, setGoogleCloudApiKey] = useState('');
  const [googleMapsApiKey, setGoogleMapsApiKey] = useState('');
  const [notifications, setNotifications] = useState(true);
  const [notificationImage, setNotificationImage] = useState(null);
  const [selectedRecipient, setSelectedRecipient] = useState('users');
  const [specificPerson, setSpecificPerson] = useState('');
  const [activeSection, setActiveSection] = useState('googleCloud');

  const handleSave = () => {
    console.log('Settings saved:', { email, defaultEmail, smtp, port, googleCloudApiKey, googleMapsApiKey, notifications, notificationImage, selectedRecipient, specificPerson });
    alert('Settings updated successfully!');
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setNotificationImage(file);
  };

  return (
    <div className="p-6 max-w-lg mx-auto">
      <Typography variant="h4" className="mb-4 text-center font-bold">Settings</Typography>
      
      <div className="mb-4 flex justify-center gap-4">
        <Button variant="outlined" onClick={() => setActiveSection('googleCloud')}>Google Cloud</Button>
        <Button variant="outlined" onClick={() => setActiveSection('notifications')}>Notifications</Button>
        <Button variant="outlined" onClick={() => setActiveSection('email')}>Email</Button>
      </div>
      
      <Card className="p-6 shadow-lg rounded-lg bg-white">
        <CardContent>
          {activeSection === 'googleCloud' && (
            <div className="space-y-4">
              <Typography variant="h6" className="font-semibold">Google Cloud Configuration</Typography>
              <TextField fullWidth label="Google Cloud API Key" variant="outlined" value={googleCloudApiKey} onChange={(e) => setGoogleCloudApiKey(e.target.value)} />
              <TextField fullWidth label="Google Maps API Key" variant="outlined" value={googleMapsApiKey} onChange={(e) => setGoogleMapsApiKey(e.target.value)} />
            </div>
          )}
          
          {activeSection === 'notifications' && (
            <div className="space-y-4">
              <Typography variant="h6" className="font-semibold">Notifications</Typography>
              <Switch checked={notifications} onChange={() => setNotifications(!notifications)} />
              <TextField fullWidth label="Notification Message" variant="outlined" multiline rows={3} />
              <input type="file" accept="image/*" onChange={handleImageUpload} className="w-full" />
            </div>
          )}
          
          {activeSection === 'email' && (
            <div className="space-y-4">
              <Typography variant="h6" className="font-semibold">Email</Typography>
              <TextField fullWidth label="Default Sender Email" variant="outlined" value={defaultEmail} onChange={(e) => setDefaultEmail(e.target.value)} />
              <TextField fullWidth label="Enter your email" variant="outlined" value={email} onChange={(e) => setEmail(e.target.value)} />
              <TextField fullWidth label="SMTP Server" variant="outlined" value={smtp} onChange={(e) => setSmtp(e.target.value)} />
              <TextField fullWidth label="Port" variant="outlined" value={port} onChange={(e) => setPort(e.target.value)} />
              <Typography variant="h6" className="font-semibold">Recipient</Typography>
              <Select fullWidth value={selectedRecipient} onChange={(e) => setSelectedRecipient(e.target.value)}>
                <MenuItem value="users">Users</MenuItem>
                <MenuItem value="serviceProviders">Service Providers</MenuItem>
                <MenuItem value="specificPerson">Specific Person</MenuItem>
              </Select>
              {selectedRecipient === 'specificPerson' && (
                <TextField fullWidth label="Search Specific Person" variant="outlined" value={specificPerson} onChange={(e) => setSpecificPerson(e.target.value)} />
              )}
            </div>
          )}
          
          {/* Save Button */}
          <Button variant="contained" color="primary" fullWidth onClick={handleSave} className="mt-6 bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg">
            Save Settings
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default SettingsPage;
