<template>
  <div class="container text-center mt-5">
    <select autofocus class="recordSelect mb-3" name="exerciseList" v-model="newExercise.exerciseType">
      <option value="" disabled selected>Exercise Type</option>
      <option value="Pushup">Pushup</option>
      <option value="Pullup">Pullup</option>
      <option value="Burpee">Burpee</option>
    </select>
    <form @submit.prevent class="mx-auto recordForm">
      <input class="recordInput" type="number" v-model="newExercise.exerciseQty">
      <button @click="recordActivity" class="btn btn-secondary btn-block rounded-0" id="recordButton ">Go!</button>
  </form>

    </div>
</template>
<script>
import { db } from '../config/db';
import firebase from 'firebase'


export default {
  components: {
      name: 'RecordActivity'
 },
 firebase: {
    exercises: db.ref('exercises')
 },
  data () {
    return {
      newExercise: {
        user: '',
        exerciseType: '',
        exerciseQty: ''
      },
      user: firebase.auth().currentUser
    }
  },
  methods: {
    recordActivity() {
      this.$firebaseRefs.exercises.push({
        user: this.user.displayName,
        exerciseType: this.newExercise.exerciseType,
        exerciseQty: this.newExercise.exerciseQty
      })
      this.newExercise.exerciseType = '';
      this.newExercise.exerciseQty = '';
      this.$router.push('/activity')
    }
  }
}
</script>

<style scoped>
.recordInput {
  height: 300px;
  width: 300px;
  font-size: 6em;
  text-align: center;
  border: none;
}
.recordSelect {
  width: 300px;
  height: 75px;
  -webkit-box-shadow: 3px 4px 15px 0px rgba(0,0,0,0.75);
  -moz-box-shadow: 3px 4px 15px 0px rgba(0,0,0,0.75);
  box-shadow: 3px 4px 15px 0px rgba(0,0,0,0.75);
}

.recordForm {
  width: 308px;
  border: 3px solid grey;
  border-radius: 10px;
  -webkit-box-shadow: 3px 4px 15px 0px rgba(0,0,0,0.75);
  -moz-box-shadow: 3px 4px 15px 0px rgba(0,0,0,0.75);
  box-shadow: 3px 4px 15px 0px rgba(0,0,0,0.75);
}
</style>
