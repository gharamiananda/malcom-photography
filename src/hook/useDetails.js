import React, { useEffect, useState } from 'react';
import useService from './useService';

const useDetails = (id) => {
    const [services] = useService([]);


    const [singleService, setSingleService] = useState({})



    const single = services.find(s => s._id === id);


    return [services];

};

export default useDetails;