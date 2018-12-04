<template>
  <div>
    <h1>Your Activity</h1>
    <h3>{{ exerciseList.exerciseQty }}</h3>
    <b-table hover :exerciseList="exerciseList"></b-table>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Exercise Type</th>
          <th>Quantity</th>
        </tr>
      </thead>
      <tbody>
          <tr v-for="exercise in exerciseList" :key="exercise.id">
            <td>{{ exercise.exerciseType }}</td>
            <td>{{ exercise.exerciseQty }}</td>
          </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

import { db } from '../config/db';
import firebase from 'firebase'

export default {
  components: {
      name: 'ListItem'
  },
  data() {
    return {
      exerciseList: [],
      user: firebase.auth().currentUser
    }
  },
  firebase: {
    exercises: db.ref('exercises')
  },
  methods: {
    getExercises() {
      this.$firebaseRefs.exercises.orderByChild('user').equalTo(this.user.displayName).on('child_added', snap => {
        this.exerciseList.push(snap.val()) 
        console.log(this.exerciseList)
      })
    },
    deleteItem(key) {
      this.$firebaseRefs.exercises.child(key).remove();
    }
  },
  mounted () {
    this.getExercises()
  }
}
</script>


