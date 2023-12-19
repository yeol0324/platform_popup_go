import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class ApiConnection {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  ip: string;

  @CreateDateColumn({ default: () => 'CURRENT_TIMESTAMP()' })
  connectionTime: Date;
}
