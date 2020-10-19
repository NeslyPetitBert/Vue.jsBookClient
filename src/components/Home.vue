<template>
    <div>
        <div class="jumbotron mt-3" v-if="!user">
            <h3 class="lead">Je ne suis pas connecté...</h3>
        </div>
        <div class="jumbotron mt-3" v-if="user">
            <h1 class="display-3">Mon compte</h1>
            <h3 class="lead">Hello, {{user.firstName}} {{user.lastName}}</h3>
            <hr class="my-4">
            <p>{{user.email}}</p>
            <p class="lead">
            <a class="btn btn-primary btn-lg" href="#" role="button">Modifier mon profil...bientôt</a>
            </p>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        name: 'Home',

        /* 
            Forcer le rechargement de la home page après le login
            Solution alternative en attendant de trouver une meilleur façon de faire.
            J'ai essayé le changement détat grâce à vuex pour un rafraichissement de la page sans la recharger, mais ça ne marche pas pour la home page après le login
        */

       // Solution trouvée sur : https://stackoverflow.com/questions/50213901/reload-page-in-vue-just-once-in-mounted
        mounted() {
            if (localStorage.getItem('reloaded')) {
                // The page was just reloaded. Clear the value from local storage
                // so that it will reload the next time this page is visited.
                localStorage.removeItem('reloaded');
            } else {
                // Set a flag so that we know not to reload the page twice.
                localStorage.setItem('reloaded', '1');
                location.reload();
            }
        }, // Fin
        computed: {
            ...mapGetters(['user'])
        }
    }
</script>