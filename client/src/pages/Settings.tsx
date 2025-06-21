import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Paper, Slider, FormControlLabel, Switch, Grid } from '@mui/material';

const Settings: React.FC = () => {
  const [threshold, setThreshold] = useState<number>(2.5);
  const [unit, setUnit] = useState<'kWh' | 'cost'>('kWh');
  const [emailNotifications, setEmailNotifications] = useState<boolean>(true);
  const [pushNotifications, setPushNotifications] = useState<boolean>(false);
  const [smsNotifications, setSmsNotifications] = useState<boolean>(false);

  const handleThresholdChange = (_: Event, value: number | number[]) => {
    setThreshold(Array.isArray(value) ? value[0] : value);
  };

  const handleUnitChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUnit(e.target.value as 'kWh' | 'cost');
  };

  const handleSave = () => {
    alert(`Preferences Saved!\nThreshold: ${threshold} ${unit}\nEmail: ${emailNotifications}\nPush: ${pushNotifications}\nSMS: ${smsNotifications}`);
  };

  const handleExportData = () => {
    alert('Data export initiated! (Mock functionality)');
  };

  const handleChangePassword = () => {
    alert('Password change initiated! (Mock functionality)');
  };

  const handleUpdateProfile = () => {
    alert('Profile update initiated! (Mock functionality)');
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Settings
      </Typography>
      
      <Grid container spacing={4}>
        {/* General Preferences */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 4 }} elevation={0}>
            <Typography variant="h6" gutterBottom>
              General Preferences
            </Typography>
            <Typography variant="subtitle1" gutterBottom sx={{ mt: 2 }}>
              Alert Threshold (kWh)
            </Typography>
            <Slider
              value={threshold}
              min={0.5}
              max={10}
              step={0.1}
              onChange={handleThresholdChange}
              valueLabelDisplay="auto"
              sx={{ mt: 2, mb: 3 }}
            />
            <TextField
              label="Preferred Unit"
              select
              SelectProps={{ native: true }}
              value={unit}
              onChange={handleUnitChange}
              fullWidth
              sx={{ mt: 3 }}
            >
              <option value="kWh">kWh</option>
              <option value="cost">Cost</option>
            </TextField>
          </Paper>
        </Grid>

        {/* Notification Settings */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 4 }} elevation={0}>
            <Typography variant="h6" gutterBottom>
              Notification Settings
            </Typography>
            <FormControlLabel
              control={<Switch checked={emailNotifications} onChange={(e) => setEmailNotifications(e.target.checked)} />}
              label="Email Notifications"
            />
            <FormControlLabel
              control={<Switch checked={pushNotifications} onChange={(e) => setPushNotifications(e.target.checked)} />}
              label="Push Notifications"
            />
            <FormControlLabel
              control={<Switch checked={smsNotifications} onChange={(e) => setSmsNotifications(e.target.checked)} />}
              label="SMS Notifications"
            />
          </Paper>
        </Grid>

        {/* Data Management */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 4 }} elevation={0}>
            <Typography variant="h6" gutterBottom>
              Data Management
            </Typography>
            <Button variant="contained" color="primary" sx={{ mt: 2, mr: 2 }} onClick={handleExportData}>
              Export Data
            </Button>
            <Button variant="outlined" color="error" sx={{ mt: 2 }}>
              Clear All Data
            </Button>
          </Paper>
        </Grid>

        {/* Account Settings */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 4 }} elevation={0}>
            <Typography variant="h6" gutterBottom>
              Account Settings
            </Typography>
            <Button variant="contained" color="primary" sx={{ mt: 2, mr: 2 }} onClick={handleChangePassword}>
              Change Password
            </Button>
            <Button variant="outlined" color="secondary" sx={{ mt: 2 }} onClick={handleUpdateProfile}>
              Update Profile
            </Button>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Button variant="contained" color="primary" sx={{ mt: 3 }} onClick={handleSave} fullWidth>
            Save All Preferences
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Settings; 