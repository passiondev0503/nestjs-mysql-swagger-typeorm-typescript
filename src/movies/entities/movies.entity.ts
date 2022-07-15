import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { IsInt } from "class-validator";

@Entity()
export class Movies {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false, length: 500 })
  title: string;

  @IsInt()
  @Column("int", { nullable: false })
  year: number;

  @IsInt()
  @Column("int", { nullable: false })
  runtime: number;

  @Column({ nullable: false })
  genres: string;

  @Column({ nullable: true, default: null })
  director: string;

  @Column({ nullable: true, default: null })
  actors: string;

  @Column({ nullable: true, default: null })
  plot: string;

  @Column({ nullable: true, default: null })
  posterUrl: string;
}
