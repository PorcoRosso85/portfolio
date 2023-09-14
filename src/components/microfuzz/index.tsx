import React, { useState, useEffect } from "react";
import testdata from "./example/testdata";
// console.log(testdata);
import { useFuzzySearchList, Highlight } from "@nozbe/microfuzz/react";

const testdataKeys = Object.keys(testdata);
const strategies = ["off", "smart", "aggressive"];
type FuzzySearchStrategy = "off" | "smart" | "aggressive";

const mapResultItem = ({
  item,
  matches: [highlightRanges],
}: {
  item: any;
  matches: any[];
}) => [item, highlightRanges];

const App: React.FC = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // 何らかの処理でカウント値を設定
    setCount(0);
  }, []);

  if (count === null) return <p>Loading...</p>;

  const [datasetName, setDatasetName] = useState("companies");
  const dataset = testdata[datasetName];

  const [queryText, setQueryText] = useState("");
  const [strategy, setStrategy] = useState<FuzzySearchStrategy>("smart");

  const b4 = performance.now();

  const filtered = useFuzzySearchList({
    list: dataset,
    queryText,
    mapResultItem,
    strategy,
  });
  const filterTime = performance.now() - b4;

  return (
    <div className="app">
      <div className="tabs-container">
        <span className="tabs-title">Dataset:</span>
        <div className="tabs">
          <ul>
            {testdataKeys.map((aDataset) => (
              <li key={aDataset}>
                <button
                  onClick={() => setDatasetName(aDataset)}
                  data-selected={datasetName === aDataset}
                >
                  {aDataset}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="tabs-container">
        <span className="tabs-title">Fuzzy search strategy:</span>
        <div className="tabs">
          <ul>
            {strategies.map((aStrategy) => (
              <li key={aStrategy}>
                <button
                  onClick={() => setStrategy(aStrategy as FuzzySearchStrategy)}
                  data-selected={strategy === aStrategy}
                >
                  {aStrategy}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="search">
        <input
          type="search"
          value={queryText}
          onChange={(e) => setQueryText(e.target.value)}
          placeholder={`Start typing to search ${datasetName}…`}
          autoFocus
        />
      </div>
      {dataset.length >= 10_000 ? (
        <p className="warning">
          Note: microfuzz works best with datasets below 10,000 items (this one
          has {dataset.length})
        </p>
      ) : null}
      <ul className="results">
        {filtered.slice(0, 40).map(([item, highlightRanges], index) => (
          <li key={`${item.id}-${index}`}>
            <Highlight text={item} ranges={highlightRanges} />
          </li>
        ))}
      </ul>
      <p>
        Matched {filtered.length} items (out of {dataset.length}) in{" "}
        {filterTime.toFixed(1)} ms.
      </p>
    </div>
  );
};

export default App;
