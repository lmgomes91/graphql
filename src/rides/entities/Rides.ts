import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { Driver } from "../../drivers/entities/Drivers";

@Entity("rides")
export class Ride {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @ManyToOne(() => Driver)
  @JoinColumn({ name: "id_driver" })
  id_driver: number;

  @Column({ type: "varchar", length: 50 })
  from: string;

  @Column({ type: "varchar", length: 50 })
  to: string;

  @Column()
  value: number;

  @CreateDateColumn()
  date_creation: Date;
}
