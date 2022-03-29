<template>
        
<h3>Alışveriş Listesi</h3>
<hr/>
<div class="my-1">
    <input type="text" placeholder="ne alacaksın?" @keydown.enter = "onSave">
</div>

</template>

<script>
export default {
    inject:['onSave']
}
</script>