import { User } from '../user'

import { Comment } from '../comment'

export class PostData {
  id: string

  content?: string

  imageUrl?: string

  userId: string

  user?: User

  dateCreated: string

  dateDeleted: string

  dateUpdated: string

  comments?: Comment[]
}
