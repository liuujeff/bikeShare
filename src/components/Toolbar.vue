<template>
  <v-toolbar color="primary" class="white--text elevation-10">
        <v-toolbar-title>
            <span class="hidden-sm-and-down">Bike Share</span>
        </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items>
        <v-btn flat to="/" class="white--text">Dashboard</v-btn>
        <v-btn flat to="/map" class="white--text">Map</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  name: "Toolbar"
};
</script>
