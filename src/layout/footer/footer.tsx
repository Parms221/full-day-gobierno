import FacebookIcon from "@/assets/icons/social/facebook";
import InstagramIcon from "@/assets/icons/social/instagram";
import WhatsappIcon from "@/assets/icons/social/whastapp";
import { Button } from "@/components/ui/button";
import FooterLinks from "@/layout/footer/footer-links";

interface SocialLinks {
  label: string;
  href: string;
  Icon?: React.ElementType;
}

export default function Footer() {
  const SOCIAL_LINKS: SocialLinks[] = [
    {
      label: "Facebook",
      href: "https://www.facebook.com/profile.php?id=61560010705493",
      Icon: FacebookIcon,
    },
    {
      label: "WhatsApp",
      href: "#",
      Icon: WhatsappIcon,
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/systemxxv.unt/",
      Icon: InstagramIcon,
    },
  ];
  return (
    <footer className="flex flex-col border border-t-secondary">
      <FooterLinks />
      <div className="py-4 bg-primary text-secondary flex flex-col items-center justify-center">
        <ul className="flex gap-2">
          {SOCIAL_LINKS.map(({ label, href, Icon }) => (
            <li key={href}>
              <a href={href} target="_blank" rel="noreferrer">
                <Button
                  className="p-0 text-secondary rounded-full border border-secondary flex items-center justify-center w-12 h-12 after:bg-secondary hover:text-primary"
                  animation={"fillUp"}
                >
                  {Icon && <Icon className="w-6 h-6 stroke-[2px]" />}
                </Button>
              </a>
            </li>
          ))}
        </ul>
        <i>© 2024 Promoción XXV de Ingeniería de Sistemas UNT</i>
      </div>
    </footer>
  );
}
