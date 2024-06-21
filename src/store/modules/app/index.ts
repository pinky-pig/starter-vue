import { defineStore } from 'pinia'
import { SetupStoreId } from '~/store'

export const useAppStore = defineStore(SetupStoreId.App, () => {
  const appName = ref('Starter Vue')

  return {
    appName,
  }
})
