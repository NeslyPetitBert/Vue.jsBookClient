<template>
    <div class="mt-3">
        <form @submit.prevent="handleSubmit">
            <!-- form errors -->
            <Error v-if="error" :error="error" />
            <!-- form content -->
            <h3>Réinitialisation mot de passe</h3>
            <!-- <div class="form-group">
                <label for="exampleInputPassword1">Ancien mot de passe</label>
                <input type="password" v-model="oldPassword" class="form-control" id="exampleInputPassword1" placeholder="Mon mot de passe actuel">
            </div> -->
            <div class="form-group">
                <label for="exampleInputPassword1">Nouveau mot de passe</label>
                <input type="password" v-model="password" class="form-control" id="exampleInputPassword1" placeholder="Je choisis mon nouveau mot de passe">
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Confirmation</label>
                <input type="password" v-model="passwordConfirm" class="form-control" id="exampleInputPassword1" placeholder="Je confirme mon nouveau mot de passe">
            </div>
            <button type="submit" class="btn btn-primary">Je valide mes modifications</button>
        </form>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: 'Reset',
        components: {
            Error
        },
        data() {
            return {
                // oldPassword: '',
                password: '',
                passwordConfirm: '',
                error: ''
            }
        },
        methods: {
            async handleSubmit() {
                try {
                    // const response = 
                    await axios.post('reset', {
                        // oldPassword: this.oldPassword,
                        password: this.password,
                        passwordConfirm: this.passwordConfirm,
                        token: this.$router.params.token
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