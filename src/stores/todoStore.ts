import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export type item = {
  name: string;
  description: string
}

// info : our todo store
export const useTodoStore = defineStore({
  id: 'cart',

  state: () => ({
    items: [] as item[],
    done: [] as item[]
  }),

  getters: {
    itemCount(): number {
      return this.items.length
    }
  },

  actions: {
    addItem(item: item) {
      this.items.push(item)
    },
    
    completeTask(completed: item) {
      // info : adding comleted task to completed
      this.done.push(completed) 
      // info : removing completed task
      this.items = this.items.filter(item => item != completed)
    }

  }
})