// Mutations actually alter the state
export default {
  appendPet: (state, { species, pet }) => {
    state[species].push(pet)
  }
}
