'use client'

import { useEffect, useRef } from 'react'
import { GameScene } from '@/scenes/scene'
import styles from '@/app/page.module.css'

export default function Render() {
  const canvas = useRef<HTMLCanvasElement | null>(null);
  const scene = useRef<GameScene | null>();

  useEffect(() => {
    if (canvas.current && !scene.current) {
      scene.current = new GameScene(canvas.current);
      scene.current.animate();
    }
  })

  return (
    <main>
      <canvas ref={canvas} ></canvas>
    </main>
  )
}
