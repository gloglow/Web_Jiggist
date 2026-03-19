type props = {
  content: string
  clicked: boolean
  onChange: () => void
}

export default function CustomBtn({ content, clicked, onChange }: props) {
  return (
    <button
      onClick={onChange}
      className={`px-3 py-1.5 rounded-full border text-xs font-medium transition-colors bg-neutral-dark
        ${clicked
          ? "text-primary border-primary"
          : "border-border-muted text-slate-400 hover:text-slate-100"
        }
      `}
    >
      {content}
    </button>
  )
}