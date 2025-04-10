import React, { useEffect, useState } from "react";
import { Container, Grid, Typography } from "@mui/material";
import { color } from "../../constant";
import { useServiceData } from "../../utils/ApiHelper";

function ServicesSec3() {
  const { data, isLoading, error } = useServiceData();

  const res = data?.result;

  const [activeId, setActiveId] = useState(null);

  const activeContent = res?.find((item) => item._id === activeId);

  useEffect(() => {
    if (res && res.length > 0 && !activeId) {
      setActiveId(res[0]._id); // ✅ use _id to match what's used below
    }
  }, [res, activeId]);

  if (isLoading) {
    return <Typography>Loading...</Typography>;
  }

  if (error) {
    return <Typography>Error loading data!</Typography>;
  }

  return (
    <Container sx={{ paddingY: 6 }}>

      <Grid container spacing={3}>
        {/* LEFT MENU */}
        <Grid
          item
          xs={12}
          md={4.5}
          sx={{
            backgroundColor: "#F5F5ED",
            color: "#87877F",
            width: "32%",
            // fontFamily: "RalewayRegular",

            // border: "1px solid red",
          }}
        >
          {res?.map((item) => (
            <Typography
              key={item._id}
              onClick={() => setActiveId(item._id)}
              sx={{
                cursor: "pointer",
                padding: "1%",
                display: "flex",
                justifyContent: "center",
                fontFamily: "RalewayBold",
                // fontWeight: 900,
                borderBottom: "1px solid #007BFF",
                backgroundColor:
                  activeId === item._id ? "#4E64EE" : "transparent",
                color: activeId === item._id ? "#fff" : "#000",
                fontWeight: activeId === item._id ? "bold" : "normal",
                transition: "0.3s",
                paddingY: "11%",
                "&:hover": {
                  backgroundColor:
                    activeId === item._id ? "#3A4AC3" : "#E0E0E0",
                },
              }}
            >
              {item?.serviceTitle}
            </Typography>
          ))}
        </Grid>

        {/* RIGHT CONTENT */}
        {activeContent && (
          <Grid item xs={12} md={8} sx={{ width: "60%" }}>
            <Typography
              sx={{
                marginY: "1rem",
                fontFamily: "RalewayRegular",
                fontWeight: "700",
                fontSize: "2rem",
                lineHeight: "2.5rem",
                color: color.blue,
              }}
            >
              {activeContent?.serviceTitle}
            </Typography>

            {activeContent?.paragraph?.map((item, index) => {
              return (
                <Typography
                  key={index}
                  sx={{
                    marginY: "1rem",
                    fontFamily: "JostRegular",
                    fontSize: "1.1rem",
                    lineHeight:"1.7rem"
                  }}
                >
                  {item}
                </Typography>
              );
            })}

            <Typography
              sx={{
                marginY: "1rem",
                fontFamily: "RalewayRegular",
                fontWeight: "700",
                fontSize: "2rem",
                lineHeight: "2.5rem",
                color: color.blue,
                mt:"4rem"
              }}
            >
              {activeContent?.queTitle}
            </Typography>

            <ul
              style={{
                marginY: "3rem",
              }}
            >
              {activeContent?.queDetails?.map((item, i) => (
                <li key={i}>
                  <Grid sx={{ display: "flex", mt: 3 }}>
                    {item.title !== "" && (
                      <Typography
                        style={{
                          fontFamily: "JostRegular",
                          fontSize: "1.2rem",
                          lineHeight: "1.5rem",
                          width: "40%",
                          fontWeight: 600,
                          // letterSpacing:"0.1rem"
                        }}
                      >
                        {item.title} :
                      </Typography>
                    )}
                    <Typography
                      style={{
                        fontFamily: "JostRegular",
                        fontSize: "1.2rem",
                        lineHeight: "1.5rem",
                        width: "60%",
                      }}
                    >
                      {item.desc}
                    </Typography>
                  </Grid>
                </li>
              ))}
            </ul>

            <Typography
              sx={{
                marginY: "1rem",
                fontFamily: "RalewayRegular",
                fontWeight: "700",
                fontSize: "2rem",
                lineHeight: "2.5rem",
                color: color.blue,
                mt:"4rem"
              }}
            >
              {activeContent?.bottomTitle} :
            </Typography>

            <ol style={{ marginY: "2rem", fontWeight: "bold" }}>
              {activeContent?.bottomSteps?.map((item, i) => (
                <li key={i}>
                  <Grid sx={{ display: "flex", mt: 3 }}>
                    {item.title !== "" && (
                      <Typography
                        style={{
                          fontFamily: "JostRegular",
                          fontSize: "1.2rem",
                          lineHeight: "1.5rem",
                          width: "40%",
                          fontWeight: 600,
                          // letterSpacing:"0.1rem"
                        }}
                      >
                        {item.title} :
                      </Typography>
                    )}
                    <Typography
                      style={{
                        fontFamily: "JostRegular",
                        fontSize: "1.2rem",
                        lineHeight: "1.5rem",
                        width: "60%",
                      }}
                    >
                      {item.desc}
                    </Typography>
                  </Grid>
                </li>
              ))}
            </ol>
          </Grid>
        )}
      </Grid>
    </Container>
  );
}

export default ServicesSec3;
