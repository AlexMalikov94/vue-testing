<template>
  <div>
     <AppCoursePlayList
       :course="{
          parts: [
            { id: 1,  title: 'One'},
            { id: 2, title: 'Two'}
          ]
        }"
      />
  </div>
</template>
<script>
import AppCoursePlayList from '@/components/features/course/AppCoursePlayList'
export default {
  
  components: {
    AppCoursePlayList
  }
}
</script>
