<template>
    <v-card elevation=0 class="mt-10 " width="50%">
        <v-form>
            <v-text-field v-model="inputs.name" variant="outlined" density="compact" placeholder="Task name"></v-text-field>
            <v-text-field v-model="inputs.description" variant="outlined" density="compact"
                placeholder="Task description"></v-text-field>
            <v-btn @click="submit()" color="orange-darken-2" block variant="elevated">ADD</v-btn>
        </v-form>
        <AllItems />
    </v-card>
</template>


<script lang="ts">
import { defineComponent, reactive, ref } from 'vue';

// > all items components
import AllItems from '../components/AppAllTasks.vue';
// > our todo store
import { useTodoStore } from '../stores/todoStore';

export default defineComponent({

    setup() {
        const inputs = reactive({ name: '', description: '', status: 'pending' })
        const tasks = useTodoStore()

        // info : using the store to update the state of the value to add them to database
        // > <! cart - mock database>
        const submit = () => {
            tasks.addItem({ ...inputs })
            inputs.name = '',
                inputs.description = ''
        };

        return { inputs, submit, tasks }
    },


    components: {
        AllItems
    }
})
</script>
