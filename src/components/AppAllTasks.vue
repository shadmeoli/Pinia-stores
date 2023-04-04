<template>
    <div class=" mt-5 cart-items-table">
        <v-divider></v-divider>
        <h2 class="mt-2">Tasks in Progress : {{ tasks.items.length }}</h2>
        <v-list color="grey-darken-1" variant="elevated" elevation="0" lines="two">
            <v-list-item v-for="task in tasks.items" :key="task.name" :title="task.name" :subtitle="task.description">
                <v-chip-group>
                    <v-chip  variant="plain"><h6>edit</h6></v-chip>
                    <v-chip @click="tasks.completeTask(task)" variant="plain"><h6>done</h6></v-chip>
                </v-chip-group>
            </v-list-item>
        </v-list>
    </div>
    <v-divider class="mt-5"></v-divider>
    <div class="completed-tasks" elevation="5">
        <br/>
        <h2>Done Tasks : {{ tasks.done.length }}</h2>
        <v-list color="grey-darken-1" variant="elevated" lines="two">
            <v-list-item v-for="task in tasks.done" :key="task.name" :title="task.name" :subtitle="task.description">
            </v-list-item>
        </v-list>
    </div>
</template>

<script lang="ts">
// > our todo store
import { useTodoStore } from '../stores/todoStore';



export default {
    setup() {
        const tasks = useTodoStore();
        return { tasks }
    },
}
</script>