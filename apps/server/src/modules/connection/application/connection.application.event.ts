export namespace ConnectionApplicationEvent {
  export namespace ConnectionCreated {
    export const key = 'connection.application.connection.created'

    export type Payload = {
      id: string
      userId: string
    }
  }
}
