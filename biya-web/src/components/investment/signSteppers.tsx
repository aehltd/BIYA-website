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

import AnvilSignFormSet from './anvilSignFormSet';
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
        description: <span className='text-sm'>Enter your details and review the documents to start your investment journey. Our team will guide you through a seamless process.</span>,
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

    // Handle navigation steps
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
                                                        <p>${investmentAmounts[index].investment} / ${investmentAmounts[index].amounts}</p>
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
                                        <p className='font-dmSerif text-lg'>
                                            You have selected <span className='font-bold text-red-500'>{selectedInvestment}</span> with <span className='font-bold text-red-500'>{selectedBank}</span>.<br />
                                            Please enter your information to receive the documents.<br />
                                            Once signed, the agreement will have full legal effect.
                                        </p>

                                        {/* Include the AnvilSignFormSet component */}
                                        <AnvilSignFormSet
                                            selectedInvestment={selectedInvestment}
                                            selectedBank={selectedBank}
                                        />
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
                            </Box>
                        </StepContent>
                    </Step>
                ))}
            </Stepper>
            {activeStep === steps.length && (
                <Paper square elevation={0} sx={{ p: 3 }}>
                    <Typography>All steps completed - you&apos;re finished</Typography>
                    <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                        Reset
                    </Button>
                </Paper>
            )}
        </div>
    );
};

export default SignSteppers;