import Logo from "@/components/utils/logo";
import RouterNav from "./nav/routes-md-component";
import { Button } from "@/components/ui/button";
import { CalendarCheck } from "lucide-react";
import RouterSmNav from "./nav/routes-sm-component";
import ColorNav from "./nav/color-nav.context";

export default function Nav() {
    return (
        <ColorNav>
            <nav className="relative container mx-auto py-3 flex justify-between px-3 md:px-0">
                <Logo />
                <div className="hidden sm:block">
                    <RouterNav />
                </div>
                <div className="block sm:hidden">
                    <RouterSmNav />
                </div>
                <div className="hidden lg:block">
                    <Button
                        className="text-primary border-secondary space-x-2 from-secondary"
                        variant={"outline"}
                        animation={"gooeyLeft"}
                    >
                        <CalendarCheck className="shrink-0 w-5 h-5" />
                        <span>Inscríbete ahora</span>
                    </Button>
                </div>
            </nav>
        </ColorNav>
    );
}
