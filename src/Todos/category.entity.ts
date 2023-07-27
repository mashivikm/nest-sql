import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'todos'})
export class Category{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    body:string;

}