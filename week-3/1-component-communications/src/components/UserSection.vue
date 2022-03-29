<template>
    <ListSection />
    <button @click="newItem(new Date().getTime())">Set Data</button>
</template>

<script>
import ListSection from "@/components/ListSection"
export default {
    inject:['newItem'],
    components:{
        ListSection
    },
}
</script>