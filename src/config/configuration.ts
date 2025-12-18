import { registerAs } from '@nestjs/config';

export interface AppConfig {
  nodeEnv: string;
  port: number;
  name: string;
  version: string;
  url: string;
  apiPrefix: string;
}

export interface DatabaseConfig {
  url: string;
}

export interface JwtConfig {
  secret: string;
  expiration: string;
}

export interface SecurityConfig {
  bcryptSaltRounds: number;
}

export interface CorsConfig {
  origin: string;
}

export interface Config {
  app: AppConfig;
  database: DatabaseConfig;
  jwt: JwtConfig;
  security: SecurityConfig;
  cors: CorsConfig;
}

export default registerAs('config', (): Config => ({
  app: {
    nodeEnv: process.env.NODE_ENV || 'development',
    port: parseInt(process.env.APP_PORT || '3000', 10),
    name: process.env.APP_NAME || 'Inventory-POS-System',
    version: process.env.APP_VERSION || '1.0.0',
    url: process.env.APP_URL || 'http://localhost:3000',
    apiPrefix: process.env.API_PREFIX || '/api/v1',
  },
  database: {
    url: process.env.DATABASE_URL || '',
  },
  jwt: {
    secret: process.env.JWT_SECRET || '',
    expiration: process.env.JWT_EXPIRATION || '24h',
  },
  security: {
    bcryptSaltRounds: parseInt(process.env.BCRYPT_SALT_ROUNDS || '10', 10),
  },
  cors: {
    origin: process.env.CORS_ORIGIN || '*',
  },
}));