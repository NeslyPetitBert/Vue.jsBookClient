<template>
    <div class="mt-3">
        <form @submit.prevent="handleSubmit">
            <!-- form errors -->
            <Error v-if="error" :error="error" />
            <!-- form content -->
            <!-- form errors -->
            <div v-if="message" class="alert alert-success">
                {{message}}
            </div>
            <!-- form content -->
            <h3>Mot de passe oublié</h3>
            <div class="form-group">
                <label for="exampleInputEmail1">Adresse email</label>
                <input type="email" v-model="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
            </div>
            <button type="submit" class="btn btn-primary">Je m'envoie un lien</button>
        </form>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: 'Forgot',
        components: {
            Error
        },
        data() {
            return {
                email: '',
                error: ''
            }
        },
        methods: {
            async handleSubmit() {
                try {
                    // const response = 
                    await axios.post('forgot', {
                        email: this.email
                    });

                    // console.log(response);
                    
                    this.message = 'Un email vous a été envoyé';
                    this.error = '';
                } catch (e) {
                    this.error = 'Une erreur a été interceptée';
                    this.message = '';
                }
            }
        }
    }
</script>