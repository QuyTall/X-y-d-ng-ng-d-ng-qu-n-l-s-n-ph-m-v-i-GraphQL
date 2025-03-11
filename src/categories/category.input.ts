import { InputType, Field, PartialType } from '@nestjs/graphql';
import { CreateCategoryInput } from 'src/products/create-category.input';

@InputType()
export class UpdateCategoryInput extends PartialType(CreateCategoryInput) {}
