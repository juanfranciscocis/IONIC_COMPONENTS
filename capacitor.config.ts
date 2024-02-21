import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'ProyectoClase',
  webDir: 'www',
  server: {
    androidScheme: 'https',
    url:'http://localhost:4200/'
  }
};

export default config;
