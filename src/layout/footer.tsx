import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowRightCircle, ChevronUp } from "lucide-react";

export default function Footer() {
  return (
    <>
      <div className="space-y-4">
      <h1>Ejemplo botones</h1>

        <div className="grid grid-cols-4 gap-8">
          <Button
            className="text-secondary"
            variant={"none"}
            animation={"linkHover1"}
          >
            Button
          </Button>
          <Button
            className="text-secondary"
            variant={"none"}
            animation={"linkHover2"}
          >
            Button
          </Button>
          <Button
            className="text-secondary"
            animation={"expandIcon"}
            iconPlacement="right"
            Icon={ArrowRightCircle}
          >
            Buton
          </Button>
          <Button
            className="text-secondary"
            animation={"gooeyRight"}
            iconPlacement="right"
            Icon={ArrowRightCircle}
          >
            Buton
          </Button>
        </div>
      </div>
      <footer className="p-8"></footer>
    </>
  );
}
