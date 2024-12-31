import React from 'react';

// import pages
import InvestmentBanner from '../components/banner/investmentBanner';
import InvestmentOptions from '../components/investment/options';
import Cooperate from '@/components/investment/cooperate';
import SignSteppers from '@/components/investment/signSteppers';
import SignNow from '../components/investment/signNow';

const Financing: React.FC = () => {
    return (
        <div>
            <div className='bg-white-linen-100 p-10 md:p-20'>
                <InvestmentBanner />
            </div>
            <div className='bg-white-linen-100 w-full py-5'>
                <div className=' container p-3'>
                    <InvestmentOptions />
                </div>
            </div>
            <div className='bg-white-linen-100 w-full py-5'>
                <div className=' container p-3'>
                    <Cooperate />
                </div>
            </div>
            <div className='bg-white-linen-100 w-full py-5'>
                <div className=' container w-2/3'>
                    <SignSteppers />
                </div>
            </div>
            <div className='bg-white-linen-100 w-full py-5'>
                <div className=' container w-2/3'>
                    <SignNow />
                </div>
            </div>
        </div>
    );
};



export default Financing;