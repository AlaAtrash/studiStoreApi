import { Module } from '@nestjs/common';
import { SignupService } from './signup.service';
import { SignupController } from './signup.controller';

@Module({
  providers: [SignupService],
  controllers: [SignupController]
})
export class SignupModule {}
