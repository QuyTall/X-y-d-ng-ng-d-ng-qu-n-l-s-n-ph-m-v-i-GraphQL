import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from './categories.entity';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category) private categoriesRepo: Repository<Category>,
  ) {}

  findAll() {
    return this.categoriesRepo.find();
  }

  findOne(id: number) {
    return this.categoriesRepo.findOne({ where: { id } });
  }

  create(category: Partial<Category>) {
    return this.categoriesRepo.save(category);
  }

  async update(id: number, updateData: Partial<Category>) {
    await this.categoriesRepo.update(id, updateData);
    return this.findOne(id);
  }

  async remove(id: number) {
    await this.categoriesRepo.delete(id);
    return { deleted: true };
  }
}
