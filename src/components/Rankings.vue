<template>
  <div>
    <h1>Rankings</h1>
    <h3>{{ exerciseList.exerciseQty }}</h3>
    <b-table hover :exerciseList="exerciseList"></b-table>
    <table class="table table-striped">
      <thead class="text-center">
        <tr>
          <th>Name</th>
          <th>Exercise Type</th>
          <th>Quantity</th>
        </tr>
      </thead>
      <tbody class="text-center">
          <tr v-for="exercise in exercises" :key="exercise.id">
            <td>{{ exercise.user }}</td>
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
      name: 'Rankings'
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

  },
}
</script>


