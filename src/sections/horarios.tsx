"use client"; // Directiva para componentes del lado del cliente

import { Reorder } from "framer-motion";
import { useState } from "react";
import styled from '@emotion/styled';

// Definición del tipo para asegurar consistencia en los datos de cada exposición
interface Exposition {
    id: number;
    name: string;
    date: string;
    time: string;
    topic: string;
    description: string;
}

const initialExpositions: Exposition[] = [
    {
        id: 1,
        name: 'Veronica Lopez',
        date: 'Diciembre 16, 2024',
        time: '08:00 am - 08:30 am',
        topic: 'PRESENTACION',
        description: 'La presentación abordará las últimas tendencias, retos y mejores prácticas en seguridad de la información y ciberseguridad.',
    },
    {
        id: 2,
        name: 'Dr Nombreeee',
        date: 'Diciembre 16, 2024',
        time: '08:30 am - 09:30 am',
        topic: 'TEMA 1',
        description: 'La presentación abordará las últimas tendencias, retos y mejores prácticas en seguridad de la información y ciberseguridad.',
    },
    {
        id: 3,
        name: 'Dr Nombreeee',
        date: 'Diciembre 16, 2024',
        time: '08:30 am - 09:30 am',
        topic: 'TEMA 2',
        description: 'La presentación abordará las últimas tendencias, retos y mejores prácticas en seguridad de la información y ciberseguridad.',
    },
    {
        id: 4,
        name: 'Dr Nombreeee',
        date: 'Diciembre 16, 2024',
        time: '08:30 am - 09:30 am',
        topic: 'TEMA 3',
        description: 'La presentación abordará las últimas tendencias, retos y mejores prácticas en seguridad de la información y ciberseguridad.',
    },
    {
        id: 5,
        name: 'Dr Nombreeee',
        date: 'Diciembre 16, 2024',
        time: '08:30 am - 09:30 am',
        topic: 'TEMA 4',
        description: 'La presentación abordará las últimas tendencias, retos y mejores prácticas en seguridad de la información y ciberseguridad.',
    },
    {
        id: 6,
        name: 'Dr Nombreeee',
        date: 'Diciembre 16, 2024',
        time: '08:30 am - 09:30 am',
        topic: 'TEMA 5',
        description: 'La presentación abordará las últimas tendencias, retos y mejores prácticas en seguridad de la información y ciberseguridad.',
    },

];

 
// Componente principal
export default function Horarios() {
    const [expositions, setExpositions] = useState<Exposition[]>(initialExpositions);

    return (
        <Container>
            <Title>Horario de Exposiciones</Title>
            <Reorder.Group axis="y" values={expositions} onReorder={(newOrder) => setExpositions(newOrder as Exposition[])}>
                {expositions.map((exposition) => (
                    <Reorder.Item key={exposition.id} value={exposition}>
                        <Card>
                            <LeftSection>
                                <Icon src="/images/6034988.png" alt="perfil" />
                            </LeftSection>
                            <RightSection>
                                <InfoRow>
                                    <Name>{exposition.name}</Name>
                                    <Date>{exposition.date}</Date>
                                    <Time>{exposition.time}</Time>
                                </InfoRow>
                                <InfoRow>
                                    <Topic>{exposition.topic}</Topic>
                                    <Description>{exposition.description}</Description>
                                </InfoRow>
                            </RightSection>
                        </Card><br />
                    </Reorder.Item>
                ))}
            </Reorder.Group>
        </Container>
    );
}


// Contenedor principal
const Container = styled.div`
    padding: 20px;
    text-align: center;
    font-family: Arial, sans-serif;
    max-width: 1200px;
    margin: 0 auto;
`;

// Título de la sección
const Title = styled.h1`
    font-size: 36px;
    font-weight: bold;
    margin-bottom: 40px;
    padding: 15px 30px;
    border-radius: 8px;
    box-shadow: 2px 2px 10px 8px rgba(35, 46, 74, 0.3);
    text-align: center;
    display: inline-block;
    color: #FFA500; 
     font-family: 'Playfair Display', serif;
`;

// Tarjeta individual 
const Card = styled.div`
    display: flex;
    background-color: #1F2164;
    padding: 20px;
    border-radius: 20px;
    box-shadow: 2px 12px 8px rgba(35, 46, 74, 0.8);
    border: 3px solid #FFA500;
    min-height: 200px;
    align-items: center;
    gap: 20px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    // Efecto de brillo de izquierda a derecha
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(120deg, transparent, rgba(255, 255, 255, 0.5), transparent);
        transition: transform 0.5s ease;
    }

    &:hover::before {
        transform: translateX(100%);
    }

    @media (min-width: 720px) {
        grid-column: span 8;
        margin-left: auto;
        margin-right: auto;
    }
`;

// Sección izquierda con imagen de perfil
const LeftSection = styled.div`
    flex-shrink: 0;
    margin-left: 2%;
    margin-right:2%;
    align-self: center;
`;

// Imagen de perfil
const Icon = styled.img`
    width: 150px;
    height: 150px;
    border-radius: 50%;
`;

// Sección derecha con información
const RightSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-grow: 1;
    gap: 10px;
`;

// Filas de información
const InfoRow = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
`;

// Estilos para los elementos de texto
const Name = styled.h3`
    font-family: Berlin Sans FB Demi;
    font-size: 24px;
    font-weight: bold;
    color: #FFC90E;
`;

const Date = styled.p`
    font-size: 14px;
    color: #FFA444;
    font-weight: bold;
    font-family: Berlin Sans FB Demi;
    font-size: 20px;
`;

const Time = styled.p`
    margin-right: 15%;
    color: #FFA444;
    font-weight: bold;
    font-family: Berlin Sans FB Demi;
    font-size: 20px;
`;

const Topic = styled.h4`
    font-size: 20px;
    font-weight: bold;
    color: #D3C2FF;
    
`;

const Description = styled.p`
    font-size: 18px;
    color: white;
    font-weight: bold;
    text-align: justify;
    font-family: Bahnschrift SemiBold;
`;
