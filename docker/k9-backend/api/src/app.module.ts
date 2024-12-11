import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VendorModule } from './vendor/module';
import { StoreModule } from './store/module';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    VendorModule,
    StoreModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
