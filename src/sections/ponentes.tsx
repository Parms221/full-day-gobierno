import { Text } from '@/components/text'
import Gallery from '@/components/ui/Gallery'

const images = [
    { src: '/images/thumbnail.webp' , title: 'Ponente 1' , description: 'Descripción de Ponente 1' },
    { src: '/images/thumbnail.webp' , title: 'Ponente 2' , description: 'Descripción de Ponente 2' },
    { src: '/images/thumbnail.webp' , title: 'Ponente 3' , description: 'Descripción de Ponente 3' },
    { src: '/images/thumbnail.webp' , title: 'Ponente 4' , description: 'Descripción de Ponente 4' },
    { src: '/images/thumbnail.webp' , title: 'Ponente 5' , description: 'Descripción de Ponente 5' }
]

export default function Ponentes() {
    return (
        <div style={styles.container}>
            <div style={styles.title}>
                <Text textStyle='XLTitle1' colorStyle='Black'>Conozca a los ponentes.</Text>
            </div>
            <Gallery images={images} />
        </div>
    )
}

const styles = {
    container: {
        paddingTop: 64,
        paddingBottom: 64,
        display: 'flex',
        flexDirection: 'column',
        gap: 32
    },
    title: {
        paddingLeft: 64,
        paddingRight: 64
    }
}