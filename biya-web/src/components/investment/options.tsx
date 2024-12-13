import React from 'react';
import Link from 'next/link';

// Mui Components
import Grid from '@mui/material/Grid2';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';

// Framer Motion
import { motion } from 'framer-motion';

const cardData = [
    {
        title: "Form F-1",
        description: "Financing",
        buttonText: "Learn More",
        url: "https://res.cloudinary.com/aehl/image/upload/v1734103825/Untitled_design_isodgh.png",
    },
    {
        title: "Form F-3",
        description: "Financing",
        buttonText: "Learn More",
        url: "https://res.cloudinary.com/aehl/image/upload/v1734103825/Untitled_design_isodgh.png",
    },
    {
        title: "bond issuance",
        description: "Investments",
        buttonText: "Learn More",
        url: "https://res.cloudinary.com/aehl/image/upload/v1734103825/Untitled_design_isodgh.png",
    },
    {
        title: "private equity",
        description: "Loans",
        buttonText: "Learn More",
        url: "https://res.cloudinary.com/aehl/image/upload/v1734103825/Untitled_design_isodgh.png",
    },
];


const Options: React.FC = () => {
    return (
        <div>
            <motion.div
                initial={{ opacity: 0, y: 50 }} // Initial state: invisible and shifted down
                animate={{ opacity: 1, y: 0 }} // Final state: visible and in place
                transition={{ duration: 0.8, delay: 0.8 }} // Animation duration and delay
            >
                <h1 className="text-4xl px-1 py-4 font-dmSerif font-bold">Investment Options</h1>
            </motion.div>
            <Grid container spacing={6} justifyContent="center">
                {cardData.map((card, index) => (
                    <Grid key={index} size={{ sm: 12, md: 3 }}>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }} // Initial state: invisible and scaled down
                            animate={{ opacity: 1, scale: 1 }} // Final state: visible and normal scale
                            transition={{ duration: 0.8, delay: (index * 0.2) + 1 }} // Staggered animation for cards
                        >
                            <Link href={"/"} passHref>
                            <Card
                                variant="outlined"
                                className="bg-white-linen-300 shadow-2xl rounded-2xl p-4 h-[20vh] md:h-[20vh] flex flex-col justify-between"
                            >
                                <CardContent>
                                    <p className="text-sm">{card.description}</p>
                                    <h1 className="font-dmSerif text-xl capitalize">{card.title}</h1>
                                </CardContent>
                                <CardActions>
                                    <Button size="large">
                                        {card.buttonText}
                                        <span className="material-symbols-outlined">arrow_right</span>
                                    </Button>
                                </CardActions>
                            </Card>
                            </Link>
                        </motion.div>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default Options;