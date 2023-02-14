import { useState, useEffect } from 'react';
import axios from 'axios';

export const GetLearningMaterials = (grade, url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    const qs = require('qs');
    const query = qs.stringify(
      {
        // [$and][0][grades][$eq]=9&filters[$and][0][subjects][url][$eq]=computerscience
        filters: {
          $and: [
            {
              grade: {
                Name: {
                  $eq: grade,
                },
              },
            },
            {
              subjects: {
                url: {
                  $eq: url,
                },
              },
            },
          ],
        },
        populate: '*',
      },
      {
        encodeValuesOnly: true, // prettify URL
      },
    );

    let config = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    };

    try {
      const response = await axios.get(`http://localhost:1337/api/study-materials?populate=*${query}`, config);
      setData(response.data);
      setError(null);
    } catch (err) {
      setError(err.message);
      setData(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [loading]);

  return { data, loading, error };
};
