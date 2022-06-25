<template>
    <div class="ion-text-center">
        <h2>{{ title }}</h2>
        <p>{{ description }}</p>
    </div>
    <ion-img :src="image" :alt="title"></ion-img>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { IonImg } from '@ionic/vue'

export default defineComponent({
    props: ['title', 'image', 'description'],
    components: {
        IonImg
    }
})
</script>
