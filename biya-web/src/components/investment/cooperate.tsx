import React from 'react';
import Image from 'next/image';

import { motion, useViewportScroll, useTransform } from "framer-motion";

// Mui Components
import Grid from '@mui/material/Grid2';

const CooperateConpany = [
    {
        title: "JP Morgan",
        url: "https://res.cloudinary.com/aehl/image/upload/v1734118258/1_qcigjh.png",
    },
    {
        title: "Citibank",
        url: "https://res.cloudinary.com/aehl/image/upload/v1734118258/3_qkwzwl.png",
    },
    {
        title: "JP Morgan",
        url: "https://res.cloudinary.com/aehl/image/upload/v1734118258/2_lkvcfj.png",
    },
    {
        title: "JP Morgan",
        url: "https://res.cloudinary.com/aehl/image/upload/v1734118257/4_mrzrt3.png",
    },
]

const Cooperate: React.FC = () => {
    const { scrollY } = useViewportScroll(); // Get the vertical scroll position
    const opacity = useTransform(scrollY, [100, 300], [0, 1]); // Map scroll values to opacity
    const scale = useTransform(scrollY, [100, 300], [0.8, 1]); // Optional: Scale effect
    const yPosition = useTransform(scrollY, [100, 300], [50, 0]); // Optional: Y position effect

    return (
        <div className='py-12'> {/* Ensures a scrollable page */}
            <motion.div
                initial={{ opacity: 0, y: 50 }} // Initial state: invisible and shifted down
                animate={{ opacity: 1, y: 0 }} // Final state: visible and in place
                transition={{ duration: 0.8, delay: 0.8 }} // Animation duration and delay
            >
                <h1 className="text-4xl px-1 py-4 font-dmSerif font-bold">Cooperating brokerage firms and investment banks</h1>
            </motion.div>
            <motion.div
                style={{
                    opacity,
                    scale,
                    y: yPosition,
                }}
                initial={{ opacity: 0 }} // Start hidden
            >
                <Grid container spacing={4}>
                    {CooperateConpany.map((conpany, index) => (
                        <Grid key={index} size={{ xs: 6, md: 3 }}>
                            <Image
                                src={conpany.url}
                                alt={conpany.title}
                                width={500}
                                height={500} />
                        </Grid>
                    ))}
                </Grid>
            </motion.div>
        </div>
    );
};

export default Cooperate;