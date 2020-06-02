import { Document } from 'mongoose';

export interface Product extends Document {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly price: number;
}
