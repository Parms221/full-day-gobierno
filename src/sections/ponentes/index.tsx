import { Text } from "@/components/text";
import Gallery from "@/sections/ponentes/Gallery";

export default function Ponentes() {
    return (
        <div className="container p-3 sm:p-0 mx-auto pt-16 pb-16 flex flex-col gap-8">
            <div>
                <Text textStyle="XLTitle1" colorStyle="Black">
                    Conozca a los ponentes.
                </Text>
            </div>
            <Gallery />
        </div>
    );
}
