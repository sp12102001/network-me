import { ColumnNumeric } from '@server/core/database'
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'

import { User } from '../../../modules/user/domain'

@Entity()
export class Connection {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({})
  userId1Id: string

  @ManyToOne(() => User, parent => parent.connectionsAsUserId1)
  @JoinColumn({ name: 'userId1Id' })
  userId1?: User

  @Column({})
  userId2Id: string

  @ManyToOne(() => User, parent => parent.connectionsAsUserId2)
  @JoinColumn({ name: 'userId2Id' })
  userId2?: User

  @CreateDateColumn()
  dateCreated: string

  @UpdateDateColumn()
  dateUpdated: string

  @DeleteDateColumn()
  dateDeleted: string
}
