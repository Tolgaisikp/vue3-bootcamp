<template>
    <div class="container">
        <div class="header">
            <slot name="title"/>
        </div>
        <hr>
        <div class="content my-2">
            <slot name="content" />
        </div>
        <hr>
        <slot/>
        <div class="footer text-right">
            <button @click = "onSave">Kapat</button>
            <button class="green">Kaydet</button>
        </div>
    </div>
</template>

<script>
export default {
    props:["onSave"]
}
</script>