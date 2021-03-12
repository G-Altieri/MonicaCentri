export const state = () => ({

    lang:"it"

})

export const mutations = {
    changeLang(state,x){
        state.lang = x;
    }
}

export const actions = {
    setLang({commit}, x){
        commit('changeLang',x)
    }
}

export const getters = {
    getLang(state){
        return state.lang
    }
}