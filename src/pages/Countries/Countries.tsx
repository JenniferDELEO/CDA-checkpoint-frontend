import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { GET_COUNTRIES_BY_CONTINENT } from "../../services/queries/Continents";
import { useQuery } from "@apollo/client";
import { Card } from "antd";
import { sortBy } from "lodash";

const headerStyle: React.CSSProperties = {
  textAlign: "center",
};

const gridStyle: React.CSSProperties = {
  width: "25%",
  textAlign: "center",
  cursor: "pointer",
};

const Countries = () => {
  let { continent_code } = useParams();
  const navigate = useNavigate();
  const { loading, error, data } = useQuery(GET_COUNTRIES_BY_CONTINENT, {
    variables: { continentId: continent_code },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <div className="mt-10 flex flex-col items-center justify-center h-[100%] w-[60%] mx-auto">
      <Card
        title={`List of countries on ${data.continent.name}`}
        style={headerStyle}
      >
        {data?.continent?.countries ? (
          sortBy(data.continent.countries, ["name"]).map((country: any) => (
            <Card.Grid
              onClick={() =>
                navigate(
                  `/continents/${continent_code}/countries/${country.code}`
                )
              }
              style={gridStyle}
            >
              {country.name}
            </Card.Grid>
          ))
        ) : (
          <p>
            Unfortunally, we have no country on {data.continent.name} in the
            database
          </p>
        )}
      </Card>
    </div>
  );
};

export default Countries;
