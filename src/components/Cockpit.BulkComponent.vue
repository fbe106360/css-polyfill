<template>
  <v-container>
    <v-menu
      v-model="menu"
      :close-on-content-click="false"
      :close-on-click="!bulkMode"
      offset-y
      transition="scroll-y-transition"
    >
      <template v-slot:activator="{ on }">
        <my-btn :color="bulkButtonColor" id="button" v-on="on">Bulk Edit</my-btn>

      </template>
      <v-card>
        <v-card-title>
          <my-switch :label="bulkState" v-model="bulkMode"></my-switch>
        </v-card-title>
        <v-card-text>
          <my-btn class="mb-2" color="secondary" :disabled="!bulkMode">Select All</my-btn>
          <my-btn color="secondary" :disabled="!bulkMode">Unselect All</my-btn>
          <my-btn class="mt-2" color="secondary" :disabled="!bulkMode">Invert</my-btn>
        </v-card-text>
        <v-card-actions>
          <v-dialog v-model="dialog" scrollable transition="dialog-transition">
            <template v-slot:activator="{ on }">
              <my-btn color="success" :disabled="!bulkMode" v-on="on">Start Bulk</my-btn>
            </template>
            <p>To Close Bulk click on  the screen</p>
          </v-dialog>
        </v-card-actions>
      </v-card>
    </v-menu>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
})
export default class BulkComponent extends Vue {
  dialog: boolean;
  bulkMode: boolean; //TODO move to store
  menu: boolean;

  constructor() {
    super();
    this.dialog = false;
    this.bulkMode = false;
    this.menu = false;
  }

  get bulkButtonColor() {
    return this.bulkMode ? "secondary" : "primary";
  }

  get bulkState(){
    return this.bulkMode ? "active": "inactiv";
  }

  // TODO server request + server implementation
  // get Action to ServiceController
  // set Action to ModuleController (Switch)
}
</script>