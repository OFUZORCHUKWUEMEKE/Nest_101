import { TypeOrmModuleOptions} from '@nestjs/typeorm'
export const typeOrmConfig: TypeOrmModuleOptions ={
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'ofuzor2001',
    database: 'quiz',
    entities: [
        __dirname + '/../**/*.entity{.ts,.js}',
    ],
    synchronize: true,
}   