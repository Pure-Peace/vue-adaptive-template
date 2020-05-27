import NProgress from 'nprogress'

NProgress.configure({
  easing: 'ease-in-out',
  speed: 500,
  showSpinner: true,
  trickleSpeed: 200,
  minimum: 0.4
})

export default NProgress
