<template>
    <base-layout :page-title="memories ? `BooruApp` : `Loading`">

                <!--
                <h1 v-if='!memories'>Nothing here yet..</h1>
                <h1 v-else><b>ilyn's Images</b></h1>
                -->
                <br>

                <template v-slot:actions-end>
                    <ion-button router-link="/memories/add">
                        <ion-icon slot="icon-only" :icon="add"></ion-icon>
                    </ion-button>
                </template>
                <memories-list :memories="memories"></memories-list>

    </base-layout>
</template>

<script lang="ts"> // Imports here!
import { defineComponent } from 'vue';
import { IonButton, IonIcon } from '@ionic/vue'
import { add } from 'ionicons/icons'

import MemoriesList from '../components/memories/MemoriesList.vue'

export default defineComponent({
    name: "MemoriesPage",
    components: {
        // Necessary Items moved to BaseLayout.vue and imported in main.ts
        MemoriesList,
        IonButton,
        IonIcon
    },
    data() {
        return { add }
    },
    computed: {
        memories(): any {
            // this.$store.dispatch('memoriesMutate');
            return this.$store.getters.memories;
        }
    }
})
</script>