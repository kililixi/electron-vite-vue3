import router from './router'

router.beforeEach(async(to, from, next) => {
  console.log('permission to', to)
  next()
})

router.afterEach(() => {
  // finish progress bar
})
