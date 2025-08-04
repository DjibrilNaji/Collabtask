type Props = {
  text: string
}

export function DividerWithText({ text }: Props) {
  return (
    <div className="flex items-center justify-center gap-3">
      <div className="border w-1/2" />
      {text}
      <div className="border w-1/2" />
    </div>
  )
}
