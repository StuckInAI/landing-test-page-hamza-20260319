import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { ContactMessage } from './entities/ContactMessage';

const AppDataSource = new DataSource({
  type: 'sqlite',
  database: process.env.DATABASE_PATH || './database.sqlite',
  synchronize: process.env.TYPEORM_SYNCHRONIZE === 'true',
  logging: process.env.TYPEORM_LOGGING === 'true',
  entities: [ContactMessage],
  migrations: ['src/lib/migrations/*.ts'],
  subscribers: [],
});

// Initialize the data source
export async function initializeDatabase() {
  if (!AppDataSource.isInitialized) {
    await AppDataSource.initialize();
    console.log('Database initialized successfully');
  }
  return AppDataSource;
}

export default AppDataSource;