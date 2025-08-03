interface EnvironmentConfig {
  apiUrl: string;
  appName: string;
  version: string;
  buildNumber: string;
  isProduction: boolean;
  isDevelopment: boolean;
  isStaging: boolean;
}

const getEnvironmentConfig = (): EnvironmentConfig => {
  const appEnv = process.env.APP_ENV || 'development';
  
  const baseConfig = {
    appName: 'Aditya',
    version: '1.0.0',
    buildNumber: '1',
    isProduction: appEnv === 'production',
    isDevelopment: appEnv === 'development',
    isStaging: appEnv === 'staging',
  };

  switch (appEnv) {
    case 'production':
      return {
        ...baseConfig,
        apiUrl: 'https://api.yourproduction.com',
      };
    
    case 'staging':
      return {
        ...baseConfig,
        apiUrl: 'https://api.yourstaging.com',
      };
    
    case 'development':
    default:
      return {
        ...baseConfig,
        apiUrl: 'https://api.yourdev.com',
      };
  }
};

export const config = getEnvironmentConfig();

export default config; 