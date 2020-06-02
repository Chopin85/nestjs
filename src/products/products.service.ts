import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { Product } from './interface/products.interface';
import { CreateProductDto } from './dto/create-product.dto';

@Injectable()
export class ProductsService {
  constructor(
    @Inject('PRODUCT_MODEL')
    private product: Model<Product>,
  ) {}

  async create(CreateProductDto: CreateProductDto): Promise<Product> {
    const createdCat = new this.product(CreateProductDto);
    return createdCat.save();
  }

  async findAll(): Promise<Product[]> {
    return this.product.find().exec();
  }
}
