interface CardProps {
  title: string;
  desc: string;
  icon?: string; // optional icon prop
  width?: string; // width as Tailwind string (e.g., "w-[500px]")
  className?: string; // optional className prop
}

export default function Card({ title, desc, icon, width }: CardProps) {
  return (
    <div className={`transform transition duration-300 hover:scale-105 shadow px-5 py-4  ${width || 'w-full'}`}>
      {/* ICON */}
      {icon && (
        <img
          src={icon}
          alt={title}
          className="w-16 h-16 object-cover rounded-full mx-auto mb-4"
        />
      )}
      
      {/* TEXT */}
      <h4 className="font-semibold text-sm mb-1 text-black text-center">{title}</h4>
      <p className="text-sm text-black text-center">{desc}</p>
    </div>
  );
}
