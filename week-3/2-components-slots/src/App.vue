<template>
        
        <!--<Modal :onSave = "onSave" :content = "content"/>-->
        <Modal>
            <template #title>
                <h3>Slot ile gelen title bilgisi</h3>
            </template>

            <template #content>
                <p class="text-green">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </template>
            <template #default>
                <p>default olarak gösterilecek</p> 
            </template>
        </Modal>
    
</template>

<script>
import Modal from "@/components/Modal"
export default {
    data() {
        return {
            content :`<h2> Modal Title </h2>`
        }
    },
    components:{
        Modal
    },
    methods: {
        onSave(){
            alert("Kapandı")
        }
    },
}
</script>