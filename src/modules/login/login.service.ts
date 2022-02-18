import { Injectable } from '@nestjs/common';
import { AuthService } from '../auth/auth.service'

@Injectable()
export class LoginService {
    constructor(private readonly authService: AuthService) {}

    login(email: string, pw:string) {
        const payload = { username: email, pw: pw };
        const token= this.authService.createToken(payload)
        console.log(token)
    }


}
