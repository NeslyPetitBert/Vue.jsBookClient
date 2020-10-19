<template>
    <div class="mt-3">
        <form @submit.prevent="handleSubmit">
            <!-- form errors -->
            <Error v-if="error" :error="error" />
            <!-- form content -->
            <h3>Inscription</h3>
            <div class="form-group">
                <label>Prénom</label>
                <input type="text" v-model="firstName" class="form-control" placeholder="Mon prénom">
            </div>
            <div class="form-group">
                <label>Nom</label>
                <input type="text" v-model="lastName" class="form-control" placeholder="Mon nom de famille">
            </div>
            <div class="form-group">
                <label>Email</label>
                <input type="email" v-model="email" class="form-control" placeholder="Mon email">
            </div>
            <div class="form-group">
                <label>Mot de passe</label>
                <input type="password" v-model="password" class="form-control" placeholder="Je choisi mon mot de passe">
            </div>
            <div class="form-group">
                <label>Confirmation</label>
                <input type="password" v-model="passwordConfirm" class="form-control" placeholder="Je confirme mon mot de passe">
            </div>
            <button type="submit" class="btn btn-primary">Je m'inscris</button>
        </form>
    </div>
</template>

<script>
    import axios from 'axios'
    import Error from './Error.vue'
    
    export default {
        name: 'Register',
        components: {
            Error
        },
        data() {
            return {
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                passwordConfirm: '',
                error: ''
            }
        },
        methods: {
            async handleSubmit() {
                // global try catch bloc to anage login errors
                try {
                    // send request to server
                    // const response = 
                    await axios.post('register', {
                        firstName: this.firstName,
                        lastName: this.lastName,
                        email: this.email,
                        password: this.password,
                        passwordConfirm: this.passwordConfirm
                    });

                    // console.log(response);
                    this.$router.push('/login');
                } catch (e) {
                    this.error = 'Les données n\'ont pas été soumises suite à une erreur';
                }
                
            }
        }
    }
</script>