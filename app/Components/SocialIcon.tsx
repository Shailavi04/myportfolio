import { FaGithub, FaLinkedin, FaXTwitter, FaEnvelope } from "react-icons/fa6";

const iconsMap = {
  github: FaGithub,
  linkedin: FaLinkedin,
  x: FaXTwitter,
  envelope: FaEnvelope,
};

export default function SocialIcon({ icon, url }: { icon: keyof typeof iconsMap; url: string }) {
  const IconComponent = iconsMap[icon];

  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="rounded-full hover:text-indigo-500 transition-colors">
      <IconComponent className="w-6 h-6" />
    </a>
  );
}
