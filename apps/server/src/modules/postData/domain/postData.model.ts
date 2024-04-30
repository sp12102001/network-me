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

import { Comment } from '../../../modules/comment/domain'

@Entity()
export class PostData {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ nullable: true })
  content?: string

  @Column({ nullable: true })
  imageUrl?: string

  @Column({})
  userId: string

  @ManyToOne(() => User, parent => parent.posts)
  @JoinColumn({ name: 'userId' })
  user?: User

  @OneToMany(() => Comment, child => child.post)
  comments?: Comment[]

  @CreateDateColumn()
  dateCreated: string

  @UpdateDateColumn()
  dateUpdated: string

  @DeleteDateColumn()
  dateDeleted: string
}
