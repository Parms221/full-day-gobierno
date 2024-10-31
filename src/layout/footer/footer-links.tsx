import { Button } from "@/components/ui/button";
import { FOOTER_LINKS } from "./constants";

export default function FooterLinks() {
  return (
    <div className="px-2 py-8 md:px-8 max-w-screen-2xl md:mx-auto flex flex-col md:flex-row gap-8">
      <aside className="grid md:grid-cols-2">
        {/* <div className="min-h-24 w-full">Logo</div> */}
        <div className="[&>div>h1]:text-secondary [&>div>h1]:font-bold space-y-4">
          <div>
            <h1 className="text-2xl">Ubicación</h1>
            <span className="font-semibold">Auditorio de Humanidades UNT</span>
            <p>Av. Juan Pablo II S/N, Trujillo 13011, La Libertad, Perú</p>
          </div>

          <div>
            <h1>Correo</h1>
            <a href="mailto:info@unitru.edu.pe">systemxxv@unitru.edu.pe</a>
          </div>
        </div>
      </aside>
      <div className="flex flex-wrap gap-x-8 gap-y-4">
        {FOOTER_LINKS.map(({ title, children }) => (
          <div key={title}>
            <h1 className="text-secondary font-bold text-lg">{title}</h1>
            <ul>
              {children?.map(({ label, href, Icon }) => (
                <li key={href}>
                  <a href={href}>
                    <Button
                      className="p-0 font-semibold text-white/80 hover:text-secondary flex items-center gap-2 after:bg-secondary"
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
      </div>
    </div>
  );
}
