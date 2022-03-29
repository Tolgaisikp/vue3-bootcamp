<template>
        
<ul v-if="provideData.itemsList.length > 0">
    <li v-for="item in provideData.itemsList" :key="item.id" class="d-flex justify-content-between align-items-center">
        <span>{{item.title}}</span>
        <button @click="onDelete(item)" class="sm red">Sil</button>
    </li>
</ul>
<div class="text-red" v-else>
    <h2>Liste Boş</h2>
</div>
<small class="text-red d-flex justify-content-end align-items-center mt-1">{{provideData.itemsList.length}} adet alınacak ürün vardır</small>
</template>

<script>
export default {
    inject:['provideData','onDelete'],
}
</script>