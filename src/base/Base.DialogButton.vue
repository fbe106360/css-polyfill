<script lang="ts">

import Vue from 'vue'
//@ts-ignore
import VBtn from 'vuetify/lib/components/VBtn/VBtn'

// Create Base Mixins and Define Custom Properties
const base = Vue.extend({ mixins: [VBtn] })
export default base.extend({
  name: "my-dialog-btn",
  props: {
      text: {
        type: Boolean,
        default: true
      },
      color: {
        type: String,
        default: "primary"
      }
  }
})

</script>