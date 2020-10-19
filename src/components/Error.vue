<template>
    <div v-if="error" class="alert alert-danger">
        {{error}}
    </div>
</template>

<script>
    export default {
        name: 'Error',
        props: ['error']
    }
</script>