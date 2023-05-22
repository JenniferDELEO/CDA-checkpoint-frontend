import React from "react";
import { GET_COUNTRY_BY_CODE } from "../../services/queries/Country";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

const Country = () => {
  let { continent_code, country_code } = useParams();
  const { loading, error, data } = useQuery(GET_COUNTRY_BY_CODE, {
    variables: { countryId: country_code },
  });

  console.log("continent_code", continent_code);
  console.log("country_code", country_code);

  console.log("data", data);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;
  return (
    data?.country && (
      <div className="flex flex-col justify-center items-center h-[100vh] w-full">
        <div className="p-10 border-2 rounded-2xl flex flex-col justify-center items-center ">
          <div className="flex items-center">
            <p className="text-9xl pr-5">{data.country.emoji}</p>
            <h1 className="font-bold text-7xl pb-5">
              {data.country.name === data.country.native
                ? data.country.name
                : `${data.country.name} (${data.country.native})`}
            </h1>
          </div>
          <ul className="text-lg">
            <li>
              <strong className="pr-3">Capital:</strong> {data.country.capital}
            </li>
            <li>
              <strong className="pr-3">Currency:</strong>{" "}
              {data.country.currency}
            </li>
            <li>
              <strong className="pr-3">
                Language{data.country.languages.length > 1 ? "s" : ""}:
              </strong>{" "}
              {data.country.languages.length === 1
                ? `${data.country.languages[0].name} (${data.country.languages[0].native})`
                : data.country.languages.length > 1
                ? data.country.languages.map((language: any) => (
                    <li className="pl-2">
                      {language.name} ({language.native})
                    </li>
                  ))
                : null}
            </li>
          </ul>
        </div>
      </div>
    )
  );
};

export default Country;
