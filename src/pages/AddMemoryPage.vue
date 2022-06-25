<template>
    <base-layout
        pageTitle="Add a Memory!"
        pageDefaultLink="/memories"
    >
        <h2 class="ion-text-center">Add a memory.</h2>

        <create-memory-form @save-memory="saveMemory"></create-memory-form>
        <!-- event listener ( @save-memory ) at CreateMemoryForm -->
    </base-layout>
</template>

<script lang="ts">
import BaseLayout from '@/components/base/BaseLayout.vue'
import CreateMemoryForm from '../components/memories/CreateMemoryForm.vue'
import { defineComponent } from 'vue'

export default defineComponent({
    components: { 
        BaseLayout,
        CreateMemoryForm
    },
    methods: {
        saveMemory(memoryData: any) {
            this.$store.dispatch('addMemory', memoryData); 
            this.$router.replace('/memories'); // redirect
        }
    }
})
</script>

<!-- FORM SUBMISSION OH GOD -->
<!-- to do: validation and error messages -->