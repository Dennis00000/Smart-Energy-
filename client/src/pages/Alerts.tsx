import React, { useState } from 'react';
import { Box, Typography, List, ListItem, ListItemIcon, ListItemText, IconButton, Button } from '@mui/material';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { Alert as AlertType, Suggestion } from '../types';

// Mock alerts (now with isRead property)
const initialMockAlerts: AlertType[] = [
  {
    id: 1,
    time: '2024-06-01 02:15',
    message: 'Unusual power spike detected between 2 AM and 4 AM.',
    severity: 'warning',
    isRead: false,
  },
  {
    id: 2,
    time: '2024-06-01 13:30',
    message: 'Continuous consumption detected for Air Conditioner.',
    severity: 'info',
    isRead: false,
  },
  {
    id: 3,
    time: '2024-05-30 18:00',
    message: 'High energy usage for Entertainment System detected.',
    severity: 'warning',
    isRead: true,
  },
];

const mockSuggestions: Suggestion[] = [
  {
    id: 1,
    message: 'You used a lot of power between 2 AM and 4 AM last night; check if anything was left on.',
  },
  {
    id: 2,
    message: 'Consider setting a timer for your Air Conditioner to avoid unnecessary usage.',
  },
];

const Alerts: React.FC = () => {
  const [alerts, setAlerts] = useState<AlertType[]>(initialMockAlerts);

  const handleMarkAsRead = (id: number) => {
    setAlerts((prevAlerts) =>
      prevAlerts.map((alert) =>
        alert.id === id ? { ...alert, isRead: true } : alert
      )
    );
  };

  const handleClearReadAlerts = () => {
    setAlerts((prevAlerts) => prevAlerts.filter((alert) => !alert.isRead));
  };

  const handleClearAllAlerts = () => {
    setAlerts([]);
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Anomaly Alerts & Suggestions
      </Typography>
      <Box sx={{ mb: 4 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography variant="h6" gutterBottom={false}>
            Alerts
          </Typography>
          <Box>
            <Button
              variant="outlined"
              color="primary"
              onClick={handleClearReadAlerts}
              sx={{ mr: 1 }}
              disabled={alerts.filter(alert => alert.isRead).length === 0}
            >
              Clear Read
            </Button>
            <Button
              variant="outlined"
              color="error"
              onClick={handleClearAllAlerts}
              disabled={alerts.length === 0}
            >
              Clear All
            </Button>
          </Box>
        </Box>
        <List>
          {alerts.length === 0 ? (
            <Typography variant="body1" color="textSecondary" sx={{ mt: 2, textAlign: 'center' }}>
              No alerts to display.
            </Typography>
          ) : (
            alerts.map((alert) => (
              <ListItem
                key={alert.id}
                sx={{
                  mb: 1,
                  boxShadow: 1,
                  borderRadius: '8px',
                  p: 2,
                  backgroundColor: alert.isRead ? '#f0f0f0' : '#ffffff',
                  transition: 'background-color 0.3s ease-in-out',
                }}
              >
                <ListItemIcon sx={{ minWidth: '40px' }}>
                  <WarningAmberIcon color={alert.severity === 'warning' ? 'warning' : 'info'} sx={{ fontSize: 28 }} />
                </ListItemIcon>
                <ListItemText
                  primary={<Typography variant="body1" sx={{ fontWeight: 500, textDecoration: alert.isRead ? 'line-through' : 'none' }}>{alert.message}</Typography>}
                  secondary={<Typography variant="body2" color="textSecondary">{alert.time}</Typography>}
                />
                {!alert.isRead && (
                  <IconButton edge="end" aria-label="mark as read" onClick={() => handleMarkAsRead(alert.id)}>
                    <CheckCircleOutlineIcon color="success" />
                  </IconButton>
                )}
              </ListItem>
            ))
          )}
        </List>
      </Box>
      <Box>
        <Typography variant="h6" gutterBottom>
          Savings Suggestions
        </Typography>
        <List>
          {mockSuggestions.map((suggestion) => (
            <ListItem key={suggestion.id} sx={{ mb: 1, boxShadow: 1, borderRadius: '8px', p: 2 }}>
              <ListItemIcon sx={{ minWidth: '40px' }}>
                <TipsAndUpdatesIcon color="primary" sx={{ fontSize: 28 }} />
              </ListItemIcon>
              <ListItemText primary={<Typography variant="body1" sx={{ fontWeight: 500 }}>{suggestion.message}</Typography>} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default Alerts; 