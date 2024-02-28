import { Get, Query, Header, Controller, Post, Body, Res, HttpStatus, Param, Logger, UseInterceptors, UploadedFile } from '@nestjs/common';
import { ProductsService } from './products.service';
import { products } from './products.list';
import {ProductsDto} from './products.dto'


@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService){}

  @Get('/all')
  async getAllProducts(): Promise<any> {
    return await this.productsService.find(null)
  }

  @Get('/id/:id')
  async getProductsByName(@Param('id') id:string) : Promise<any> {
    const options = {
      where: {
        id,
      }
    }
    return await this.productsService.find(options)
  }

  @Post('/add')
  async addProducts(@Body() productsDto: ProductsDto[]){
    return await this.productsService.save(productsDto)
  }
}
