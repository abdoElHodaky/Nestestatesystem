import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MiddlewareInterceptor } from './common/interceptor/middleware.interceptor';
import { SwaggerBuild } from './configs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  SwaggerBuild(app);
  app.setGlobalPrefix('/api');
  app.useGlobalInterceptors(new MiddlewareInterceptor());
  app.listen(process.env.NODE_SERVER_PORT,process.env.APP_URL).
    then(()=>console.log("Listen")).catch(console.log);
}
bootstrap();
