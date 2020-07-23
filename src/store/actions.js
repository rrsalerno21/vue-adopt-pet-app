// Actions are the functions that use mutations to then alter the state
// So action => mutation => modify state
export default {
  addPet: ({ commit }, payload) => {
    commit('appendPet', payload) // appendPet is a mutation that will change our state
  }
}
