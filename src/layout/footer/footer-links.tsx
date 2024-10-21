import { Button } from "@/components/ui/button";
import { FOOTER_LINKS } from "./constants";

export default function FooterLinks() {
  return (
    <div className="px-2 py-8 md:px-8 max-w-screen-2xl md:mx-auto flex flex-col md:flex-row">
      <div className="min-h-24 w-full">Logo</div>

      <aside className="flex flex-wrap gap-x-8 gap-y-4">
        <div className="">
          <h1 className="text-primary font-bold">Ubicación y contacto</h1>
          <p className="underline">
            Av. Juan Pablo II S/N, Trujillo 13011, La Libertad, Perú
          </p>
          <span>Universidad Nacional de Trujillo</span>
        </div>
        {FOOTER_LINKS.map(({ title, children }) => (
          <div key={title}>
            <h1 className="text-primary font-bold">{title}</h1>
            <ul>
              {children?.map(({ label, href, Icon }) => (
                <li key={href}>
                  <a href={href} className="flex items-center gap-2">
                    <Button
                      className="p-0 hover:text-secondary"
                      variant={"none"}
                      animation={"linkHover2"}
                    >
                      {Icon && <Icon className="w-4 h-4 shrink-0" />}
                      <span>{label}</span>
                    </Button>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </aside>
    </div>
  );
}
