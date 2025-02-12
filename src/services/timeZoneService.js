import axios from 'axios';

const API_KEY = 'ET3RNCYCPF4S'; // Your TimeZoneDB API key
const API_URL = 'http://api.timezonedb.com/v2.1';

export const fetchTimeForZone = async (zone) => {
  try {
    const response = await axios.get(`${API_URL}/get-time-zone`, {
      params: {
        key: API_KEY,
        format: 'json',
        by: 'zone',
        zone,
      },
    });
    return {
      formatted: response.data.formatted,
    };
  } catch (error) {
    console.error('Error fetching time for zone:', error);
    return null;
  }
};
