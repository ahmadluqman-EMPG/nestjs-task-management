import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'ahmadluqman',
  password: 'postgres',
  database: 'taskmanagement',
  autoLoadEntities: true,
  synchronize: true,
};
