import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);
  // console.log('I RUN EVERY RENDER');

  console.log(results);

  //IT WILL EXECUTE WHEN TERM CHANGES
  // CANNOT USE ASYNC IN THIS FUNCTION
  useEffect(() => {
    //IT IS ALLOWED
    const search = async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: term,
        },
      });

      setResults(data.query.search);
    };

    if (term) search();
  }, [term]);

  // useEffect(() => {
  //   console.log('I RUN EVERY RENDER AND AT INITIAL RENDER ');
  // });

  // useEffect(() => {
  //   console.log('I RUN EVERY INITIAL RENDER ');
  // }, []);

  // useEffect(() => {
  //   console.log('I RUN EVERY RENDER AND WHEN TERM CHANGES');
  // }, [term]);

  const renderedResults = results.map((result) => {
    return (
      <div key={result.pageid} className="item">
        <div className="contet">
          <div className="header">{result.title}</div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term</label>
          <input
            className="input"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
        </div>
      </div>
      <div className="ui celled list">
        {renderedResults}
      </div>
    </div>
  );
};

export default Search;
