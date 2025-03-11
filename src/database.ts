import { DataSource } from "typeorm";
import { Product } from "./products/products.entity";
import { Category } from "./categories/categories.entity";
import * as dotenv from "dotenv";

dotenv.config();

export const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  entities: [Product, Category],
  synchronize: true, 
});
