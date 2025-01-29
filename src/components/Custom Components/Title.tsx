interface TitleProps {
  first: string;
  second: string;
}

export default function Title({ first, second }: TitleProps) {
  return (
    <div className="font-bold tracking-wider text-2xl flex gap-1">
      <h1>{first}</h1>
      <p className="text-sky-500">{second}</p>
    </div>
  );
}
