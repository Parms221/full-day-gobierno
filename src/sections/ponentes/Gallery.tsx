/* eslint-disable @next/next/no-img-element */
"use client";

import { Text } from "../../components/text";
import { PONENTES } from "@/constants/ponentes";
import style from "./style.module.css";
import { cn } from "@/lib/utils";
import { Ponente } from "@/classes/ponente";
import { HTMLAttributes } from "react";

interface ImageThumbnailProps extends HTMLAttributes<HTMLDivElement> {
    ponente: Ponente;
}

export default function Gallery() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {PONENTES.map((ponente, index) => (
                <ImageThumbnail key={index} ponente={ponente} />
            ))}
        </div>
    );
}

function ImageThumbnail({ ponente, ...props }: ImageThumbnailProps) {
    return (
        <div
            className={cn(
                "relative w-full cursor-pointer rounded-lg bg-gray-300 overflow-hidden",
                style["image"]
            )}
            {...props}
        >
            <img
                src={ponente.imagen}
                alt="some image"
                className="object-cover"
            />
            <div className="text-center absolute bottom-0 w-full p-4">
                <Text textStyle="Body" colorStyle="White">
                    {ponente.nombre}
                </Text>
            </div>
        </div>
    );
}

// export default function Gallery({ images }: GalleryProps) {
//     const [currentIndex, setCurrentIndex] = useState<number>(-1);

//     const openModal = (index: number) => {
//         setCurrentIndex(index);
//     };

//     const closeModal = () => {
//         setCurrentIndex(-1);
//     };

//     const showNext = () => {
//         setCurrentIndex((currentIndex + 1) % images.length);
//     };

//     const showPrev = () => {
//         setCurrentIndex((currentIndex - 1 + images.length) % images.length);
//     };

//     return (
//         <div className="overflow-x-scroll" style={{
//             scrollbarWidth: "none"
//         }}>
//             <div style={styles.galleryContent}>
//                 {PONENTES.map((ponente, index) => (
//                     <ImageThumbnail
//                         key={index}
//                         src={ponente.imagen}
//                         title={ponente.nombre}
//                         onClick={() => openModal(index)}
//                     />
//                 ))}
//                 {currentIndex != -1 && (
//                     <Modal
//                         image={images[currentIndex]}
//                         onClose={closeModal}
//                         onNext={showNext}
//                         onPrev={showPrev}
//                     />
//                 )}
//             </div>
//         </div>
//     );
// }

// function Modal({ image, onClose, onNext, onPrev }: ModalProps) {
//     return (
//         <div className="fixed z-50 top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
//         {/* <div style={styles.modal}> */}
//             <div style={styles.modalContent}>
//                 <div
//                     style={{
//                         ...styles.modalImage,
//                         backgroundImage: `url(${image.src})`,
//                     }}
//                 >
//                     <button style={styles.button} onClick={onPrev}>
//                         &#10094;
//                     </button>
//                     <button style={styles.button} onClick={onNext}>
//                         &#10095;
//                     </button>
//                     <button style={styles.button} onClick={onClose}>
//                         &times;
//                     </button>
//                 </div>

//                 {/* <img src={image.src} alt={image.title} style={styles.modalImage} /> */}
//                 <div style={styles.modalInfo}>
//                     <Text textStyle="Title1" colorStyle="Black">
//                         {image.title}
//                     </Text>{" "}
//                     <br />
//                     <Text textStyle="Body" colorStyle="Gray">
//                         {image.description}
//                     </Text>
//                 </div>
//             </div>
//         </div>
//     );
// }

// const styles = {
//     gallery: {
//         overflowX: "scroll",
//         scrollbarWidth: "none",
//     },
//     galleryContent: {
//         display: "flex",
//         paddingLeft: 64,
//         paddingRight: 64,
//         gap: 32,
//         height: 400,
//         width: 1564,
//     },
//     thumbnailImage: {
//         width: "100%",
//         borderRadius: 16,
//     },
//     modal: {
//         position: "fixed",
//         top: 0,
//         left: 0,
//         width: "100%",
//         height: "100%",
//         backgroundColor: "rgba(0, 0, 0, .6)",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//     },
//     modalContent: {
//         position: "relative",
//         background: "rgba(255, 255, 255, 1)",
//         minWidth: 600,
//         maxWidth: "90%",
//         // minHeight: 900,
//         maxHeight: "90%",
//         borderRadius: 16,
//     },
//     modalImage: {
//         width: "100%",
//         height: 400,
//         backgroundPosition: "center center",
//         backgroundRepeat: "no-repeat",
//         backgroundSize: "cover",
//         backgroundColor: colors.gray,
//         borderRadius: " 16px 16px 0px 0px",
//         padding: 16,
//         textAlign: "right",
//     },
//     modalInfo: {
//         padding: 32,
//     },
//     button: {
//         height: 32,
//         width: 32,
//         fontSize: 15,
//         borderRadius: 16,
//         color: colors.orange,
//         backgroundColor: "rgba(250, 250, 252, 0.8)",
//         backgroundFilter: "saturate(180%) blur(20px)",
//         marginLeft: 4,
//     },
// };
