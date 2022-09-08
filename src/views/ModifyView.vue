<script setup>
import { ref, onMounted } from "vue";
import router from "@/router";
import { useRoute } from "vue-router";
import { useVulStore } from "@/stores/vulnerabilities.store";
const title = ref(" ");
const descp = ref(" ");
const vulStore = useVulStore();
const route = useRoute();
function populateData() {
  title.value = "A01:2021 – Broken Access Control";
  descp.value =
    "Access control enforces policy such that users cannot act outside of their intended permissions. Failures typically lead to unauthorized information disclosure, modification, or destruction of all data or performing a business function outside the user's limits. Common access control vulnerabilities include: Violation of the principle of least privilege or deny by default, where access should only be granted for particular capabilities, roles, or users, but is available to anyone.";
}
function goBack() {
  router.push({ name: "home" });
}
function save() {
  const id = route.params.id;
  if (title.value && descp.value != "") {
    vulStore.editVul(id, title.value, descp.value);
    router.push({ name: "home" });
  } else {
    alert("Please fill both the required fields");
  }
}
onMounted(() => {
  const id = route.params.id;
  const details = vulStore.fetchSingleItem(id);
  title.value = details.name;
  descp.value = details.descp;
});
</script>

<template>
  <div class="modify">
    <div class="container">
      <div class="row">
        <div class="col-lg-2 col-md-3"></div>
        <div class="mainCont col-lg-8 col-md-6">
          <nav class="navbar bg-light">
            <div class="container-fluid">
              <span class="navbar-brand mb-0 h1">Modify vulnerability</span>
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
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                v-model="title"
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label"
                >Description*</label
              >
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="9"
                v-model="descp"
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
.modify {
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
