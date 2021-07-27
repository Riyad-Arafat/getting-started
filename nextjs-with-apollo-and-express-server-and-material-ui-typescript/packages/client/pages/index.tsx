import React from "react";
import { Grid, Typography, Container, Paper } from "@material-ui/core";
import { gql, useQuery } from "@apollo/client";
import { ICountry } from "@src/types";

const GET_COUNTRIES = gql`
  query {
    countries {
      code
      name
      native
      phone
      capital
      currency
      languages {
        name
      }
    }
  }
`;

export default function Home() {
  const { data } = useQuery(GET_COUNTRIES);

  return (
    <React.Fragment>
      <Container maxWidth="lg">
        <Grid container>
          <Grid item xs={12} zeroMinWidth>
            <Paper elevation={2}>
              <Typography noWrap align="center" variant="h1">
                Countries of The World
              </Typography>
            </Paper>
          </Grid>

          <React.Fragment>
            {data?.countries.map((coun: ICountry) => (
              <Grid item xs={12} sm={6} key={coun.code}>
                <Paper>
                  <Grid container justify="space-between">
                    <Typography noWrap>
                      {coun?.name} || {coun?.native}
                    </Typography>
                    {/* <Typography noWrap></Typography> */}
                    <Typography noWrap>{coun?.capital}</Typography>
                    <Typography noWrap>{coun?.currency}</Typography>
                  </Grid>
                </Paper>
              </Grid>
            ))}
          </React.Fragment>
        </Grid>
      </Container>
    </React.Fragment>
  );
}
