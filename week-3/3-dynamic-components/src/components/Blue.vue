<template>

<h3 class="bg-blue text-white">Blue Component</h3>        
<input type="text">
    
</template>
<script>
export default {
    mounted() {
        console.log("mounted")//burdaki life cycle ı kaybetmemek içn aşağıdakileri kullanırız
    },
    activated() {
        console.log("activated")
    },
    deactivated() {
        console.log("deactivated")
    },
}
</script>