import { Document } from 'mongoose';

export interface Ww3 extends Document {
  readonly name: string;
  readonly age: number;
  readonly breed: string;
}
