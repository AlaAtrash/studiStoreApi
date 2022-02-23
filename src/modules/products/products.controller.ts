import { Controller, Get } from '@nestjs/common';
import { ProductsService } from './products.service';
import { products } from './products.list';

@Controller('products')
export class ProductsController {
  @Get()
  getProducts(): Record<string, any> {
    return products;
  }
}
