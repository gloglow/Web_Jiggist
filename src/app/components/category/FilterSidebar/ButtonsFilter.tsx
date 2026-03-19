import { ButtonsProps } from "../../../../types/propTypes";
import CustomBtn from "../../common/CustomBtn";

export default function ButtonsFilter({ options, selected, onChange }: ButtonsProps) {
  const toggle = (brand: string) => {
    if (selected.includes(brand)) {
      onChange(selected.filter(b => b !== brand))
    } else {
      onChange([...selected, brand])
    }
  }
  
  return (
    <div className="flex flex-col gap-4">
      <h4 className="text-slate-200 text-sm font-semibold flex items-center gap-2">
        <span className="material-symbols-outlined text-lg opacity-70">sell</span> Brand
      </h4>
      <div className="flex flex-wrap gap-2">
        {options.map((option) => (
          <CustomBtn
            key={option}
            content={option}
            clicked={selected.includes(option)}
            onChange={() => toggle(option)}
          />
        ))}
      </div>
    </div>
  )
}