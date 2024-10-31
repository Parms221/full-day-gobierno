import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Logo({ className }: { className?: string }) {
    return (
        <Link href={"/"}>
            <p className={cn("text-3xl font-bold text-secondary", className)}>
                Full Day
            </p>
        </Link>
    );
}
