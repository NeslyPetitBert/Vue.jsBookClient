<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="collapse navbar-collapse" id="navbarColor03">
            <router-link class="navbar-brand" to="/">Accueil</router-link>
            <ul class="navbar-nav mr-auto" v-if="!user">
                <li class="nav-item">
                    <router-link class="nav-link" to="/login">Je me connecte</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/register">Je m'inscris</router-link>
                </li>
            </ul>
            <ul class="navbar-nav mr-auto" v-if="user">
                <li class="nav-item">
                    <a class="nav-link" href="javascript:void(0)" @click="handleClick">Je me déconnecte</a>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        name: 'Nav',
        methods: {
            handleClick() {
                localStorage.removeItem('token');
                this.$store.dispatch('user', null);
                this.$router.push('/login'); // this.$router.push('/'); redudant navigation to home
            }
        },
        computed: {
            ...mapGetters(['user'])
        }
    }
</script>