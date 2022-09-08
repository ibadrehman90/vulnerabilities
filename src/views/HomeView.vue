<script setup>
import { ref, onMounted } from "vue";
import router from "@/router";
import Vulnerability from "../components/Vulnerability.vue";
import { useVulStore } from "@/stores/vulnerabilities.store";

const title = ref("Abc");
const descp = ref("asdasdsadsadasd");
const data = ref();
const vulStore = useVulStore();
function createPage() {
  router.push({ name: "create" });
}
function modifyPage() {
  router.push({ name: "modify" });
}
onMounted(() => {
  // console.log(vulStore.data[2].name);
  data.value = vulStore.data;
});
</script>

<template>
  <div class="home">
    <div class="container">
      <div class="row">
        <div class="col-lg-2 col-md-3"></div>
        <div class="mainCont col-lg-8 col-md-6">
          <nav class="navbar bg-light">
            <div class="container-fluid">
              <span class="navbar-brand mb-0 h1">Vulnerabilities</span>
              <button
                type="button"
                class="btn btn-outline-primary ms-auto"
                @click="createPage"
              >
                Add New
              </button>
            </div>
          </nav>
          <div class="vul" :key="vuls.id" v-for="vuls in data">
            <Vulnerability
              :id="vuls.id"
              :title="vuls.name"
              :descp="vuls.descp"
            />
          </div>
        </div>
        <div class="col-lg-2 col-md-3"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.home {
  margin-top: 100px;
}

.mainCont {
  height: 500px;
  padding: 0;
  border: 1px solid lightgrey;
  overflow-y: scroll;
}

.vul {
  padding: 10px;
}
</style>
