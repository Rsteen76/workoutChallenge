<template>
  <b-navbar class="custom-size" toggleable="md" type="dark" variant="secondary">

    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

    <b-navbar-brand href="#"><img class="tug-o-war" src="@/assets/tug-o-war.png" alt=""></b-navbar-brand>

    <b-collapse is-nav id="nav_collapse">

      <b-navbar-nav>
        <b-nav-item to="/activity">Your Activity</b-nav-item>
        <b-nav-item to="/rankings">Rankings</b-nav-item>
        <b-nav-item to="/record">Record Activity</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">

        <b-nav-item-dropdown right>
          <!-- Using button-content slot -->
          <template slot="button-content">
            <em v-if="!currentUser">User</em>
            <em v-else>{{ currentUser.displayName }}</em>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item v-if="currentUser" @click="logout" href="#">Logout</b-dropdown-item>
          <b-dropdown-item v-if="!currentUser"  href="/login">Login</b-dropdown-item>
          <b-dropdown-item v-if="!currentUser"  href="/register">Register</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>

    </b-collapse>
  </b-navbar>
</template>
<script>
import firebase from 'firebase'

export default {
  name: 'Header',

data () {
    return {
      currentUser: firebase.auth().currentUser
    }
  },

  methods: {
    logout: function () {
      firebase.auth().signOut().then(() => {
        this.$router.push('login')
      })
    }
  }
}
</script>
<style>
.tug-o-war {
  height: 50px;
  margin: 0px;
  padding: 2px;
  background-color:black;
}
.custom-size {
  height: 60px;
  padding: 0;
}
</style>
