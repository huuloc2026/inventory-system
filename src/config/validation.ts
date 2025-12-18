import { ConfigModuleOptions } from '@nestjs/config';
import { envSchema } from './env.schema';

export const configModuleOptions: ConfigModuleOptions = {
  isGlobal: true,
  envFilePath: '.env',
  validationSchema: envSchema,
  validationOptions: {
    allowUnknown: true,
    abortEarly: true,
  },
};