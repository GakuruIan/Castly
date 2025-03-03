import React, { useEffect, useState } from "react";

import MultipleChoiceResults from "../../components/Results/MultipleChoice";

import { axiosInstance } from "../../Axios/axios";

// router
import { useParams } from "react-router-dom";

// results interface
import { Results as ResultsProps } from "../../interfaces";
import RankingResults from "../../components/Results/RankingResults";

const Results = () => {
  const { id } = useParams();
  const [results, setResults] = useState<ResultsProps>();

  const FetchData = async () => {
    try {
      axiosInstance.get<ResultsProps>(`/results/${id}`).then((response) => {
        if (response.status === 200) {
          setResults(response.data);
          console.log(response.data);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    FetchData();
  }, []);

  return (
    <>
      {results?.poll_type === "multiple_choice" && (
        <MultipleChoiceResults results={results} />
      )}

      {results?.poll_type === "ranking" && <RankingResults results={results} />}
    </>
  );
};

export default Results;
