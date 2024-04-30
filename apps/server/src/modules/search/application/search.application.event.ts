export namespace SearchApplicationEvent {
  export namespace SearchCreated {
    export const key = 'search.application.search.created'

    export type Payload = {
      id: string
      userId: string
    }
  }
}
