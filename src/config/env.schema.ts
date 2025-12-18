import * as Joi from 'joi';

export const envSchema = Joi.object({
  // App
  NODE_ENV: Joi.string()
    .valid('development', 'production', 'test')
    .default('development'),
  APP_PORT: Joi.number().default(3000),
  APP_NAME: Joi.string().default('Inventory-POS-System'),
  APP_VERSION: Joi.string().default('1.0.0'),
  APP_URL: Joi.string().default('http://localhost:3000'),
  API_PREFIX: Joi.string().default('/api/v1'),

  // Database
  DATABASE_URL: Joi.string().required(),

  // JWT
  JWT_SECRET: Joi.string().required(),
  JWT_EXPIRATION: Joi.string().default('24h'),

  // Security
  BCRYPT_SALT_ROUNDS: Joi.number().default(10),

  // CORS
  CORS_ORIGIN: Joi.string().default('*'),
});