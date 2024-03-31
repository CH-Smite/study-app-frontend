<template xmlns="http://www.w3.org/1999/html">
  <div class="about">
    <div class="photo">
      <Loader
          v-if="imageLoading"
          absolute/>
      <img
          :src="image"
          :alt="name"/>
    </div>
    <div class="name">
      {{ name }}
    </div>
    <div>
      <img
          :src="gmailImage"/>{{ email }}
    </div>
    <div
        class="pointer"
        @click="toVelog">
      <img
          :src="velogImage"/>{{ blog }}
    </div>
    <br/>
    <div
        class="pointer"
        @click="toGithub">
      <img
          :src="githubImage"/>{{ github }}
    </div>
  </div>
</template>

<script>
import Loader from '~/components/Loader'
import {mapState} from 'vuex'

export default {
  components: {
    Loader
  },
  data() {
    return {
      imageLoading: true
    }
  },
  computed: {
    ...mapState('about', [
      'image',
      'name',
      'gmailImage',
      'email',
      'velogImage',
      'blog',
      'githubImage',
      'github'
    ])
  },
  mounted() {
    this.init()
  },
  methods: {
    async init() {
      await this.$loadImage(this.image)
      this.imageLoading = false
    },
    toVelog() {
      window.open('https://velog.io/@ch_dev', '_blank');
    },
    toGithub() {
      window.open('https://github.com/CH-Smite', '_blank');
    }
  }
}
</script>

<style lang="scss" scoped>
.about {
  text-align: center;

  .photo {
    width: 250px;
    height: 250px;
    margin: 40px auto 20px;
    padding: 30px;
    border: 10px solid $gray-300;
    border-radius: 50%;
    box-sizing: border-box;
    background-color: $gray-200;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 130%;
      border-radius: 50%;
    }
  }

  .name {
    font-size: 40px;
    font-family: "Oswald", sans-serif;
    margin-bottom: 20px;
  }

  div {
    img {
      width: 30px;
      margin-right: 10px;
      border-radius: 50%;
    }
  }
  .pointer {
    display: inline-block;
    width: auto;
    height: auto;
    cursor: pointer;
  }
}
</style>
