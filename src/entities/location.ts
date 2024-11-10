import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";


@Entity()
export class MapLocation{
    
    @PrimaryGeneratedColumn()
    id!: number;

    @Column() 
    name!: string;

    @Column({ collation: "utf8_general_ci" })
    category: string;

    @Column("double")
    latitude!:number;

    @Column("double")
    longitude!:number;

    @CreateDateColumn() 
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;
}