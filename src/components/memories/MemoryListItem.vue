<template>
    <!-- looping through the memories data -->
    <ion-item :router-link="`/memories/${memory.id}`">
        <ion-thumbnail slot="start">
            <ion-img :src="memory.thumb" :alt="memory.description"></ion-img> 
        </ion-thumbnail>
        <ion-label>
            {{ memory.title }} 
        </ion-label>
    </ion-item>
</template>

<script>
import { defineComponent } from 'vue'
import { IonItem, IonImg, IonThumbnail, IonLabel } from '@ionic/vue';

export default defineComponent({
    props: ['memory'],
    components: {
        IonItem, 
        IonImg, 
        IonThumbnail, 
        IonLabel
    }
})
</script>
