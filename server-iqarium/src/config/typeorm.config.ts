import { TypeOrmModuleAsyncOptions, TypeOrmModuleOptions } from "@nestjs/typeorm";
import { ConfigModule, ConfigService } from "@nestjs/config";

export class TypeormConfig {
    static getOrmConfig(configService: ConfigService): TypeOrmModuleOptions {
        return {
            type: 'postgres',
            host: configService.get('DB_HOST'),
            port: configService.get('DB_PORT'),
            username: configService.get('DB_USERNAME'),
            password: configService.get('DB_PASSWORD'),
            database: configService.get('DB_NAME'),
            entities: [],
            synchronize: true,
        }
    }
}

export const typeOrmConfigAsync: TypeOrmModuleAsyncOptions = {
    imports: [ConfigModule],
    useFactory: async (configService: ConfigService): Promise<TypeOrmModuleOptions> => TypeormConfig.getOrmConfig(configService),
    inject: [ConfigService],
}