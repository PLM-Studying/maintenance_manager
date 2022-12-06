import { registerAs } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { join } from 'path';

export default registerAs('database', (): TypeOrmModuleOptions => {
  return {
    name: 'default',
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'pguser',
    password: 'pgpassword',
    database: 'pgdb',
    entities: [join(__dirname, '**', '*.entity.{ts,js}')],
    migrations: ['./migrations/*.{ts,js}'],
    migrationsRun: true,
  };
});
