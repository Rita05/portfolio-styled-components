import styled from 'styled-components';
import type { Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim"
import Particles from 'react-tsparticles';

export const Particle = () => {

    const particlesInit = async (engine: Engine) => {
        await loadSlim(engine);
    };

    return (
        <StyledParticles
            init={particlesInit}
            options={{
                fpsLimit: 60,
                fullScreen: false,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: 'random'
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 4,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 60,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 10 },
                    },
                },
                detectRetina: true,
            }}
        />

    )
}

export const StyledParticles = styled(Particles)`
    position: absolute;
    top: 0;
    bottom: 0;
    opacity: 0.3;
`