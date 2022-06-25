import Store from './store/index';// path to store file

declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        $store: Store;
    }
}

// NOT INCLUDED IN THE INSTALLATION OF VUEX DO THIS YOURSELF!!