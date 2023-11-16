import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  Column,
  ManyToOne,
  JoinTable,
  ManyToMany,
} from "typeorm";
  
  @Entity()
  export default class Ad extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ length: 100 })
    title: string;
  
    @Column()
    description: string;
  
    @Column()
    author: string;
  
    @Column()
    price: string;
   
    @Column()
    createdAt: Date;
    
    @Column()
    location: string;

    @Column()
    id_category: number;
    
}