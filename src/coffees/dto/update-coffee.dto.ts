import { PartialType } from '@nestjs/mapped-types';
import { CreateCoffeeDto } from './create-coffee.dto';

export class UpdateCoffeeDto extends PartialType(CreateCoffeeDto) {}

// export class UpdateCoffeeDto {
//   readonly name?: string;
//   readonly brand?: string;
//   readonly flavours?: string[];
// }
