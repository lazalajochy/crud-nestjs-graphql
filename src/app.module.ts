import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import {TypeOrmModule} from '@nestjs/typeorm'
import { PetsModule } from './pets/pets.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql')
    }),
    TypeOrmModule.forRoot({
      type:'mysql',
      host:'localhost',
      port:3306,
      username:'root',
      password:'12345678',
      database:'pets',
      entities:[__dirname + './**/**/*entity{.ts,.js}'],
      autoLoadEntities: true,
      synchronize: true
    }),
    
    PetsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
