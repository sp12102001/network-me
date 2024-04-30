import { AiApi } from './ai/ai.api'
import { AuthenticationApi } from './authentication/authentication.api'
import { AuthorizationApi } from './authorization/authorization.api'
import { UploadApi } from './upload/upload.api'

import { UserApi } from './user/user.api'

import { NotificationApi } from './notification/notification.api'

import { PostDataApi } from './postData/postData.api'

import { CommentApi } from './comment/comment.api'

import { ConnectionApi } from './connection/connection.api'

import { SearchApi } from './search/search.api'

export namespace Api {
  export class Ai extends AiApi {}
  export class Authentication extends AuthenticationApi {}
  export class Authorization extends AuthorizationApi {}
  export class Upload extends UploadApi {}

  export class User extends UserApi {}

  export class Notification extends NotificationApi {}

  export class PostData extends PostDataApi {}

  export class Comment extends CommentApi {}

  export class Connection extends ConnectionApi {}

  export class Search extends SearchApi {}
}
