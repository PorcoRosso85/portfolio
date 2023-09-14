import React, { useState } from "react";
import { useFuzzySearchList, Highlight } from "@nozbe/microfuzz/react";

const FuzzySearchComponent = ({ initialList }) => {
  const [list, setList] = useState(initialList);
  const [queryText, setQueryText] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);

  const filteredList = useFuzzySearchList({
    list,
    queryText,
    getText: (item) => [item.name],
    mapResultItem: ({ item, score, matches: [highlightRanges] }) => ({
      item,
      highlightRanges,
    }),
  });

  const handleSearch = () => {
    if (filteredList.length > 0) {
      setSelectedItem(filteredList[0].item);
    } else {
      const newItem = { name: queryText };
      setList([...list, newItem]);
      setSelectedItem(newItem);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="検索..."
        value={queryText}
        onChange={(e) => setQueryText(e.target.value)}
      />
      <button onClick={handleSearch}>検索</button>
      <ul>
        {filteredList &&
          filteredList.map(
            (
              { item, highlightRanges },
              index // filteredListが存在する場合のみmapを実行
            ) => (
              <li key={index}>
                <Highlight text={item.name} ranges={highlightRanges} />
              </li>
            )
          )}
      </ul>
      {selectedItem && <div>選択されたアイテム: {selectedItem.name}</div>}
    </div>
  );
};

export default FuzzySearchComponent;
