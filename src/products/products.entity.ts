import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Category } from "../categories/categories.entity";

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column("float")
  price: number;

  @Column({ nullable: true })
  description: string;

  @ManyToOne(() => Category, (category) => category.products)
  category: Category;
}
