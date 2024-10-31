import { Button } from "@/components/ui/button";
import { ArrowRightCircle, CalendarCheck } from "lucide-react";

export default function Page() {
  return (
    <div className="space-y-4 mt-8">
      <h1>Ejemplo botones</h1>

      <div>
        <div className="bg-primary p-4">
          <Button
            className="text-secondary border-secondary space-x-2 from-secondary"
            variant={"outline"}
            animation={"gooeyLeft"}
          >
            <CalendarCheck className="shrink-0 w-5 h-5" />
            <span>Inscríbete ahora</span>
          </Button>
        </div>
        <div className="grid grid-cols-4 gap-8 p-2">
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
            Button
          </Button>
          <Button
            className="text-secondary"
            animation={"gooeyRight"}
            iconPlacement="right"
            Icon={ArrowRightCircle}
          >
            Button
          </Button>
          <Button
            className="from-secondary"
            animation={"gooeyLeft"}
            variant={"outline"}
            iconPlacement="right"
            Icon={ArrowRightCircle}
          >
            Button
          </Button>
        </div>
        <div>
          <Button
            className="from-secondary hover:text-black after:bg-secondary"
            animation={"fillUp"}
          >
            Fill up
          </Button>
          <Button
            animation={"fillRight"}
            variant={"outline"}
            className="from-primary hover:text-white after:bg-secondary"
          >
            Fill right
          </Button>
          <Button
            animation={"fillLeft"}
            variant={"outline"}
            className="from-primary hover:text-white after:bg-secondary"
          >
            Fill left
          </Button>
          <Button
            animation={"fillDown"}
            variant={"outline"}
            className="from-primary hover:text-white after:bg-secondary"
          >
            Fill down
          </Button>
        </div>
      </div>
    </div>
  );
}
