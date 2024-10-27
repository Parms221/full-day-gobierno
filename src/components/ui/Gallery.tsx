'use client'

import { useState } from 'react'
import { Text } from '../text'
import colors from '@/constants/colors'

interface Image {
    src: string,
    title: string,
    description: string
}

interface GalleryProps {
    images: Image[]
}

interface ImageThumbnailProps {
    src: string,
    title: string,
    onClick: () => void
}

interface ModalProps {
    image: Image
    onClose: () => void
    onNext: () => void
    onPrev: () => void
}

export default function Gallery({images}: GalleryProps) {
    const [currentIndex, setCurrentIndex] = useState<number>(-1)

    const openModal = (index: number) => {
        setCurrentIndex(index)
    }

    const closeModal = () => {
        setCurrentIndex(-1)
    }

    const showNext = () => {
        setCurrentIndex((currentIndex + 1) % images.length)
    }

    const showPrev = () => {
        setCurrentIndex((currentIndex - 1 + images.length) % images.length)
    }

    return <div style={styles.gallery}>
        <div style={styles.galleryContent}>
            {images.map((img, index) => (
                <ImageThumbnail key={index} src={img.src} title={img.title} onClick={() => openModal(index)} />
            ))}
            {currentIndex != -1 && (
                <Modal image={images[currentIndex]} onClose={closeModal} onNext={showNext} onPrev={showPrev} />
            )}
        </div>
    </div>
}

function ImageThumbnail({ src, title, onClick}: ImageThumbnailProps) {
    return <div style={{ ...styles.thumbnail, backgroundImage: `url(${src})` }} onClick={onClick}>
        {/* <img src={src} alt={title} style={styles.thumbnailImage} /> */}
        <Text textStyle='Body' colorStyle='White'>{title}</Text>
    </div>
}

function Modal({ image, onClose, onNext, onPrev }: ModalProps) {
    return <div style={styles.modal}>
        <div style={styles.modalContent}>
            <div style={{ ...styles.modalImage, backgroundImage: `url(${image.src})` }}>
                <button style={styles.button} onClick={onPrev}>&#10094;</button>
                <button style={styles.button} onClick={onNext}>&#10095;</button>
                <button style={styles.button} onClick={onClose}>&times;</button>
            </div>
            
            {/* <img src={image.src} alt={image.title} style={styles.modalImage} /> */}
            <div style={styles.modalInfo}>
                <Text textStyle='Title1' colorStyle='Black'>{image.title}</Text> <br />
                <Text textStyle='Body' colorStyle='Gray'>{image.description}</Text>
            </div>  
        </div>
    </div>
} 

const styles = {
    gallery: {
        overflowX: 'scroll',
        scrollbarWidth: 'none'
    },
    galleryContent: {
        display: 'flex',
        paddingLeft: 64,
        paddingRight: 64,
        gap: 32,
        height: 400,
        width: 1564
    },
    thumbnail: {
        width: 300,
        cursor: 'pointer',
        borderRadius: 16,
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        // backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        backgroundColor: colors.gray,
        padding: 16,
        display: 'flex',
        justifyContent: 'flex-end',
        flexDirection: 'column',
        alignItems: 'center'
    },
    thumbnailImage: {
        width: '100%',
        borderRadius: 16
    },
    modal: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, .6)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalContent: {
        position: 'relative',
        background: 'rgba(255, 255, 255, 1)',
        minWidth: 600,
        maxWidth: '90%',
        // minHeight: 900,
        maxHeight: '90%',
        borderRadius: 16
    },
    modalImage: {
        width: '100%',
        height: 400,
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundColor: colors.gray,
        borderRadius: ' 16px 16px 0px 0px',
        padding: 16,
        textAlign: 'right'
    },
    modalInfo: {
        padding: 32
    },
    button: {
        height: 32,
        width: 32,
        fontSize: 15,
        borderRadius: 16,
        color: colors.orange,
        backgroundColor: 'rgba(250, 250, 252, 0.8)',
        backgroundFilter: 'saturate(180%) blur(20px)',
        marginLeft: 4
    }
}