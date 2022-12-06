import { defineStore } from 'pinia'

export const useUserStore = defineStore('UserStore', {

  state: () => ({
    firstName: 'EXAMPLE NAME',
    lastName: 'EXAMPLE NAME'
  }),
  actions: {
    updateFirstName (value: string) {
      this.firstName = value
    },
    updateLastName (value: string) {
      this.LastName = value
    }
  }
})
