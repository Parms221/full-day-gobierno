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
      href: "#",
      Icon: FacebookIcon,
    },
    {
      label: "WhatsApp",
      href: "#",
      Icon: WhatsappIcon,
    },
    {
      label: "Instagram",
      href: "#",
      Icon: InstagramIcon,
    },
  ];
  return (
    <footer className="flex flex-col">
      <div className="bg-muted-foreground">background</div>
      <FooterLinks />
      <div className="py-4 bg-primary text-secondary flex flex-col items-center justify-center">
        <ul className="flex gap-2">
          {SOCIAL_LINKS.map(({ label, href, Icon }) => (
            <li key={href}>
              <a href={href}>
                <Button
                  className="p-0 text-secondary rounded-full border border-secondary flex items-center justify-center w-12 h-12 from-muted-foreground"
                >
                  {Icon && <Icon className="w-6 h-6" />}
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
