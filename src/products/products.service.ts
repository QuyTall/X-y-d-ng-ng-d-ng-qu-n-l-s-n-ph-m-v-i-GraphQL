import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Product } from "./products.entity";

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>
  ) {}

  async getProducts(): Promise<Product[]> {
    return await this.productRepository.find({ relations: ["category"] });
  }

  async getProductById(id: number): Promise<Product | null> {
    return await this.productRepository.findOne({ 
      where: { id }, 
      relations: ["category"] 
    });
  }

  async addProduct(name: string, price: number, description: string, categoryId: number): Promise<Product> {
    const product = this.productRepository.create({ 
      name, 
      price, 
      description, 
      category: { id: categoryId } // Đảm bảo TypeORM hiểu được quan hệ
    });
    return await this.productRepository.save(product);
  }

  async updateProduct(id: number, name: string, price: number, description: string, categoryId: number): Promise<Product> {
    const product = await this.productRepository.findOne({ where: { id } });
    if (!product) throw new Error("Product not found");

    // Cập nhật thông tin sản phẩm
    Object.assign(product, { name, price, description, category: { id: categoryId } });

    return await this.productRepository.save(product);
  }

  async deleteProduct(id: number): Promise<boolean> {
    const result = await this.productRepository.delete(id);
    return result.affected ? result.affected > 0 : false;
  }
}
