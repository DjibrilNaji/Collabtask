type DividerWithTextProps = {
  text: string
}

export function DividerWithText({ text }: DividerWithTextProps) {
  return (
    <div className="flex items-center justify-center gap-3">
      <div className="border w-1/2" />
      {text}
      <div className="border w-1/2" />
    </div>
  )
}
