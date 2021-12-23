import { useEffect, useRef } from 'react'
import styled from 'styled-components'

import { init } from '../app'

const Canvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
`

export default function MainCanvas() {
  const canvas = useRef(null);

  useEffect(() => {
    if (canvas.current) {
      init(canvas.current);
    }
  }, [canvas]);

  return (
    <Canvas ref={canvas} />
  )
}