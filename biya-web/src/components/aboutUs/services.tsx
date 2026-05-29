import React from 'react';
import Image from 'next/image';

import Grid from "@mui/material/Grid2";

const Services: React.FC = () => {
    return (
        <div>
            <Grid container spacing={2}>
                <Grid size={12}>
                    <h1 className="text-black font-kanit font-bold tracking-widest py-4 text-4xl capitalize">
                        Job matching service<span className="material-symbols-outlined text-7xl pl-1">all_match</span>
                    </h1>
                </Grid>
                <Grid size={{ xs: 12, md: 7 }}>
                    <div className="px-4">
                        <p>
                        Under the job matching service model, the Company connects Employing Companies with HR Service Companies based on the specific quantity and duration of blue-collar labor required by the Employing Companies.
                        After the two parties finalize a contract, the Company charges the Employing Company a service fee, calculated per worker at a pre-agreed monthly rate outlined in the contract.
                        Revenue is recognized progressively over the contract period, beginning when the blue-collar workers start their assignments, as the Employing Companies benefit from and utilize the service throughout this period.
                        </p>
                    </div>
                </Grid>
                <Grid size={{ xs: 12, md: 5 }}>
                    <Image
                        src="/images/job-matching.webp"
                        alt="Business Description"
                        width={500} // Replace with the actual width of the image
                        height={100} // Replace with the actual height of the image
                        className='rounded-lg shadow-2xl'
                    />
                </Grid>
                <Grid size={12}>
                    <h1 className="text-black font-kanit font-bold tracking-widest py-4 text-4xl capitalize justify-end flex">
                        Entrusted recruitment service<span className="material-symbols-outlined text-7xl pl-1">reviews</span>
                    </h1>
                </Grid>
                <Grid size={{ xs: 12, md: 5 }}>
                    <Image
                        src="/images/entrusted-recruitment.webp"
                        alt="Business Description"
                        width={500} // Replace with the actual width of the image
                        height={100} // Replace with the actual height of the image
                        className='rounded-lg shadow-2xl'
                    />
                </Grid>
                <Grid size={{ xs: 12, md: 7 }}>
                    <div className="px-4">
                        <p>
                        Under the entrusted recruitment service model, the Employing Companies and HR Service Companies remain confidential to one another. 
                        Employing Companies select labor candidates provided by the Company and sign contracts directly with the chosen candidates. 
                        The Company charges the Employing Company a service fee based on the number of recruited workers at a pre-determined monthly rate, as specified in the contract. 
                        Revenue is recognized over the duration of the contract, starting when the recruited blue-collar workers begin their roles, as the Employing Companies derive and utilize the service benefits throughout this period.
                        </p>
                    </div>
                </Grid>
                <Grid size={12}>
                    <h1 className="text-black font-kanit font-bold tracking-widest py-4 text-4xl capitalize">
                        Project outsourcing service<span className="material-symbols-outlined text-7xl pl-1">work</span>
                    </h1>
                </Grid>
                <Grid size={12}>
                    <div className="px-4">
                        <p>
                        Under the labor dispatching service model, Customers submit their labor requirements, and the Company dispatches its employees directly to fulfill those needs. 
                        The Company handles wage payments for the dispatched workers and charges Customers a service fee based on the total number of working hours. 
                        Revenue is recognized over the service period, as Customers simultaneously receive and benefit from the dispatch services provided. 
                        The Company retains control over the service before it is delivered to the Customer.
                        Due to the negative gross profit associated with labor dispatching, the Company has strategically decided to scale down this business line rather than expand it. 
                        As of June 30, 2023, Gongwuyuan has established partnerships with 15 corporate clients, including 7 agency recruitment clients and 8 outsourcing business clients, primarily in core manufacturing regions such as the Pearl River Delta and Yangtze River Delta. 
                        Additionally, over 4,992 labor companies and 3,142 enterprises are registered on the Gongwuyuan platform. Gongwuyuan is confident in its ability to convert 10% of these potential customers in the future, potentially increasing its client base by more than 700.
                        </p>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
};

export default Services;