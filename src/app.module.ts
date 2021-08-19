import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { TokenModule } from './token/token.module';

import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { MailModule } from './mail/mail.module';

const environment = process.env.NODE_ENV || 'development';

@Module({
  imports: [
    UserModule, 
    AuthModule,
    ConfigModule.forRoot({
      envFilePath: `.env.${environment}`,
      isGlobal: true,
    }),
    MongooseModule.forRoot(
      'mongodb://user:password@localhost:27017/nestjs-tutorial?authSource=admin&readPreference=primary',
      {
        useNewUrlParser: true,
        useUnifiedTopology:true,
      },
    ),
    MailModule,
    TokenModule
  ],
})
export class AppModule {}
