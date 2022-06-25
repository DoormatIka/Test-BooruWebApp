<template>
    <base-layout
        pageTitle="Add a Memory!"
        pageDefaultLink="/memories"
    >
        <h2 class="ion-text-center">Add a memory.</h2>

        <form>
            <ion-list>
                <ion-item>
                    <ion-label position="floating">Title</ion-label>
                    <ion-input type="text" required />
                </ion-item>
                <ion-item>
                    <ion-label position="floating">Image URL</ion-label>
                    <ion-input type="url" required />
                </ion-item>
                <ion-item>
                    <ion-label position="floating">Description</ion-label>
                    <ion-input type="text" required />
                    <ion-textarea rows="5"></ion-textarea>
                </ion-item>
            </ion-list>

            <ion-button expand="block" strong="true">Save</ion-button>
        </form>

    </base-layout>
</template>

<script lang="ts">
import BaseLayout from '@/components/base/BaseLayout.vue'
import { IonList, IonItem, IonLabel, IonInput, IonTextarea, IonButton } from '@ionic/vue'
import { defineComponent } from 'vue'

export default defineComponent({
    components: { 
        BaseLayout,
        IonList, 
        IonItem, 
        IonLabel, 
        IonInput, 
        IonTextarea,
        IonButton
    },
})
</script>
