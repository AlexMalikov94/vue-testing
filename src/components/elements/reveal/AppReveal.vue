<template>
    <div>
        <a href="#" @click.prevent="revealed = true">Click to Reveal</a>
        <div v-if="!revealed">{{ text }}</div>
    </div>
    
</template>
<script>
export default {
    data() {
        return {
            revealed: false
        }
    },
    props:{
        text: {
            required: true,
            type: String
        }
    }
}
</script>