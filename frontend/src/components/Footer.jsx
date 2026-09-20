export default function Footer({ links }) {
  return (
    <div className="flex items-center justify-center gap-50 min-w-screen bg-black py-10">
        {links.map((link) => (
            <a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer" className={`flex flex-col gap-2 justify-center items-center rounded-lg`}>
              <img src={link.icon} alt={link.alt} width={50} height={50} />
              <div className="text-sm text-white font-projectTitle">{link.name}</div>
            </a>
        ))}
    </div>
  );
}
