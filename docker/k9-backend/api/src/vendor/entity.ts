import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";


@Entity()
export class Vendor{
  @PrimaryGeneratedColumn()
  id: number

  @Column({ nullable: true })
  name: string

  @Column({ nullable: true })
  location: string

  @Column({ nullable: true })
  email: string

  @Column({name: "created_at", nullable: true})
  createAt: Date

  @Column({name: "created_by", nullable: true})
  createBy: number

  @Column({name: "modified_at", nullable: true})
  modifiedAt: Date

  @Column({name: "modified_by", nullable: true})
  modifiedBy: number

  @Column({name: "deleted_at", nullable: true})
  deleteAt: Date

  @Column({name: "deleted_by", nullable: true})
  deleteBy: number

  @Column({nullable: true})
  active: boolean
}

