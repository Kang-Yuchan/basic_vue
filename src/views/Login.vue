<template>
   <v-container fill-height style="max-width:450px;">
       <v-layout align-center row wrap>
           <v-flex xs12>
               <v-alert
                :value="isError"
                type="error"
                >
                emailとパスワードを確認してください。
                </v-alert>
                <v-alert
                :value="loginSuccess"
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
                   @click="login()"
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
export default {
    data() {
        return {
            email: null,
            password: null,
           
            isError: false,
            loginSuccess: false
        }
    },
    methods: {
        login() {
            let selectedUser = null
            this.allUsers.forEach(user => {
                if(user.email === this.email) selectedUser = user
            })
            selectedUser === null 
             ? (this.isError = true)
             : selectedUser.password !== this.password
                ? (this.isError = true)
                : (this.loginSuccess = true)
        }
    }
}
</script>
