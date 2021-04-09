import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import * as config from 'config'

const dbConfig = config.get('db')
export const typeOrmConfig: TypeOrmModuleOptions={ 
  type: dbConfig.type,
  host: dbConfig.host,
  port: dbConfig.port,
  username: dbConfig.username,
  database: dbConfig.database,
  password: dbConfig.password,
  synchronize: dbConfig.synchronise,
  autoLoadEntities: true,  
  entities: [__dirname + '/**/*.Entity.{js,ts}']   
  
}