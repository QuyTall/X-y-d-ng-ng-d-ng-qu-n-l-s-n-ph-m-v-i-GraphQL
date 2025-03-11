import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { ProductService } from "./products.service";
import { Product } from "./products.entity";

@Resolver(() => Product)
export class ProductResolver {
  constructor(private readonly productService: ProductService) {}

  @Query(() => [Product])
  async getProducts() {
    return this.productService.getProducts();
  }

  @Query(() => Product)
  async getProductById(@Args("id") id: number) {
    return this.productService.getProductById(id);
  }

  @Mutation(() => Product)
  async addProduct(
    @Args("name") name: string,
    @Args("price") price: number,
    @Args("description") description: string,
    @Args("categoryId") categoryId: number
  ) {
    return this.productService.addProduct(name, price, description, categoryId);
  }

  @Mutation(() => Product)
  async updateProduct(
    @Args("id") id: number,
    @Args("name") name: string,
    @Args("price") price: number,
    @Args("description") description: string,
    @Args("categoryId") categoryId: number
  ) {
    return this.productService.updateProduct(id, name, price, description, categoryId);
  }

  @Mutation(() => Boolean)
  async deleteProduct(@Args("id") id: number) {
    return this.productService.deleteProduct(id);
  }
}
