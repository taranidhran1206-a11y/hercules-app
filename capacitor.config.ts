import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.hercules.discipline',
  appName: 'Hercules',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  },
  plugins: {
    LocalNotifications: {
      smallIcon: 'ic_stat_icon',
      iconColor: '#C4A55A',
    },
    StatusBar: {
      backgroundColor: '#0A0A0A',
      style: 'DARK',
    },
  },
};

export default config;
