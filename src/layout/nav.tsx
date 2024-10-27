import Logo from "@/components/utils/logo";
import RouterNav from "./nav/routes-component";
import { Button } from "@/components/ui/button";
import { CalendarCheck } from "lucide-react";

export default function Nav() {
    return (
        <div className="sticky top-0 z-40 w-full backdrop-blur-md bg-transparent">
            <nav className="container mx-auto py-3 flex justify-between">
                <Logo />
                <div className="hidden sm:block">
                    <RouterNav />
                </div>
                <div className="block sm:hidden">
                    <Button>...</Button>
                </div>
                <Button
                    className="text-primary border-secondary space-x-2 from-secondary"
                    variant={"outline"}
                    animation={"gooeyLeft"}
                >
                    <CalendarCheck className="shrink-0 w-5 h-5" />
                    <span>Inscríbete ahora</span>
                </Button>
            </nav>
        </div>
    );
}
