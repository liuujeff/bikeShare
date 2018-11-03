<template>
    <v-app>
        <!-- Main view, all pages include toolbar and cart icon, with subpages as it's children -->
        <toolbar />
        <v-content class="ma-5">
            <transition name="shift" mode="out-in" type="animation" appear>
                <router-view />
            </transition>    
        </v-content>
    </v-app>
</template>

<script>
import Toolbar from "@/components/Toolbar";

export default {
  name: "Full",
  components: { Toolbar }
};
</script>

<style scoped>
.shift-enter {
  opacity: 0;
}
.shift-enter-active {
  animation: shift-in 0.25s ease-out forwards;
  transition: opacity 0.5s;
}
.shift-leave-active {
  opacity: 0;
  animation: shift-out 0.25s ease-out forwards;
  transition: opacity 0.5s;
}

@keyframes shift-in {
  from {
    transform: translateY(-15px);
  }
  to {
    transform: translateY(0);
  }
}

@keyframes shift-out {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(15px);
  }
}
</style>
