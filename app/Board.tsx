'use client'

const MIRO_BOARD_ADDRESS = "https://miro.com/app/board/uXjVMzzwMt8=/?share_link_id=875082594130"

export default function Board() {
  return (
    <div className="App">
      <iframe
        style={{
          position: 'absolute',
          border: 'none',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%'
        }}
        src={MIRO_BOARD_ADDRESS}
        allow="fullscreen; clipboard-read; clipboard-write"
      />
    </div>
  )
}
