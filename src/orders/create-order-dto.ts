import { Length, IsNotEmpty, IsString } from "class-validator";

export class CreateOrderDTO {
  @IsNotEmpty()
  @IsString()
  @Length(5, 20)
  client: string;

  @IsNotEmpty()
  @IsString()
  productId: string;

  @IsNotEmpty()
  @IsString()
  @Length(5, 50)
  address: string;
}