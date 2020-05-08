import React from "react";
import { useQuery, useLazyQuery } from "@apollo/react-hooks";
import { GET_COLLECTIONS_BY_TITLE } from "../graphl/home";
import Spinner from "./spinner/spinner.component";

export default function Home() {
  /*------------------------------- useQuery ---------------------------- */
  //point refetch just using for useQuery cuz lazy already has its function
  const {
    loading: womenLoading,
    data: womenData,
    error,
    refetch,
    startPolling, //just Query
    stopPolling, //just Query
  } = useQuery(GET_COLLECTIONS_BY_TITLE, {
    variables: { title: "Womens" },
  });
  /*------------------------------ useLazyQuery -------------------------- */
  const [getHats, { data: menData, loading: menLoading }] = useLazyQuery(
    GET_COLLECTIONS_BY_TITLE
  );
  /*------------------------------ hanldeGet men ------------------------- */
  const handleGetHats = () => {
    getHats({ variables: { title: "hats" } });
  };
  /*---------------------------------------------------------------------- */
  return (
    <>
      {(womenLoading || menLoading) && <Spinner />}
      <button onClick={handleGetHats}>getHats</button>
      <button onClick={() => refetch()}>reFetchWomens</button>
      <button onClick={() => startPolling(500)}>start polling</button>
      <button onClick={() => stopPolling()}>end polling</button>
      <h3>{womenData && womenData.getCollectionsByTitle.title}</h3>
      <div>
        {womenData &&
          womenData.getCollectionsByTitle.items.map((data, index) => {
            return (
              <div key={index}>
                <div>{data.name}</div>
                <img alt="product" src={data.imageUrl} />
              </div>
            );
          })}
      </div>
    </>
  );
}
