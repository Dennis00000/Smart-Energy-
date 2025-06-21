import React, { useState, useEffect } from 'react';
import {
  Grid,
  Paper,
  Typography,
  Box,
  Card,
  CardContent,
  ButtonGroup,
  Button,
  List,
  ListItem,
} from '@mui/material';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import { Line, Pie } from 'react-chartjs-2';
import { useTheme } from '@mui/material/styles';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

// Mock data - replace with real API calls
const generateDailyData = () => ({
  labels: Array.from({ length: 24 }, (_, i) => `${i}:00`),
  datasets: [
    {
      label: 'Energy Consumption (kWh)',
      data: Array.from({ length: 24 }, () => Math.random() * 2 + 0.5),
      borderColor: 'rgba(75, 192, 192, 1)',
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      tension: 0.3,
      fill: true,
    },
  ],
});

const generateWeeklyData = () => ({
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [
    {
      label: 'Energy Consumption (kWh)',
      data: Array.from({ length: 7 }, () => Math.random() * 30 + 10),
      borderColor: 'rgba(153, 102, 255, 1)',
      backgroundColor: 'rgba(153, 102, 255, 0.2)',
      tension: 0.3,
      fill: true,
    },
  ],
});

const generateMonthlyData = () => ({
  labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
  datasets: [
    {
      label: 'Energy Consumption (kWh)',
      data: Array.from({ length: 4 }, () => Math.random() * 200 + 50),
      borderColor: 'rgba(255, 159, 64, 1)',
      backgroundColor: 'rgba(255, 159, 64, 0.2)',
      tension: 0.3,
      fill: true,
    },
  ],
});

const mockDeviceConsumption = {
  labels: ['Fridge', 'HVAC', 'Entertainment', 'Lights', 'Other'],
  datasets: [
    {
      label: 'Device Consumption (kWh)',
      data: [15, 40, 20, 10, 15],
      backgroundColor: [
        'rgba(255, 99, 132, 0.6)',
        'rgba(54, 162, 235, 0.6)',
        'rgba(255, 206, 86, 0.6)',
        'rgba(75, 192, 192, 0.6)',
        'rgba(153, 102, 255, 0.6)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

// Mock alerts and suggestions
const mockAlerts = [
  {
    id: 1,
    message: 'High energy usage detected in Living Room (TV left on).',
    type: 'warning',
  },
  {
    id: 2,
    message: 'Unusual consumption pattern in HVAC system.',
    type: 'info',
  },
];

interface Suggestion {
  id: number;
  message: string;
}

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

const Dashboard: React.FC = () => {
  const theme = useTheme();
  const [currentConsumption, setCurrentConsumption] = useState<number>(0);
  const [dailyTotal, setDailyTotal] = useState<number>(0);
  const [chartData, setChartData] = useState(generateDailyData());
  const [timeframe, setTimeframe] = useState<'daily' | 'weekly' | 'monthly'>('daily');

  useEffect(() => {
    // Simulate real-time updates for current consumption and daily total
    const interval = setInterval(() => {
      setCurrentConsumption(Math.random() * 2 + 0.5);
      setDailyTotal((prev) => prev + Math.random() * 0.1);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    switch (timeframe) {
      case 'daily':
        setChartData(generateDailyData());
        break;
      case 'weekly':
        setChartData(generateWeeklyData());
        break;
      case 'monthly':
        setChartData(generateMonthlyData());
        break;
      default:
        setChartData(generateDailyData());
    }
  }, [timeframe]);

  const getChartTitle = () => {
    switch (timeframe) {
      case 'daily':
        return 'Hourly Energy Consumption';
      case 'weekly':
        return 'Daily Energy Consumption (Last 7 Days)';
      case 'monthly':
        return 'Weekly Energy Consumption (Last 4 Weeks)';
      default:
        return 'Energy Consumption';
    }
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Energy Dashboard
      </Typography>
      
      <Grid container spacing={3}>
        {/* Current Consumption */}
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ backgroundColor: theme.palette.primary.light, color: theme.palette.primary.contrastText }} elevation={0}>
            <CardContent>
              <Typography color="inherit" gutterBottom>
                Current Consumption
              </Typography>
              <Typography variant="h3" color="inherit">
                {currentConsumption.toFixed(2)} kWh
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Daily Total */}
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ backgroundColor: theme.palette.info.light, color: theme.palette.info.contrastText }} elevation={0}>
            <CardContent>
              <Typography color="inherit" gutterBottom>
                Daily Total
              </Typography>
              <Typography variant="h3" color="inherit">
                {dailyTotal.toFixed(2)} kWh
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Anomaly Alerts Summary */}
        <Grid item xs={12} sm={12} md={4}>
          <Card sx={{ backgroundColor: theme.palette.warning.light, color: theme.palette.warning.contrastText }} elevation={0}>
            <CardContent>
              <Typography color="inherit" gutterBottom>
                Recent Alerts
              </Typography>
              <Typography variant="h5" color="inherit">
                {mockAlerts.length} new anomalies
              </Typography>
              <Typography variant="body2" color="inherit">
                {mockAlerts.length > 0 ? mockAlerts[0].message : 'No new alerts'}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Energy Consumption Chart */}
        <Grid item xs={12}>
          <Paper sx={{ p: 2 }} elevation={0}>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'space-between', alignItems: { xs: 'flex-start', sm: 'center' }, mb: 2 }}>
              <Typography variant="h6" gutterBottom={false} sx={{ mb: { xs: 1, sm: 0 } }}>
                {getChartTitle()}
              </Typography>
              <ButtonGroup variant="outlined" aria-label="timeframe selection">
                <Button onClick={() => setTimeframe('daily')} variant={timeframe === 'daily' ? 'contained' : 'outlined'}>Daily</Button>
                <Button onClick={() => setTimeframe('weekly')} variant={timeframe === 'weekly' ? 'contained' : 'outlined'}>Weekly</Button>
                <Button onClick={() => setTimeframe('monthly')} variant={timeframe === 'monthly' ? 'contained' : 'outlined'}>Monthly</Button>
              </ButtonGroup>
            </Box>
            <Box sx={{ height: 400 }}>
              <Line
                data={chartData}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  plugins: {
                    legend: { display: false },
                  },
                  scales: {
                    y: {
                      beginAtZero: true,
                      title: {
                        display: true,
                        text: 'kWh',
                      },
                    },
                    x: {
                      title: {
                        display: true,
                        text: timeframe === 'daily' ? 'Hour' : (timeframe === 'weekly' ? 'Day' : 'Week'),
                      },
                    },
                  },
                }}
              />
            </Box>
          </Paper>
        </Grid>

        {/* Device-Level Breakdown Pie Chart */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Device Energy Breakdown
            </Typography>
            <Box sx={{ height: 300, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Pie
                data={mockDeviceConsumption}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  plugins: {
                    tooltip: {
                      callbacks: {
                        label: function(context) {
                          let label = context.label || '';
                          if (label) {
                            label += ': ';
                          }
                          if (context.raw !== null) {
                            label += context.raw + ' kWh';
                          }
                          return label;
                        }
                      }
                    },
                    legend: {
                      position: 'bottom',
                      labels: {
                        boxWidth: 20,
                      },
                    },
                  },
                }}
              />
            </Box>
          </Paper>
        </Grid>

        {/* Savings Suggestions */}
        <Grid item xs={12} md={6}>
          <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography variant="h6" gutterBottom>
                Savings Suggestions
              </Typography>
              <Typography variant="body1">
                Based on your recent usage, here are some tips:
              </Typography>
              <List>
                {mockSuggestions.map((suggestion: Suggestion) => (
                  <ListItem key={suggestion.id}>
                    <Typography variant="body2">• {suggestion.message}</Typography>
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard; 