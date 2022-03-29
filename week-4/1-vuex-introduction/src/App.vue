<template>
<div class="container">
    <!--<p>{{$store.state.user}}</p>
    <p>{{$store.state.theme}}</p>-->
    <ul>
        <li v-for="permission in $store.state.permissions" :key="permission">
            {{permission}}
        </li>
    </ul>
    <ul>
        <li v-for="user in $store.state.userList" :key="user">
            {{user}}
        </li>
    </ul>
    <br/>
    <UserList />
    <!--<h2>{{$store.state.fullName}}</h2>
    <p>{{activeUser}}</p>-->
    <NewUser />
</div>
</template>

<script>
import {mapGetters} from "vuex";
import UserList from "@/components/UserList"
import NewUser from "@/components/NewUser"
export default {
    components:{UserList, NewUser},
    created() {
        console.log(this.$store.state.user)
        console.log(this.$store.getters._woodItems)
        console.log(this.$store.getters._activeUser)
    },
    methods: {
        updateName(){
            this.$store.state.fullName = "Tolga Kaşık"
            this.$store.state.itemList.push({id:3, title : "Sandalye", type:"mobilya"})
        }
    },
    computed:{
        //...mapGetters(["woodItems", "activeUser"]),
        ...mapGetters({
            woodItems : "_woodItems",
            activeUser : "_activeUser"
        }),
        woodItems(){
            return this.$store.getters._woodItems
            }
        }
}
</script>