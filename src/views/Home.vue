<template>
  <div>
     <AppCountdown :start="5"
      />
  </div>
</template>
<script>
import AppCountdown from '@/components/features/countdown/AppCountdown'
export default {
  
  components: {
    AppCountdown
  }
}
</script>
