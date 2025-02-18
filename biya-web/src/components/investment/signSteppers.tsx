import React from 'react';

import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import CircularProgress from '@mui/material/CircularProgress';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

// Framer Motion
import { motion } from 'framer-motion';

import { InvestmentOptions, BankOptions } from './stepOptions';

const steps = [
    {
        label: 'Step 1: Select the Right Opportunity for You',
        description: `Whether you prefer structured financing through Form F-1 or Form F-3, stable returns via bond issuance, or growth-focused private equity investments, we provide opportunities designed to align with your objectives. 
        Select the option that best matches your risk tolerance and financial aspirations.`,
    },
    {
        label: 'Step 2: Choose Trusted Brokerage Firms and Investment Banks',
        description:
            'Select from our network of reputable brokerage firms and investment banks, carefully chosen to guide you through the complexities of financial markets. Our trusted partners bring extensive expertise to help you make strategic decisions and reach your financial objectives with confidence.',
    },
    {
        label: 'Step 3: Submit Information and Finalize Agreements',
        description: '',
    },
];

const investmentAmounts = [
    {
        label: 'F-1',
        investment: 870,
        amounts: 1000,
    },
    {
        label: 'F-3',
        investment: 90,
        amounts: 100,
    },
    {
        label: 'Bond Issuance',
        investment: 100,
        amounts: 100,
    },
    {
        label: 'Private Equity',
        investment: 100,
        amounts: 100,
    },
];

const SignSteppers: React.FC = () => {
    const [activeStep, setActiveStep] = React.useState(0);
    const [selectedInvestment, setSelectedInvestment] = React.useState<InvestmentOptions>(InvestmentOptions.F1);
    const [selectedBank, setSelectedBank] = React.useState<BankOptions>(BankOptions.BankA);
    const [clientInfo, setClientInfo] = React.useState({
        firstName: '',
        lastName: '',
        email: '',
    });

    type StockData = {
        t: number; // Timestamp
        o: number; // Open price
        h: number; // High price
        l: number; // Low price
        c: number; // Close price
        v: number; // Volume
    };

    const [isAlertVisible, setIsAlertVisible] = React.useState(false);
    const [alertMessage, setAlertMessage] = React.useState('');
    const [loading, setLoading] = React.useState(false);


    // Handle Button Navigation Steps
    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleUpdateForm = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        console.log(selectedInvestment, selectedBank);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
        setSelectedInvestment(InvestmentOptions.F1); // Reset to default
        setSelectedBank(BankOptions.BankA); // Reset to default
        setClientInfo({
            firstName: '',
            lastName: '',
            email: '',
        });
        setIsAlertVisible(false);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setClientInfo((prev) => ({
            ...prev,
            [id]: value,
        }));
    };

    const handleResultChange = (index: number, field: string, value: any) => {
        setResults((prevResults) => {
            const updatedResults = [...prevResults];
            updatedResults[index] = { ...updatedResults[index], [field]: value };
            return updatedResults;
        });
    };
    

    // Handle Request Agreement, and check if all fields are filled
    const handleRequestAgreement = async () => {
        if (!clientInfo.firstName || !clientInfo.lastName || !clientInfo.email) {
            setAlertMessage('Please fill in all fields');
            setIsAlertVisible(true);
        } else {
            setLoading(true);
            try {
                switch (selectedInvestment) {
                    case InvestmentOptions.F1:
                        console.log('F1 Api Call');
                        const templateF1 = '7aee40834898468ab108acf393909ac8f996df8a';
                        const documentNameF1 = `BIYA FORM F-1 - ${clientInfo.firstName} ${clientInfo.lastName} - ${selectedBank}`;
                        // Wait for the API call to complete
                        await sendFormDocRequest(
                            templateF1,
                            documentNameF1
                        ); 
                        break;
                    case InvestmentOptions.F3:
                        console.log('F3 Api Call');
                        const templateF3 = '1bf8c287677a4c2ca0d70818e2970f33e5d457ad';
                        const documentNameF3 = `BIYA FORM F-3 - ${clientInfo.firstName} ${clientInfo.lastName} - ${selectedBank}`;
                        // Wait for the API call to complete
                        await sendFormDocRequest(
                            templateF3,
                            documentNameF3
                        ); 
                        break;
                    case InvestmentOptions.BondIssuance:
                        console.log('BondIssuance Api Call');
                        const templateNote = '1a3e3225e78747bd85570de0bc8c86b9c2755ef4';
                        const documentNameNote = `BIYA Note Purchase Agreement - ${clientInfo.firstName} ${clientInfo.lastName} - ${selectedBank}`;
                        // Wait for the API call to complete
                        await sendFormDocRequest(
                            templateNote,
                            documentNameNote
                        ); 
                        break;
                    case InvestmentOptions.PrivateEquity:
                        await sendSecuritiesInvitation(); // Wait for the API call to complete
                        break;
                    default:
                        // Optional: Handle other investments or do nothing
                        console.log("invalid investment option");
                        break;
                }
                setActiveStep((prevActiveStep) => prevActiveStep + 1); // Move to the next step only on success
            } catch (error) {
                setAlertMessage('An error occurred while sending the request. Please try again.');
                setIsAlertVisible(true);
            } finally {
                setLoading(false); // Hide loading animation
            }
        }
    }

    // Fetch stock data and calculate the average Close price
    const fetchStockDataAndCalculateAverage = async (): Promise<number> => {
        const apiKey = 'cab7cb3fb37b44149fee2fca93714124qv'; // Replace with your API key if necessary
        const ticker = 'AEHL'; // Apple Inc. stock ticker
        const url = `https://api.finazon.io/latest/finazon/us_stocks_essential/time_series?ticker=${ticker}&interval=1d&page=0&page_size=5&adjust=all&apikey=${apiKey}`;

        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();

            if (Array.isArray(data.data)) {
                const stockData: StockData[] = data.data;

                // Calculate the average Close price
                const totalClosePrice = stockData.reduce((sum, item) => sum + item.c, 0);
                const averageClosePrice = (totalClosePrice / stockData.length) * 0.8;

                return parseFloat(averageClosePrice.toFixed(2)); // Return as a number
            } else {
                throw new Error('Unexpected response structure');
            }
        } catch (error) {
            throw new Error(`Error fetching stock data: ${error instanceof Error ? error.message : String(error)}`);
        }
    };

    // Send Doc
    const sendFormDocRequest = async (templateId: string, documentName: string) => {

        try {
            await formDocRequest(templateId, documentName, clientInfo.email);
            setIsAlertVisible(false); // Hide the alert on success
        } catch (error) {
            throw new Error('Failed to send Form F1 request');
        }
    }

    // Handle formDocRequest Api Requests
    const formDocRequest = async (templateId: string, documentName: string, email: string) => {
        const response = await fetch('/api/signNowDocApi', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ templateId, documentName, email }),
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();
        console.log('Form F1 Request Successfully:', data);
    };

    // Send Gen Doc Request Info
    const sendSecuritiesInvitation = async () => {
        const averageClosePrice = await fetchStockDataAndCalculateAverage();

        const fields = [
            { field_name: 'pricePerShare', prefilled_text: `$${averageClosePrice}` },
        ]
        const templateId = '8ce4be0eb5cb464585101cde7889d57a43fcf033';
        const documentName = `BIYA SECURITIES PURCHASE AGREEMENT - ${clientInfo.firstName} ${clientInfo.lastName} - ${selectedBank}`;
        console.log(fields, templateId, documentName, clientInfo.email);

        try {
            await securitiesRequest(templateId, documentName, fields, clientInfo.email); // Await the request
            setIsAlertVisible(false); // Hide the alert on success
        } catch (error) {
            throw new Error('Failed to send securities invitation');
        }
    }

    // handle securitiesRequest Api Requests
    const securitiesRequest = async (templateId: string, documentName: string, fields: Array<{ field_name: string; prefilled_text: string }>, email: string) => {
        const response = await fetch('/api/signNowSecuritiesApi', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ templateId, documentName, fields, email }),
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();
        console.log('Securities Request Successfully:', data);
    };

    return (
        <div>
            <Stepper activeStep={activeStep} orientation="vertical">
                {steps.map((step, index) => (
                    <Step key={step.label}>
                        <StepLabel
                            optional={
                                index === steps.length - 1 ? (
                                    <Typography variant="caption">Last step</Typography>
                                ) : null
                            }
                        >
                            {step.label}
                        </StepLabel>
                        <StepContent>
                            <Typography>{step.description}</Typography>
                            <Box sx={{ mb: 2 }}>

                                {/* Step 1 */}
                                {activeStep === 0 && (
                                    <div>

                                        <RadioGroup
                                            value={selectedInvestment}
                                            onChange={(e) => setSelectedInvestment(e.target.value as InvestmentOptions)}
                                        >
                                            {Object.values(InvestmentOptions).map((option, index) => (
                                                <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                                    <FormControlLabel value={option} control={<Radio />} label={`${index + 1}. ${option}`} />
                                                    <div className="flex flex-row items-center">
                                                        <CircularProgress className='p-2' variant="determinate" value={(investmentAmounts[index].investment / investmentAmounts[index].amounts) * 100} />
                                                        {/* <p>${investmentAmounts[index].investment} / ${investmentAmounts[index].amounts}</p> */}
                                                        <p> {((investmentAmounts[index].investment / investmentAmounts[index].amounts) * 100).toFixed(2)}% Available </p>
                                                    </div>
                                                </div>
                                            ))}

                                        </RadioGroup>

                                        <Button
                                            variant="contained"
                                            onClick={handleNext}
                                            sx={{ mt: 1, mr: 1 }}
                                        >
                                            {index === steps.length - 1 ? 'Finish' : 'Continue'}
                                        </Button>
                                        <Button
                                            disabled={index === 0}
                                            onClick={handleBack}
                                            sx={{ mt: 1, mr: 1 }}
                                        >
                                            Back
                                        </Button>
                                    </div>
                                )}

                                {/* Step 2 */}
                                {activeStep === 1 && (
                                    <div>
                                        <RadioGroup
                                            value={selectedBank}
                                            onChange={(e) => setSelectedBank(e.target.value as BankOptions)}
                                        >
                                            {Object.values(BankOptions).map((bank) => (
                                                <FormControlLabel key={bank} value={bank} control={<Radio />} label={bank} />
                                            ))}
                                        </RadioGroup>
                                        <Button
                                            variant="contained"
                                            onClick={handleUpdateForm}
                                            sx={{ mt: 1, mr: 1 }}
                                        >
                                            {index === steps.length - 1 ? 'Finish' : 'Continue'}
                                        </Button>
                                        <Button
                                            disabled={index === 0}
                                            onClick={handleBack}
                                            sx={{ mt: 1, mr: 1 }}
                                        >
                                            Back
                                        </Button>
                                    </div>
                                )}

                                {activeStep === 2 && (
                                    <div>
                                        <p className='font-dmSerif text-base p-2'>
                                            You have selected <span className='font-bold text-red-500'>{selectedInvestment}</span> with <span className='font-bold text-red-500'>{selectedBank}</span>.<br />
                                            Enter Your Details Below and Request Agreement.<br />
                                            Once signed, the agreement will have full legal effect.
                                        </p>

                                        <motion.div
                                            initial={{ opacity: 0, y: 50 }} // Initial state: invisible and shifted down
                                            animate={isAlertVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} // Animate based on alert visibility
                                            transition={{ duration: 0.8, delay: 0.0 }} // Animation duration and delay
                                            className="py-3"
                                        >
                                            {isAlertVisible && (
                                                <Alert severity="error">
                                                    <AlertTitle>Error</AlertTitle>
                                                    {alertMessage}
                                                </Alert>
                                            )}
                                        </motion.div>

                                        <div className=' grid grid-cols-2 gap-4'>
                                            <TextField
                                                required
                                                id="firstName"
                                                label="First Name"
                                                value={clientInfo.firstName}
                                                onChange={handleChange}
                                                variant="filled"
                                                className='col-span-2 md:col-span-1'
                                            />
                                            <TextField
                                                required
                                                id="lastName"
                                                label="Last Name"
                                                value={clientInfo.lastName}
                                                onChange={handleChange}
                                                variant="filled"
                                                className='col-span-2 md:col-span-1'
                                            />
                                            <TextField
                                                required
                                                id="email"
                                                label="Email"
                                                value={clientInfo.email}
                                                onChange={handleChange}
                                                variant="filled"
                                                className="col-span-2"
                                            />
                                        </div>

                                        <Button
                                            variant="contained"
                                            onClick={handleRequestAgreement}
                                            sx={{ mt: 1, mr: 1 }}
                                            color="success"
                                        >
                                            {loading ? (
                                                <CircularProgress size={24} sx={{ color: 'white' }} /> // Loading spinner
                                            ) : (
                                                'Request Agreement'
                                            )}
                                        </Button>

                                        <Button
                                            disabled={index === 0}
                                            onClick={handleBack}
                                            sx={{ mt: 1, mr: 1 }}
                                        >
                                            Back
                                        </Button>
                                    </div>
                                )}
                            </Box>
                        </StepContent>
                    </Step>
                ))}
            </Stepper>
            {activeStep === steps.length && (
                <Paper square elevation={0} sx={{ p: 3 }} className='bg-white-linen-100'>
                    {/* <Typography>All steps completed - you&apos;re finished</Typography> */}
                    <Alert severity="success">
                        <AlertTitle>Success</AlertTitle>
                        All steps completed - You&apos;re finished. <br />
                        Please check your email for the agreement.
                    </Alert>
                    <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                        Reset
                    </Button>
                </Paper>
            )}
        </div>
    );
};

export default SignSteppers;