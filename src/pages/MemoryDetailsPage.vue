<template>
    <base-layout 
        :page-title="loadedMemory ? loadedMemory.title : 'Loading..'" 
        page-default-link="/memories"
    >
        <div id="content">
            <h1 v-if="!loadedMemory">Nothing here yet. Data not found with the given ID.</h1>
            <memory-overview v-else
                :title="loadedMemory.title"
                :image="loadedMemory.image"
                :description="loadedMemory.description"
            ></memory-overview>
        </div>
        
    </base-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import MemoryOverview from '../components/memories/MemoryOverview.vue'

export default defineComponent({
    name: "MemoryDetails",
    components: {
        MemoryOverview
    },
    data() {
        return {
            memoryId: this.$route.params.id
        }
    },

   // watch: {
        //$route(currentRoute) {
            //this.memoryId = currentRoute.params.id
        //}
    //},

    computed: {
        loadedMemory(): string | null {
            return this.$store.getters.memory(this.memoryId);
        }
    }
})
</script>