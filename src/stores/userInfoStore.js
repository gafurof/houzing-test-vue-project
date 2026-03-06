import { defineStore } from "pinia"

export const useUserInfoStore = defineStore("user", {
  state: () => ({
    accountStatus: {
      firstName: "John",
      lastName: "Doe",
      role: "seller",
      favourites: ["1", "2"],
      myProperties: ['1', '2'],
      soldPrices: [250000, 300000, 275000, 170000, 187000, 220000]
    },

    isLoggedIn: true
  }),

  actions: {
    changeStatus(role, firstName, lastName) {
      this.accountStatus.role = role
      this.accountStatus.firstName = firstName
      this.accountStatus.lastName = lastName
    }
  }

})