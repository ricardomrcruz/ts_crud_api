import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  Column,
  ManyToOne,
  JoinTable,
  ManyToMany,
  OneToMany,
  OneToOne,
} from "typeorm";

import  Ad  from './Ad';
  
@Entity()
export default class Category extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  name: string;

  @OneToMany(() => Ad, (ad) => ad.category)
  ads: Ad[];
}