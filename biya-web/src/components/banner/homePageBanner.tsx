import Link from "next/link";
import Button, { ButtonProps } from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { red } from '@mui/material/colors';

const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.getContrastText(red[500]),
  backgroundColor: red[500],
  '&:hover': {
    backgroundColor: red[700],
  },
}));

export default function HomePageBanner() {
  return (
    <div>
      {/* Banner Section */}
      <div
        className="h-[65vh] flex"
        style={{
          backgroundImage:
            'url("https://res.cloudinary.com/aehl/image/upload/v1726162462/Background2_qrixhf.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container flex flex-col justify-center">
          <h1 className="pb-4 text-biya-gray text-2xl font-bold tracking-wider leading-loose  md:text-4xl">
            Integrated Human Resources Solutions
            <br />
            Reshaping Labor Models,
            <br />
            Sharing Industry Value.
          </h1>
          <Link href="/about" passHref legacyBehavior>
            <ColorButton className="text-start w-32" variant="contained">
              Read More
            </ColorButton>
          </Link>
        </div>
      </div>
    </div>
  );
}
