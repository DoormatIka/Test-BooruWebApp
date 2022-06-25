<template>
    <ion-page>

        <ion-header>
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-back-button :default-href="pageDefaultLink"></ion-back-button>
                </ion-buttons>

                <ion-title>{{ pageTitle }}</ion-title>

                <ion-buttons slot="end">
                    <slot name="actions-end"></slot>
                </ion-buttons>
            </ion-toolbar>
        </ion-header>

        <ion-content>
            <slot />
        </ion-content>

    </ion-page>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonBackButton, IonButtons } from '@ionic/vue';

    export default defineComponent({
        props: ['pageTitle', 'pageDefaultLink'],
        components: {
            IonPage, // Necessary Items
            IonHeader,
            IonTitle,
            IonContent,
            IonToolbar,
            IonBackButton,
            IonButtons
        }
    })
</script>
