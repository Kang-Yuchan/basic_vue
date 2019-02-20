<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      fixed
      app
    >
      <v-list dense>
        <v-list-tile router :to="{name: 'home'}">
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>ホーム</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile v-if="isLogin === false" router :to="{name: 'login'}">
          <v-list-tile-action>
            <v-icon>contact_mail</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>ログイン</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile v-else router :to="{name: 'mypage'}">
          <v-list-tile-action>
            <v-icon>contact_mail</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>マイページ</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="indigo" dark fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>First Vue Application</v-toolbar-title>
       <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
            <v-menu offset-y v-if="isLogin">
                <v-btn
                  slot="activator"
                  dark
                  flat
                  icon=""
                >
                  <v-icon>more_vert</v-icon>
                </v-btn>
                <v-list>
                  <v-list-tile router :to="{name: 'mypage'}">
                        <v-list-tile-title>マイページ</v-list-tile-title>
                  </v-list-tile>
                  <v-list-tile
                    @click="$store.dispatch('logout')"
                  >
                        <v-list-tile-title>ログアウト</v-list-tile-title>
                  </v-list-tile>
                </v-list>
            </v-menu>
      <v-btn flat v-else router :to="{name: 'login'}">Log In</v-btn>
    </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <router-view/>
      <v-container/>
    </v-content>
    <v-footer color="indigo" app>
      <span class="white--text">&copy;Copyright 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
  import {mapState} from "vuex"
  export default {
    data: () => ({
      drawer: null
    }),
    computed: {
      ...mapState(['isLogin'])
    },
    props: {
      source: String
    }
  }
</script>