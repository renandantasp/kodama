<template>
  <div>
    {{data}}
  </div>
</template>


<script>
// require('dotenv').config()

export default {
  data() {
    return {
      data:'',
    }
  },
  async created(){
    await this.$axios.get(`${process.env.rawgUrl}games${process.env.rawgKey}`)
    .then(res => this.data = res.data.results)
    
    }
  }

</script>