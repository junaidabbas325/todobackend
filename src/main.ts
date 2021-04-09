import { NestFactory, } from "@nestjs/core";
import { AppModule } from "./app.module";
import * as config from 'config'
async function bootstrap(){
  const serverConfig = config.get('server')  
  const app = await NestFactory.create(AppModule);
  const Port = process.env.PORT || serverConfig.port
  app.enableCors();
  await app.listen(Port, ()=>{
    console.log(`Host On Port # ${Port}`)
    
  })
}
bootstrap()