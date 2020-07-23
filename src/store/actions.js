export default {
  addPet: ({ commit }, payload) => {
    commit('appendPet', payload) // appendPet is a mutation that will change our state
  }
}
