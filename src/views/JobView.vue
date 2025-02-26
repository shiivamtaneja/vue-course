<script setup>
import { onMounted, reactive } from "vue";
import { RouterLink, useRoute, useRouter } from "vue-router";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";
import { useToast } from "vue-toastification";

import axios from "axios";

import BackButton from "@/components/BackButton.vue";

const route = useRoute();
const router = useRouter();
const toast = useToast();

const jobID = route.params.id;

const state = reactive({
  job: null,
  isLoading: true,
});

const deleteJob = async () => {
  if (confirm("Are you sure you want to delete this job?")) {
    try {
      await axios.delete(`/api/jobs/${jobID}`);
      toast.success("Job Deleted Successfully");
      router.push("/jobs");
    } catch (err) {
      console.error("Error deleting job ", err);
      toast.error("Job Was Not Deleted");
    }
  }
};

onMounted(async () => {
  try {
    const response = await axios.get(`/api/jobs/${jobID}`);

    state.job = response.data;
  } catch (err) {
    console.error(`Erorr fetching job with id: ${jobID}, `, err);
  } finally {
    state.isLoading = false;
  }
});
</script>

<template>
  <BackButton />

  <div
    v-if="state.isLoading || !state.job"
    class="py-6 text-center text-gray-500"
  >
    <PulseLoader />
  </div>

  <section v-else class="bg-green-50">
    <div class="container px-6 py-10 m-auto">
      <div class="grid grid-cols-1 md:grid-cols-[70%_28%] w-full gap-6">
        <main>
          <div
            class="p-6 text-center bg-white rounded-lg shadow-md md:text-left"
          >
            <div class="mb-4 text-gray-500">{{ state.job.type }}</div>
            <h1 class="mb-4 text-3xl font-bold">{{ state.job.title }}</h1>
            <div
              class="flex justify-center mb-4 text-gray-500 align-middle md:justify-start"
            >
              <i class="mr-2 text-xl text-orange-700 pi pi-map-marker"></i>
              <p class="text-orange-700">{{ state.job.location }}</p>
            </div>
          </div>

          <div class="p-6 mt-6 bg-white rounded-lg shadow-md">
            <h3 class="mb-6 text-lg font-bold text-green-800">
              Job Description
            </h3>

            <p class="mb-4">
              {{ state.job.description }}
            </p>

            <h3 class="mb-2 text-lg font-bold text-green-800">Salary</h3>

            <p class="mb-4">{{ state.job.salary }} / Year</p>
          </div>
        </main>

        <!-- Sidebar -->
        <aside>
          <!-- Company Info -->
          <div class="p-6 bg-white rounded-lg shadow-md">
            <h3 class="mb-6 text-xl font-bold">Company Info</h3>

            <h2 class="text-2xl">{{ state.job.company.name }}</h2>

            <p class="my-2">
              {{ state.job.company.description }}
            </p>

            <hr class="my-4" />

            <h3 class="text-xl">Contact Email:</h3>

            <p class="p-2 my-2 font-bold bg-green-100">
              {{ state.job.company.contactEmail }}
            </p>

            <h3 class="text-xl">Contact Phone:</h3>

            <p class="p-2 my-2 font-bold bg-green-100">
              {{ state.job.company.contactPhone }}
            </p>
          </div>

          <!-- Manage -->
          <div class="p-6 mt-6 bg-white rounded-lg shadow-md">
            <h3 class="mb-6 text-xl font-bold">Manage Job</h3>
            <RouterLink
              :to="`/jobs/edit/${state.job.id}`"
              class="block w-full px-4 py-2 mt-4 font-bold text-center text-white bg-green-500 rounded-full hover:bg-green-600 focus:outline-none focus:shadow-outline"
              >Edit Job</RouterLink
            >
            <button
              @click="deleteJob"
              class="block w-full px-4 py-2 mt-4 font-bold text-white bg-red-500 rounded-full hover:bg-red-600 focus:outline-none focus:shadow-outline"
            >
              Delete Job
            </button>
          </div>
        </aside>
      </div>
    </div>
  </section>
</template>