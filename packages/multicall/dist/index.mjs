import { ChainId } from '@pancakeswap/chains';
import { getContract, BaseError, TimeoutError } from 'viem';

// ../utils/toBigInt.ts
function toBigInt(num) {
  return BigInt(num.toString());
}
var MULTICALL_ADDRESS = {
  [ChainId.ZKSYNC]: "0x95071cBD09184083E7F732a710c2e30c9882Fd5f",
  [ChainId.BSC]: "0x39eecaE833c944ebb94942Fa44CaE46e87a8Da17",
  [ChainId.ETHEREUM]: "0xC0916D7E360c31D5F6D0c497E6a36B7B0E80e3cf",
  [ChainId.ARBITRUM_ONE]: "0xbFfE39cDD04f0183e0493c1Deb6E275c5cf84AdF",
  [ChainId.POLYGON_ZKEVM]: "0xe05b539447B17630Cb087473F6b50E5c5f73FDeb",
  [ChainId.LINEA]: "0x6E6B30d65D605DAa4CaC65eB270100Ecca36b140",
  [ChainId.BASE]: "0x3EFaAb8D7A631cfF5ccF5f149d1Bbb3B5bfda2C0",
  [ChainId.OPBNB]: "0xeF1511D29fB37cb87E33339EeC9BE13AB46E3b50",
  // Testnets
  [ChainId.BSC_TESTNET]: "0xeeF6ff30cF5D5b8aBA0DE16A01d17A0697a275b5",
  [ChainId.GOERLI]: "0xD55CAFAB2Ffa1139Be46bc5C0b8259c620050dFC",
  [ChainId.ARBITRUM_GOERLI]: "0xe12a5c707Fb528acbE6117b20AF1f7c20b0A8077",
  [ChainId.POLYGON_ZKEVM_TESTNET]: "0x236e713bFF45adb30e25D1c29A887aBCb0Ea7E21",
  [ChainId.ZKSYNC_TESTNET]: "0x8A23CB45E5F4d5a1b2DB673663Ea2aAedc48acff",
  [ChainId.LINEA_TESTNET]: "0x990010b6DBA3e7faa025790bC0433A9f690c65F3",
  [ChainId.BASE_TESTNET]: "0x6F7f93D929d6FBaF16c245e42846EF21aee23437",
  [ChainId.OPBNB_TESTNET]: "0x6A70ED893D85cf6D4059e1CF3e63a48e4D204D32",
  [ChainId.SCROLL_SEPOLIA]: "0x052a99849Ef2e13a5CB28275862991671D4b6fF5"
};
var MULTICALL3_ADDRESS = "0xcA11bde05977b3631167028862bE2a173976CA11";
var MULTICALL3_ADDRESSES = {
  [ChainId.ETHEREUM]: MULTICALL3_ADDRESS,
  [ChainId.GOERLI]: MULTICALL3_ADDRESS,
  [ChainId.BSC]: MULTICALL3_ADDRESS,
  [ChainId.BSC_TESTNET]: MULTICALL3_ADDRESS,
  [ChainId.ZKSYNC_TESTNET]: "0xF9cda624FBC7e059355ce98a31693d299FACd963",
  [ChainId.ZKSYNC]: "0xF9cda624FBC7e059355ce98a31693d299FACd963",
  [ChainId.ARBITRUM_ONE]: MULTICALL3_ADDRESS,
  [ChainId.ARBITRUM_GOERLI]: MULTICALL3_ADDRESS,
  [ChainId.POLYGON_ZKEVM]: MULTICALL3_ADDRESS,
  [ChainId.POLYGON_ZKEVM_TESTNET]: MULTICALL3_ADDRESS,
  [ChainId.OPBNB]: MULTICALL3_ADDRESS,
  [ChainId.OPBNB_TESTNET]: MULTICALL3_ADDRESS,
  [ChainId.BASE_TESTNET]: MULTICALL3_ADDRESS,
  [ChainId.SCROLL_SEPOLIA]: MULTICALL3_ADDRESS
};
var DEFAULT_BLOCK_CONFLICT_TOLERANCE = 0;
var BLOCK_CONFLICT_TOLERANCE = {
  [ChainId.BSC]: 3,
  [ChainId.ETHEREUM]: 1,
  [ChainId.ARBITRUM_ONE]: 5,
  [ChainId.POLYGON_ZKEVM]: 1,
  [ChainId.ZKSYNC]: 3,
  [ChainId.LINEA]: 3,
  [ChainId.BASE]: 3,
  [ChainId.OPBNB]: 3,
  // Testnets
  [ChainId.BSC_TESTNET]: 3,
  [ChainId.GOERLI]: 1,
  [ChainId.ARBITRUM_GOERLI]: 5,
  [ChainId.POLYGON_ZKEVM_TESTNET]: 1,
  [ChainId.ZKSYNC_TESTNET]: 3,
  [ChainId.LINEA_TESTNET]: 3,
  [ChainId.OPBNB_TESTNET]: 3,
  [ChainId.BASE_TESTNET]: 3,
  [ChainId.SCROLL_SEPOLIA]: 3
};
var DEFAULT_GAS_LIMIT = 150000000n;
var DEFAULT_GAS_LIMIT_BY_CHAIN = {
  [ChainId.BSC]: 100000000n,
  [ChainId.ZKSYNC]: 500000000n,
  [ChainId.POLYGON_ZKEVM]: 1500000n,
  [ChainId.BASE]: 60000000n,
  [ChainId.OPBNB]: 100000000n,
  [ChainId.OPBNB_TESTNET]: 100000000n
};
var DEFAULT_GAS_BUFFER = 3000000n;
var DEFAULT_GAS_BUFFER_BY_CHAIN = {
  [ChainId.BSC]: DEFAULT_GAS_BUFFER,
  [ChainId.POLYGON_ZKEVM]: 0n
};

// src/abis/IMulticall.ts
var iMulticallABI = [
  {
    inputs: [],
    name: "gasLeft",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "gaslimit",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        components: [
          { internalType: "address", name: "target", type: "address" },
          { internalType: "uint256", name: "gasLimit", type: "uint256" },
          { internalType: "bytes", name: "callData", type: "bytes" }
        ],
        internalType: "struct MultiCallV2.Call[]",
        name: "calls",
        type: "tuple[]"
      }
    ],
    name: "multicall",
    outputs: [
      { internalType: "uint256", name: "blockNumber", type: "uint256" },
      {
        components: [
          { internalType: "bool", name: "success", type: "bool" },
          { internalType: "uint256", name: "gasUsed", type: "uint256" },
          { internalType: "bytes", name: "returnData", type: "bytes" }
        ],
        internalType: "struct MultiCallV2.Result[]",
        name: "returnData",
        type: "tuple[]"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        components: [
          { internalType: "address", name: "target", type: "address" },
          { internalType: "uint256", name: "gasLimit", type: "uint256" },
          { internalType: "bytes", name: "callData", type: "bytes" }
        ],
        internalType: "struct MultiCallV2.Call[]",
        name: "calls",
        type: "tuple[]"
      },
      { internalType: "uint256", name: "gasBuffer", type: "uint256" }
    ],
    name: "multicallWithGasLimitation",
    outputs: [
      { internalType: "uint256", name: "blockNumber", type: "uint256" },
      {
        components: [
          { internalType: "bool", name: "success", type: "bool" },
          { internalType: "uint256", name: "gasUsed", type: "uint256" },
          { internalType: "bytes", name: "returnData", type: "bytes" }
        ],
        internalType: "struct MultiCallV2.Result[]",
        name: "returnData",
        type: "tuple[]"
      },
      { internalType: "uint256", name: "lastSuccessIndex", type: "uint256" }
    ],
    stateMutability: "nonpayable",
    type: "function"
  }
];

// src/getMulticallContract.ts
function getMulticallContract({
  chainId,
  client
}) {
  const address = MULTICALL_ADDRESS[chainId];
  if (!address) {
    throw new Error(`PancakeMulticall not supported on chain ${chainId}`);
  }
  return getContract({ abi: iMulticallABI, address, publicClient: client });
}
function getMulticall3ContractAddress(chainId) {
  return MULTICALL3_ADDRESSES[chainId || ChainId.BSC] || MULTICALL3_ADDRESS;
}

// src/getGasLimit.ts
function getDefaultGasLimit(chainId) {
  const gasLimitOnChain = chainId && DEFAULT_GAS_LIMIT_BY_CHAIN[chainId];
  return gasLimitOnChain !== void 0 ? gasLimitOnChain : DEFAULT_GAS_LIMIT;
}
function getDefaultGasBuffer(chainId) {
  const gasBufferOnChain = chainId && DEFAULT_GAS_BUFFER_BY_CHAIN[chainId];
  return gasBufferOnChain !== void 0 ? gasBufferOnChain : DEFAULT_GAS_BUFFER;
}
async function getGasLimitOnChain({ chainId, client }) {
  const multicall = getMulticallContract({ chainId, client });
  const gasLeft = await multicall.read.gasLeft();
  return gasLeft;
}
async function getGasLimit({
  chainId,
  gasLimit: gasLimitInput,
  maxGasLimit: maxGasLimitInput = getDefaultGasLimit(chainId),
  gasBuffer: gasBufferInput = getDefaultGasBuffer(chainId),
  client
}) {
  const gasLimitOverride = gasLimitInput && toBigInt(gasLimitInput);
  const maxGasLimit = toBigInt(maxGasLimitInput);
  const gasBuffer = toBigInt(gasBufferInput);
  const gasLimit = gasLimitOverride || await getGasLimitOnChain({ chainId, client }) || maxGasLimit;
  const minGasLimit = gasLimit < maxGasLimit ? gasLimit : maxGasLimit;
  return minGasLimit - gasBuffer;
}

// src/abis/IMulticall3.ts
var multicall3ABI = [
  {
    inputs: [
      {
        components: [
          { internalType: "address", name: "target", type: "address" },
          { internalType: "bytes", name: "callData", type: "bytes" }
        ],
        internalType: "struct Multicall2.Call[]",
        name: "calls",
        type: "tuple[]"
      }
    ],
    name: "aggregate",
    outputs: [
      { internalType: "uint256", name: "blockNumber", type: "uint256" },
      { internalType: "bytes[]", name: "returnData", type: "bytes[]" }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        components: [
          { internalType: "address", name: "target", type: "address" },
          { internalType: "bytes", name: "callData", type: "bytes" }
        ],
        internalType: "struct Multicall2.Call[]",
        name: "calls",
        type: "tuple[]"
      }
    ],
    name: "blockAndAggregate",
    outputs: [
      { internalType: "uint256", name: "blockNumber", type: "uint256" },
      { internalType: "bytes32", name: "blockHash", type: "bytes32" },
      {
        components: [
          { internalType: "bool", name: "success", type: "bool" },
          { internalType: "bytes", name: "returnData", type: "bytes" }
        ],
        internalType: "struct Multicall2.Result[]",
        name: "returnData",
        type: "tuple[]"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [{ internalType: "uint256", name: "blockNumber", type: "uint256" }],
    name: "getBlockHash",
    outputs: [{ internalType: "bytes32", name: "blockHash", type: "bytes32" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getBlockNumber",
    outputs: [{ internalType: "uint256", name: "blockNumber", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getCurrentBlockCoinbase",
    outputs: [{ internalType: "address", name: "coinbase", type: "address" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getCurrentBlockDifficulty",
    outputs: [{ internalType: "uint256", name: "difficulty", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getCurrentBlockGasLimit",
    outputs: [{ internalType: "uint256", name: "gaslimit", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getCurrentBlockTimestamp",
    outputs: [{ internalType: "uint256", name: "timestamp", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [{ internalType: "address", name: "addr", type: "address" }],
    name: "getEthBalance",
    outputs: [{ internalType: "uint256", name: "balance", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getLastBlockHash",
    outputs: [{ internalType: "bytes32", name: "blockHash", type: "bytes32" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      { internalType: "bool", name: "requireSuccess", type: "bool" },
      {
        components: [
          { internalType: "address", name: "target", type: "address" },
          { internalType: "bytes", name: "callData", type: "bytes" }
        ],
        internalType: "struct Multicall2.Call[]",
        name: "calls",
        type: "tuple[]"
      }
    ],
    name: "tryAggregate",
    outputs: [
      {
        components: [
          { internalType: "bool", name: "success", type: "bool" },
          { internalType: "bytes", name: "returnData", type: "bytes" }
        ],
        internalType: "struct Multicall2.Result[]",
        name: "returnData",
        type: "tuple[]"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      { internalType: "bool", name: "requireSuccess", type: "bool" },
      {
        components: [
          { internalType: "address", name: "target", type: "address" },
          { internalType: "bytes", name: "callData", type: "bytes" }
        ],
        internalType: "struct Multicall2.Call[]",
        name: "calls",
        type: "tuple[]"
      }
    ],
    name: "tryBlockAndAggregate",
    outputs: [
      { internalType: "uint256", name: "blockNumber", type: "uint256" },
      { internalType: "bytes32", name: "blockHash", type: "bytes32" },
      {
        components: [
          { internalType: "bool", name: "success", type: "bool" },
          { internalType: "bytes", name: "returnData", type: "bytes" }
        ],
        internalType: "struct Multicall2.Result[]",
        name: "returnData",
        type: "tuple[]"
      }
    ],
    stateMutability: "view",
    type: "function"
  }
];

// ../utils/abortControl.ts
var AbortError = class extends Error {
  constructor(message) {
    super(message);
    this.name = "AbortError";
  }
};
function abortInvariant(signal, message) {
  if (signal?.aborted) {
    throw new AbortError(message || "Signal aborted");
  }
}
function isViemAbortError(e) {
  return e instanceof BaseError && e.walk((err) => err instanceof TimeoutError) instanceof TimeoutError;
}

// src/getBlockConflictTolerance.ts
function getBlockConflictTolerance(chainId) {
  return BLOCK_CONFLICT_TOLERANCE[chainId] || DEFAULT_BLOCK_CONFLICT_TOLERANCE;
}

// src/multicall.ts
async function multicallByGasLimit(calls, {
  chainId,
  gasBuffer = getDefaultGasBuffer(chainId),
  client,
  dropUnexecutedCalls,
  signal,
  ...rest
}) {
  const gasLimit = await getGasLimit({
    chainId,
    gasBuffer,
    client,
    ...rest
  });
  const callChunks = splitCallsIntoChunks(calls, gasLimit);
  return callByChunks(callChunks, { gasBuffer, client, chainId, dropUnexecutedCalls, signal });
}
function formatCallReturn([blockNumber, results, successIndex]) {
  const lastSuccessIndex = Number(successIndex);
  return {
    lastSuccessIndex,
    blockNumber,
    results: results.slice(0, lastSuccessIndex + 1).map(({ gasUsed, success, returnData }) => ({
      gasUsed,
      success,
      result: returnData
    }))
  };
}
async function call(calls, params) {
  const {
    chainId,
    client,
    gasBuffer = getDefaultGasBuffer(chainId),
    blockConflictTolerance = getBlockConflictTolerance(chainId),
    dropUnexecutedCalls = false,
    signal
  } = params;
  if (!calls.length) {
    return {
      results: [],
      blockNumber: 0n
    };
  }
  abortInvariant(signal, "Multicall aborted");
  const contract = getMulticallContract({ chainId, client });
  try {
    const { result } = await contract.simulate.multicallWithGasLimitation([calls, gasBuffer]);
    const { results, lastSuccessIndex, blockNumber } = formatCallReturn(result);
    if (lastSuccessIndex === calls.length - 1) {
      return {
        results,
        blockNumber
      };
    }
    console.warn(
      `Gas limit reached. Total num of ${calls.length} calls. First ${lastSuccessIndex + 1} calls executed. The remaining ${calls.length - lastSuccessIndex - 1} calls are not executed. Pls try adjust the gas limit per call.`
    );
    const remainingCalls = calls.slice(lastSuccessIndex + 1);
    if (dropUnexecutedCalls) {
      return {
        results: [...results, ...remainingCalls.map(() => ({ result: "0x", gasUsed: 0n, success: false }))],
        blockNumber
      };
    }
    const { results: remainingResults, blockNumber: nextBlockNumber } = await call(
      calls.slice(lastSuccessIndex + 1),
      params
    );
    if (Number(nextBlockNumber - blockNumber) > blockConflictTolerance) {
      throw new Error(
        `Multicall failed because of block conflict. Latest calls are made at block ${nextBlockNumber} while last calls made at block ${blockNumber}. Block conflict tolerance is ${blockConflictTolerance}`
      );
    }
    return {
      results: [...results, ...remainingResults],
      // Use the latest block number
      blockNumber: nextBlockNumber
    };
  } catch (e) {
    if (isViemAbortError(e)) {
      throw new AbortError(e.message);
    }
    throw e;
  }
}
async function callByChunks(chunks, params) {
  const { blockConflictTolerance = getBlockConflictTolerance(params.chainId) } = params;
  const callReturns = await Promise.all(chunks.map((chunk) => call(chunk, params)));
  let minBlock = 0n;
  let maxBlock = 0n;
  let results = [];
  for (const { results: callResults, blockNumber } of callReturns) {
    if (minBlock === 0n || blockNumber < minBlock) {
      minBlock = blockNumber;
    }
    if (blockNumber > maxBlock) {
      maxBlock = blockNumber;
    }
    if (Number(maxBlock - minBlock) > blockConflictTolerance) {
      throw new Error(
        `Multicall failed because of block conflict. Min block is ${minBlock} while max block is ${maxBlock}. Block conflict tolerance is ${blockConflictTolerance}`
      );
    }
    results = [...results, ...callResults];
  }
  return {
    results,
    blockNumber: maxBlock
  };
}
function splitCallsIntoChunks(calls, gasLimit) {
  const chunks = [[]];
  let gasLeft = gasLimit;
  for (const callRequest of calls) {
    const { target, callData, gasLimit: gasCostLimit } = callRequest;
    const singleGasLimit = toBigInt(gasCostLimit);
    const currentChunk = chunks[chunks.length - 1];
    if (singleGasLimit > gasLeft) {
      chunks.push([callRequest]);
      gasLeft = gasLimit - singleGasLimit;
      if (gasLeft < 0n) {
        console.warn(
          `Multicall request may fail as the gas cost of a single call exceeds the gas limit ${gasLimit}. Gas cost: ${singleGasLimit}. To: ${target}. Data: ${callData}`
        );
      }
      continue;
    }
    currentChunk.push(callRequest);
    gasLeft -= singleGasLimit;
  }
  return chunks;
}

export { BLOCK_CONFLICT_TOLERANCE, DEFAULT_BLOCK_CONFLICT_TOLERANCE, DEFAULT_GAS_BUFFER, DEFAULT_GAS_BUFFER_BY_CHAIN, DEFAULT_GAS_LIMIT, DEFAULT_GAS_LIMIT_BY_CHAIN, MULTICALL3_ADDRESS, MULTICALL3_ADDRESSES, MULTICALL_ADDRESS, getBlockConflictTolerance, getDefaultGasBuffer, getDefaultGasLimit, getGasLimit, getGasLimitOnChain, getMulticall3ContractAddress, getMulticallContract, iMulticallABI, multicall3ABI, multicallByGasLimit };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=index.mjs.map