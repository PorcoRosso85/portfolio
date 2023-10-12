export const dataDocGrid = {
  html: {
    1000: {
      tag: "ul",
      class: "child",
      content: JSON.stringify([1001]),
    },
    1001: {
      tag: "li",
      class: "dir",
      content: JSON.stringify(["Item 1", 1002, 1003, 1004, 1005]),
    },
    1002: {
      tag: "li",
      class: "file",
      content: JSON.stringify(["Item 1.1"]),
    },
    1003: {
      tag: "li",
      class: "func",
      content: JSON.stringify(["Item 1.1.1"]),
    },
    1004: {
      tag: "li",
      class: "func",
      content: JSON.stringify(["Item 1.1.2"]),
    },
    1005: {
      tag: "li",
      class: "func",
      content: JSON.stringify(["Item 1.1.3"]),
    },
    1006: {
      tag: "li",
      class: "dir",
      content: JSON.stringify(["Item 2.1", 1007, 1008]),
    },
    1007: {
      tag: "li",
      class: "dir",
      content: JSON.stringify(["Item 2.3"]),
    },
    1008: {
      tag: "li",
      class: "dir",
      content: JSON.stringify(["Item 2.4"]),
    },
  },
};
