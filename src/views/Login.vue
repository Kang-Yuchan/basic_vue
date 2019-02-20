<template>
   <v-container fill-height style="max-width:450px;">
       <v-layout align-center row wrap>
           <v-flex xs12>
               <v-card>
                   <v-toolbar flat>
                        <v-toolbar-title>Login</v-toolbar-title>
                    </v-toolbar>
                 <div class="pa-3">
                   <v-text-field v-model="email" label="Email" type="email">
                   </v-text-field>
                   <v-text-field v-model="password" label="Password" type="password" >
                   </v-text-field>
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
            allUsers: [
                {id: 1, name: "yuchan", email: "yuchan@gmail.com", password: "123"},
                {id: 2, name: "seeds", email: "seeds@gmail.com", password: "123"}
            ]
        }
    },
    methods: {
        login() {
            let selectedUser = null
            console.log(this.email, this.password);
        }
    }
}
</script>
