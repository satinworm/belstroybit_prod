export const getOffset = (el: HTMLElement) => {
  const position = el.getBoundingClientRect()
  return {
    left: position.left + window.scrollX,
    right: position.right + window.scrollX,
    top: position.top + window.scrollY,
    bottom: position.bottom + window.scrollY,
    width: position.width,
    height: position.height
  }
}

export const drawLine = (
  ctx: CanvasRenderingContext2D,
  begin: [number, number],
  end: [number, number],
  color = 'black',
  width = 1
) => {
  ctx.strokeStyle = color

  ctx.lineWidth = width

  ctx.beginPath()
  ctx.moveTo(...begin)
  ctx.lineTo(...end)
  ctx.stroke()
}
