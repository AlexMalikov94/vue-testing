<template>
    <div>
        <AppCoursePart 
         v-for="part in parts"
         :key="part.id"
         :part="part"
        />
    </div>
</template>
<script>
import AppCoursePart from './AppCoursePart.vue'
export default {
    components: {
        AppCoursePart
    },
    props: {
        course: {
            required: true,
            type: Object
        }
    }
}
</script>