interface CharacterInfo {
  title: string;
  description: string | number;
}

export default function CharacterInfo({ title, description }: CharacterInfo) {
  return (
    <div className="flex justify-center flex-wrap gap-1 text-xl text-white">
      <span>{title}:</span>
      <strong className="text-lime-200"> {description}</strong>
    </div>
  );
}
