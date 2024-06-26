import { AuthorizationRole as AuthorizationRoleModel } from './authorization/authorization.model'

import { User as UserModel } from './user/user.model'

import { Notification as NotificationModel } from './notification/notification.model'

import { PostData as PostDataModel } from './postData/postData.model'

import { Comment as CommentModel } from './comment/comment.model'

import { Connection as ConnectionModel } from './connection/connection.model'

import { Search as SearchModel } from './search/search.model'

export namespace Model {
  export class AuthorizationRole extends AuthorizationRoleModel {}

  export class User extends UserModel {}

  export class Notification extends NotificationModel {}

  export class PostData extends PostDataModel {}

  export class Comment extends CommentModel {}

  export class Connection extends ConnectionModel {}

  export class Search extends SearchModel {}
}
