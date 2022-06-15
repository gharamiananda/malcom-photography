import React, { useEffect, useState } from 'react';

const useService = () => {
    const [services, setServices] = useState([]);




    useEffect(() => {
        fetch('https://dry-scrubland-05272.herokuapp.com/service')
            .then(res => res.json())
            .then(data => setServices(data));


    }


        , []);

    // const single = sss.find(s => s._id === '62a451c072293251cb531f86');
    // console.log(single, services, 'services');

    return [services];

};

export default useService;