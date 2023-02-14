// http://localhost:1337/api/subjects?filters[url][$eq]=computerscience

import { useState, useEffect } from 'react';
import axios from 'axios';

export const GetSubjectHeading = subject => {
  const [headingData, setHeadingData] = useState(null);
  const [headingLoading, setLoading] = useState(true);
  const [headingError, setHeadingError] = useState(null);

  const fetchData = async () => {
    const qs = require('qs');
    const query = qs.stringify(
      {
        filters: {
          url: {
            $eq: subject,
          },
        },
        populate: '*',
      },
      {
        encodeValuesOnly: true, // prettify URL
      },
    );

    try {
      const response = await axios.get(`http://localhost:1337/api/subjects?${query}`);
      setHeadingData(response.data);
      setHeadingError(null);
    } catch (err) {
      setHeadingError(err.message);
      setHeadingData(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [headingLoading]);

  return { headingData, headingLoading, headingError };
};
