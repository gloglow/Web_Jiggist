import Image from "next/image";

export default function ImageItem(
  { name, width, height }: { name: string, width: number, height: number }) {
  const fileName = name + ".png";
  
  return (
    <Image
      src={`/images/${name}.png`}
      alt={name}
      width={width}
      height={height}
    />
  )
}