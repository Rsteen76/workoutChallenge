<template>
  <div class="div container">
    <h3>Sign In</h3>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group id="emailInputGroup" 
        label="Email:"
        label-for="email-input">
      <b-form-input id="emailInput"
        type="email"
        v-model="form.email"
        required 
        placeholder="Enter email.">
      </b-form-input>
      </b-form-group>
        <b-form-group id="passwordInputGroup" 
        label="Password:"
        label-for="password-input">
        <b-form-input id="passwordInput"
          type="password"
          v-model="form.password"
          required 
          placeholder="Enter password.">
        </b-form-input>
      </b-form-group>
      <b-button class="mr-1" type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
import { db } from '../config/db';
import firebase from 'firebase'

  export default { 
    data () {
      return {
        form: {
          name: '',
          email: '',
          password: ''
        },
        show: true,
        currentUser: ''
      }
    },
    methods: {
    onSubmit (evt) {
      evt.preventDefault();
      firebase.auth().signInWithEmailAndPassword(this.form.email,this.form.password)
      .then( user => {
        this.$router.push({ name: 'Rankings' })
        alert('You are logged in!')
        },
       err => {
          alert('Oops' + err.message)
        })
    },
    onReset (evt) {
      evt.preventDefault();
      /* Reset our form values */
      this.form.email = '';
      this.form.name = '';
      this.form.password = '';
      /* Trick to reset/clear native browser form validation state */
      this.show = false;
      this.$nextTick(() => { this.show = true });
    }
  }
}
</script>