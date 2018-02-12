export class State {
    namespaced: boolean = true

    posts: {[key: string]: any}[] = []

    filteredPosts: {[key: string]: any}[] = []
}