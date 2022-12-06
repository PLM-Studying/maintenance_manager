import { DataSource, DataSourceOptions } from 'typeorm';
import { databaseConfig } from '../../main/config';

const config: DataSourceOptions = databaseConfig() as DataSourceOptions;

export default new DataSource(config);
