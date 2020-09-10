<template>
  <i :class="'sxd-' + name"></i>
</template>
<script>
  export default {
    name: 'SxdIcon',
    props: {
      name: String
    }
  };
</script>