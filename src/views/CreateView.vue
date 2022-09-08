<script setup>
import { ref, onMounted } from "vue";
import router from "@/router";
import { useVulStore } from "@/stores/vulnerabilities.store";
const title = ref("");
const descp = ref("");
const vulStore = useVulStore();
function goBack() {
  router.push({ name: "home" });
}
function save() {
  if (title.value && descp.value != "") {
    vulStore.addVul(title.value, descp.value);
    router.push({ name: "home" });
  } else {
    alert("Please fill both the required fields");
  }
}
</script>

<template>
  <div class="create">
    <div class="container">
      <div class="row">
        <div class="col-lg-2 col-md-3"></div>
        <div class="mainCont col-lg-8 col-md-6">
          <nav class="navbar bg-light">
            <div class="container-fluid">
              <span class="navbar-brand mb-0 h1">Add a new vulnerability</span>
              <div>
                <button
                  type="button"
                  class="btn btn-outline-success ms-auto save"
                  @click="save"
                >
                  Save
                </button>
                <button
                  type="button"
                  class="btn btn-outline-danger ms-auto"
                  @click="goBack"
                >
                  Cancel
                </button>
              </div>
            </div>
          </nav>
          <div class="vel">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label"
                >Title*</label
              >
              <input
                v-model="title"
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="A01:2021 – Broken Access Control"
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label"
                >Description*</label
              >
              <textarea
                v-model="descp"
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="9"
              ></textarea>
            </div>
          </div>
        </div>
        <div class="col-lg-2 col-md-3"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.create {
  margin-top: 100px;
}

.mainCont {
  height: 500px;
  padding: 0;
  border: 1px solid lightgrey;
}

.vel {
  padding: 20px;
}

.save {
  margin-right: 10px;
}
</style>
