'use strict';

// src/chainId.ts
var ChainId = /* @__PURE__ */ ((ChainId3) => {
  ChainId3[ChainId3["ETHEREUM"] = 1] = "ETHEREUM";
  ChainId3[ChainId3["GOERLI"] = 5] = "GOERLI";
  ChainId3[ChainId3["BSC"] = 56] = "BSC";
  ChainId3[ChainId3["BSC_TESTNET"] = 97] = "BSC_TESTNET";
  ChainId3[ChainId3["ZKSYNC_TESTNET"] = 280] = "ZKSYNC_TESTNET";
  ChainId3[ChainId3["ZKSYNC"] = 324] = "ZKSYNC";
  ChainId3[ChainId3["OPBNB_TESTNET"] = 5611] = "OPBNB_TESTNET";
  ChainId3[ChainId3["OPBNB"] = 204] = "OPBNB";
  ChainId3[ChainId3["POLYGON_ZKEVM"] = 1101] = "POLYGON_ZKEVM";
  ChainId3[ChainId3["POLYGON_ZKEVM_TESTNET"] = 1442] = "POLYGON_ZKEVM_TESTNET";
  ChainId3[ChainId3["ARBITRUM_ONE"] = 42161] = "ARBITRUM_ONE";
  ChainId3[ChainId3["ARBITRUM_GOERLI"] = 421613] = "ARBITRUM_GOERLI";
  ChainId3[ChainId3["ARBITRUM_SEPOLIA"] = 421614] = "ARBITRUM_SEPOLIA";
  ChainId3[ChainId3["SCROLL_SEPOLIA"] = 534351] = "SCROLL_SEPOLIA";
  ChainId3[ChainId3["LINEA"] = 59144] = "LINEA";
  ChainId3[ChainId3["LINEA_TESTNET"] = 59140] = "LINEA_TESTNET";
  ChainId3[ChainId3["BASE"] = 8453] = "BASE";
  ChainId3[ChainId3["BASE_TESTNET"] = 84531] = "BASE_TESTNET";
  ChainId3[ChainId3["BASE_SEPOLIA"] = 84532] = "BASE_SEPOLIA";
  ChainId3[ChainId3["SEPOLIA"] = 11155111] = "SEPOLIA";
  return ChainId3;
})(ChainId || {});
var testnetChainIds = [
  5 /* GOERLI */,
  97 /* BSC_TESTNET */,
  280 /* ZKSYNC_TESTNET */,
  5611 /* OPBNB_TESTNET */,
  1442 /* POLYGON_ZKEVM_TESTNET */,
  421613 /* ARBITRUM_GOERLI */,
  534351 /* SCROLL_SEPOLIA */,
  59140 /* LINEA_TESTNET */,
  84531 /* BASE_TESTNET */,
  11155111 /* SEPOLIA */,
  421614 /* ARBITRUM_SEPOLIA */,
  84532 /* BASE_SEPOLIA */
];

// src/chainNames.ts
var chainNames = {
  [1 /* ETHEREUM */]: "eth",
  [5 /* GOERLI */]: "goerli",
  [56 /* BSC */]: "bsc",
  [97 /* BSC_TESTNET */]: "bscTestnet",
  [42161 /* ARBITRUM_ONE */]: "arb",
  [421613 /* ARBITRUM_GOERLI */]: "arbGoerli",
  [1101 /* POLYGON_ZKEVM */]: "polygonZkEVM",
  [1442 /* POLYGON_ZKEVM_TESTNET */]: "polygonZkEVMTestnet",
  [324 /* ZKSYNC */]: "zkSync",
  [280 /* ZKSYNC_TESTNET */]: "zkSyncTestnet",
  [59144 /* LINEA */]: "linea",
  [59140 /* LINEA_TESTNET */]: "lineaTestnet",
  [204 /* OPBNB */]: "opBNB",
  [5611 /* OPBNB_TESTNET */]: "opBnbTestnet",
  [8453 /* BASE */]: "base",
  [84531 /* BASE_TESTNET */]: "baseTestnet",
  [534351 /* SCROLL_SEPOLIA */]: "scrollSepolia",
  [11155111 /* SEPOLIA */]: "sepolia",
  [421614 /* ARBITRUM_SEPOLIA */]: "arbSepolia",
  [84532 /* BASE_SEPOLIA */]: "baseSepolia"
};
var chainNameToChainId = Object.entries(chainNames).reduce((acc, [chainId, chainName]) => {
  return {
    [chainName]: chainId,
    ...acc
  };
}, {});
var defiLlamaChainNames = {
  [56 /* BSC */]: "bsc",
  [1 /* ETHEREUM */]: "ethereum",
  [5 /* GOERLI */]: "",
  [97 /* BSC_TESTNET */]: "",
  [42161 /* ARBITRUM_ONE */]: "arbitrum",
  [421613 /* ARBITRUM_GOERLI */]: "",
  [1101 /* POLYGON_ZKEVM */]: "polygon_zkevm",
  [1442 /* POLYGON_ZKEVM_TESTNET */]: "",
  [324 /* ZKSYNC */]: "era",
  [280 /* ZKSYNC_TESTNET */]: "",
  [59140 /* LINEA_TESTNET */]: "",
  [84531 /* BASE_TESTNET */]: "",
  [204 /* OPBNB */]: "op_bnb",
  [5611 /* OPBNB_TESTNET */]: "",
  [534351 /* SCROLL_SEPOLIA */]: "",
  [59144 /* LINEA */]: "linea",
  [8453 /* BASE */]: "base",
  [11155111 /* SEPOLIA */]: "",
  [421614 /* ARBITRUM_SEPOLIA */]: "",
  [84532 /* BASE_SEPOLIA */]: ""
};

// src/utils.ts
function getChainName(chainId) {
  return chainNames[chainId];
}
function getLlamaChainName(chainId) {
  return defiLlamaChainNames[chainId];
}
function getChainIdByChainName(chainName) {
  if (!chainName)
    return void 0;
  return chainNameToChainId[chainName] ?? void 0;
}
function isTestnetChainId(chainId) {
  return testnetChainIds.includes(chainId);
}

// src/subgraphs.ts
var publicSubgraphParams = {
  // Public key for nodereal subgraph endpoint
  noderealApiKey: "19bd2b3f75c24e23bb8a0e9d4f55b271"
};
var V3_SUBGRAPHS = getV3Subgraphs(publicSubgraphParams);
var V2_SUBGRAPHS = getV2Subgraphs(publicSubgraphParams);
var BLOCKS_SUBGRAPHS = getBlocksSubgraphs(publicSubgraphParams);
var STABLESWAP_SUBGRAPHS = {
  [56 /* BSC */]: "https://api.thegraph.com/subgraphs/name/pancakeswap/exchange-stableswap",
  [42161 /* ARBITRUM_ONE */]: "https://api.thegraph.com/subgraphs/name/pancakeswap/exchange-stableswap-arb"
};
function getV3Subgraphs({ noderealApiKey }) {
  return {
    [1 /* ETHEREUM */]: "https://api.thegraph.com/subgraphs/name/pancakeswap/exchange-v3-eth",
    [5 /* GOERLI */]: "https://api.thegraph.com/subgraphs/name/pancakeswap/exchange-v3-goerli",
    [56 /* BSC */]: "https://api.thegraph.com/subgraphs/name/pancakeswap/exchange-v3-bsc",
    [97 /* BSC_TESTNET */]: "https://api.thegraph.com/subgraphs/name/pancakeswap/exchange-v3-chapel",
    [42161 /* ARBITRUM_ONE */]: "https://api.thegraph.com/subgraphs/name/pancakeswap/exchange-v3-arb",
    [421613 /* ARBITRUM_GOERLI */]: "https://api.thegraph.com/subgraphs/name/chef-jojo/exhange-v3-arb-goerli",
    [1101 /* POLYGON_ZKEVM */]: "https://api.studio.thegraph.com/query/45376/exchange-v3-polygon-zkevm/version/latest",
    [1442 /* POLYGON_ZKEVM_TESTNET */]: null,
    [324 /* ZKSYNC */]: "https://api.studio.thegraph.com/query/45376/exchange-v3-zksync/version/latest",
    [280 /* ZKSYNC_TESTNET */]: "https://api.studio.thegraph.com/query/45376/exchange-v3-zksync-testnet/version/latest",
    [59144 /* LINEA */]: "https://graph-query.linea.build/subgraphs/name/pancakeswap/exchange-v3-linea",
    [59140 /* LINEA_TESTNET */]: "https://thegraph.goerli.zkevm.consensys.net/subgraphs/name/pancakeswap/exchange-v3-linea-goerli",
    [8453 /* BASE */]: "https://api.studio.thegraph.com/query/45376/exchange-v3-base/version/latest",
    [84531 /* BASE_TESTNET */]: "https://api.studio.thegraph.com/query/45376/exchange-v3-base-testnet/version/latest",
    [204 /* OPBNB */]: `https://open-platform-ap.nodereal.io/${noderealApiKey}/opbnb-mainnet-graph-query/subgraphs/name/pancakeswap/exchange-v3`,
    [5611 /* OPBNB_TESTNET */]: null,
    [534351 /* SCROLL_SEPOLIA */]: "https://api.studio.thegraph.com/query/45376/exchange-v3-scroll-sepolia/version/latest",
    [11155111 /* SEPOLIA */]: null,
    [421614 /* ARBITRUM_SEPOLIA */]: null,
    [84532 /* BASE_SEPOLIA */]: null
  };
}
function getV2Subgraphs({ noderealApiKey }) {
  return {
    [56 /* BSC */]: "https://proxy-worker-api.pancakeswap.com/bsc-exchange",
    [1 /* ETHEREUM */]: "https://api.thegraph.com/subgraphs/name/pancakeswap/exhange-eth",
    [1101 /* POLYGON_ZKEVM */]: "https://api.studio.thegraph.com/query/45376/exchange-v2-polygon-zkevm/version/latest",
    [280 /* ZKSYNC_TESTNET */]: "https://api.studio.thegraph.com/query/45376/exchange-v2-zksync-testnet/version/latest",
    [324 /* ZKSYNC */]: " https://api.studio.thegraph.com/query/45376/exchange-v2-zksync/version/latest",
    [59140 /* LINEA_TESTNET */]: "https://thegraph.goerli.zkevm.consensys.net/subgraphs/name/pancakeswap/exhange-eth/",
    [42161 /* ARBITRUM_ONE */]: "https://api.thegraph.com/subgraphs/name/pancakeswap/exchange-v2-arb",
    [59144 /* LINEA */]: "https://graph-query.linea.build/subgraphs/name/pancakeswap/exhange-v2",
    [8453 /* BASE */]: "https://api.studio.thegraph.com/query/45376/exchange-v2-base/version/latest",
    [204 /* OPBNB */]: `https://open-platform-ap.nodereal.io/${noderealApiKey}/opbnb-mainnet-graph-query/subgraphs/name/pancakeswap/exchange-v2`
  };
}
function getBlocksSubgraphs({ noderealApiKey }) {
  return {
    [56 /* BSC */]: "https://api.thegraph.com/subgraphs/name/pancakeswap/blocks",
    [1 /* ETHEREUM */]: "https://api.thegraph.com/subgraphs/name/blocklytics/ethereum-blocks",
    [1101 /* POLYGON_ZKEVM */]: "https://api.studio.thegraph.com/query/45376/polygon-zkevm-block/version/latest",
    [324 /* ZKSYNC */]: "https://api.studio.thegraph.com/query/45376/blocks-zksync/version/latest",
    [42161 /* ARBITRUM_ONE */]: "https://api.thegraph.com/subgraphs/name/ianlapham/arbitrum-one-blocks",
    [59144 /* LINEA */]: "https://graph-query.linea.build/subgraphs/name/kybernetwork/linea-blocks",
    [8453 /* BASE */]: "https://api.studio.thegraph.com/query/48211/base-blocks/version/latest",
    [204 /* OPBNB */]: `https://open-platform-ap.nodereal.io/${noderealApiKey}/opbnb-mainnet-graph-query/subgraphs/name/pancakeswap/blocks`
  };
}

exports.BLOCKS_SUBGRAPHS = BLOCKS_SUBGRAPHS;
exports.ChainId = ChainId;
exports.STABLESWAP_SUBGRAPHS = STABLESWAP_SUBGRAPHS;
exports.V2_SUBGRAPHS = V2_SUBGRAPHS;
exports.V3_SUBGRAPHS = V3_SUBGRAPHS;
exports.chainNameToChainId = chainNameToChainId;
exports.chainNames = chainNames;
exports.defiLlamaChainNames = defiLlamaChainNames;
exports.getBlocksSubgraphs = getBlocksSubgraphs;
exports.getChainIdByChainName = getChainIdByChainName;
exports.getChainName = getChainName;
exports.getLlamaChainName = getLlamaChainName;
exports.getV2Subgraphs = getV2Subgraphs;
exports.getV3Subgraphs = getV3Subgraphs;
exports.isTestnetChainId = isTestnetChainId;
exports.testnetChainIds = testnetChainIds;
