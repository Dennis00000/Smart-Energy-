// Types for energy data, device, alert, and user preferences will go here

export interface Device {
  id: number;
  name: string;
  type: string;
  consumption: number;
  status: 'active' | 'inactive';
  icon: React.ElementType;
  isOn: boolean;
}

export interface Alert {
  id: number;
  time: string;
  message: string;
  severity: 'info' | 'warning' | 'error';
  isRead?: boolean;
}

export interface Suggestion {
  id: number;
  message: string;
}

export interface UserPreferences {
  threshold: number;
  unit: 'kWh' | 'cost';
} 