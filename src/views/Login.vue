<template>
   <v-container fill-height style="max-width:450px;">
       <v-layout align-center row wrap>
           <v-flex xs12>
               <v-alert
                :value="isLoginError"
                type="error"
                >
                emailとパスワードを確認してください。
                </v-alert>
                <v-alert
                :value="isLogin"
                type="success"
                >
               ログインが完了されました。
                </v-alert>
               <v-card>
                   <v-toolbar flat>
                        <v-toolbar-title>Login</v-toolbar-title>
                    </v-toolbar>
                 <div class="pa-3">
                   <v-text-field v-model="email" label="Email">
                   </v-text-field>
                   <v-text-field v-model="password" label="Password" type="password" >
                   </v-text-field>
                   <v-btn 
                   color="primary"
                   large
                   @click="login({
                       email: email,
                       password: password
                   })"
                   block
                   >
                   ログイン
                   </v-btn>
                          
                 </div>
               </v-card>
            
           </v-flex>
       </v-layout>
   </v-container>
</template>

<script>
import { mapState, mapActions } from "vuex"

export default {
    data() {
        return {
            email: null,
            password: null
        }
    },
    computed: {
        ...mapState(["isLogin", "isLoginError"])
    },
    methods: {
        ...mapActions(["login"])
    }
}
</script>
