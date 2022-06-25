<template>
    <form @submit.prevent='submitForm'>
        <ion-list>
            <ion-item>
                <ion-label position="floating">Title</ion-label>
                <ion-input type="text" required v-model="enteredTitle" />
            </ion-item>
            <ion-item>
                <ion-label position="floating">Image URL</ion-label>
                <ion-input type="url" required v-model="enteredImageUrl" />
            </ion-item>
            <ion-item>
                <ion-label position="floating">Description</ion-label>
                <ion-input type="text" required v-model="enteredDescription"/>
                <ion-textarea rows="5"></ion-textarea>
            </ion-item>
        </ion-list>

        <ion-button type="submit" expand="block" strong="true">Save</ion-button>
    </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { IonList, IonItem, IonLabel, IonInput, IonTextarea, IonButton } from '@ionic/vue'

export default defineComponent({
    emits: ['save-memory'],
    components: {
        IonList, 
        IonItem, 
        IonLabel, 
        IonInput, 
        IonTextarea,
        IonButton
    },
    data() {
        return {
            enteredTitle: '',
            enteredImageUrl: '',
            enteredDescription: ''
        }
    },
    methods: {
        submitForm() {
            const memoryData = {
                title: this.enteredTitle,
                imageUrl: this.enteredImageUrl,
                description: this.enteredDescription
            };
            this.$emit('save-memory', memoryData);
        }
    }
})
</script>

<style scoped>
    ion-button {
        --background: black;
        --opacity: 100%;
        --ripple-color: #ffe0e4;
    }
</style>