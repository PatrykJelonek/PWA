export const state = () => ({
  currentImage: null
})

export const getters = {
  getCurrentImage(state) {
    return state.currentImage
  }
}

export const mutations = {
  setCurrentImage(state, url) {
    state.currentImage = url;
  },

  removeCurrentImage(state) {
    state.currentImage = null;
  }
}

export const actions = {}
