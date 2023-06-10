<template>
  <Teleport to="body">
    <div
      id="cursor-follower"
      ref="cursorRef"
      class="fixed z-40 top-0 left-0 rounded-full will-change-transform -translate-x-1/2 -translate-y-1/2 pointer-events-none h-3 w-3 bg-black"
    >
      <div id="cursor-follower-inner" ref="cursorInnerRef" class=""></div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'

const cursorRef = ref<HTMLDivElement>()
const cursorInnerRef = ref<HTMLDivElement>()

interface CursorFollowerProps {
  cursorSize?: number
  cursorBackgroundColor?: string
  exclusionBackgroundColor?: string
}
const {
  cursorSize = 12,
  cursorBackgroundColor = '#000000',
  exclusionBackgroundColor = '#ffffff',
} = defineProps<CursorFollowerProps>()

onMounted(() => {
  const hideCursor = () => {
    gsap.to('#cursor-follower', {
      opacity: 0,
    })
  }

  const showCursor = () => {
    gsap.to('#cursor-follower', {
      opacity: 1,
    })
  }

  const moveX = gsap.quickTo('#cursor-follower', 'x', {
    duration: 1.2,
    ease: 'expo',
  })
  const moveY = gsap.quickTo('#cursor-follower', 'y', {
    duration: 1.2,
    ease: 'expo',
  })

  const moveCursor = (e: MouseEvent) => {
    const x = e.clientX
    const y = e.clientY

    moveX(x)
    moveY(y)
  }

  // find the special element for cursor that
  // include the [data-cursor] attrs.
  const sizeEls =
    document.body.querySelectorAll<HTMLElement>('[data-cursor-size]') || []
  const exclusionEls =
    document.body.querySelectorAll<HTMLElement>('[data-cursor-exclusion]') || []

  sizeEls.forEach((el) => {
    const size = el.dataset['cursorSize']
    el.addEventListener('mouseenter', () => {
      gsap.to('#cursor-follower', {
        width: size,
        height: size,
      })
    })
    el.addEventListener('mouseleave', () => {
      gsap.to('#cursor-follower', {
        width: cursorSize,
        height: cursorSize,
      })
    })
  })

  exclusionEls.forEach((el) => {
    const size = el.dataset['cursorSize']
    el.addEventListener('mouseenter', () => {
      if (cursorRef.value) {
        cursorRef.value.style.mixBlendMode = 'exclusion'
        cursorRef.value.style.background = `${exclusionBackgroundColor}`
      }
    })
    el.addEventListener('mouseleave', () => {
      if (cursorRef.value) {
        cursorRef.value.style.mixBlendMode = 'normal'
        cursorRef.value.style.background = `${cursorBackgroundColor}`
      }
    })
  })

  document.addEventListener('mouseenter', showCursor)
  document.addEventListener('mouseleave', hideCursor)
  document.addEventListener('mousemove', moveCursor)

  return () => {
    document.removeEventListener('mouseenter', showCursor)
    document.removeEventListener('mouseleave', hideCursor)
  }
})
</script>
