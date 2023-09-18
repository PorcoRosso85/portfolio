import React, { useState, useEffect } from "react";
import { useFuzzySearchList, Highlight } from "@nozbe/microfuzz/react";
import { NodeAggregation } from "../../service/NodeAggregation";
import { graphInstance } from "../../service/GraphInstance";

const strategies = ["off", "smart", "aggressive"];
type FuzzySearchStrategy = "off" | "smart" | "aggressive";

// graphオブジェクトからノード一覧を取得しオブジェクトとして格納
const testdata: Array<[string, any]> = NodeAggregation(graphInstance());
// keyを取得、どのkeyで絞り込みたいか指定したいとき
const testdataKeys = Object.keys(testdata);

const mapResultItem = ({
  item,
  matches: [highlightRanges],
}: {
  item: any;
  matches: any[];
}) => [item, highlightRanges];

const App: React.FC = () => {
  const [count, setCount] = useState(0);
  // 初期値を再設定することで、クライアントとサーバーで内容が一致するように
  useEffect(() => {
    setCount(0);
  }, []);

  // 初期値がnullの時のuxのため、条件付きレンダリングを追加
  if (count === null) {
    return <p>Loading...</p>;
  }

  const dataset = testdata.map(([key, value]) => value.label);

  const [queryText, setQueryText] = useState("");
  const [strategy, setStrategy] = useState<FuzzySearchStrategy>("smart");

  const [filterTime, setFilterTime] = useState(0);
  const filtered = dataset
    ? useFuzzySearchList({
        list: dataset,
        queryText,
        mapResultItem,
        strategy,
      })
    : [];
  useEffect(() => {
    const before = performance.now();
    const after = performance.now();
    setFilterTime(after - before);
  }, [dataset, queryText, strategy]);

  return (
    <div className="app">
      {/* <div className="tabs-container">
        <span className="tabs-title">Dataset:</span>
        <div className="tabs">
          <ul>
            どのkeyで指定したいか事前に指定したいとき
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
      </div> */}
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
          //   placeholder={`Start typing to search ${datasetName}...`}
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
