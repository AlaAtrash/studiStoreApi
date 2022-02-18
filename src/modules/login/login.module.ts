import { Module } from '@nestjs/common';
import { LoginService } from './login.service';
import { LoginController } from './login.controller';
import {AuthModule } from '../auth/auth.module'
@Module({
  providers: [LoginService,AuthModule ],
  controllers: [LoginController]
})
export class LoginModule {}
