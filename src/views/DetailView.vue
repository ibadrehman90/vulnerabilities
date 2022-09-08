<script setup>
import { ref, onMounted } from "vue";
import router from "@/router";
import { useRoute } from "vue-router";
import { useVulStore } from "@/stores/vulnerabilities.store";
const title = ref("");
const descp = ref("");
const id = ref();
const route = useRoute();
const vulStore = useVulStore();
function goBack() {
  router.push({ name: "home" });
}
function modifyPage() {
  const id = route.params.id;
  router.push({ name: "modify", params: { id: id } });
}
onMounted(() => {
  const id = route.params.id;
  const details = vulStore.fetchSingleItem(id);
  title.value = details.name;
  descp.value = details.descp;
});
</script>

<template>
  <div class="detail">
    <div class="container">
      <div class="row">
        <div class="col-lg-2 col-md-3"></div>
        <div class="mainCont col-lg-8 col-md-6">
          <nav class="navbar bg-light">
            <div class="container-fluid">
              <span class="navbar-brand mb-0 h1">Details</span>
              <div>
                <button
                  type="button"
                  class="btn btn-outline-success ms-auto save"
                  @click="modifyPage"
                >
                  Edit
                </button>
                <button
                  type="button"
                  class="btn btn-outline-dark ms-auto"
                  @click="goBack"
                >
                  Back
                </button>
              </div>
            </div>
          </nav>
          <div class="vel">
            <div class="mb-3">
              <span>Title</span>
              <p class="title">{{ title }}</p>
            </div>
            <div class="mb-3">
              <span>Description</span>
              <p class="descp">{{ descp }}</p>
            </div>
          </div>
        </div>
        <div class="col-lg-2 col-md-3"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.detail {
  margin-top: 100px;
}

.mainCont {
  height: 500px;
  padding: 0;
  border: 1px solid lightgrey;
  overflow-y: scroll;
}

.vel {
  padding: 20px;
}

.save {
  margin-right: 10px;
}

.title {
  font-size: 1.2rem;
  color: black;
  padding: 10px;
}

.descp {
  font-size: 1rem;
  color: black;
  padding: 10px;
}
</style>
