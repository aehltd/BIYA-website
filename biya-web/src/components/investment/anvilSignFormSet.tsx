import React from 'react';

import { InvestmentOptions, BankOptions } from './stepOptions';

// Define enums for investment options and banks
// enum InvestmentOptions {
//     F1 = 'F-1',
//     F3 = 'F-3',
//     BondIssuance = 'Bond Issuance',
//     PrivateEquity = 'Private Equity',
// }

// enum BankOptions {
//     BankA = 'JP Morgan',
//     BankB = 'CitiBank',
//     BankC = 'Barclays',
//     BankD = 'Merrill Lynch',
// }


// Define props with enum types
interface AnvilSignFormSetProps {
    selectedInvestment: InvestmentOptions;
    selectedBank: BankOptions;
}

const AnvilSignFormSet: React.FC<AnvilSignFormSetProps> = ({ selectedInvestment, selectedBank }) => {
    const renderFormComponent = () => {
        switch (true) {
            case selectedInvestment === InvestmentOptions.F1 && selectedBank === BankOptions.BankA:
                return <div>Form for F-1 with {BankOptions.BankA}
                <iframe className='w-full h-[60vh]' src="https://app.useanvil.com/form/baiya-international-group-inc/sample-webform"></iframe></div>;
            case selectedInvestment === InvestmentOptions.F3 && selectedBank === BankOptions.BankB:
                return <div>Form for F-3 with Bank B</div>;
            case selectedInvestment === InvestmentOptions.BondIssuance && selectedBank === BankOptions.BankC:
                return <div>Form for Bond Issuance with Bank C</div>;
            case selectedInvestment === InvestmentOptions.PrivateEquity && selectedBank === BankOptions.BankD:
                return <div>Form for Private Equity with Bank D</div>;
            default:
                return <div>Please make a valid selection to view the form.</div>;
        }
    };

    return (
        <div>
            <h1>Anvil Sign Form Set</h1>
            <p>
                Selected Investment: <strong>{selectedInvestment}</strong>
            </p>
            <p>
                Selected Bank: <strong>{selectedBank}</strong>
            </p>
            {renderFormComponent()}
        </div>
    );
};

export default AnvilSignFormSet;
