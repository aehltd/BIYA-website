import React from 'react';

// import pages
import InvestmentBanner from '../components/banner/investmentBanner';
import InvestmentOptions from '../components/investment/options';
import Cooperate from '@/components/investment/cooperate';

const Financing: React.FC = () => {
    return (
        <div>
            <div className='bg-white-linen-100 p-10 md:p-20'>
                <InvestmentBanner/>
            </div>   
            <div className='bg-white-linen-100 w-full py-5'>
                <div className=' container p-3'>
                    <InvestmentOptions/>
                </div>                  
            </div>
            <div className='bg-white-linen-100 w-full py-5'>
                <div className=' container p-3'>
                    <Cooperate/>
                </div>                  
            </div>
        </div>
    );
};

export default Financing;