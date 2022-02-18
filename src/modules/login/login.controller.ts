import { Get, Query, Header, Controller, Post, Body, Res, HttpStatus, Param, Logger, UseInterceptors, UploadedFile } from '@nestjs/common';
import { Response } from 'express';
import {LoginService} from './login.service'

@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService){}

 @Post()
 @Header("Cache-Control", "none")
  async login(@Body() login: Record<string, string>, @Res() response: Response
  ) {
    if (!(login["email"] || login["hash"])) {
      //response.set.
      return "please provide login or password"
    } else {
      console.log(login)
      this.loginService.login(login["email"],login["hash"])

    }
 }

}
