import { Inject } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { Apartment } from 'src/apartment/entities/apartment.entity';
import { User } from 'src/user/entities/user.entity';
var redisParser = require('redis-url-parser');

export class DatabaseConfigService implements TypeOrmOptionsFactory {
  constructor(@Inject(ConfigService) private readonly config: ConfigService) {}
  createTypeOrmOptions(): TypeOrmModuleOptions | Promise<TypeOrmModuleOptions> {
   const redis=redisParser.parse(this.config.get("REDIS_URL")||process.env.REDIS_URL)
    return {
      type: 'mysql',
      host: this.config.get('DB_HOST')||process.env.DB_HOST,
      port: this.config.get('DB_PORT')||parseInt(process.env.DB_PORT),
      username: this.config.get('MYSQL_DATABASE_USER_NAME')||process.env.MYSQL_USER_NAME,
      password: this.config.get('MYSQL_ROOT_PASSWORD')||process.env.MYSQL_PASSWORD,
      database: this.config.get('MYSQL_DATABASE')||process.env.MYSQL_DATABASE,
      cache:{
        type:"ioredis",
        options:{
          host: "fly-nestestatesystem-redis.upstash.io",
          port: 6379,
          username: "default",
          password: "8b96c138f66449d7a90f1e32f16f6884",
          family:6
        },
        duration:300000
      },
      entities: [Apartment, User],
      synchronize: true,
      logging: false,
    };
  }
}
