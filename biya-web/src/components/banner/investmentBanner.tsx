import React from 'react';

import Image from 'next/image';

import Grid from '@mui/material/Grid2';

import { motion } from 'framer-motion';

const InvestmentBanner: React.FC = () => {
    return (
        <div className='container'>
            <Grid container spacing={3}>
                {/* Image Animation */}
                <Grid size={{ xs: 12, md: 7 }}>
                    <motion.div
                        className="relative w-full h-[20vh] md:h-[40vh]"
                        initial={{ opacity: 0, x: -50 }} // Initial state: invisible and shifted left
                        animate={{ opacity: 1, x: 0 }} // Final state: visible and in place
                        transition={{ duration: 0.8 }} // Animation duration
                    >
                        <Image
                            className="rounded-3xl"
                            src="https://res.cloudinary.com/aehl/image/upload/v1734103825/Untitled_design_isodgh.png"
                            alt="Investment Banner"
                            layout="fill"
                            objectFit="cover"
                            priority
                        />
                    </motion.div>
                </Grid>

                {/* Text Animation */}
                <Grid
                    size={{ xs: 12, md: 5 }}
                    className="flex flex-col justify-center"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 50 }} // Initial state: invisible and shifted down
                        animate={{ opacity: 1, y: 0 }} // Final state: visible and in place
                        transition={{ duration: 0.8, delay: 0.5 }} // Animation duration with a delay
                    >
                        <h1 className='pb-3 font-dmSerif text-4xl font-bold text-gray-800 tracking-wide'>
                            Investment & Financing
                        </h1>
                        <p className='text-gray-800 w-2/3'>
                            Discover a range of investment opportunities at Baiya. From public offerings to private placements and bond issuances, our tailored solutions cater to the unique needs of diverse investors.
                        </p>
                    </motion.div>
                </Grid>
            </Grid>
        </div>
    );
};

export default InvestmentBanner;
