import React from "react";
import Link from "next/link";
import Button, { ButtonProps } from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import colors from 'tailwindcss/colors';

import { motion } from 'framer-motion';

const ColorButton = styled(Button)<ButtonProps>(() => ({
  color: colors.white, // Tailwind's gray-800 for text
  backgroundColor: colors.red[600], // Tailwind's white
  '&:hover': {
    backgroundColor: colors.red[900], // Tailwind's gray-100 for hover effect
  },
}));

export default function HomePageBanner() {
  return (
    <div>
      {/* Banner Section */}
      <div
        className="h-[85vh] flex"
        style={{
          backgroundImage:
            'url("https://res.cloudinary.com/aehl/image/upload/v1733324964/Hotels_Business_Website_rp2b6a.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex flex-col justify-center pl-[3vh] md:pl-[10vh] lg:pl-[15vh]">
          <motion.div
            initial={{ opacity: 0, x: -50 }} // Initial state: invisible and shifted left
            animate={{ opacity: 1, x: 0 }} // Final state: visible and in place
            transition={{ duration: 0.8 }} // Animation duration
          >


            <h1 className="font-dmSerif tracking-wider text-white text-4xl md:text-9xl font-bold">BAIYA</h1>
            <h1 className="pb-4 text-biya-gray text-xl font-bold font-dmSerif tracking-wider leading-loose  md:text-3xl">
              Integrated Human Resources Solutions
              <br />
              Reshaping Labor Models,
              <br />
              Sharing Industry Value.
            </h1>
            <Link href="/about" passHref legacyBehavior>
              <ColorButton className="text-start font-dmSerif w-32" variant="contained">
                Read More
              </ColorButton>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
