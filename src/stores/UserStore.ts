import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('UserStore', () => {
    
  const firstName = ref('EXAMPLE NAME')
  const lastName = ref('EXAMPLE NAME')
  const updateFirstName = (value: string) => {
      firstName.value = value
  }
  const updateLastName = (value: string) => {
    lastName.value = value
  }
  return {
    firstName,
    lastName,
    updateFirstName,
    updateLastName
  }
})
