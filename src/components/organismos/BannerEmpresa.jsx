import styled from "styled-components";
import { v } from "../../styles/variables";
import { CardDatosEmpresa } from "../moleculas/CardDatosEmpresa";
export function BannerEmpresa() {
    return (
        <Container>
            <div className="content-wrapper-context">
                <span className="titulo">
                    {<v.iconoempresa />}
                    Nombre de empresa
                </span>
                <div className="content-text">
                    StockPRO te mantiene siempre informado.
                </div>
                <ContentCard>
                    <CardDatosEmpresa titulo="Moneda" valor="$/." />
                    <CardDatosEmpresa titulo="Usuarios" valor="100" />
                </ContentCard>
            </div>
            <div className="contentsvg">
                {/*Agregar svg de codigo fuente 'contentsvg' */}
            </div>
            {/* Copiar SVG de codigo fuente 'cuadros'*/}
            <svg
                className="cuadros"
                viewBox="0 0 429 317"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    opacity="0.40"
                    d="M526 1L-34 1M526 27.25L-34 27.25M526 53.5L-34 53M526 79.75L-34 79.75M526 106L-34 106M526 132.25L-34 132.25M526 158.5L-34 158.5M526 184.75L-34 184.75M526 211L-34 211M526 237.25L-34 237.25M526 263.5L-34 263.5M526 289.75L-34 289.75M526 316L-34 316M-29.625 1V316M-3.375 1V316M22.875 1V316M49.125 1V316M75.375 1V316M101.625 1V316M127.875 1V316M154.125 1V316M180.375 1V316M206.625 1V316M232.875 1V316M259.125 1V316M285.375 1V316M311.625 1V316M337.875 1V316M364.125 1V316M390.375 1V316M416.625 1V316M442.875 1V316M469.125 1V316M495.375 1V316M521.625 1V316"
                    stroke="url(#paint0_radial_932_3040)"
                    strokeWidth="0.5"
                />
                <defs>
                    <radialGradient
                        id="paint0_radial_932_3040"
                        cx="0"
                        cy="0"
                        r="1"
                        gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(246 158.5) rotate(90) scale(212.625 212.625)"
                    >
                        <stop offset="0.343728" stopColor="white" />
                        <stop offset="1" stopOpacity="0" />
                    </radialGradient>
                </defs>
            </svg>
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    border: 0 solid #6b6b6b;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat, repeat;
    border-radius: 14px;
    overflow: hidden;
    .cuadros {
        transition: cubic-bezier(0.4, 0, 0.2, 1) 0.6s;
        position: absolute;
        height: 100%;
        width: 100%;
    }
    .contentsvg {
        transition: cubic-bezier(0.4, 0, 0.2, 1) 0.6s;
        position: absolute;
        height: 100%;
        width: 100%;
        bottom: -500px;
        opacity: 0;
        svg {
            height: 100%;
            width: 100%;
        }
    }
    &:hover {
        .cuadros {
            transform: rotate(37deg) rotateX(5deg) rotateY(12deg) rotate(3deg)
                skew(2deg) skewY(1deg) scaleX(1.2) scaleY(1.2);
        }
        .contentsvg {
            bottom: -100px;
            opacity: 1;
        }
    }
    .content-wrapper-context {
        padding: 20px;
        gap: 10px;
        display: flex;
        flex-direction: column;
        .titulo {
            font-size: 30px;
            font-weight: 700;
            gap: 10px;
            display: flex;
            align-items: center;
        }
        .content-text {
            font-weight: 400;
            font-size: 14px;
            line-height: 1.7em;
            display: -webkit-box;
            -webkit-line-clamp: 4;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
        }
    }
`;
const ContentCard = styled.div`
    display: flex;
    gap: 10px;
    padding-top: 15px;
    cursor: pointer;
`;
