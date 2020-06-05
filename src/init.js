const TICK_RATE = 1000

function init() {
  let nextTimeToTick = Date.now()

  function nextAnimationFrame() {
    let now = Date.now()

    console.log('now', now)

    if(nextTimeToTick <= now) {
      nextTimeToTick = now + TICK_RATE
      console.log('Tick')
    }
    requestAnimationFrame(nextAnimationFrame)
  }
  nextAnimationFrame()
}

init()