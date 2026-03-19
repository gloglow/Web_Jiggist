import { CheckBoxesProps } from "../../../../types/propTypes";
import Checkbox from "../../common/Checkbox";

export default function CheckBoxesFilter({ options, selected, onChange }: CheckBoxesProps) {
  const toggle = (category: string) => {
    if (selected.includes(category)) {
      onChange(selected.filter(c => c !== category))
    } else {
      onChange([...selected, category])
    }
  }

  return (
    <div className="flex flex-col gap-4">
      <h4 className="text-slate-200 text-sm font-semibold flex items-center gap-2">
        <span className="material-symbols-outlined text-lg opacity-70">category</span> Category
      </h4>
      <div className="flex flex-col gap-2">
        {options.map((option) => (
          <Checkbox
            key={option}
            text={option}
            checked={selected.includes(option)}
            onChange={() => toggle(option)}
          />
        ))}
      </div>
    </div>
  )
}