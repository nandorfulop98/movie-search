import React, { useState } from "react";
import { GlobalContext } from "../store/store";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box } from "@mui/system";

import axios from "axios";
import { CircularProgress, Link } from "@mui/material";

const API_URL = "https://en.wikipedia.org/api/rest_v1/page/summary/";

export default function SimpleAccordion() {
  const { movies, addExtractTo, loadingMovies } =
    React.useContext(GlobalContext);
  const [loading, setLoading] = useState({ isLoading: false, index: null });

  console.log(movies);

  const getDetails = async (name, index) => {
    if (!movies[index].extract) {
      setLoading({ isLoading: true, index });

      const queryResult = await axios.get(`${API_URL}${name}`).catch(() => {
        setLoading({ isLoading: false, index: null });
        addExtractTo(index, "Error loading wikipedia extract...");
      });

      console.log(queryResult?.data);
      const extract = queryResult?.data?.extract ?? "Error loading extract";
      const url = queryResult?.data?.content_urls?.desktop?.page ?? "";

      addExtractTo(index, extract, url);

      setLoading({ isLoading: false, index: null });
    }
  };

  return (
    <div>
      <Typography variant="h3" gutterBottom padding={2}>
        {`Search results [${movies?.length ?? 0}]`}
      </Typography>
      <Box padding={2}>
        {movies && movies?.length > 0 ? (
          movies.map(({ name, score, id, extract, overview, url }, index) => (
            <Accordion key={id} onChange={() => getDetails(name, index)}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography variant="h7">{`${name} (${score})`}</Typography>
              </AccordionSummary>

              <AccordionDetails>
                <Typography variant="h6" gutterBottom>
                  Main overview
                </Typography>
                <Typography>{overview ?? "No overview"}</Typography>

                <Typography variant="h6" gutterBottom>
                  Wikipedia summary
                </Typography>
                {!loading.isLoading || index !== loading.index ? (
                  <Typography gutterBottom>
                    {extract ?? "Loading wikipedia extract..."}
                    {url ? <Link href={url}>Wiki</Link> : "No Wiki URL..."}
                  </Typography>
                ) : (
                  index === loading.index && <CircularProgress />
                )}
              </AccordionDetails>
            </Accordion>
          ))
        ) : loadingMovies ? (
          <CircularProgress />
        ) : (
          <Typography variant="caption">No results yet :(</Typography>
        )}
      </Box>
    </div>
  );
}
