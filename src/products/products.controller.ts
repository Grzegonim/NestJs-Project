import { Controller, Get, Param, Delete, Post, Body, ParseUUIDPipe, Put, NotFoundException } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDTO } from './create-product.dto';
import { UpdateProductDTO } from './update-product.dto';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}
  
  @Get('/')
  getAll(): any {
    return this.productsService.getAll();
  }

  @Get('/:id')
  getById(@Param('id', new ParseUUIDPipe()) id: string) {
    if (!this.productsService.getById(id)) {
      throw new NotFoundException('Product not found');
    }

    return this.productsService.getById(id);
  }

  @Delete('/:id')
  removeProduct(@Param('id', new ParseUUIDPipe()) id: string) {
    if (!this.productsService.getById(id)) {
      throw new NotFoundException('Product not found');
    }
    
    this.productsService.removeProduct(id);
    return { success: true };
  }

  @Post('/')
  create(@Body() productData: CreateProductDTO) {
    return this.productsService.create(productData);
  }

  @Put('/:id')
  update(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() productData: UpdateProductDTO,
    ) {
      if (!this.productsService.getById(id)) {
        throw new NotFoundException('Product not found');
      }

      this.productsService.updateById(id, productData);
      return { success: true };
    }
}
