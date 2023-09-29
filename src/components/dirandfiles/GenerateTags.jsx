import React from "react";
import Text from "../text/App.jsx";

let counter = 0; // グローバルなカウンター

export default function GenerateTags(node) {
  const tags = [];
  const uniqueKey = `${node.name}-${counter++}`; // 一意なkeyを生成

  tags.push(<Text key={uniqueKey} text={node.name} />);

  if (node.children) {
    node.children.forEach((child, index) => {
      tags.push(
        ...GenerateTags({
          ...child,
          name: `${child.name}-${index}`, // keyが一意であることを保証
        })
      );
    });
  }

  return tags;
}
