import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CategoriesService } from './categories.service';
import { Category } from './categories.entity';
import { CreateCategoryInput } from 'src/products/create-category.input';
import { UpdateCategoryInput } from './category.input';


@Resolver(() => Category)
export class CategoriesResolver {
  constructor(private categoriesService: CategoriesService) {}

  @Query(() => [Category])
  categories() {
    return this.categoriesService.findAll();
  }

  @Query(() => Category)
  category(@Args('id') id: number) {
    return this.categoriesService.findOne(id);
  }

  @Mutation(() => Category)
  createCategory(@Args('data') data: CreateCategoryInput) {
    return this.categoriesService.create(data);
  }

  @Mutation(() => Category)
  updateCategory(@Args('id') id: number, @Args('data') data: UpdateCategoryInput) {
    return this.categoriesService.update(id, data);
  }

  @Mutation(() => Boolean)
  deleteCategory(@Args('id') id: number) {
    return this.categoriesService.remove(id);
  }
}
