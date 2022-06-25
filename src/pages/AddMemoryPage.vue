<template>
    <base-layout
        pageTitle="Add a Memory!"
        pageDefaultLink="/memories"
    >
        <h2 class="ion-text-center">Add a memory.</h2>
    </base-layout>
</template>

<script lang="ts">
import BaseLayout from '@/components/base/BaseLayout.vue'
import { defineComponent } from 'vue'

export default defineComponent({
    components: { 
        BaseLayout 
    },
        
})
</script>
