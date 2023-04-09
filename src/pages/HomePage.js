import React from "react";
import JobCard from "../components/JobCard";
import jobs from "../jobs.json";
import { Container } from "@mui/system";
import { Grid, Box, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";

const itemsPerPage = 5;

function HomePage() {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const currentPage = parseInt(query.get("page") || "1", 10);

  const startIndex = (currentPage -1)*itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPageData = jobs.slice(startIndex, endIndex);

  return (
    <Container>
      <Box sx={{ marginTop: 6 }}>
        <Typography variant="h4" sx={{ marginBottom: 2 }}>
          Latest Jobs
        </Typography>
        <Grid container spacing={2}>
          {currentPageData.map((job) => (
            <Grid item xs={12} md={6} lg={4} key={job.id}>
              <JobCard job={job} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}

export default HomePage;
