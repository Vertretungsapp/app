import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'de.vertretungsapp.app',
  appName: 'Vertretungsapp.',
  webDir: 'build',
  server: {
    androidScheme: 'https'
  }
};

export default config;
