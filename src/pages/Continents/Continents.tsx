import React from "react";
import { Card } from "antd";
import { useQuery } from "@apollo/client";
import { GET_CONTINENTS } from "../../services/queries/Continents";
import { useNavigate } from "react-router-dom";

const headerStyle: React.CSSProperties = {
  textAlign: "center",
};

const gridStyle: React.CSSProperties = {
  width: "25%",
  textAlign: "center",
  cursor: "pointer",
};

const Continents = () => {
  const navigate = useNavigate();
  const { loading, error, data } = useQuery(GET_CONTINENTS);

  console.log("data", data);

  if (loading) return <p>Chargement...</p>;
  if (error) return <p>{error.message}</p>;
  return (
    <div className="flex flex-col items-center justify-center h-[100vh] w-[60%] mx-auto">
      <Card title="List of continents" style={headerStyle}>
        {data.continents ? (
          data.continents.map((continent: any) => (
            <Card.Grid
              onClick={() =>
                navigate(`/continents/${continent.code}/countries`)
              }
              style={gridStyle}
            >
              {continent.name}
            </Card.Grid>
          ))
        ) : (
          <p>Unfortunally, we have no continent in the database</p>
        )}
      </Card>
    </div>
  );
};

export default Continents;
