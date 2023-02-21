<template>
  <div id='webviewer' ref='viewer'></div>
</template>

<script>
export default {
  name: 'WebViewer',
  props: {
   
  },
  mounted: function () {
    import('@pdftron/webviewer').then(() => {
        WebViewer({
            initialDoc: 'https://pdftron.s3.amazonaws.com/downloads/pl/webviewer-demo.pdf', // replace with your own PDF file
          }, this.$refs.viewer).then((instance) => {
      
          });
    })
  }
}
</script>


<style>
#webviewer {
  height: 100vh;
}
</style>