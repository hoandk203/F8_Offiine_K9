import { DataSource } from 'typeorm';
import {Vendor} from './vendor/entity'

export const databaseProviders = [
    {
        provide: 'DATA_SOURCE',
        useFactory: async () => {
            const dataSource = new DataSource({
                type: 'postgres',
                host: 'db',
                port: 5432,
                username: 'postgres',
                password: 'postgres',
                database: 'default',
                entities: [Vendor],
                synchronize: true,
            });

            return dataSource.initialize();
        },
    },
];