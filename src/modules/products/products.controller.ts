import { Get, Query, Header, Controller, Post, Body, Res, HttpStatus, Param, Logger, UseInterceptors, UploadedFile } from '@nestjs/common';
import { ProductsService } from './products.service';
import { products } from './products.list';
import {ProductsDto} from './products.dto'
import { Response } from 'express';


@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService){}

  @Get('/all')
  async getAllProducts(): Promise<any> {
    return await this.productsService.find(null)
  }

  @Get('/name/:name')
  async getProductsByName(@Param('name') name:string) : Promise<any> {
    const options = {
      where: {
        name,
      }
    }
    return await this.productsService.find(options)
  }

  @Post('/add')
  async addProducts(@Body() productsDto: ProductsDto[]){
    return await this.productsService.save(productsDto)
  }
}
