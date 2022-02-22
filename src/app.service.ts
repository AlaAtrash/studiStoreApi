import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): Record<string,any> {
    const result={
      text:'Hello World!'
    };
    return result
  }
}
