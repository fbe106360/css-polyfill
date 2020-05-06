<script lang="ts">

import Vue from 'vue'
//@ts-ignore
import VSwitch from 'vuetify/lib/components/VSwitch/VSwitch'

// Create Base Mixins and Define Custom Properties
const base = Vue.extend({ mixins: [VSwitch] })
export default base.extend({
  name: "smc-switch",
  props: {
      inset: {
        type: Boolean,
        default: true
      },
      color: {
        type: String,
        default: "secondary"
      }
  }
})

</script>