import React, { useEffect, useState } from "react";
import axios from "axios";

import graph from "./assets/graphs/graph.svg";
import map from "./assets/graphs/map.svg";

import { Skeleton } from "@mui/material";
import { padding } from "@mui/system";

function InfoCard() {
  const [info, setInfo] = useState([] as any);
  const [isLoading, setIsLoading] = useState(true);

  const options = {
    method: "GET",
    url: "https://covid-193.p.rapidapi.com/statistics",
    headers: {
      "X-RapidAPI-Key": "c14b3d0bacmsh77912aafa6e81e3p16c885jsna78dbb61726e",
      "X-RapidAPI-Host": "covid-193.p.rapidapi.com",
    },
  };

  const getDetails = () => {
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data, "stats data");
        setInfo(response.data.response);
        setIsLoading(false);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  useEffect(() => {
    getDetails();
  }, []);

  return (
    <div>
      <div className=" bg-darkGray p-4 m-2">
        <p className="  lg:text-xl text-lg font-sans font-light lg:text-start text-center">
          Coronavirus COVID-19 Global Cases
        </p>
      </div>

      <div className="flex lg:flex-row flex-col gap-2 m-2">
        {/* first section */}
        <div className="lg:w-[20vw]">
          <div className="bg-darkGray h-[160px] flex flex-col justify-center items-center font-sans">
            <p className="text-2xl font-light ">Total Confirmed</p>
            <p className="text-glowingRed lg:text-7xl text-5xl">76756</p>
          </div>

          <div className="bg-darkGray font-sans mt-2">
            <p className="text-base font-light text-center px-4 py-2 mb-[15px]">
              Confirmed Cases by Country/Region
            </p>

            <div className="h-[517px] overflow-y-auto">
              {isLoading ? (
                <div className="p-4">
                  {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((item: any) => (
                    <Skeleton
                      sx={{ color: "#464646", padding: "10px" }}
                      animation="wave"
                    />
                  ))}
                </div>
              ) : (
                <>
                  {info.map((item: any) => (
                    <div className="flex flex-row justify-between items-center border-b border-[#464646] p-2">
                      <p className="text-glowingRed text-sm">
                        {item?.cases?.total}
                      </p>
                      <p className="text-sm">{item?.country}</p>
                    </div>
                  ))}
                </>
              )}
            </div>
          </div>
        </div>
        {/* middle section */}
        <div className="bg-darkGray lg:w-[50vw]">
          <img src={map} alt={map}/>
        </div>

        {/* third section */}
        <div className="lg:w-[30vw] flex flex-col gap-2 lg:justify-between">
          <div className=" flex lg:flex-row flex-col gap-2">
            {/* total deaths */}
            <div className="bg-darkGray lg:w-[20vw] flex flex-col justify-start items-center font-sans pt-[15px]">
              <p className="font-light text-xl">Total Deaths</p>
              <p className=" lg:text-6xl text-3xl">18291</p>

              <div className="h-[340px] w-full overflow-y-auto mt-[15px]">
                {isLoading ? (
                  // <p className="text-base text-center">Loading...</p>
                  <div className="p-4">
                    {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((item: any) => (
                      <Skeleton
                        sx={{ color: "#464646", padding: "10px" }}
                        animation="wave"
                      />
                    ))}
                  </div>
                ) : (
                  <>
                    {info.map((item: any) => (
                      <div className="flex flex-col border-b border-[#464646] p-1 px-2">
                        <p className="text-sm">
                          {item?.deaths?.total}{" "}
                          <span className="font-light">deaths</span>
                        </p>
                        <p className="text-sm">
                          <span className="font-semibold font-sans">
                            {item?.country}
                          </span>
                          ,{" "}
                          <span className="text-lightGray">
                            {item?.continent}
                          </span>
                        </p>
                      </div>
                    ))}
                  </>
                )}
              </div>
            </div>

            {/* total recovered */}
            <div className="bg-darkGray lg:w-[20vw] flex flex-col justify-start items-center font-sans pt-[15px]">
              <p className="font-light text-xl ">Total Recovered</p>
              <p className="text-matteGreen lg:text-6xl text-3xl">19228</p>

              <div className="h-[340px] w-full overflow-y-auto mt-[15px]">
                {isLoading ? (
                  // <p className="text-base text-center">Loading...</p>
                  <div className="p-4">
                    {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((item: any) => (
                      <Skeleton
                        sx={{ color: "#464646", padding: "10px" }}
                        animation="wave"
                      />
                    ))}
                  </div>
                ) : (
                  <>
                    {info.map(
                      (item: any) =>
                        item?.cases?.recovered && (
                          <div className="flex flex-col border-b border-[#464646] p-1 px-2">
                            <p className="text-sm text-matteGreen">
                              {item?.cases?.recovered}{" "}
                              <span className="font-light">recovered</span>
                            </p>
                            <p className="text-sm">
                              <span className="font-semibold font-sans">
                                {item?.country}
                              </span>
                              ,{" "}
                              <span className="text-lightGray">
                                {item?.continent}
                              </span>
                            </p>
                          </div>
                        )
                    )}
                  </>
                )}
              </div>
            </div>
          </div>

          {/* graph */}
          <img src={graph} alt={graph} />
        </div>

        {/* <div className="w-[30vw] bg-dar"></div> */}
      </div>
    </div>
  );
}

export default InfoCard;
