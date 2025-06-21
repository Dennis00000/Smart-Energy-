import React, { useState } from 'react';
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Switch,
  FormControlLabel,
} from '@mui/material';
import {
  Tv as TvIcon,
  AcUnit as AcIcon,
  Kitchen as KitchenIcon,
  Lightbulb as LightIcon,
} from '@mui/icons-material';
import { Device as DeviceType } from '../types';

// Mock device data
const initialMockDevices: DeviceType[] = [
  {
    id: 1,
    name: 'Living Room TV',
    type: 'Entertainment',
    consumption: 0.15,
    status: 'active',
    icon: TvIcon,
    isOn: true,
  },
  {
    id: 2,
    name: 'Air Conditioner',
    type: 'HVAC',
    consumption: 1.2,
    status: 'active',
    icon: AcIcon,
    isOn: false,
  },
  {
    id: 3,
    name: 'Refrigerator',
    type: 'Kitchen',
    consumption: 0.08,
    status: 'active',
    icon: KitchenIcon,
    isOn: true,
  },
  {
    id: 4,
    name: 'Living Room Lights',
    type: 'Lighting',
    consumption: 0.05,
    status: 'inactive',
    icon: LightIcon,
    isOn: false,
  },
];

const Devices: React.FC = () => {
  const [devices, setDevices] = useState<DeviceType[]>(initialMockDevices);

  const handleToggle = (id: number) => {
    setDevices((prevDevices) =>
      prevDevices.map((device) =>
        device.id === id ? { ...device, isOn: !device.isOn, status: device.isOn ? 'inactive' : 'active' } : device
      )
    );
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Device Energy Consumption
      </Typography>

      <Grid container spacing={3}>
        {devices.map((device) => (
          <Grid item xs={12} sm={6} md={6} key={device.id}>
            <Card elevation={0} sx={{ opacity: device.isOn ? 1 : 0.7 }}>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <device.icon sx={{ mr: 2, fontSize: 40, color: device.isOn ? 'primary.main' : 'text.secondary' }} />
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="h6">{device.name}</Typography>
                    <Typography color="textSecondary">{device.type}</Typography>
                  </Box>
                  <FormControlLabel
                    control={<Switch checked={device.isOn} onChange={() => handleToggle(device.id)} color="primary" />}
                    label={device.isOn ? 'On' : 'Off'}
                    labelPlacement="start"
                    sx={{ mr: 0 }}
                  />
                </Box>
                <Typography variant="h4" color="primary">
                  {device.consumption.toFixed(2)} kWh
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Current consumption
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" gutterBottom>
          Device Status Summary
        </Typography>
        <List>
          {devices.map((device) => (
            <ListItem key={device.id}>
              <ListItemIcon>
                <device.icon sx={{ color: device.isOn ? 'info.main' : 'text.secondary' }} />
              </ListItemIcon>
              <ListItemText
                primary={device.name}
                secondary={`${device.consumption.toFixed(2)} kWh - ${device.isOn ? 'On' : 'Off'}`}
              />
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default Devices; 