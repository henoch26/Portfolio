interface TitleProps {
  title: string;
}

const Title = ({title}: TitleProps) => {
  return (
    <div className="uppercase font-bold text-black mb-4 text-center text-2xl md:text-3xl lg:text-4xl">
      {title}
    </div>
  );
}

export default Title;