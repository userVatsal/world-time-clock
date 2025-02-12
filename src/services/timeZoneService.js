import axios from 'axios';

const API_KEY = 'ET3RNCYCPF4S'; // Your TimeZoneDB API key
const API_URL = 'http://api.timezonedb.com/v2.1';

export const fetchTimeZones = async () => {
  try {
    const response = await axios.get(`${API_URL}/list-time-zone`, {
      params: {
        key: API_KEY,
        format: 'json',
      },
    });
    return response.data.zones;
  } catch (error) {
    console.error('Error fetching time zones:', error);
    return [];
  }
};

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
      abbreviation: response.data.abbreviation,
      gmtOffset: response.data.gmtOffset,
    };
  } catch (error) {
    console.error('Error fetching time for zone:', error);
    return null;
  }
};
