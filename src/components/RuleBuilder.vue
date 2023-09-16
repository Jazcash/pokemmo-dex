<template>
    <div>
        <div v-for="(field, index) in fields" :key="index">
            <input v-model="field.value" type="text" :placeholder="`Field ${index + 1}`">
        </div>
        <button @click="addField">Add Field</button>
        <button @click="removeField">Remove Field</button>
    </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const fields = ref([{ value: "" }]);

function addField() {
    fields.value.push({ value: "" });
}

function removeField() {
    if (fields.value.length > 1) {
        fields.value.pop();
    }
}
</script>

<style lang="scss" scoped></style>