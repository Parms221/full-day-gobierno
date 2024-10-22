export default function Horarios() {
    return (
        <div style={{ padding: '20px', textAlign: 'center', fontFamily: 'Arial, sans-serif' }}>
            <h1 style={styles.title}>Horario de exposiciones</h1>
            <div style={styles.cardContainer}>
                {expositions.map((expo, index) => (
                    <div key={index} style={styles.card}>
                        <div style={styles.leftSection}>
                            <img
                                src="/images/6034988.png"  
                                alt="profile"
                                style={styles.icon}
                            />
                        </div>
                        <div style={styles.rightSection}>
                            <div style={styles.infoRow}>
                                <h3 style={styles.name}>{expo.name}</h3>
                                <p style={styles.date}>{expo.date}</p>
                                <p style={styles.time}>{expo.time}</p>
                            </div>
                            <div style={styles.infoRow}>
                                <h4 style={styles.topic}>{expo.topic}</h4>
                                <p style={styles.description}>{expo.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

const expositions = [
    {
        name: 'Veronica Lopez',
        date: 'Diciembre 16, 2024',
        time: '08:00 am - 08:30 am',
        topic: 'Presentacion',
        description: 'La presentación abordará las últimas tendencias, retos y mejores prácticas en seguridad de la información y ciberseguridad.'
    },
    {
        name: 'Dr Nombre',
        date: 'Diciembre 16, 2024',
        time: '08:30 am - 09:30 am',
        topic: 'TEMA 1',
        description: 'La presentación abordará las últimas tendencias, retos y mejores prácticas en seguridad de la información y ciberseguridad.'
    },
    {
        name: 'Dr Nombre 2',
        date: 'Diciembre 16, 2024',
        time: '09:30 am - 11:00 am',
        topic: 'TEMA 2',
        description: 'La presentación abordará las últimas tendencias, retos y mejores prácticas en seguridad de la información y ciberseguridad.'
    }
]

const styles = {
    title: {
        color: '#FFA500',
        fontSize: '36px',
        fontWeight: 'bold',
        marginBottom: '40px'
    },
    cardContainer: {
        display: 'flex',
        flexDirection: 'column' as 'column',
        gap: '30px',
        justifyContent: 'center',
        alignItems: 'center'
    },
    card: {
        display: 'flex',
        backgroundColor: '#0E1B35',
        color: 'white',
        padding: '20px',
        borderRadius: '20px',
        maxWidth: '900px',
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
        border: '3px solid #FFA500',
        minHeight: '200px',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row' as 'row',
        gap: '20px',
    },
    leftSection: {
        flexShrink: 0,
    },
    rightSection: {
        display: 'flex',
        flexDirection: 'column' as 'column',
        justifyContent: 'space-between',
        flexGrow: 1,
        gap: '10px'
    },
    infoRow: {
        display: 'flex',
        gap: '10px',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap' as 'wrap' 
    },
    icon: {
        width: '150px',
        height: '150px',
        borderRadius: '50%',
    },
    name: {
        fontSize: '20px',
        fontWeight: 'bold',
        color: '#FFA500',
    },
    date: {
        fontSize: '14px',
        color: '#FFFFFF',
    },
    time: {
        fontSize: '14px',
        color: '#FFFFFF',
    },
    topic: {
        fontSize: '18px',
        fontWeight: 'bold',
        color: '#FFA500',
    },
    description: {
        fontSize: '14px',
        color: '#FFFFFF',
    },
    '@media (max-width: 768px)': {
        card: {
            flexDirection: 'column' as 'column',
            alignItems: 'center',
        },
        rightSection: {
            alignItems: 'center',
            gap: '5px',
        },
        infoRow: {
            flexDirection: 'column' as 'column',
            alignItems: 'center',
            gap: '5px',
        },
        icon: {
            width: '120px',
            height: '120px',
        }
    }
};
