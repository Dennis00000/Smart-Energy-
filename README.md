# Smart Home Energy Management Dashboard

A comprehensive web application for monitoring, visualizing, and optimizing household energy consumption with anomaly detection capabilities.

## Features

- Real-time energy consumption monitoring
- Interactive data visualization
- Device-level energy breakdown
- Anomaly detection and alerts
- Personalized savings suggestions
- Historical data analysis
- Customizable alert thresholds

## Tech Stack

- Frontend: React.js with TypeScript
- Backend: Node.js with Express
- Database: PostgreSQL with TimescaleDB
- Real-time updates: WebSocket
- Data Visualization: Recharts
- Anomaly Detection: Statistical methods and basic ML

## Prerequisites

- Node.js (v16 or higher)
- PostgreSQL (v14 or higher)
- TimescaleDB extension

## Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm run install-all
   ```
3. Set up the database:
   - Install PostgreSQL
   - Install TimescaleDB extension
   - Create a database and run migrations

4. Configure environment variables:
   - Copy `.env.example` to `.env` in both client and server directories
   - Update the variables with your configuration

5. Start the application:
   ```bash
   npm start
   ```

## Project Structure

```
├── client/                 # React frontend
├── server/                 # Node.js backend
├── package.json           # Root package.json
└── README.md             # Project documentation
```

## Development

- Frontend runs on: http://localhost:3000
- Backend runs on: http://localhost:5000

## License

MIT 