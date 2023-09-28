export const SelectorDefinitions = {
  nodeInfo_divId: "nodeInfo",
} as const;

export type SelectorDefinition = keyof typeof SelectorDefinitions;
