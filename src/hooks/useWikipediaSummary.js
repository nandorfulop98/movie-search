import axios from "axios";
import React, { useEffect, useState } from "react";

const API_URL = "https://en.wikipedia.org/api/rest_v1/page/summary/";

const useWikipediaSummary = ({ title }) => {
  const [summary, setSummary] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const queryResult = await axios.get(`${API_URL}${title}`);

      setSummary(queryResult?.data?.extract);
    };

    fetchData();
  }, [title]);

  return summary;
};

export default useWikipediaSummary;
