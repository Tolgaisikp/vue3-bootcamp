export default {
    namespaced: true,
    state: {
        contactName: "puresol",
        contactAddress: "Kanada"
    },
    mutations: {
        setItem(state, item) {
            state.contactName = item
        }
    },
    getters: {
        _contactName: state => state.contactName
    }
}