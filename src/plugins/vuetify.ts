import Vue from 'vue';
import Vuetify from 'vuetify';

Vue.use(Vuetify);

export default new Vuetify({
    rtl: false,
    theme: {
        dark: false,
        default: 'light',
        disable: false,
        options: {
            cspNonce: undefined,
            customProperties: true,
            minifyTheme: undefined,
            themeCache: undefined,
        },
      themes: {
        light: {
          primary: '#005479',
          secondary: '#006eff',
          accent: '#00cdcc',
          error: '#ff3233',
          info: '#006eff',
          success: '#008726', // added to corp. design
          warning: '#FFBA00', // added to corp. design
          background: '#FDFDFD',
        },
      },
    },
    icons: {
        iconfont: 'mdi', // default - only for display purposes
      },
});
