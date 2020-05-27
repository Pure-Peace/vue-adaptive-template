<template>
  <div>
    <div id="main-layout-box">
      <top-navbar
        ref="topNavbar"
        :fixed="fixed"
      />
      <div
        :style="routerViewStyle"
        id="main-content-box"
      >
        <div
          v-if="showBreadcrum"
          class="breadcrum-box"
        >
          当前位置：{{ $route.name }}
        </div>
        <div id="view-box">
          <transition
            name="faded"
            mode="out-in"
          >
            <router-view />
          </transition>
        </div>
      </div>
      <footer-layout ref="footerLayout" />
    </div>
  </div>
</template>

<script>
import topNavbar from '@/components/topNavbar'
import footerLayout from '@/components/footerLayout'

export default {
  props: {
    fixed: {
      type: Boolean,
      default: false
    },
    showBreadcrum: {
      type: Boolean,
      default: false
    }
  },
  components: {
    topNavbar,
    footerLayout
  },
  data () {
    return {
      isMounted: false
    }
  },
  mounted () {
    this.isMounted = true
  },
  computed: {
    routerViewStyle () {
      return `min-height: calc(100vh - ${this.topNavbarHeight}px) !important;`
    },
    footerLayoutHeight () {
      return this.isMounted ? this.$refs.footerLayout.$refs.footerLayoutBox.clientHeight + 1 : '0'
    },
    topNavbarHeight () {
      return this.isMounted ? this.$refs.topNavbar.$refs.topNavbarBox.clientHeight : '0'
    }
  }

}
</script>

<style scoped>
.breadcrum-box {
  padding: 20px;
  font-size: 14px;
  font-weight: lighter;
  background-color: rgb(18, 18, 24);
  margin-bottom: 10px;
}

#main-layout-box {
  flex: 1;
  min-height: 100vh;
  background-color: #000000;
}

#main-content-box {
  padding: 20px;
}

#view-box {
  min-height: 100%;
  padding: 20px;
  margin: 0 auto;
}

.faded-enter {
  opacity: 0;
}
.faded-enter-active {
  transition: .5s ease-in-out;

}
.faded-enter-to {

}
.faded-leave {

}
.faded-leave-active {
  transition: .5s ease-in-out;
}
.faded-leave-to {
  opacity: 0;
  transform: translate(20px, 0);
}
</style>
