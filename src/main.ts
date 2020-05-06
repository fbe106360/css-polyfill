import Vue from 'vue';
import App from './App.vue';
import store from './store';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;

//custom base components
import MySwitch from './base/Base.Switch.vue'
import MyBtn from './base/Base.Button.vue'
import MyDialogBtn from './base/Base.DialogButton.vue'

export class AppModule {
    constructor() {
        this.bootstrap();
    }

    private async bootstrap(): Promise<Vue> {
        Vue.component('MySwitch', MySwitch);
        Vue.component('MyBtn', MyBtn);
        Vue.component('MyDialogBtn', MyDialogBtn);
        return new Vue({
          store,
          vuetify,
          render: h => h(App)
        }).$mount('#app');
    }
}

new AppModule();