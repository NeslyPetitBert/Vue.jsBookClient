<template>
    <div class="mt-3">
        <form @submit.prevent="handleSubmit">
            <!-- form errors -->
            <Error v-if="error" :error="error" />
            <!-- form content -->
            <h3>Connexion</h3>
            <div class="form-group">
                <label for="exampleInputEmail1">Adresse email</label>
                <input type="email" v-model="username" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
                <small id="emailHelp" class="form-text text-muted">Ne communiquez jamais vos informations de connexion à un tierc</small>
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Mot de passe</label>
                <input type="password" v-model="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
            </div>
            <button type="submit" class="btn btn-primary mr-3">Je me connecte...</button>
            <router-link class="btn btn-primary ml-3" to="/forgot">Mot de passe oublié ?</router-link>
        </form>
    </div>
</template>

<script>
    import axios from 'axios'
    import Error from './Error.vue'

    export default {
        name: 'Login',
        components: {
            Error
        },
        data() {
            return {
                // form data
                username: '',
                password: '',
                // form errors
                error: ''

            }
        },
        methods: {
            async handleSubmit() {
                // global try catch bloc to anage login errors
                try{
                    // send request to server
                    const response = await axios.post('api/login_check', {
                        username: this.username,
                        password: this.password
                    });

                    // console.log(response);
                    // store the token in localStorage, dispatch user data to app and redirect
                    localStorage.setItem('token', response.data.token);
                    this.$store.dispatch('user', response.data.user);
                    this.$router.push('/');
                }catch(e) {
                    this.error = 'Le nom d\'utilisateur ou mot de passe est invalide'
                }
            }
        }
    }
</script>