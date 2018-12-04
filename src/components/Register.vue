<template>
  <div class="div container">
    <h3>Create An Account</h3>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group id="nameInputGroup" 
        label="Name:"
        label-for="name-input">
        <b-form-input id="nameInput"
          type="text"
          v-model="form.name"
          required 
          placeholder="Enter name.">
        </b-form-input>
      </b-form-group>
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
  firebase: {
    users: db.ref('users')
  },
  data () {
    return {
      form: {
        name: '',
        email: '',
        password: ''
      },
      show: true
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault();
      firebase.auth().createUserWithEmailAndPassword(this.form.email, this.form.password)
      .then( user => {
        alert('Your account has been created.')
        firebase.auth().currentUser.updateProfile({ displayName: this.form.name })
        this.$router.push('/record')
      },
      function (err) {
        alert('Oops' + err.message)
      }
      )
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