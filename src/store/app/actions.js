export class AppActions {
    static startLoading() {
        return { type: '@app/loading.start' }
    }
    static stopLoading() {
        return { type: '@app/loading.stop' }
    }
}
