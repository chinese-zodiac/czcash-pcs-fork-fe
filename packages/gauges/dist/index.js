'use strict';

var chains = require('@pancakeswap/chains');
var tokens = require('@pancakeswap/tokens');
var v3Sdk = require('@pancakeswap/v3-sdk');
var viem = require('viem');

// src/abis/calcGaugesVoting.ts
var calcGaugesVotingABI = [
  {
    inputs: [],
    name: "gaugeVotingAddress",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      { internalType: "address", name: "_gaugeAddr", type: "address" },
      { internalType: "uint256", name: "_chainId", type: "uint256" },
      { internalType: "bool", name: "_inCap", type: "bool" }
    ],
    name: "getGaugeRelativeWeight",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      { internalType: "uint256", name: "_gaugeId", type: "uint256" },
      { internalType: "bool", name: "_inCap", type: "bool" }
    ],
    name: "getGaugeRelativeWeightById",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      { internalType: "address", name: "_gaugeAddr", type: "address" },
      { internalType: "uint256", name: "_chainId", type: "uint256" },
      { internalType: "bool", name: "_inCap", type: "bool" }
    ],
    name: "getGaugeWeight",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [{ internalType: "uint256", name: "_gaugeId", type: "uint256" }],
    name: "getGaugeWeightDetails",
    outputs: [
      { internalType: "uint256", name: "gaugeWeight", type: "uint256" },
      { internalType: "uint256", name: "gaugeTotalWeight", type: "uint256" },
      { internalType: "uint256", name: "gaugeRawPercent", type: "uint256" },
      { internalType: "uint256", name: "gaugeCappedPercent", type: "uint256" },
      { internalType: "uint256", name: "gaugeInCapWeight", type: "uint256" },
      { internalType: "uint256", name: "gaugeTotalFinalWeights", type: "uint256" },
      { internalType: "uint256", name: "gaugeFinalPercent", type: "uint256" }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      { internalType: "address", name: "_gaugeAddr", type: "address" },
      { internalType: "uint256", name: "_chainId", type: "uint256" },
      { internalType: "bool", name: "_inCap", type: "bool" },
      { internalType: "uint256", name: "_gaugeTotalWeight", type: "uint256" },
      { internalType: "uint256", name: "_gaugeTotalCappedPercent", type: "uint256" },
      { internalType: "uint256", name: "_gaugeTotalFinalWeights", type: "uint256" }
    ],
    name: "getGaugeWeightMass",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      { internalType: "uint256", name: "_gaugeId", type: "uint256" },
      { internalType: "bool", name: "_inCap", type: "bool" }
    ],
    name: "getGaugeWeightbyId",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getRawTotalGaugeWeight",
    outputs: [{ internalType: "uint256", name: "gaugeTotalWeight", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getTotalCappedPercent",
    outputs: [{ internalType: "uint256", name: "gaugeTotalCappedPercent", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getTotalFinalWeights",
    outputs: [{ internalType: "uint256", name: "gaugeTotalFinalWeights", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [{ internalType: "bool", name: "_inCap", type: "bool" }],
    name: "getTotalWeight",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [{ internalType: "bool", name: "_inCap", type: "bool" }],
    name: "massGetGaugeWeight",
    outputs: [{ internalType: "uint256[]", name: "result", type: "uint256[]" }],
    stateMutability: "view",
    type: "function"
  }
];

// src/abis/gaugesVoting.ts
var gaugesVotingABI = [
  {
    inputs: [{ internalType: "address", name: "_votingEscrow", type: "address" }],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, internalType: "string", name: "name", type: "string" },
      { indexed: false, internalType: "uint256", name: "type_id", type: "uint256" }
    ],
    name: "AddType",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "sender", type: "address" },
      { indexed: false, internalType: "uint256", name: "allocation", type: "uint256" }
    ],
    name: "AdminAllocationChanged",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "sender", type: "address" },
      { indexed: false, internalType: "uint256", name: "period", type: "uint256" }
    ],
    name: "AdminOnlyPeriodUpdated",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "sender", type: "address" },
      { indexed: true, internalType: "address", name: "gauage_addr", type: "address" },
      { indexed: false, internalType: "uint256", name: "chainId", type: "uint256" },
      { indexed: false, internalType: "bytes32", name: "hash", type: "bytes32" }
    ],
    name: "GaugeKilled",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "sender", type: "address" },
      { indexed: true, internalType: "address", name: "gauage_addr", type: "address" },
      { indexed: false, internalType: "uint256", name: "chainId", type: "uint256" },
      { indexed: false, internalType: "bytes32", name: "hash", type: "bytes32" }
    ],
    name: "GaugeUnKilled",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, internalType: "bytes32", name: "hash", type: "bytes32" },
      { indexed: false, internalType: "uint256", name: "gauge_type", type: "uint256" },
      { indexed: false, internalType: "uint256", name: "weight", type: "uint256" },
      { indexed: false, internalType: "uint256", name: "pid", type: "uint256" },
      { indexed: false, internalType: "address", name: "masterChef", type: "address" },
      { indexed: false, internalType: "uint256", name: "chainId", type: "uint256" },
      { indexed: false, internalType: "uint256", name: "boostMultiplier", type: "uint256" },
      { indexed: false, internalType: "uint256", name: "maxVoteCap", type: "uint256" }
    ],
    name: "NewGauge",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, internalType: "bytes32", name: "hash", type: "bytes32" },
      { indexed: false, internalType: "uint256", name: "time", type: "uint256" },
      { indexed: false, internalType: "uint256", name: "weight", type: "uint256" },
      { indexed: false, internalType: "uint256", name: "total_weight", type: "uint256" }
    ],
    name: "NewGaugeWeight",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, internalType: "uint256", name: "type_id", type: "uint256" },
      { indexed: false, internalType: "uint256", name: "time", type: "uint256" },
      { indexed: false, internalType: "uint256", name: "weight", type: "uint256" },
      { indexed: false, internalType: "uint256", name: "total_weight", type: "uint256" }
    ],
    name: "NewTypeWeight",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "previousOwner", type: "address" },
      { indexed: true, internalType: "address", name: "newOwner", type: "address" }
    ],
    name: "OwnershipTransferred",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [{ indexed: false, internalType: "address", name: "account", type: "address" }],
    name: "Paused",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [{ indexed: false, internalType: "address", name: "account", type: "address" }],
    name: "Unpaused",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, internalType: "bytes32", name: "hash", type: "bytes32" },
      { indexed: false, internalType: "uint256", name: "pid", type: "uint256" },
      { indexed: false, internalType: "address", name: "masterChef", type: "address" },
      { indexed: false, internalType: "uint256", name: "chainId", type: "uint256" },
      { indexed: false, internalType: "uint256", name: "boostMultiplier", type: "uint256" },
      { indexed: false, internalType: "uint256", name: "maxVoteCap", type: "uint256" }
    ],
    name: "UpdateGaugeInfo",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, internalType: "uint256", name: "time", type: "uint256" },
      { indexed: false, internalType: "address", name: "user", type: "address" },
      { indexed: false, internalType: "bytes32", name: "hash", type: "bytes32" },
      { indexed: false, internalType: "uint256", name: "weight", type: "uint256" }
    ],
    name: "VoteForGauge",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, internalType: "uint256", name: "time", type: "uint256" },
      { indexed: false, internalType: "address", name: "user", type: "address" },
      { indexed: false, internalType: "bytes32", name: "hash", type: "bytes32" },
      { indexed: false, internalType: "uint256", name: "weight", type: "uint256" }
    ],
    name: "VoteForGaugeFromAdmin",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "sender", type: "address" },
      { indexed: false, internalType: "uint256", name: "delay", type: "uint256" }
    ],
    name: "WeightVoteDelayChanged",
    type: "event"
  },
  {
    inputs: [],
    name: "ADMIN_VOTE_PERIOD",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "WEIGHT_VOTE_DELAY",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      { internalType: "address", name: "gauge_addr", type: "address" },
      { internalType: "uint256", name: "gauge_type", type: "uint256" },
      { internalType: "uint256", name: "_weight", type: "uint256" },
      { internalType: "uint256", name: "_pid", type: "uint256" },
      { internalType: "address", name: "_masterChef", type: "address" },
      { internalType: "uint256", name: "_chainId", type: "uint256" },
      { internalType: "uint256", name: "_boostMultiplier", type: "uint256" },
      { internalType: "uint256", name: "_maxVoteCap", type: "uint256" }
    ],
    name: "addGauge",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      { internalType: "string", name: "_name", type: "string" },
      { internalType: "uint256", name: "_weight", type: "uint256" }
    ],
    name: "addType",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "adminAllocation",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    name: "adminSlopes",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [{ internalType: "uint256", name: "_numerator", type: "uint256" }],
    name: "changeAdminAllocation",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      { internalType: "address", name: "gauge_addr", type: "address" },
      { internalType: "uint256", name: "weight", type: "uint256" },
      { internalType: "uint256", name: "_chainId", type: "uint256" }
    ],
    name: "changeGaugeWeight",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      { internalType: "uint256", name: "type_id", type: "uint256" },
      { internalType: "uint256", name: "weight", type: "uint256" }
    ],
    name: "changeTypeWeight",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [{ internalType: "uint256", name: "_delay", type: "uint256" }],
    name: "changeWeightVoteDelay",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  { inputs: [], name: "checkpoint", outputs: [], stateMutability: "nonpayable", type: "function" },
  {
    inputs: [
      { internalType: "address", name: "gauge_addr", type: "address" },
      { internalType: "uint256", name: "_chainId", type: "uint256" }
    ],
    name: "checkpointGauge",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      { internalType: "bytes32", name: "", type: "bytes32" },
      { internalType: "uint256", name: "", type: "uint256" }
    ],
    name: "gaugeChangesWeight",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "gaugeCount",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    name: "gaugeIndex_",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    name: "gaugeIsKilled_",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    name: "gaugeLastScheduled",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    name: "gaugePointsTotal",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      { internalType: "bytes32", name: "", type: "bytes32" },
      { internalType: "uint256", name: "", type: "uint256" }
    ],
    name: "gaugePointsWeight",
    outputs: [
      { internalType: "uint256", name: "bias", type: "uint256" },
      { internalType: "uint256", name: "slope", type: "uint256" }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      { internalType: "address", name: "gauge_addr", type: "address" },
      { internalType: "uint256", name: "time", type: "uint256" },
      { internalType: "uint256", name: "_chainId", type: "uint256" }
    ],
    name: "gaugeRelativeWeight",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      { internalType: "address", name: "gauge_addr", type: "address" },
      { internalType: "uint256", name: "time", type: "uint256" },
      { internalType: "uint256", name: "_chainId", type: "uint256" }
    ],
    name: "gaugeRelativeWeight_write",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      { internalType: "uint256", name: "", type: "uint256" },
      { internalType: "uint256", name: "", type: "uint256" }
    ],
    name: "gaugeTypeChangesSum",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    name: "gaugeTypeLastScheduled",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    name: "gaugeTypeNames",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      { internalType: "uint256", name: "", type: "uint256" },
      { internalType: "uint256", name: "", type: "uint256" }
    ],
    name: "gaugeTypePointsSum",
    outputs: [
      { internalType: "uint256", name: "bias", type: "uint256" },
      { internalType: "uint256", name: "slope", type: "uint256" }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      { internalType: "uint256", name: "", type: "uint256" },
      { internalType: "uint256", name: "", type: "uint256" }
    ],
    name: "gaugeTypePointsWeight",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    name: "gaugeTypeSumLastScheduled",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "gaugeTypes",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    name: "gaugeTypes_",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    name: "gauges",
    outputs: [
      { internalType: "uint256", name: "pid", type: "uint256" },
      { internalType: "address", name: "masterChef", type: "address" },
      { internalType: "uint256", name: "chainId", type: "uint256" },
      { internalType: "address", name: "pairAddress", type: "address" },
      { internalType: "uint256", name: "boostMultiplier", type: "uint256" },
      { internalType: "uint256", name: "maxVoteCap", type: "uint256" }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      { internalType: "address", name: "gauge_addr", type: "address" },
      { internalType: "uint256", name: "_chainId", type: "uint256" },
      { internalType: "bool", name: "inCap", type: "bool" }
    ],
    name: "getGaugeWeight",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [{ internalType: "bool", name: "inCap", type: "bool" }],
    name: "getTotalWeight",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      { internalType: "uint256", name: "_typeId", type: "uint256" },
      { internalType: "uint256", name: "_chainId", type: "uint256" }
    ],
    name: "getTypeAndChainIdWeightCapped",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [{ internalType: "uint256", name: "_typeId", type: "uint256" }],
    name: "getWeightsSumPerType",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      { internalType: "address", name: "_gauge_addr", type: "address" },
      { internalType: "uint256", name: "_chainId", type: "uint256" }
    ],
    name: "killGauge",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      { internalType: "address", name: "", type: "address" },
      { internalType: "bytes32", name: "", type: "bytes32" }
    ],
    name: "lastUserVote",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "owner",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "paused",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function"
  },
  { inputs: [], name: "renounceOwnership", outputs: [], stateMutability: "nonpayable", type: "function" },
  {
    inputs: [],
    name: "totalLastScheduled",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [{ internalType: "address", name: "newOwner", type: "address" }],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      { internalType: "address", name: "_gauge_addr", type: "address" },
      { internalType: "uint256", name: "_chainId", type: "uint256" }
    ],
    name: "unkillGauge",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [{ internalType: "uint256", name: "_newAdminOnlyPeriod", type: "uint256" }],
    name: "updateAdminOnlyPeriod",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      { internalType: "address", name: "gauge_addr", type: "address" },
      { internalType: "uint256", name: "_pid", type: "uint256" },
      { internalType: "address", name: "_masterChef", type: "address" },
      { internalType: "uint256", name: "_chainId", type: "uint256" },
      { internalType: "uint256", name: "_boostMultiplier", type: "uint256" },
      { internalType: "uint256", name: "_maxVoteCap", type: "uint256" }
    ],
    name: "updateGaugeInfo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      { internalType: "address", name: "_gauge_addr", type: "address" },
      { internalType: "uint256", name: "_user_weight", type: "uint256" },
      { internalType: "uint256", name: "_chainId", type: "uint256" },
      { internalType: "bool", name: "_skipNative", type: "bool" },
      { internalType: "bool", name: "_skipProxy", type: "bool" }
    ],
    name: "voteForGaugeWeights",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      { internalType: "address[]", name: "_gauge_addrs", type: "address[]" },
      { internalType: "uint256[]", name: "_user_weights", type: "uint256[]" },
      { internalType: "uint256[]", name: "_chainIds", type: "uint256[]" },
      { internalType: "bool", name: "_skipNative", type: "bool" },
      { internalType: "bool", name: "_skipProxy", type: "bool" }
    ],
    name: "voteForGaugeWeightsBulk",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      { internalType: "address", name: "_gauge_addr", type: "address" },
      { internalType: "uint256", name: "_admin_weight", type: "uint256" },
      { internalType: "uint256", name: "_end", type: "uint256" },
      { internalType: "uint256", name: "_chainId", type: "uint256" }
    ],
    name: "voteFromAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      { internalType: "address[]", name: "_gauge_addrs", type: "address[]" },
      { internalType: "uint256[]", name: "_admin_weights", type: "uint256[]" },
      { internalType: "uint256[]", name: "_ends", type: "uint256[]" },
      { internalType: "uint256[]", name: "_chainIds", type: "uint256[]" }
    ],
    name: "voteFromAdminBulk",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "voteUserPower",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      { internalType: "address", name: "", type: "address" },
      { internalType: "bytes32", name: "", type: "bytes32" }
    ],
    name: "voteUserSlopes",
    outputs: [
      { internalType: "uint256", name: "slope", type: "uint256" },
      { internalType: "uint256", name: "power", type: "uint256" },
      { internalType: "uint256", name: "end", type: "uint256" }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "votingEscrow",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function"
  }
];
var GAUGES = "0xf81953dC234cdEf1D6D0d3ef61b232C6bCbF9aeF";
var GAUGES_TESTNET = "0x357b01894b21787B41A8FA4DCaFE92293470FaD9";
var GAUGES_ADDRESS = {
  [chains.ChainId.BSC]: GAUGES,
  [chains.ChainId.BSC_TESTNET]: GAUGES_TESTNET
};
var GAUGES_CALC_ADDRESS = {
  [chains.ChainId.BSC]: "0x94F8cBa8712B3E72C9BF8Ba4d6619Ac9046FE695",
  [chains.ChainId.BSC_TESTNET]: "0x88B02E6238fa6279281eeA600CBfcAd5dd3597A5"
};

// src/types.ts
var GaugeType = /* @__PURE__ */ ((GaugeType2) => {
  GaugeType2[GaugeType2["StableSwap"] = -1] = "StableSwap";
  GaugeType2[GaugeType2["V2"] = 0] = "V2";
  GaugeType2[GaugeType2["V3"] = 1] = "V3";
  GaugeType2[GaugeType2["ALM"] = 2] = "ALM";
  GaugeType2[GaugeType2["VeCakePool"] = 3] = "VeCakePool";
  GaugeType2[GaugeType2["Aptos"] = 4] = "Aptos";
  return GaugeType2;
})(GaugeType || {});
var GAUGE_TYPE_NAMES = {
  [-1 /* StableSwap */]: "StableSwap",
  [0 /* V2 */]: "V2",
  [1 /* V3 */]: "V3",
  [2 /* ALM */]: "ALM",
  [3 /* VeCakePool */]: "VeCakePool",
  [4 /* Aptos */]: "Aptos"
};

// src/constants/config/prod.ts
var CONFIG_PROD = [
  {
    gid: 0,
    address: "0x133B3D95bAD5405d14d53473671200e9342896BF",
    pairName: "CAKE-BNB",
    chainId: chains.ChainId.BSC,
    type: 1 /* V3 */,
    token0Address: tokens.bscTokens.cake.address,
    token1Address: tokens.bscTokens.bnb.address,
    feeTier: v3Sdk.FeeAmount.MEDIUM
  },
  {
    gid: 1,
    address: "0x7f51c8AaA6B0599aBd16674e2b17FEc7a9f674A1",
    pairName: "CAKE-USDT",
    chainId: chains.ChainId.BSC,
    type: 1 /* V3 */,
    token0Address: tokens.bscTokens.cake.address,
    token1Address: tokens.bscTokens.usdt.address,
    feeTier: v3Sdk.FeeAmount.MEDIUM
  },
  {
    gid: 2,
    address: "0x85FAac652b707FDf6907EF726751087F9E0b6687",
    pairName: "BUSD-BNB",
    chainId: chains.ChainId.BSC,
    type: 1 /* V3 */,
    token0Address: tokens.bscTokens.busd.address,
    token1Address: tokens.bscTokens.bnb.address,
    feeTier: v3Sdk.FeeAmount.LOW
  },
  {
    gid: 3,
    address: "0x36696169C63e42cd08ce11f5deeBbCeBae652050",
    pairName: "USDT-BNB",
    chainId: chains.ChainId.BSC,
    type: 1 /* V3 */,
    token0Address: tokens.bscTokens.usdt.address,
    token1Address: tokens.bscTokens.bnb.address,
    feeTier: v3Sdk.FeeAmount.LOW
  },
  {
    gid: 4,
    address: "0x369482C78baD380a036cAB827fE677C1903d1523",
    pairName: "BTCB-BUSD",
    chainId: chains.ChainId.BSC,
    type: 1 /* V3 */,
    token0Address: tokens.bscTokens.btcb.address,
    token1Address: tokens.bscTokens.busd.address,
    feeTier: v3Sdk.FeeAmount.LOW
  },
  {
    gid: 5,
    address: "0x46Cf1cF8c69595804ba91dFdd8d6b960c9B0a7C4",
    pairName: "BTCB-USDT",
    chainId: chains.ChainId.BSC,
    type: 1 /* V3 */,
    token0Address: tokens.bscTokens.btcb.address,
    token1Address: tokens.bscTokens.usdt.address,
    feeTier: v3Sdk.FeeAmount.LOW
  },
  {
    gid: 6,
    address: "0xD4dCA84E1808da3354924cD243c66828cf775470",
    pairName: "BTCB-ETH",
    chainId: chains.ChainId.BSC,
    type: 1 /* V3 */,
    token0Address: tokens.bscTokens.btcb.address,
    token1Address: tokens.bscTokens.eth.address,
    feeTier: v3Sdk.FeeAmount.MEDIUM
  },
  {
    gid: 7,
    address: "0xFC75f4E78bf71eD5066dB9ca771D4CcB7C1264E0",
    pairName: "BTCB-BNB",
    chainId: chains.ChainId.BSC,
    type: 1 /* V3 */,
    token0Address: tokens.bscTokens.btcb.address,
    token1Address: tokens.bscTokens.bnb.address,
    feeTier: v3Sdk.FeeAmount.MEDIUM
  },
  {
    gid: 8,
    address: "0x7d05c84581f0C41AD80ddf677A510360bae09a5A",
    pairName: "ETH-BNB",
    chainId: chains.ChainId.BSC,
    type: 1 /* V3 */,
    token0Address: tokens.bscTokens.eth.address,
    token1Address: tokens.bscTokens.bnb.address,
    feeTier: v3Sdk.FeeAmount.MEDIUM
  },
  {
    gid: 9,
    address: "0x92b7807bF19b7DDdf89b706143896d05228f3121",
    pairName: "USDC-USDT",
    chainId: chains.ChainId.BSC,
    type: 1 /* V3 */,
    token0Address: tokens.bscTokens.usdc.address,
    token1Address: tokens.bscTokens.usdt.address,
    feeTier: v3Sdk.FeeAmount.LOWEST
  },
  {
    gid: 10,
    address: "0x22536030B9cE783B6Ddfb9a39ac7F439f568E5e6",
    pairName: "USDC-BUSD",
    chainId: chains.ChainId.BSC,
    type: 1 /* V3 */,
    token0Address: tokens.bscTokens.usdc.address,
    token1Address: tokens.bscTokens.busd.address,
    feeTier: v3Sdk.FeeAmount.LOWEST
  },
  {
    gid: 11,
    address: "0x4f3126d5DE26413AbDCF6948943FB9D0847d9818",
    pairName: "BUSD-USDT",
    chainId: chains.ChainId.BSC,
    type: 1 /* V3 */,
    token0Address: tokens.bscTokens.busd.address,
    token1Address: tokens.bscTokens.usdt.address,
    feeTier: v3Sdk.FeeAmount.LOWEST
  },
  {
    gid: 12,
    address: "0x66E9AcBA7C3a82C8EE02fAF3E325Dd55D6581a8c",
    pairName: "ETH-USDT",
    chainId: chains.ChainId.BSC,
    type: 1 /* V3 */,
    token0Address: tokens.bscTokens.eth.address,
    token1Address: tokens.bscTokens.usdt.address,
    feeTier: v3Sdk.FeeAmount.MEDIUM
  },
  {
    gid: 13,
    address: "0x9f6EB6903C1277c8f02d71F8814dc9998199af1D",
    pairName: "CAKE-BUSD",
    chainId: chains.ChainId.BSC,
    type: 1 /* V3 */,
    token0Address: tokens.bscTokens.cake.address,
    token1Address: tokens.bscTokens.busd.address,
    feeTier: v3Sdk.FeeAmount.MEDIUM
  },
  {
    gid: 14,
    address: "0x539e0EBfffd39e54A0f7E5F8FEc40ade7933A664",
    pairName: "USDC-ETH",
    chainId: chains.ChainId.BSC,
    type: 1 /* V3 */,
    token0Address: tokens.bscTokens.usdc.address,
    token1Address: tokens.bscTokens.eth.address,
    feeTier: v3Sdk.FeeAmount.LOW
  },
  {
    gid: 15,
    address: "0x0E1893BEEb4d0913d26B9614B18Aea29c56d94b9",
    pairName: "LINK-BNB",
    chainId: chains.ChainId.BSC,
    type: 1 /* V3 */,
    token0Address: tokens.bscTokens.link.address,
    token1Address: tokens.bscTokens.bnb.address,
    feeTier: v3Sdk.FeeAmount.MEDIUM
  },
  {
    gid: 16,
    address: "0xd15B00E81F98A7DB25f1dC1BA6E983a4316c4CaC",
    pairName: "XRP-BNB",
    chainId: chains.ChainId.BSC,
    type: 1 /* V3 */,
    token0Address: tokens.bscTokens.xrp.address,
    token1Address: tokens.bscTokens.bnb.address,
    feeTier: v3Sdk.FeeAmount.MEDIUM
  },
  {
    gid: 17,
    address: "0x673516E510d702Ab5F2bBf0c6B545111a85f7ea7",
    pairName: "ADA-BNB",
    chainId: chains.ChainId.BSC,
    type: 1 /* V3 */,
    token0Address: tokens.bscTokens.ada.address,
    token1Address: tokens.bscTokens.bnb.address,
    feeTier: v3Sdk.FeeAmount.MEDIUM
  },
  {
    gid: 18,
    address: "0x62F0546cBcd684F7C394D8549119e072527C41Bc",
    pairName: "DOT-BNB",
    chainId: chains.ChainId.BSC,
    type: 1 /* V3 */,
    token0Address: tokens.bscTokens.dot.address,
    token1Address: tokens.bscTokens.bnb.address,
    feeTier: v3Sdk.FeeAmount.MEDIUM
  },
  {
    gid: 19,
    address: "0x61837a8a78F42dC6cfEd457c4eC1114F5e2d90f4",
    pairName: "ankrETH-ETH",
    chainId: chains.ChainId.BSC,
    type: 1 /* V3 */,
    token0Address: tokens.bscTokens.ankrETH.address,
    token1Address: tokens.bscTokens.eth.address,
    feeTier: v3Sdk.FeeAmount.LOW
  },
  {
    gid: 20,
    address: "0xCf57DaADfBE05A04440C502967cE5209F64747eB",
    pairName: "ankrBNB-BNB",
    chainId: chains.ChainId.BSC,
    type: 1 /* V3 */,
    token0Address: tokens.bscTokens.ankrbnb.address,
    token1Address: tokens.bscTokens.bnb.address,
    feeTier: v3Sdk.FeeAmount.LOW
  },
  {
    gid: 21,
    address: "0x07003daEbc432ecec26309cCd1391BBBF06cC890",
    pairName: "GQ-USDT",
    chainId: chains.ChainId.BSC,
    type: 1 /* V3 */,
    token0Address: tokens.bscTokens.gq.address,
    token1Address: tokens.bscTokens.usdt.address,
    feeTier: v3Sdk.FeeAmount.MEDIUM
  },
  {
    gid: 22,
    address: "0xD10612A288Bd5024Db6a47663750996d176130Fe",
    pairName: "AXL-USDT",
    chainId: chains.ChainId.BSC,
    type: 1 /* V3 */,
    token0Address: tokens.bscTokens.axl.address,
    token1Address: tokens.bscTokens.usdt.address,
    feeTier: v3Sdk.FeeAmount.MEDIUM
  },
  {
    gid: 23,
    address: "0x088464e4E8CC54BF91180cBb8c61C68AeCC74166",
    pairName: "MGP-BNB",
    chainId: chains.ChainId.BSC,
    type: 1 /* V3 */,
    token0Address: tokens.bscTokens.mgp.address,
    token1Address: tokens.bscTokens.bnb.address,
    feeTier: v3Sdk.FeeAmount.MEDIUM
  },
  {
    gid: 24,
    address: "0xb4E9DeA6105089f15685508B8EF2e7f7F5A1B16D",
    pairName: "UNW-BNB",
    chainId: chains.ChainId.BSC,
    type: 1 /* V3 */,
    token0Address: tokens.bscTokens.unw.address,
    token1Address: tokens.bscTokens.bnb.address,
    feeTier: v3Sdk.FeeAmount.MEDIUM
  },
  {
    gid: 25,
    address: "0xAE7a3D9bed2ba4ef9c134FF4BAeE33655AE5DE6f",
    pairName: "stkBNB-BNB",
    chainId: chains.ChainId.BSC,
    type: 1 /* V3 */,
    token0Address: tokens.bscTokens.stkbnb.address,
    token1Address: tokens.bscTokens.bnb.address,
    feeTier: v3Sdk.FeeAmount.LOW
  },
  {
    gid: 26,
    address: "0x2dA32920A775CF121004551AbC92F385B3C0Dab9",
    pairName: "CHAMP-USDT",
    chainId: chains.ChainId.BSC,
    type: 1 /* V3 */,
    token0Address: tokens.bscTokens.champ.address,
    token1Address: tokens.bscTokens.usdt.address,
    feeTier: v3Sdk.FeeAmount.HIGH
  },
  {
    gid: 27,
    address: "0x63ca58e7c6bF06B06cBbEc2a83bf6AA8f8f9f77B",
    pairName: "ZBC-CAKE",
    chainId: chains.ChainId.BSC,
    type: 1 /* V3 */,
    token0Address: tokens.bscTokens.zbc.address,
    token1Address: tokens.bscTokens.cake.address,
    feeTier: v3Sdk.FeeAmount.HIGH
  },
  {
    gid: 28,
    address: "0x379044E32f5A162233E82de19DA852255d0951b8",
    pairName: "WBETH-ETH",
    chainId: chains.ChainId.BSC,
    type: 1 /* V3 */,
    token0Address: tokens.bscTokens.wbeth.address,
    token1Address: tokens.bscTokens.eth.address,
    feeTier: v3Sdk.FeeAmount.LOW
  },
  {
    gid: 29,
    address: "0x6425bC30D0751aF5181fC74a50e760b0e4a19811",
    pairName: "EDU-USDT",
    chainId: chains.ChainId.BSC,
    type: 1 /* V3 */,
    token0Address: tokens.bscTokens.edu.address,
    token1Address: tokens.bscTokens.usdt.address,
    feeTier: v3Sdk.FeeAmount.MEDIUM
  },
  {
    gid: 30,
    address: "0xFB5C2D2f2cF7741ba1A7Be2FfAbED248BD9b888e",
    pairName: "EDU-BNB",
    chainId: chains.ChainId.BSC,
    type: 1 /* V3 */,
    token0Address: tokens.bscTokens.edu.address,
    token1Address: tokens.bscTokens.bnb.address,
    feeTier: v3Sdk.FeeAmount.MEDIUM
  },
  {
    gid: 31,
    address: "0x08eAbc3d13Fb4bdFFD1F42a5644C1c826aCF62c0",
    pairName: "PEEL-BUSD",
    chainId: chains.ChainId.BSC,
    type: 1 /* V3 */,
    token0Address: tokens.bscTokens.peel.address,
    token1Address: tokens.bscTokens.busd.address,
    feeTier: v3Sdk.FeeAmount.MEDIUM
  },
  {
    gid: 32,
    address: "0x77B27c351B13Dc6a8A16Cc1d2E9D5e7F9873702E",
    pairName: "BNBX-BNB",
    chainId: chains.ChainId.BSC,
    type: 1 /* V3 */,
    token0Address: tokens.bscTokens.bnbx.address,
    token1Address: tokens.bscTokens.bnb.address,
    feeTier: v3Sdk.FeeAmount.LOW
  },
  {
    gid: 33,
    address: "0x729c9a7E1f642Eab4019dfb0d467f4a9838E7cbD",
    pairName: "GAL-BNB",
    chainId: chains.ChainId.BSC,
    type: 1 /* V3 */,
    token0Address: tokens.bscTokens.gal.address,
    token1Address: tokens.bscTokens.bnb.address,
    feeTier: v3Sdk.FeeAmount.MEDIUM
  },
  {
    gid: 34,
    address: "0x4e1f9aDf96dBA6Dc09c973228c286568F1315ea8",
    pairName: "ID-USDT",
    chainId: chains.ChainId.BSC,
    type: 1 /* V3 */,
    token0Address: tokens.bscTokens.id.address,
    token1Address: tokens.bscTokens.usdt.address,
    feeTier: v3Sdk.FeeAmount.MEDIUM
  },
  {
    gid: 35,
    address: "0x3Cb75d72401d2DBA4349C696824F1397277d6a11",
    pairName: "USH-BNB",
    chainId: chains.ChainId.BSC,
    type: 1 /* V3 */,
    token0Address: tokens.bscTokens.ush.address,
    token1Address: tokens.bscTokens.bnb.address,
    feeTier: v3Sdk.FeeAmount.HIGH
  },
  {
    gid: 36,
    address: "0xC2B3dbBF26d43617036b0ebA53aD2DBD945adebf",
    pairName: "C98-BNB",
    chainId: chains.ChainId.BSC,
    type: 1 /* V3 */,
    token0Address: tokens.bscTokens.c98.address,
    token1Address: tokens.bscTokens.bnb.address,
    feeTier: v3Sdk.FeeAmount.MEDIUM
  },
  {
    gid: 37,
    address: "0xbba8f85c3cEDdF73dB4de17D31608d640Eaea416",
    pairName: "PEPE-USDT",
    chainId: chains.ChainId.BSC,
    type: 1 /* V3 */,
    token0Address: tokens.bscTokens.pepe.address,
    token1Address: tokens.bscTokens.usdt.address,
    feeTier: v3Sdk.FeeAmount.MEDIUM
  },
  {
    gid: 38,
    address: "0x466e7d53e23620a24db23E2B1f8BD10Ff52116Cd",
    pairName: "CSIX-CAKE",
    chainId: chains.ChainId.BSC,
    type: 1 /* V3 */,
    token0Address: tokens.bscTokens.csix.address,
    token1Address: tokens.bscTokens.cake.address,
    feeTier: v3Sdk.FeeAmount.MEDIUM
  },
  {
    gid: 39,
    address: "0x7B1db35fbd95548777B9079527e8fa2a70fb2CE0",
    pairName: "agEUR-USDT",
    chainId: chains.ChainId.BSC,
    type: 1 /* V3 */,
    token0Address: tokens.bscTokens.ageur.address,
    token1Address: tokens.bscTokens.usdt.address,
    feeTier: v3Sdk.FeeAmount.LOW
  },
  {
    gid: 40,
    address: "0x73D69D55893d6c97DCA44AF2Aa85B688C0242d7f",
    pairName: "PLAY-USDT",
    chainId: chains.ChainId.BSC,
    type: 1 /* V3 */,
    token0Address: tokens.bscTokens.play.address,
    token1Address: tokens.bscTokens.usdt.address,
    feeTier: v3Sdk.FeeAmount.HIGH
  },
  {
    gid: 41,
    address: "0xd881D9d0e0767719701305c614903F555d589586",
    pairName: "TUSD-USDT",
    chainId: chains.ChainId.BSC,
    type: 1 /* V3 */,
    token0Address: tokens.bscTokens.tusd.address,
    token1Address: tokens.bscTokens.usdt.address,
    feeTier: v3Sdk.FeeAmount.LOWEST
  },
  {
    gid: 42,
    address: "0x436380Bd2404aBA3f20c0ea68F343f5a174532a7",
    pairName: "xALGO-BNB",
    chainId: chains.ChainId.BSC,
    type: 1 /* V3 */,
    token0Address: tokens.bscTokens.xalgo.address,
    token1Address: tokens.bscTokens.bnb.address,
    feeTier: v3Sdk.FeeAmount.MEDIUM
  },
  {
    gid: 43,
    address: "0x85BeA4fBC57fA22b41Fb1632f0D9a6A99390fd0a",
    pairName: "PENDLE-BNB",
    chainId: chains.ChainId.BSC,
    type: 1 /* V3 */,
    token0Address: tokens.bscTokens.pendle.address,
    token1Address: tokens.bscTokens.bnb.address,
    feeTier: v3Sdk.FeeAmount.HIGH
  },
  {
    gid: 44,
    address: "0x803036AC78752EF599EC75c500ac8B0Ac0bE67dF",
    pairName: "axlUSDC-USDT",
    chainId: chains.ChainId.BSC,
    type: 1 /* V3 */,
    token0Address: tokens.bscTokens.axlusdc.address,
    token1Address: tokens.bscTokens.usdt.address,
    feeTier: v3Sdk.FeeAmount.LOWEST
  },
  {
    gid: 45,
    address: "0xD0e226f674bBf064f54aB47F42473fF80DB98CBA",
    pairName: "ETH-BNB",
    chainId: chains.ChainId.BSC,
    type: 1 /* V3 */,
    token0Address: tokens.bscTokens.eth.address,
    token1Address: tokens.bscTokens.bnb.address,
    feeTier: v3Sdk.FeeAmount.LOW
  },
  {
    gid: 46,
    address: "0x6bbc40579ad1BBD243895cA0ACB086BB6300d636",
    pairName: "BTCB-BNB",
    chainId: chains.ChainId.BSC,
    type: 1 /* V3 */,
    token0Address: tokens.bscTokens.btcb.address,
    token1Address: tokens.bscTokens.bnb.address,
    feeTier: v3Sdk.FeeAmount.LOW
  },
  {
    gid: 47,
    address: "0x6ee3eE9C3395BbD136B6076A70Cb6cFF241c0E24",
    pairName: "BTCB-USDT",
    chainId: chains.ChainId.BSC,
    type: 1 /* V3 */,
    token0Address: tokens.bscTokens.btcb.address,
    token1Address: tokens.bscTokens.usdt.address,
    feeTier: v3Sdk.FeeAmount.MEDIUM
  },
  {
    gid: 48,
    address: "0x647D99772863e09f47435782cbb6C96eC4A75f12",
    pairName: "UNI-BNB",
    chainId: chains.ChainId.BSC,
    type: 1 /* V3 */,
    token0Address: tokens.bscTokens.uni.address,
    token1Address: tokens.bscTokens.bnb.address,
    feeTier: v3Sdk.FeeAmount.MEDIUM
  },
  {
    gid: 49,
    address: "0xdf0c1C30e8C1aE3f189f6E6ef248d71977F7BE29",
    pairName: "TUSD-BUSD",
    chainId: chains.ChainId.BSC,
    type: 1 /* V3 */,
    token0Address: tokens.bscTokens.tusd.address,
    token1Address: tokens.bscTokens.busd.address,
    feeTier: v3Sdk.FeeAmount.LOWEST
  },
  {
    gid: 50,
    address: "0xBe43E64Cd61E0b9207A6beE93e2149317A604326",
    pairName: "BNB-HAY",
    chainId: chains.ChainId.BSC,
    type: 1 /* V3 */,
    token0Address: tokens.bscTokens.bnb.address,
    token1Address: tokens.bscTokens.hay.address,
    feeTier: v3Sdk.FeeAmount.MEDIUM
  },
  {
    gid: 51,
    address: "0x06E2D4002a693812A6348c91A2bEccf4E926FF2f",
    pairName: "BTCB-HAY",
    chainId: chains.ChainId.BSC,
    type: 1 /* V3 */,
    token0Address: tokens.bscTokens.btcb.address,
    token1Address: tokens.bscTokens.hay.address,
    feeTier: v3Sdk.FeeAmount.MEDIUM
  },
  {
    gid: 52,
    address: "0xfdFCdE34d2038EBeDe62e95C65b1492C28c990C9",
    pairName: "ETH-HAY",
    chainId: chains.ChainId.BSC,
    type: 1 /* V3 */,
    token0Address: tokens.bscTokens.eth.address,
    token1Address: tokens.bscTokens.hay.address,
    feeTier: v3Sdk.FeeAmount.MEDIUM
  },
  {
    gid: 53,
    address: "0x9474e972F49605315763c296B122CBB998b615Cf",
    pairName: "SnBNB-BNB",
    chainId: chains.ChainId.BSC,
    type: 1 /* V3 */,
    token0Address: tokens.bscTokens.snbnb.address,
    token1Address: tokens.bscTokens.bnb.address,
    feeTier: v3Sdk.FeeAmount.LOW
  },
  {
    gid: 54,
    address: "0xD465D9C13C43003f5B874e0D96A6030336Ed50eB",
    pairName: "DCK-BUSD",
    chainId: chains.ChainId.BSC,
    type: 1 /* V3 */,
    token0Address: tokens.bscTokens.dck.address,
    token1Address: tokens.bscTokens.busd.address,
    feeTier: v3Sdk.FeeAmount.MEDIUM
  },
  {
    gid: 55,
    address: "0xce6160bB594fC055c943F59De92ceE30b8c6B32c",
    pairName: "DOGE-BNB",
    chainId: chains.ChainId.BSC,
    type: 1 /* V3 */,
    token0Address: tokens.bscTokens.doge.address,
    token1Address: tokens.bscTokens.bnb.address,
    feeTier: v3Sdk.FeeAmount.MEDIUM
  },
  {
    gid: 56,
    address: "0xE6be850a43ae64c68754845ea444DE7d3fe761AB",
    pairName: "OLE-USDT",
    chainId: chains.ChainId.BSC,
    type: 1 /* V3 */,
    token0Address: tokens.bscTokens.ole.address,
    token1Address: tokens.bscTokens.usdt.address,
    feeTier: v3Sdk.FeeAmount.HIGH
  },
  {
    gid: 57,
    address: "0x13f0D0dF1f347E7246Ba16866d2562Bb2B337d0c",
    pairName: "WMX-USDT",
    chainId: chains.ChainId.BSC,
    type: 1 /* V3 */,
    token0Address: tokens.bscTokens.wmx.address,
    token1Address: tokens.bscTokens.usdt.address,
    feeTier: v3Sdk.FeeAmount.HIGH
  },
  {
    gid: 58,
    address: "0xd9d0aeD9822e3D7C67b9c13A18dE070f86cdF2e5",
    pairName: "DAR-BNB",
    chainId: chains.ChainId.BSC,
    type: 1 /* V3 */,
    token0Address: tokens.bscTokens.dar.address,
    token1Address: tokens.bscTokens.bnb.address,
    feeTier: v3Sdk.FeeAmount.HIGH
  },
  {
    gid: 59,
    address: "0x3ccCef8d9D515eC7F59eb69aD06C22265cC95ea9",
    pairName: "unshETH-ETH",
    chainId: chains.ChainId.BSC,
    type: 1 /* V3 */,
    token0Address: tokens.bscTokens.unshETH.address,
    token1Address: tokens.bscTokens.eth.address,
    feeTier: v3Sdk.FeeAmount.LOW
  },
  {
    gid: 60,
    address: "0x846BD025527c8427809E11D0B0a9cE50F149D5d5",
    pairName: "CYBER-BNB",
    chainId: chains.ChainId.BSC,
    type: 1 /* V3 */,
    token0Address: tokens.bscTokens.cyber.address,
    token1Address: tokens.bscTokens.bnb.address,
    feeTier: v3Sdk.FeeAmount.MEDIUM
  },
  {
    gid: 61,
    address: "0x3B7761632240c4BBec6deE27E10d491De9AA669B",
    pairName: "GMT-USDC",
    chainId: chains.ChainId.BSC,
    type: 1 /* V3 */,
    token0Address: tokens.bscTokens.gmt.address,
    token1Address: tokens.bscTokens.usdc.address,
    feeTier: v3Sdk.FeeAmount.MEDIUM
  },
  {
    gid: 62,
    address: "0x77E4ba48091f23a8a54b3e2c72F17be58cC2D137",
    pairName: "LVL-USDT",
    chainId: chains.ChainId.BSC,
    type: 1 /* V3 */,
    token0Address: tokens.bscTokens.lvl.address,
    token1Address: tokens.bscTokens.usdt.address,
    feeTier: v3Sdk.FeeAmount.HIGH
  },
  {
    gid: 63,
    address: "0x29e13e65E8e2160dBd391bA3cee55E7dDe2A386c",
    pairName: "SFUND-BNB",
    chainId: chains.ChainId.BSC,
    type: 1 /* V3 */,
    token0Address: tokens.bscTokens.sfund.address,
    token1Address: tokens.bscTokens.bnb.address,
    feeTier: v3Sdk.FeeAmount.HIGH
  },
  {
    gid: 64,
    address: "0x4f55423de1049d3CBfDC72f8A40f8A6f554f92aa",
    pairName: "RACA-USDT",
    chainId: chains.ChainId.BSC,
    type: 1 /* V3 */,
    token0Address: tokens.bscTokens.raca.address,
    token1Address: tokens.bscTokens.usdt.address,
    feeTier: v3Sdk.FeeAmount.HIGH
  },
  {
    gid: 65,
    address: "0x293c665b9b98Cd51D6454C72529Fe17A1Cf1f504",
    pairName: "HIGH-USDT",
    chainId: chains.ChainId.BSC,
    type: 1 /* V3 */,
    token0Address: tokens.bscTokens.high.address,
    token1Address: tokens.bscTokens.usdt.address,
    feeTier: v3Sdk.FeeAmount.HIGH
  },
  {
    gid: 66,
    address: "0xbB87F33d9f43Ec3fe75502958408262e7043B2E8",
    pairName: "ARV-BNB",
    chainId: chains.ChainId.BSC,
    type: 1 /* V3 */,
    token0Address: tokens.bscTokens.arv.address,
    token1Address: tokens.bscTokens.bnb.address,
    feeTier: v3Sdk.FeeAmount.HIGH
  },
  {
    gid: 67,
    address: "0x6dba30870BC46BD6d2289E1827Cc415F6Fa23E1a",
    pairName: "HFT-USDT",
    chainId: chains.ChainId.BSC,
    type: 1 /* V3 */,
    token0Address: tokens.bscTokens.hft.address,
    token1Address: tokens.bscTokens.usdt.address,
    feeTier: v3Sdk.FeeAmount.HIGH
  },
  {
    gid: 68,
    address: "0x635c26c473BB0686D403247477CC648a7C6edc2e",
    pairName: "CHR-USDT",
    chainId: chains.ChainId.BSC,
    type: 1 /* V3 */,
    token0Address: tokens.bscTokens.chr.address,
    token1Address: tokens.bscTokens.usdt.address,
    feeTier: v3Sdk.FeeAmount.HIGH
  },
  {
    gid: 69,
    address: "0x12E79eb21dCc5852F9c6AC1736d977312925da33",
    pairName: "HAY-USDT",
    chainId: chains.ChainId.BSC,
    type: 1 /* V3 */,
    token0Address: tokens.bscTokens.hay.address,
    token1Address: tokens.bscTokens.usdt.address,
    feeTier: v3Sdk.FeeAmount.LOW
  },
  {
    gid: 70,
    address: "0xd8CF0de0387A9c16acF53384c89632678D77F311",
    pairName: "WNCG-BNB",
    chainId: chains.ChainId.BSC,
    type: 1 /* V3 */,
    token0Address: tokens.bscTokens.wncg.address,
    token1Address: tokens.bscTokens.bnb.address,
    feeTier: v3Sdk.FeeAmount.HIGH
  },
  {
    gid: 71,
    address: "0x5a1Fe6D5026CC3736Cfb7316dbCFbf63D82cC789",
    pairName: "MBX-BNB",
    chainId: chains.ChainId.BSC,
    type: 1 /* V3 */,
    token0Address: tokens.bscTokens.mbx.address,
    token1Address: tokens.bscTokens.bnb.address,
    feeTier: v3Sdk.FeeAmount.HIGH
  },
  {
    gid: 72,
    address: "0x66bAA9E43e64c8A85bC3c04dEBf9E7686BE5b09C",
    pairName: "MBX-USDT",
    chainId: chains.ChainId.BSC,
    type: 1 /* V3 */,
    token0Address: tokens.bscTokens.mbx.address,
    token1Address: tokens.bscTokens.usdt.address,
    feeTier: v3Sdk.FeeAmount.HIGH
  },
  {
    gid: 73,
    address: "0x302e26e9bda986709B5F504D3426c2310e6383c6",
    pairName: "XCAD-USDT",
    chainId: chains.ChainId.BSC,
    type: 1 /* V3 */,
    token0Address: tokens.bscTokens.xcad.address,
    token1Address: tokens.bscTokens.usdt.address,
    feeTier: v3Sdk.FeeAmount.MEDIUM
  },
  {
    gid: 74,
    address: "0x64ebB904e169cB94e9788FcB68283B4C894ED881",
    pairName: "SFP-BNB",
    chainId: chains.ChainId.BSC,
    type: 1 /* V3 */,
    token0Address: tokens.bscTokens.sfp.address,
    token1Address: tokens.bscTokens.bnb.address,
    feeTier: v3Sdk.FeeAmount.MEDIUM
  },
  {
    gid: 75,
    address: "0xE3cBe4Dd1BD2F7101f17D586F44bAb944091D383",
    pairName: "LTC-BNB",
    chainId: chains.ChainId.BSC,
    type: 1 /* V3 */,
    token0Address: tokens.bscTokens.ltc.address,
    token1Address: tokens.bscTokens.bnb.address,
    feeTier: v3Sdk.FeeAmount.MEDIUM
  },
  {
    gid: 76,
    address: "0xB55A0B97B7D9Ebe4208b08AB00feC0C419cc32A3",
    pairName: "RDNT-BNB",
    chainId: chains.ChainId.BSC,
    type: 1 /* V3 */,
    token0Address: tokens.bscTokens.rdnt.address,
    token1Address: tokens.bscTokens.bnb.address,
    feeTier: v3Sdk.FeeAmount.MEDIUM
  },
  {
    gid: 77,
    address: "0x0004222c2075E9A1291E41f1cA4C8d32141dB501",
    pairName: "MBOX-BNB",
    chainId: chains.ChainId.BSC,
    type: 1 /* V3 */,
    token0Address: tokens.bscTokens.mbox.address,
    token1Address: tokens.bscTokens.bnb.address,
    feeTier: v3Sdk.FeeAmount.MEDIUM
  },
  {
    gid: 78,
    address: "0xDcccC7d0B02C837d1B8D8a8D5E2683387bc2b910",
    pairName: "WOM-USDT",
    chainId: chains.ChainId.BSC,
    type: 1 /* V3 */,
    token0Address: tokens.bscTokens.wom.address,
    token1Address: tokens.bscTokens.usdt.address,
    feeTier: v3Sdk.FeeAmount.HIGH
  },
  {
    gid: 79,
    address: "0x81Bef404f5C93d99ed04Ed55488c99722CDd7A50",
    pairName: "AXS-BNB",
    chainId: chains.ChainId.BSC,
    type: 1 /* V3 */,
    token0Address: tokens.bscTokens.axs.address,
    token1Address: tokens.bscTokens.bnb.address,
    feeTier: v3Sdk.FeeAmount.MEDIUM
  },
  {
    gid: 80,
    address: "0xa98D8a5867D664B7A758652146fd93a7dE40eE82",
    pairName: "TRX-USDT",
    chainId: chains.ChainId.BSC,
    type: 1 /* V3 */,
    token0Address: tokens.bscTokens.trxv2.address,
    token1Address: tokens.bscTokens.usdt.address,
    feeTier: v3Sdk.FeeAmount.MEDIUM
  },
  {
    gid: 81,
    address: "0x77d5b2560e4B84b3fC58875Cb0133F39560e8AE3",
    pairName: "XVS-BNB",
    chainId: chains.ChainId.BSC,
    type: 1 /* V3 */,
    token0Address: tokens.bscTokens.xvs.address,
    token1Address: tokens.bscTokens.bnb.address,
    feeTier: v3Sdk.FeeAmount.MEDIUM
  },
  {
    gid: 82,
    address: "0xE4e695FA53598dA586F798A9844A3b03d86f421e",
    pairName: "BTT-USDT",
    chainId: chains.ChainId.BSC,
    type: 1 /* V3 */,
    token0Address: tokens.bscTokens.btt.address,
    token1Address: tokens.bscTokens.usdt.address,
    feeTier: v3Sdk.FeeAmount.MEDIUM
  },
  {
    gid: 83,
    address: "0xcfe783e16c9a8C74F2be9BCEb2339769439061Bf",
    pairName: "ALPACA-USDT",
    chainId: chains.ChainId.BSC,
    type: 1 /* V3 */,
    token0Address: tokens.bscTokens.alpaca.address,
    token1Address: tokens.bscTokens.usdt.address,
    feeTier: v3Sdk.FeeAmount.HIGH
  },
  {
    gid: 84,
    address: "0x832EeBF89F99aACcf6640fe6b5E838066c630Fbe",
    pairName: "CHESS-USDT",
    chainId: chains.ChainId.BSC,
    type: 1 /* V3 */,
    token0Address: tokens.bscTokens.chess.address,
    token1Address: tokens.bscTokens.usdt.address,
    feeTier: v3Sdk.FeeAmount.HIGH
  },
  {
    gid: 85,
    address: "0x8cCB4544b3030dACF3d4D71C658f04e8688e25b1",
    pairName: "TWT-BNB",
    chainId: chains.ChainId.BSC,
    type: 1 /* V3 */,
    token0Address: tokens.bscTokens.twt.address,
    token1Address: tokens.bscTokens.bnb.address,
    feeTier: v3Sdk.FeeAmount.MEDIUM
  },
  {
    gid: 86,
    address: "0xBe141893E4c6AD9272e8C04BAB7E6a10604501a5",
    pairName: "ETH-USDT",
    chainId: chains.ChainId.BSC,
    type: 1 /* V3 */,
    token0Address: tokens.bscTokens.eth.address,
    token1Address: tokens.bscTokens.usdt.address,
    feeTier: v3Sdk.FeeAmount.LOW
  },
  {
    gid: 87,
    address: "0xbF72B6485E4b31601aFe7B0a1210Be2004D2B1d6",
    pairName: "FDUSD-USDT",
    chainId: chains.ChainId.BSC,
    type: 1 /* V3 */,
    token0Address: tokens.bscTokens.fdusd.address,
    token1Address: tokens.bscTokens.usdt.address,
    feeTier: v3Sdk.FeeAmount.LOWEST
  },
  {
    gid: 88,
    address: "0x4BBA1018b967e59220b22Ca03f68821A3276c9a6",
    pairName: "BTCB-ETH",
    chainId: chains.ChainId.BSC,
    type: 1 /* V3 */,
    token0Address: tokens.bscTokens.btcb.address,
    token1Address: tokens.bscTokens.eth.address,
    feeTier: v3Sdk.FeeAmount.LOW
  },
  {
    gid: 89,
    address: "0x5F16320FA36559ca7bc785834Ba77105154DC40b",
    pairName: "STG-BUSD",
    chainId: chains.ChainId.BSC,
    type: 1 /* V3 */,
    token0Address: tokens.bscTokens.stg.address,
    token1Address: tokens.bscTokens.busd.address,
    feeTier: v3Sdk.FeeAmount.MEDIUM
  },
  {
    gid: 90,
    address: "0x89A6be1ec107C911C3F2A1112f049F876Ce033c9",
    pairName: "STG-USDT",
    chainId: chains.ChainId.BSC,
    type: 1 /* V3 */,
    token0Address: tokens.bscTokens.stg.address,
    token1Address: tokens.bscTokens.usdt.address,
    feeTier: v3Sdk.FeeAmount.MEDIUM
  },
  {
    gid: 91,
    address: "0x9cac9745731d1Cf2B483f257745A512f0938DD01",
    pairName: "CAKE Pool",
    chainId: chains.ChainId.BSC,
    type: 3 /* VeCakePool */
  },
  {
    gid: 92,
    address: "0x0eD7e52944161450477ee417DE9Cd3a859b14fD0",
    pairName: "CAKE-BNB",
    chainId: chains.ChainId.BSC,
    type: 0 /* V2 */,
    token0Address: tokens.bscTokens.cake.address,
    token1Address: tokens.bscTokens.bnb.address,
    feeTier: v3Sdk.FeeAmount.MEDIUM
  },
  {
    gid: 93,
    address: "0xA39Af17CE4a8eb807E076805Da1e2B8EA7D0755b",
    pairName: "CAKE-USDT",
    chainId: chains.ChainId.BSC,
    type: 0 /* V2 */,
    token0Address: tokens.bscTokens.cake.address,
    token1Address: tokens.bscTokens.usdt.address,
    feeTier: v3Sdk.FeeAmount.MEDIUM
  },
  {
    gid: 94,
    address: "0x7EB5D86FD78f3852a3e0e064f2842d45a3dB6EA2",
    pairName: "XVS-WBNB",
    chainId: chains.ChainId.BSC,
    type: 0 /* V2 */,
    token0Address: tokens.bscTokens.xvs.address,
    token1Address: tokens.bscTokens.wbnb.address,
    feeTier: v3Sdk.FeeAmount.MEDIUM
  },
  {
    gid: 95,
    address: "0x346575fC7f07E6994D76199E41D13dC1575322E1",
    pairName: "RDNT-WBNB",
    chainId: chains.ChainId.BSC,
    type: 0 /* V2 */,
    token0Address: tokens.bscTokens.rdnt.address,
    token1Address: tokens.bscTokens.wbnb.address,
    feeTier: v3Sdk.FeeAmount.MEDIUM
  },
  {
    gid: 96,
    address: "0x8FA59693458289914dB0097F5F366d771B7a7C3F",
    pairName: "MBOX-WBNB",
    chainId: chains.ChainId.BSC,
    type: 0 /* V2 */,
    token0Address: tokens.bscTokens.mbox.address,
    token1Address: tokens.bscTokens.wbnb.address,
    feeTier: v3Sdk.FeeAmount.MEDIUM
  },
  {
    gid: 97,
    address: "0x942b294e59a8c47a0F7F20DF105B082710F7C305",
    pairName: "SFP-WBNB",
    chainId: chains.ChainId.BSC,
    type: 0 /* V2 */,
    token0Address: tokens.bscTokens.sfp.address,
    token1Address: tokens.bscTokens.wbnb.address,
    feeTier: v3Sdk.FeeAmount.MEDIUM
  },
  {
    gid: 98,
    address: "0xa0D4e270D9EB4E41f7aB02337c21692D7eECCCB0",
    pairName: "SABLE-WBNB",
    chainId: chains.ChainId.BSC,
    type: 0 /* V2 */,
    token0Address: tokens.bscTokens.sable.address,
    token1Address: tokens.bscTokens.wbnb.address,
    feeTier: v3Sdk.FeeAmount.MEDIUM
  },
  {
    gid: 99,
    address: "0x74fA517715C4ec65EF01d55ad5335f90dce7CC87",
    pairName: "SFUND-WBNB",
    chainId: chains.ChainId.BSC,
    type: 0 /* V2 */,
    token0Address: tokens.bscTokens.sfund.address,
    token1Address: tokens.bscTokens.wbnb.address,
    feeTier: v3Sdk.FeeAmount.MEDIUM
  },
  {
    gid: 100,
    address: "0x3DcB1787a95D2ea0Eb7d00887704EeBF0D79bb13",
    pairName: "TWT-WBNB",
    chainId: chains.ChainId.BSC,
    type: 0 /* V2 */,
    token0Address: tokens.bscTokens.twt.address,
    token1Address: tokens.bscTokens.wbnb.address,
    feeTier: v3Sdk.FeeAmount.MEDIUM
  },
  {
    gid: 101,
    address: "0xBCEA09e9e882eC2Bb6dCE07c4e6669968846CaBD",
    pairName: "STG-BUSD",
    chainId: chains.ChainId.BSC,
    type: 0 /* V2 */,
    token0Address: tokens.bscTokens.stg.address,
    token1Address: tokens.bscTokens.busd.address,
    feeTier: v3Sdk.FeeAmount.MEDIUM
  },
  {
    gid: 102,
    address: "0xAf839f4D3620a1EED00cCc21dDC01119C26a75E1",
    pairName: "APX-BNB",
    chainId: chains.ChainId.BSC,
    type: 0 /* V2 */,
    token0Address: tokens.bscTokens.apx.address,
    token1Address: tokens.bscTokens.bnb.address,
    feeTier: v3Sdk.FeeAmount.MEDIUM
  },
  {
    gid: 103,
    address: "0xa0Ee789a8F581CB92dD9742ed0B5d54a0916976C",
    pairName: "APX-BUSD",
    chainId: chains.ChainId.BSC,
    type: 0 /* V2 */,
    token0Address: tokens.bscTokens.apx.address,
    token1Address: tokens.bscTokens.busd.address,
    feeTier: v3Sdk.FeeAmount.MEDIUM
  },
  {
    gid: 104,
    address: "0xb1Da7D2C257c5700612BdE35C8d7187dc80d79f1",
    pairName: "HAY-USDT",
    chainId: chains.ChainId.BSC,
    type: -1 /* StableSwap */,
    tokenAddresses: [tokens.bscTokens.hay.address, tokens.bscTokens.usdt.address]
  },
  {
    gid: 105,
    address: "0x1ac1A8FEaAEa1900C4166dEeed0C11cC10669D36",
    pairName: "USDC-ETH",
    chainId: chains.ChainId.ETHEREUM,
    type: 1 /* V3 */,
    token0Address: tokens.ethereumTokens.usdc.address,
    token1Address: tokens.ethereumTokens.weth.address,
    feeTier: v3Sdk.FeeAmount.LOW
  },
  {
    gid: 106,
    address: "0x6CA298D2983aB03Aa1dA7679389D955A4eFEE15C",
    pairName: "USDT-ETH",
    chainId: chains.ChainId.ETHEREUM,
    type: 1 /* V3 */,
    token0Address: tokens.ethereumTokens.usdt.address,
    token1Address: tokens.ethereumTokens.weth.address,
    feeTier: v3Sdk.FeeAmount.LOW
  },
  {
    gid: 107,
    address: "0x04c8577958CcC170EB3d2CCa76F9d51bc6E42D8f",
    pairName: "USDT-USDC",
    chainId: chains.ChainId.ETHEREUM,
    type: 1 /* V3 */,
    token0Address: tokens.ethereumTokens.usdt.address,
    token1Address: tokens.ethereumTokens.usdc.address,
    feeTier: v3Sdk.FeeAmount.LOWEST
  },
  {
    gid: 108,
    address: "0x9b5699D18DFF51fc65fB8ad6F70d93287C36349f",
    pairName: "WBTC-ETH",
    chainId: chains.ChainId.ETHEREUM,
    type: 1 /* V3 */,
    token0Address: tokens.ethereumTokens.wbtc.address,
    token1Address: tokens.ethereumTokens.weth.address,
    feeTier: v3Sdk.FeeAmount.MEDIUM
  },
  {
    gid: 109,
    address: "0x517F451b0A9E1b87Dc0Ae98A05Ee033C3310F046",
    pairName: "CAKE-ETH",
    chainId: chains.ChainId.ETHEREUM,
    type: 1 /* V3 */,
    token0Address: tokens.ethereumTokens.cake.address,
    token1Address: tokens.ethereumTokens.weth.address,
    feeTier: v3Sdk.FeeAmount.MEDIUM
  },
  {
    gid: 110,
    address: "0x11A6713B702817DB0Aa0964D1AfEe4E641319732",
    pairName: "CAKE-USDC",
    chainId: chains.ChainId.ETHEREUM,
    type: 1 /* V3 */,
    token0Address: tokens.ethereumTokens.cake.address,
    token1Address: tokens.ethereumTokens.usdc.address,
    feeTier: v3Sdk.FeeAmount.MEDIUM
  },
  {
    gid: 111,
    address: "0xD9e497BD8f491fE163b42A62c296FB54CaEA74B7",
    pairName: "DAI-USDC",
    chainId: chains.ChainId.ETHEREUM,
    type: 1 /* V3 */,
    token0Address: tokens.ethereumTokens.dai.address,
    token1Address: tokens.ethereumTokens.usdc.address,
    feeTier: v3Sdk.FeeAmount.LOWEST
  },
  {
    gid: 112,
    address: "0x34b8AB3a392d54D839dcDBd5Cd1330aBB24bE167",
    pairName: "LDO-ETH",
    chainId: chains.ChainId.ETHEREUM,
    type: 1 /* V3 */,
    token0Address: tokens.ethereumTokens.ldo.address,
    token1Address: tokens.ethereumTokens.weth.address,
    feeTier: v3Sdk.FeeAmount.MEDIUM
  },
  {
    gid: 113,
    address: "0x7ca3EdB2c8fb3e657E282e67F4008d658aA161D2",
    pairName: "LINK-ETH",
    chainId: chains.ChainId.ETHEREUM,
    type: 1 /* V3 */,
    token0Address: tokens.ethereumTokens.link.address,
    token1Address: tokens.ethereumTokens.weth.address,
    feeTier: v3Sdk.FeeAmount.MEDIUM
  },
  {
    gid: 114,
    address: "0x8579630AC9c53CFEb5167f90Af90d2c0d52ED09c",
    pairName: "MATIC-ETH",
    chainId: chains.ChainId.ETHEREUM,
    type: 1 /* V3 */,
    token0Address: tokens.ethereumTokens.matic.address,
    token1Address: tokens.ethereumTokens.weth.address,
    feeTier: v3Sdk.FeeAmount.MEDIUM
  },
  {
    gid: 115,
    address: "0x4F64951A6583D56004fF6310834C70d182142A07",
    pairName: "wstETH-ETH",
    chainId: chains.ChainId.ETHEREUM,
    type: 1 /* V3 */,
    token0Address: tokens.ethereumTokens.wstETH.address,
    token1Address: tokens.ethereumTokens.weth.address,
    feeTier: v3Sdk.FeeAmount.LOW
  },
  {
    gid: 116,
    address: "0x7524Fe020EDcD072EE98126b49Fa65Eb85F8C44C",
    pairName: "STG-USDC",
    chainId: chains.ChainId.ETHEREUM,
    type: 1 /* V3 */,
    token0Address: tokens.ethereumTokens.stg.address,
    token1Address: tokens.ethereumTokens.usdc.address,
    feeTier: v3Sdk.FeeAmount.MEDIUM
  },
  {
    gid: 117,
    address: "0x372dACe050C15879F01966f0b7efb667dD3151Ad",
    pairName: "FXS-ETH",
    chainId: chains.ChainId.ETHEREUM,
    type: 1 /* V3 */,
    token0Address: tokens.ethereumTokens.fxs.address,
    token1Address: tokens.ethereumTokens.weth.address,
    feeTier: v3Sdk.FeeAmount.MEDIUM
  },
  {
    gid: 118,
    address: "0x5C9c6F39Ce25cc6d0F39410F890933A1476FB1b0",
    pairName: "frxETH-ETH",
    chainId: chains.ChainId.ETHEREUM,
    type: 1 /* V3 */,
    token0Address: tokens.ethereumTokens.frxETH.address,
    token1Address: tokens.ethereumTokens.weth.address,
    feeTier: v3Sdk.FeeAmount.LOW
  },
  {
    gid: 119,
    address: "0xCc76f26309E5cb9D18e50DD809074Bf69C341a41",
    pairName: "RPL-ETH",
    chainId: chains.ChainId.ETHEREUM,
    type: 1 /* V3 */,
    token0Address: tokens.ethereumTokens.rpl.address,
    token1Address: tokens.ethereumTokens.weth.address,
    feeTier: v3Sdk.FeeAmount.MEDIUM
  },
  {
    gid: 120,
    address: "0x2201d2400d30BFD8172104B4ad046d019CA4E7bd",
    pairName: "rETH-ETH",
    chainId: chains.ChainId.ETHEREUM,
    type: 1 /* V3 */,
    token0Address: tokens.ethereumTokens.rETH.address,
    token1Address: tokens.ethereumTokens.weth.address,
    feeTier: v3Sdk.FeeAmount.LOW
  },
  {
    gid: 121,
    address: "0x66356491821A83431BE84F62Eb9fb5Ad67015274",
    pairName: "ankrETH-ETH",
    chainId: chains.ChainId.ETHEREUM,
    type: 1 /* V3 */,
    token0Address: tokens.ethereumTokens.ankrETH.address,
    token1Address: tokens.ethereumTokens.weth.address,
    feeTier: v3Sdk.FeeAmount.LOW
  },
  {
    gid: 122,
    address: "0xCCD1d21fcE02959F4F51DDc4505eA154aEBE7F1b",
    pairName: "cbETH-ETH",
    chainId: chains.ChainId.ETHEREUM,
    type: 1 /* V3 */,
    token0Address: tokens.ethereumTokens.cbEth.address,
    token1Address: tokens.ethereumTokens.weth.address,
    feeTier: v3Sdk.FeeAmount.LOW
  },
  {
    gid: 123,
    address: "0x3364f7925B3E499ec45F6a0C6F744912Fb7394Cf",
    pairName: "AXL-USDC",
    chainId: chains.ChainId.ETHEREUM,
    type: 1 /* V3 */,
    token0Address: tokens.ethereumTokens.axl.address,
    token1Address: tokens.ethereumTokens.usdc.address,
    feeTier: v3Sdk.FeeAmount.MEDIUM
  },
  {
    gid: 124,
    address: "0x6E229C972d9F69c15Bdc7B07f385D2025225E72b",
    pairName: "MASK-USDC",
    chainId: chains.ChainId.ETHEREUM,
    type: 1 /* V3 */,
    token0Address: tokens.ethereumTokens.mask.address,
    token1Address: tokens.ethereumTokens.usdc.address,
    feeTier: v3Sdk.FeeAmount.MEDIUM
  },
  {
    gid: 125,
    address: "0x5145755c0535198eec1642DC0cc96225fb28263D",
    pairName: "WETH-WNCG",
    chainId: chains.ChainId.ETHEREUM,
    type: 1 /* V3 */,
    token0Address: tokens.ethereumTokens.weth.address,
    token1Address: tokens.ethereumTokens.wncg.address,
    feeTier: v3Sdk.FeeAmount.MEDIUM
  },
  {
    gid: 126,
    address: "0x402B2BCeb1415F48B413752cC0E27D76ff34ddEb",
    pairName: "WBETH-ETH",
    chainId: chains.ChainId.ETHEREUM,
    type: 1 /* V3 */,
    token0Address: tokens.ethereumTokens.wbeth.address,
    token1Address: tokens.ethereumTokens.weth.address,
    feeTier: v3Sdk.FeeAmount.LOW
  },
  {
    gid: 127,
    address: "0x3202AcfD55232f3706aa81a4F18A98686B5e1d1B",
    pairName: "PEPE-ETH",
    chainId: chains.ChainId.ETHEREUM,
    type: 1 /* V3 */,
    token0Address: tokens.ethereumTokens.pepe.address,
    token1Address: tokens.ethereumTokens.weth.address,
    feeTier: v3Sdk.FeeAmount.HIGH
  },
  {
    gid: 128,
    address: "0xC7F25e2FcC474816efFd9be316F2E51cCef90Ceb",
    pairName: "BLUR-ETH",
    chainId: chains.ChainId.ETHEREUM,
    type: 1 /* V3 */,
    token0Address: tokens.ethereumTokens.blur.address,
    token1Address: tokens.ethereumTokens.weth.address,
    feeTier: v3Sdk.FeeAmount.HIGH
  },
  {
    gid: 129,
    address: "0x392d0F0B7Fe5161Db89f2DB87d33a20682C12A2B",
    pairName: "ENS-ETH",
    chainId: chains.ChainId.ETHEREUM,
    type: 1 /* V3 */,
    token0Address: tokens.ethereumTokens.ens.address,
    token1Address: tokens.ethereumTokens.weth.address,
    feeTier: v3Sdk.FeeAmount.MEDIUM
  },
  {
    gid: 130,
    address: "0x32600e01DfaeBad27Dac6B68902Abc082219b526",
    pairName: "FUSE-ETH",
    chainId: chains.ChainId.ETHEREUM,
    type: 1 /* V3 */,
    token0Address: tokens.ethereumTokens.fuse.address,
    token1Address: tokens.ethereumTokens.weth.address,
    feeTier: v3Sdk.FeeAmount.MEDIUM
  },
  {
    gid: 131,
    address: "0x0d917a3a01389689a14C65dc1E990d68C437358A",
    pairName: "rETH-WBTC",
    chainId: chains.ChainId.ETHEREUM,
    type: 1 /* V3 */,
    token0Address: tokens.ethereumTokens.rETH.address,
    token1Address: tokens.ethereumTokens.wbtc.address,
    feeTier: v3Sdk.FeeAmount.MEDIUM
  },
  {
    gid: 132,
    address: "0x6C2348DEeC1508724C0207a84d21cC5EE88231C8",
    pairName: "TUSD-USDT",
    chainId: chains.ChainId.ETHEREUM,
    type: 1 /* V3 */,
    token0Address: tokens.ethereumTokens.tusd.address,
    token1Address: tokens.ethereumTokens.usdt.address,
    feeTier: v3Sdk.FeeAmount.LOWEST
  },
  {
    gid: 133,
    address: "0x9d6371979d2368dbE9480F4822Ed105f03898765",
    pairName: "CANTO-ETH",
    chainId: chains.ChainId.ETHEREUM,
    type: 1 /* V3 */,
    token0Address: tokens.ethereumTokens.canto.address,
    token1Address: tokens.ethereumTokens.weth.address,
    feeTier: v3Sdk.FeeAmount.HIGH
  },
  {
    gid: 134,
    address: "0xCAD4b51069a150a77D3a1d381d2D768769F7D195",
    pairName: "PENDLE-ETH",
    chainId: chains.ChainId.ETHEREUM,
    type: 1 /* V3 */,
    token0Address: tokens.ethereumTokens.pendle.address,
    token1Address: tokens.ethereumTokens.weth.address,
    feeTier: v3Sdk.FeeAmount.HIGH
  },
  {
    gid: 135,
    address: "0x46027b00196275Fb8215a622A44d1269b81cE71a",
    pairName: "WLD-ETH",
    chainId: chains.ChainId.ETHEREUM,
    type: 1 /* V3 */,
    token0Address: tokens.ethereumTokens.wld.address,
    token1Address: tokens.ethereumTokens.weth.address,
    feeTier: v3Sdk.FeeAmount.HIGH
  },
  {
    gid: 136,
    address: "0x5e3FE73361e9Ef3706dD4cbDFc6067278C22C769",
    pairName: "WOM-USDT",
    chainId: chains.ChainId.ETHEREUM,
    type: 1 /* V3 */,
    token0Address: tokens.ethereumTokens.wom.address,
    token1Address: tokens.ethereumTokens.usdt.address,
    feeTier: v3Sdk.FeeAmount.HIGH
  },
  {
    gid: 137,
    address: "0x3fc47BE8264E473dd2B3e80d144F9EfFfc18F438",
    pairName: "CYBER-ETH",
    chainId: chains.ChainId.ETHEREUM,
    type: 1 /* V3 */,
    token0Address: tokens.ethereumTokens.cyber.address,
    token1Address: tokens.ethereumTokens.weth.address,
    feeTier: v3Sdk.FeeAmount.MEDIUM
  },
  {
    gid: 138,
    address: "0xEa9b2D7ff9aE446ec067e50DF7C09f1Dd055bB71",
    pairName: "WOO-ETH",
    chainId: chains.ChainId.ETHEREUM,
    type: 1 /* V3 */,
    token0Address: tokens.ethereumTokens.woo.address,
    token1Address: tokens.ethereumTokens.weth.address,
    feeTier: v3Sdk.FeeAmount.MEDIUM
  },
  {
    gid: 139,
    address: "0x4D4c8F2f30e0224889ab578283A844e10B57e0F8",
    pairName: "ETHx-ETH",
    chainId: chains.ChainId.ETHEREUM,
    type: 1 /* V3 */,
    token0Address: tokens.ethereumTokens.ethx.address,
    token1Address: tokens.ethereumTokens.weth.address,
    feeTier: v3Sdk.FeeAmount.LOW
  },
  {
    gid: 140,
    address: "0x73b9aDC00794260616C51C41997cE0245b3FA012",
    pairName: "MEME-ETH",
    chainId: chains.ChainId.ETHEREUM,
    type: 1 /* V3 */,
    token0Address: tokens.ethereumTokens.meme.address,
    token1Address: tokens.ethereumTokens.weth.address,
    feeTier: v3Sdk.FeeAmount.HIGH
  },
  {
    gid: 141,
    address: "0x3a1b97Fc25fA45832F588ED3bFb2A0f74ddBD4F8",
    pairName: "wstETH-ETH",
    chainId: chains.ChainId.ETHEREUM,
    type: 1 /* V3 */,
    token0Address: tokens.ethereumTokens.wstETH.address,
    token1Address: tokens.ethereumTokens.weth.address,
    feeTier: v3Sdk.FeeAmount.LOWEST
  },
  {
    gid: 142,
    address: "0x3A2195f4760e89e5B753fd3521a236b6a9f72EBB",
    pairName: "BTRFLY-ETH",
    chainId: chains.ChainId.ETHEREUM,
    type: 1 /* V3 */,
    token0Address: tokens.ethereumTokens.btrfly.address,
    token1Address: tokens.ethereumTokens.weth.address,
    feeTier: v3Sdk.FeeAmount.MEDIUM
  },
  {
    gid: 143,
    address: "0x4689e3C91036437A46A6c8B62157F58210Ba67a7",
    pairName: "SDT-ETH",
    chainId: chains.ChainId.ETHEREUM,
    type: 1 /* V3 */,
    token0Address: tokens.ethereumTokens.sdt.address,
    token1Address: tokens.ethereumTokens.weth.address,
    feeTier: v3Sdk.FeeAmount.MEDIUM
  },
  {
    gid: 144,
    address: "0x6Fab6CEdf26f9bF03448Fe835B674be1CFf0E8BB",
    pairName: "agEUR-USDC",
    chainId: chains.ChainId.ETHEREUM,
    type: 1 /* V3 */,
    token0Address: tokens.ethereumTokens.agEUR.address,
    token1Address: tokens.ethereumTokens.usdc.address,
    feeTier: v3Sdk.FeeAmount.LOW
  },
  {
    gid: 145,
    address: "0xd9e2a1a61B6E61b275cEc326465d417e52C1b95c",
    pairName: "WETH-USDC",
    chainId: chains.ChainId.ARBITRUM_ONE,
    type: 1 /* V3 */,
    token0Address: tokens.arbitrumTokens.weth.address,
    token1Address: tokens.arbitrumTokens.usdc.address,
    feeTier: v3Sdk.FeeAmount.LOW
  },
  {
    gid: 146,
    address: "0x0BaCc7a9717e70EA0DA5Ac075889Bd87d4C81197",
    pairName: "WETH-USDT",
    chainId: chains.ChainId.ARBITRUM_ONE,
    type: 1 /* V3 */,
    token0Address: tokens.arbitrumTokens.weth.address,
    token1Address: tokens.arbitrumTokens.usdt.address,
    feeTier: v3Sdk.FeeAmount.LOW
  },
  {
    gid: 147,
    address: "0x0d7c4b40018969f81750d0a164c3839a77353EFB",
    pairName: "WETH-ARB",
    chainId: chains.ChainId.ARBITRUM_ONE,
    type: 1 /* V3 */,
    token0Address: tokens.arbitrumTokens.weth.address,
    token1Address: tokens.arbitrumTokens.arb.address,
    feeTier: v3Sdk.FeeAmount.LOW
  },
  {
    gid: 148,
    address: "0x7e928afb59f5dE9D2f4d162f754C6eB40c88aA8E",
    pairName: "USDC-USDT",
    chainId: chains.ChainId.ARBITRUM_ONE,
    type: 1 /* V3 */,
    token0Address: tokens.arbitrumTokens.usdc.address,
    token1Address: tokens.arbitrumTokens.usdt.address,
    feeTier: v3Sdk.FeeAmount.LOWEST
  },
  {
    gid: 149,
    address: "0xF5Fac36c2429e1Cf84D4aBACdB18477Ef32589c9",
    pairName: "CAKE-WETH",
    chainId: chains.ChainId.ARBITRUM_ONE,
    type: 1 /* V3 */,
    token0Address: tokens.arbitrumTokens.cake.address,
    token1Address: tokens.arbitrumTokens.weth.address,
    feeTier: v3Sdk.FeeAmount.MEDIUM
  },
  {
    gid: 150,
    address: "0xD58522653D3F368D76d453Bc4C80CD7Fb36AC786",
    pairName: "LVL-ETH",
    chainId: chains.ChainId.ARBITRUM_ONE,
    type: 1 /* V3 */,
    token0Address: tokens.arbitrumTokens.lvl.address,
    token1Address: tokens.arbitrumTokens.weth.address,
    feeTier: v3Sdk.FeeAmount.MEDIUM
  },
  {
    gid: 151,
    address: "0x5e3C3a063cc9A4AEB5310C7faDc2A98aEbDD245d",
    pairName: "MGP-ETH",
    chainId: chains.ChainId.ARBITRUM_ONE,
    type: 1 /* V3 */,
    token0Address: tokens.arbitrumTokens.mgp.address,
    token1Address: tokens.arbitrumTokens.weth.address,
    feeTier: v3Sdk.FeeAmount.MEDIUM
  },
  {
    gid: 152,
    address: "0x9fFCA51D23Ac7F7df82da414865Ef1055E5aFCc3",
    pairName: "ARB-USDC",
    chainId: chains.ChainId.ARBITRUM_ONE,
    type: 1 /* V3 */,
    token0Address: tokens.arbitrumTokens.arb.address,
    token1Address: tokens.arbitrumTokens.usdc.address,
    feeTier: v3Sdk.FeeAmount.LOW
  },
  {
    gid: 153,
    address: "0x81D1cc282e9a097115E59F67B9D81d4d1d00AC51",
    pairName: "ARB-USDT",
    chainId: chains.ChainId.ARBITRUM_ONE,
    type: 1 /* V3 */,
    token0Address: tokens.arbitrumTokens.arb.address,
    token1Address: tokens.arbitrumTokens.usdt.address,
    feeTier: v3Sdk.FeeAmount.LOW
  },
  {
    gid: 154,
    address: "0x54076C901D4fDF76C1fA1F77FAFC3FC1022ADBE5",
    pairName: "WBTC-ETH",
    chainId: chains.ChainId.ARBITRUM_ONE,
    type: 1 /* V3 */,
    token0Address: tokens.arbitrumTokens.wbtc.address,
    token1Address: tokens.arbitrumTokens.weth.address,
    feeTier: v3Sdk.FeeAmount.LOW
  },
  {
    gid: 155,
    address: "0xd5d1F85E65Ce58a4782852F4A845b1d6Ca71F1a2",
    pairName: "USDC-DAI",
    chainId: chains.ChainId.ARBITRUM_ONE,
    type: 1 /* V3 */,
    token0Address: tokens.arbitrumTokens.usdc.address,
    token1Address: tokens.arbitrumTokens.dai.address,
    feeTier: v3Sdk.FeeAmount.LOWEST
  },
  {
    gid: 156,
    address: "0x3fFCa56A99f477dd57A4a5d8799F4DA613C9956B",
    pairName: "axlUSDC-USDT",
    chainId: chains.ChainId.ARBITRUM_ONE,
    type: 1 /* V3 */,
    token0Address: tokens.arbitrumTokens.axlUSDC.address,
    token1Address: tokens.arbitrumTokens.usdt.address,
    feeTier: v3Sdk.FeeAmount.LOWEST
  },
  {
    gid: 157,
    address: "0xF3d0d1d3788FBd1F327149D30a4Eb7744861f05d",
    pairName: "STG-ETH",
    chainId: chains.ChainId.ARBITRUM_ONE,
    type: 1 /* V3 */,
    token0Address: tokens.arbitrumTokens.stg.address,
    token1Address: tokens.arbitrumTokens.weth.address,
    feeTier: v3Sdk.FeeAmount.MEDIUM
  },
  {
    gid: 158,
    address: "0x7767FBfd90b557dc56554058E7c05c9fAa600F8F",
    pairName: "STG-ARB",
    chainId: chains.ChainId.ARBITRUM_ONE,
    type: 1 /* V3 */,
    token0Address: tokens.arbitrumTokens.stg.address,
    token1Address: tokens.arbitrumTokens.arb.address,
    feeTier: v3Sdk.FeeAmount.MEDIUM
  },
  {
    gid: 159,
    address: "0x4573ef50dbb79769eF66B1b16dcDB60652884ba6",
    pairName: "STG-USDC",
    chainId: chains.ChainId.ARBITRUM_ONE,
    type: 1 /* V3 */,
    token0Address: tokens.arbitrumTokens.stg.address,
    token1Address: tokens.arbitrumTokens.usdc.address,
    feeTier: v3Sdk.FeeAmount.MEDIUM
  },
  {
    gid: 160,
    address: "0x1Cb2892038867aDFa78CCfc6C3fB89b1dA558243",
    pairName: "PENDLE-ETH",
    chainId: chains.ChainId.ARBITRUM_ONE,
    type: 1 /* V3 */,
    token0Address: tokens.arbitrumTokens.pendle.address,
    token1Address: tokens.arbitrumTokens.weth.address,
    feeTier: v3Sdk.FeeAmount.MEDIUM
  },
  {
    gid: 161,
    address: "0x0CAA927059CB8db37CEefcB9e18c4FC7Efef9655",
    pairName: "RDNT-ETH",
    chainId: chains.ChainId.ARBITRUM_ONE,
    type: 1 /* V3 */,
    token0Address: tokens.arbitrumTokens.rdnt.address,
    token1Address: tokens.arbitrumTokens.weth.address,
    feeTier: v3Sdk.FeeAmount.MEDIUM
  },
  {
    gid: 162,
    address: "0xF5BFda16f9E57F0B7a67C57b42407C33C31349B6",
    pairName: "GMX-ETH",
    chainId: chains.ChainId.ARBITRUM_ONE,
    type: 1 /* V3 */,
    token0Address: tokens.arbitrumTokens.gmx.address,
    token1Address: tokens.arbitrumTokens.weth.address,
    feeTier: v3Sdk.FeeAmount.MEDIUM
  },
  {
    gid: 163,
    address: "0x46e3faBB9f963f84E9d23Ca2E332A3Ced59604a6",
    pairName: "MAGIC-ETH",
    chainId: chains.ChainId.ARBITRUM_ONE,
    type: 1 /* V3 */,
    token0Address: tokens.arbitrumTokens.magic.address,
    token1Address: tokens.arbitrumTokens.weth.address,
    feeTier: v3Sdk.FeeAmount.MEDIUM
  },
  {
    gid: 164,
    address: "0x3ABBbBb4C254b9327F1a0580BdbCcb51B0b5Fb08",
    pairName: "wstETH-ETH",
    chainId: chains.ChainId.ARBITRUM_ONE,
    type: 1 /* V3 */,
    token0Address: tokens.arbitrumTokens.wstETH.address,
    token1Address: tokens.arbitrumTokens.weth.address,
    feeTier: v3Sdk.FeeAmount.LOWEST
  },
  {
    gid: 165,
    address: "0xC75908421566eA77A73B14D9cD0479C568f2B7A7",
    pairName: "rETH-ETH",
    chainId: chains.ChainId.ARBITRUM_ONE,
    type: 1 /* V3 */,
    token0Address: tokens.arbitrumTokens.rETH.address,
    token1Address: tokens.arbitrumTokens.weth.address,
    feeTier: v3Sdk.FeeAmount.LOWEST
  },
  {
    gid: 166,
    address: "0x0Ba3d55678C019B8101061855fe4Ea8D3ECE784f",
    pairName: "LINK-WETH",
    chainId: chains.ChainId.ARBITRUM_ONE,
    type: 1 /* V3 */,
    token0Address: tokens.arbitrumTokens.link.address,
    token1Address: tokens.arbitrumTokens.weth.address,
    feeTier: v3Sdk.FeeAmount.MEDIUM
  },
  {
    gid: 167,
    address: "0xb901fc9D0D31C9A15DB69C616D31e19fF39b0df6",
    pairName: "stEUR-USDC",
    chainId: chains.ChainId.ARBITRUM_ONE,
    type: 1 /* V3 */,
    token0Address: tokens.arbitrumTokens.stEUR.address,
    token1Address: tokens.arbitrumTokens.usdc.address,
    feeTier: v3Sdk.FeeAmount.LOWEST
  },
  {
    gid: 168,
    address: "0xC9057e7b625D293c0E308Ce344357E2d23174CE6",
    pairName: "KUJI-ETH",
    chainId: chains.ChainId.ARBITRUM_ONE,
    type: 1 /* V3 */,
    token0Address: tokens.arbitrumTokens.kuji.address,
    token1Address: tokens.arbitrumTokens.weth.address,
    feeTier: v3Sdk.FeeAmount.MEDIUM
  },
  {
    gid: 169,
    address: "0xbA339883104bf9D1e894E1640E21E261bcacE6DD",
    pairName: "KUJI-USDC",
    chainId: chains.ChainId.ARBITRUM_ONE,
    type: 1 /* V3 */,
    token0Address: tokens.arbitrumTokens.kuji.address,
    token1Address: tokens.arbitrumTokens.usdc.address,
    feeTier: v3Sdk.FeeAmount.MEDIUM
  },
  {
    gid: 170,
    address: "0x98cffCe9A35132A42Da9582cCed57Db98C07A690",
    pairName: "DMT-USDC",
    chainId: chains.ChainId.ARBITRUM_ONE,
    type: 1 /* V3 */,
    token0Address: tokens.arbitrumTokens.dmt.address,
    token1Address: tokens.arbitrumTokens.usdc.address,
    feeTier: v3Sdk.FeeAmount.MEDIUM
  },
  {
    gid: 171,
    address: "0x6a23ec7A203F546d7D62FA667A652EC55197Ea6F",
    pairName: "LINK-USDC",
    chainId: chains.ChainId.ARBITRUM_ONE,
    type: 1 /* V3 */,
    token0Address: tokens.arbitrumTokens.link.address,
    token1Address: tokens.arbitrumTokens.usdc.address,
    feeTier: v3Sdk.FeeAmount.MEDIUM
  },
  {
    gid: 172,
    address: "0x278566F0ad52fbF36eb4Ba16d2171ed6e6e84e8a",
    pairName: "EQB-ETH",
    chainId: chains.ChainId.ARBITRUM_ONE,
    type: 1 /* V3 */,
    token0Address: tokens.arbitrumTokens.eqb.address,
    token1Address: tokens.arbitrumTokens.weth.address,
    feeTier: v3Sdk.FeeAmount.MEDIUM
  },
  {
    gid: 173,
    address: "0xF5B4B24E5808DAA3fBeee11DF27a0994600356b4",
    pairName: "VAI-USDT",
    chainId: chains.ChainId.BSC,
    type: 1 /* V3 */,
    token0Address: tokens.bscTokens.vai.address,
    token1Address: tokens.bscTokens.usdt.address,
    feeTier: v3Sdk.FeeAmount.LOWEST
  },
  {
    gid: 174,
    address: "0x7D3c51D707C8C63CB9f85cEC6E9F9FF0A5fb2735",
    pairName: "VAI-USDC",
    chainId: chains.ChainId.BSC,
    type: 1 /* V3 */,
    token0Address: tokens.bscTokens.vai.address,
    token1Address: tokens.bscTokens.usdc.address,
    feeTier: v3Sdk.FeeAmount.LOWEST
  },
  {
    gid: 175,
    address: "0xB1D54d76E2cB9425Ec9c018538cc531440b55dbB",
    pairName: "sdCAKE-CAKE",
    chainId: chains.ChainId.BSC,
    type: -1 /* StableSwap */,
    tokenAddresses: [tokens.bscTokens.sdcake.address, tokens.bscTokens.cake.address]
  },
  {
    gid: 176,
    address: "0x060d8a5a7C03882e33AcA8FC304BabE869e21Ee9",
    pairName: "GRAI-USDC",
    chainId: chains.ChainId.ARBITRUM_ONE,
    type: 1 /* V3 */,
    token0Address: tokens.arbitrumTokens.grai.address,
    token1Address: tokens.arbitrumTokens.usdc.address,
    feeTier: v3Sdk.FeeAmount.LOW
  },
  {
    gid: 177,
    address: "0x964f1c58aD7058F352fAEd049A4674c1990355AB",
    pairName: "swETH-ETH",
    chainId: chains.ChainId.ARBITRUM_ONE,
    type: 1 /* V3 */,
    token0Address: tokens.arbitrumTokens.swETH.address,
    token1Address: tokens.arbitrumTokens.weth.address,
    feeTier: v3Sdk.FeeAmount.LOWEST
  },
  {
    gid: 178,
    address: "0x3C2bf5C0Be7be4919fae1330b748E89f165259D7",
    pairName: "axlUSDC-USDC",
    chainId: chains.ChainId.ARBITRUM_ONE,
    type: 1 /* V3 */,
    token0Address: tokens.arbitrumTokens.axlUSDC.address,
    token1Address: tokens.arbitrumTokens.usdc.address,
    feeTier: v3Sdk.FeeAmount.LOWEST
  },
  {
    gid: 179,
    address: "0xB5D01A6e99FdcDB6DB8D0A342C35036Adeb8FB48",
    pairName: "KUJI-BNB",
    chainId: chains.ChainId.BSC,
    type: 1 /* V3 */,
    token0Address: tokens.bscTokens.kuji.address,
    token1Address: tokens.bscTokens.wbnb.address,
    feeTier: v3Sdk.FeeAmount.HIGH
  },
  {
    gid: 180,
    address: "0x2f74ad2c64be7DC07C9f51E9d338EcB7C1ee0B18",
    pairName: "BONK-USDT",
    chainId: chains.ChainId.BSC,
    type: 1 /* V3 */,
    token0Address: tokens.bscTokens.usdt.address,
    token1Address: tokens.bscTokens.bonk.address,
    feeTier: v3Sdk.FeeAmount.HIGH
  },
  {
    gid: 181,
    address: "0x1A1703Bf5f1Da9DB0f62d17e8c54e84Fd732D695",
    pairName: "BONK-BNB",
    chainId: chains.ChainId.BSC,
    type: 1 /* V3 */,
    token0Address: tokens.bscTokens.bonk.address,
    token1Address: tokens.bscTokens.wbnb.address,
    feeTier: v3Sdk.FeeAmount.HIGH
  },
  {
    gid: 182,
    address: "0xDc9a574b9B341D4a98cE29005b614e1E27430E74",
    pairName: "HZN-BNB",
    chainId: chains.ChainId.BSC,
    type: 0 /* V2 */,
    token0Address: tokens.bscTokens.hzn.address,
    token1Address: tokens.bscTokens.wbnb.address,
    feeTier: v3Sdk.FeeAmount.MEDIUM
  },
  {
    gid: 183,
    address: "0x719EBA3fB0799e215B6F82872F947418298e395e",
    pairName: "BONK-USDT",
    chainId: chains.ChainId.ETHEREUM,
    type: 1 /* V3 */,
    token0Address: tokens.ethereumTokens.bonk.address,
    token1Address: tokens.ethereumTokens.usdt.address,
    feeTier: v3Sdk.FeeAmount.HIGH
  },
  {
    gid: 184,
    address: "0xEd4D5317823Ff7BC8BB868C1612Bb270a8311179",
    pairName: "INSP-USDT",
    chainId: chains.ChainId.ETHEREUM,
    type: 1 /* V3 */,
    token0Address: tokens.ethereumTokens.insp.address,
    token1Address: tokens.ethereumTokens.usdt.address,
    feeTier: v3Sdk.FeeAmount.HIGH
  },
  {
    gid: 185,
    address: "0x7dF7c84f2f9DCef3c0813e539878B76B89a916F8",
    pairName: "ID-USDC",
    chainId: chains.ChainId.ETHEREUM,
    type: 1 /* V3 */,
    token0Address: tokens.ethereumTokens.id.address,
    token1Address: tokens.ethereumTokens.usdc.address,
    feeTier: v3Sdk.FeeAmount.MEDIUM
  },
  {
    gid: 186,
    address: "0x80968a476E0235a026Fd1F33AAac5a3B7b76110F",
    pairName: "AIOZ-BNB",
    chainId: chains.ChainId.BSC,
    type: 1 /* V3 */,
    token0Address: tokens.bscTokens.aioz.address,
    token1Address: tokens.bscTokens.bnb.address,
    feeTier: v3Sdk.FeeAmount.MEDIUM
  },
  {
    gid: 187,
    address: "0x2Fdf9b25Df26e81598c09ef7482a82E2ec6eb68c",
    pairName: "ACE-USDT",
    chainId: chains.ChainId.BSC,
    type: 1 /* V3 */,
    token0Address: tokens.bscTokens.ace.address,
    token1Address: tokens.bscTokens.usdt.address,
    feeTier: v3Sdk.FeeAmount.MEDIUM
  },
  {
    gid: 188,
    address: "0x14861FFC20f88E6D0Cf90da6BDc796Bb7f0B19E6",
    pairName: "esRDNT-RDNT",
    chainId: chains.ChainId.BSC,
    type: 1 /* V3 */,
    token0Address: tokens.bscTokens.esRDNT.address,
    token1Address: tokens.bscTokens.rdnt.address,
    feeTier: v3Sdk.FeeAmount.MEDIUM
  },
  {
    gid: 189,
    address: "0x135Cd19cb3c15f7eB10FC21FF79e1259a65Fc958",
    pairName: "AIOZ-ETH",
    chainId: chains.ChainId.ETHEREUM,
    type: 1 /* V3 */,
    token0Address: tokens.ethereumTokens.aioz.address,
    token1Address: tokens.ethereumTokens.weth.address,
    feeTier: v3Sdk.FeeAmount.MEDIUM
  },
  {
    gid: 190,
    address: "0xBC7766aE74f38f251683633d50Cc2C1CD14aF948",
    pairName: "INSP-WETH",
    chainId: chains.ChainId.ETHEREUM,
    type: 1 /* V3 */,
    token0Address: tokens.ethereumTokens.insp.address,
    token1Address: tokens.ethereumTokens.weth.address,
    feeTier: v3Sdk.FeeAmount.HIGH
  },
  {
    gid: 191,
    address: "0x898fe77d1C083DD725004A12DF0bC55f6Dbdec2f",
    pairName: "WBNB-USDV",
    chainId: chains.ChainId.BSC,
    type: 1 /* V3 */,
    token0Address: tokens.bscTokens.bnb.address,
    token1Address: tokens.bscTokens.usdv.address,
    feeTier: v3Sdk.FeeAmount.LOW
  },
  {
    gid: 192,
    address: "0x589a5062e47202bB994cD354913733a14b54e8Dc",
    pairName: "USDV-USDT",
    chainId: chains.ChainId.BSC,
    type: 1 /* V3 */,
    token0Address: tokens.bscTokens.usdv.address,
    token1Address: tokens.bscTokens.usdt.address,
    feeTier: v3Sdk.FeeAmount.LOWEST
  },
  {
    gid: 193,
    pairName: "WETH-USDC",
    address: "0x291d9F9764c72C9BA6fF47b451a9f7885Ebf9977",
    chainId: chains.ChainId.ZKSYNC,
    type: 1 /* V3 */,
    token0Address: tokens.zksyncTokens.weth.address,
    token1Address: tokens.zksyncTokens.usdc.address,
    feeTier: v3Sdk.FeeAmount.LOW
  },
  {
    gid: 194,
    pairName: "WETH-USDC",
    address: "0xFB467bedf483ef92D54b6615770eBEDD9F639a50",
    chainId: chains.ChainId.ZKSYNC,
    type: 1 /* V3 */,
    token0Address: tokens.zksyncTokens.weth.address,
    token1Address: tokens.zksyncTokens.usdc.address,
    feeTier: v3Sdk.FeeAmount.MEDIUM
  },
  {
    gid: 195,
    pairName: "USDC-USDT",
    address: "0x3832fB996C49792e71018f948f5bDdd987778424",
    chainId: chains.ChainId.ZKSYNC,
    type: 1 /* V3 */,
    token0Address: tokens.zksyncTokens.usdc.address,
    token1Address: tokens.zksyncTokens.usdt.address,
    feeTier: v3Sdk.FeeAmount.LOWEST
  },
  {
    gid: 196,
    pairName: "CAKE-WETH",
    address: "0x3c11CAACc9FC70d9130792c39702C5F96cE68a93",
    chainId: chains.ChainId.ZKSYNC,
    type: 1 /* V3 */,
    token0Address: tokens.zksyncTokens.cake.address,
    token1Address: tokens.zksyncTokens.weth.address,
    feeTier: v3Sdk.FeeAmount.MEDIUM
  },
  {
    gid: 197,
    pairName: "WETH-BTC",
    address: "0x9cB8b12cb0223e105155318B72AdddA15D588fB9",
    chainId: chains.ChainId.ZKSYNC,
    type: 1 /* V3 */,
    token0Address: tokens.zksyncTokens.weth.address,
    token1Address: tokens.zksyncTokens.wbtc.address,
    feeTier: v3Sdk.FeeAmount.LOW
  },
  {
    gid: 198,
    pairName: "BUSD-USDC",
    address: "0x662cD659F91528FF27D7Cb6Ac25e6EBA11c4003C",
    chainId: chains.ChainId.ZKSYNC,
    type: 1 /* V3 */,
    token0Address: tokens.zksyncTokens.busd.address,
    token1Address: tokens.zksyncTokens.usdc.address,
    feeTier: v3Sdk.FeeAmount.LOWEST
  },
  {
    gid: 199,
    pairName: "WETH-USDC",
    address: "0x7C0e7D6066aF191977a4483B445B5C06FC41ECd6",
    chainId: chains.ChainId.ZKSYNC,
    type: 1 /* V3 */,
    token0Address: tokens.zksyncTokens.weth.address,
    token1Address: tokens.zksyncTokens.usdc.address,
    feeTier: v3Sdk.FeeAmount.LOWEST
  },
  {
    gid: 200,
    pairName: "BUSD-USDT",
    address: "0x38848d93a410446848CA55Fdc777Fe0B2C30B071",
    chainId: chains.ChainId.ZKSYNC,
    type: 1 /* V3 */,
    token0Address: tokens.zksyncTokens.busd.address,
    token1Address: tokens.zksyncTokens.usdt.address,
    feeTier: v3Sdk.FeeAmount.LOWEST
  },
  {
    gid: 201,
    pairName: "rETH-ETH",
    address: "0x3693Ec2590e6bF8F221F61776dC9274AED7056D6",
    chainId: chains.ChainId.ZKSYNC,
    type: 1 /* V3 */,
    token0Address: tokens.zksyncTokens.reth.address,
    token1Address: tokens.zksyncTokens.weth.address,
    feeTier: v3Sdk.FeeAmount.LOW
  },
  {
    gid: 202,
    pairName: "USD+-USDC",
    address: "0x6a8Fc7e8186ddC572e149dFAa49CfAE1E571108b",
    chainId: chains.ChainId.ZKSYNC,
    type: 1 /* V3 */,
    token0Address: tokens.zksyncTokens.usdPlus.address,
    token1Address: tokens.zksyncTokens.usdc.address,
    feeTier: v3Sdk.FeeAmount.LOWEST
  },
  {
    gid: 203,
    pairName: "RDP-BNB",
    address: "0xE297e1dA9a484E609D180C5B1fEfE4830df70eF1",
    chainId: chains.ChainId.BSC,
    type: 1 /* V3 */,
    token0Address: tokens.bscTokens.rdp.address,
    token1Address: tokens.bscTokens.wbnb.address,
    feeTier: v3Sdk.FeeAmount.MEDIUM
  },
  {
    gid: 204,
    pairName: "sdCAKE-CAKE",
    address: "0xB1D54d76E2cB9425Ec9c018538cc531440b55dbB",
    chainId: chains.ChainId.BSC,
    type: -1 /* StableSwap */,
    tokenAddresses: [tokens.bscTokens.sdcake.address, tokens.bscTokens.cake.address]
  },
  {
    gid: 205,
    pairName: "sats-BNB",
    address: "0xcF0bA206D688Fc9AE8A268F8b9077F4307600895",
    chainId: chains.ChainId.BSC,
    type: 1 /* V3 */,
    token0Address: tokens.bscTokens.sats.address,
    token1Address: tokens.bscTokens.wbnb.address,
    feeTier: v3Sdk.FeeAmount.MEDIUM
  },
  {
    gid: 206,
    pairName: "ordi-BNB",
    address: "0x442EFB99C2727c6000727C3cf672e3d77C9cDEaD",
    chainId: chains.ChainId.BSC,
    type: 1 /* V3 */,
    token0Address: tokens.bscTokens.ordi.address,
    token1Address: tokens.bscTokens.wbnb.address,
    feeTier: v3Sdk.FeeAmount.HIGH
  },
  {
    gid: 207,
    pairName: "MUBI-BNB",
    address: "0x961C19a53e5EA0e43B8F9020553F94623Ce475B6",
    chainId: chains.ChainId.BSC,
    type: 1 /* V3 */,
    token0Address: tokens.bscTokens.mubi.address,
    token1Address: tokens.bscTokens.bnb.address,
    feeTier: v3Sdk.FeeAmount.HIGH
  },
  {
    gid: 208,
    pairName: "NFP-USDT",
    address: "0x4b36782B47a28Ee003013E7C56174CB5812F418B",
    chainId: chains.ChainId.BSC,
    type: 1 /* V3 */,
    token0Address: tokens.bscTokens.nfp.address,
    token1Address: tokens.bscTokens.usdt.address,
    feeTier: v3Sdk.FeeAmount.MEDIUM
  },
  {
    gid: 209,
    pairName: "ordi-BNB",
    address: "0x1be0A017CDA061501b9dd460EBFD16f0971Eea8e",
    chainId: chains.ChainId.BSC,
    type: 1 /* V3 */,
    token0Address: tokens.bscTokens.ordi.address,
    token1Address: tokens.bscTokens.wbnb.address,
    feeTier: v3Sdk.FeeAmount.MEDIUM
  },
  {
    gid: 210,
    pairName: "MUBI-BNB",
    address: "0x57dBE41582591e8a420cc80FB669F953d137a571",
    chainId: chains.ChainId.BSC,
    type: 1 /* V3 */,
    token0Address: tokens.bscTokens.mubi.address,
    token1Address: tokens.bscTokens.wbnb.address,
    feeTier: v3Sdk.FeeAmount.MEDIUM
  },
  {
    gid: 211,
    pairName: "WETH-USDT",
    address: "0x6Ff6B5c5957606220C6Cd0422499c9c1224c399b",
    chainId: chains.ChainId.ZKSYNC,
    type: 1 /* V3 */,
    token0Address: tokens.zksyncTokens.weth.address,
    token1Address: tokens.zksyncTokens.usdt.address,
    feeTier: v3Sdk.FeeAmount.LOW
  },
  {
    gid: 212,
    pairName: "sdCAKE-CAKE",
    address: "0x8A876Ca851063e0252654CA6368a5B2280f51c32",
    chainId: chains.ChainId.BSC,
    type: 1 /* V3 */,
    token0Address: tokens.bscTokens.sdcake.address,
    token1Address: tokens.bscTokens.cake.address,
    feeTier: v3Sdk.FeeAmount.MEDIUM
  },
  {
    gid: 213,
    pairName: "PNP-BNB",
    address: "0x88240a2CA0Af5DD3b181975b9985274274CB3685",
    chainId: chains.ChainId.BSC,
    type: 1 /* V3 */,
    token0Address: tokens.bscTokens.pnp.address,
    token1Address: tokens.bscTokens.bnb.address,
    feeTier: v3Sdk.FeeAmount.MEDIUM
  },
  {
    gid: 214,
    pairName: "mCAKE-CAKE",
    address: "0xb9dC6396AcFFD24E0f69Dfd3231fDaeB31514D02",
    chainId: chains.ChainId.BSC,
    type: -1 /* StableSwap */,
    tokenAddresses: [tokens.bscTokens.mcake.address, tokens.bscTokens.cake.address]
  },
  {
    gid: 215,
    pairName: "WETH-USDC",
    address: "0xD43b9dCbB61e6ccFbCFef9f21e1BB5064F1CB33f",
    chainId: chains.ChainId.POLYGON_ZKEVM,
    type: 1 /* V3 */,
    token0Address: tokens.polygonZkEvmTokens.weth.address,
    token1Address: tokens.polygonZkEvmTokens.usdc.address,
    feeTier: v3Sdk.FeeAmount.LOW
  },
  {
    gid: 216,
    pairName: "WETH-USDT",
    address: "0x4A080D9488cE2C8258185d78852275D6d3c2820c",
    chainId: chains.ChainId.POLYGON_ZKEVM,
    type: 1 /* V3 */,
    token0Address: tokens.polygonZkEvmTokens.usdt.address,
    token1Address: tokens.polygonZkEvmTokens.weth.address,
    feeTier: v3Sdk.FeeAmount.LOW
  },
  {
    gid: 217,
    pairName: "USDT-USDC",
    address: "0xca06375be938a2d6eF311dfaFab7E326d55D23Cc",
    chainId: chains.ChainId.POLYGON_ZKEVM,
    type: 1 /* V3 */,
    token0Address: tokens.polygonZkEvmTokens.usdt.address,
    token1Address: tokens.polygonZkEvmTokens.usdc.address,
    feeTier: v3Sdk.FeeAmount.LOWEST
  },
  {
    gid: 218,
    pairName: "WETH-MATIC",
    address: "0xaE30fcdEE41dC9eC265e841D8185d055B87d1B7a",
    chainId: chains.ChainId.POLYGON_ZKEVM,
    type: 1 /* V3 */,
    token0Address: tokens.polygonZkEvmTokens.weth.address,
    token1Address: tokens.polygonZkEvmTokens.matic.address,
    feeTier: v3Sdk.FeeAmount.MEDIUM
  },
  {
    gid: 219,
    pairName: "GRAI-USDC",
    address: "0x39aCc7cf02af19A1eB0e3628bA0F5C48f44beBF3",
    chainId: chains.ChainId.POLYGON_ZKEVM,
    type: 1 /* V3 */,
    token0Address: tokens.polygonZkEvmTokens.usdc.address,
    token1Address: tokens.polygonZkEvmTokens.grai.address,
    feeTier: v3Sdk.FeeAmount.LOW
  },
  {
    gid: 220,
    pairName: "WETH-BTC",
    address: "0xf1e501f74Ed9dc619be53Fddb698c94AbF9D56B6",
    chainId: chains.ChainId.POLYGON_ZKEVM,
    type: 1 /* V3 */,
    token0Address: tokens.polygonZkEvmTokens.weth.address,
    token1Address: tokens.polygonZkEvmTokens.wbtc.address,
    feeTier: v3Sdk.FeeAmount.LOW
  },
  {
    gid: 221,
    pairName: "swETH-ETH",
    address: "0x6db0f81Db2C3B2A85a802d511577d8522D0D8C14",
    chainId: chains.ChainId.ETHEREUM,
    type: 1 /* V3 */,
    token0Address: tokens.ethereumTokens.swETH.address,
    token1Address: tokens.ethereumTokens.weth.address,
    feeTier: v3Sdk.FeeAmount.LOW
  },
  {
    gid: 222,
    pairName: "HAY-USDT",
    address: "0xB2Aa63f363196caba3154D4187949283F085a488",
    chainId: chains.ChainId.BSC,
    type: -1 /* StableSwap */,
    tokenAddresses: [tokens.bscTokens.hay.address, tokens.bscTokens.usdt.address]
  },
  {
    gid: 223,
    pairName: "USDT-CGPT",
    address: "0x1E8D7AB96323953faC85ab687f5D38b45344e62d",
    chainId: chains.ChainId.BSC,
    type: 1 /* V3 */,
    token0Address: tokens.bscTokens.usdt.address,
    token1Address: tokens.bscTokens.cgpt.address,
    feeTier: v3Sdk.FeeAmount.LOW
  },
  {
    gid: 224,
    pairName: "wROSE-USDT",
    address: "0x5B56eea565dad4E72B8ea6a6567834E144fb7a93",
    chainId: chains.ChainId.BSC,
    type: 1 /* V3 */,
    token0Address: tokens.bscTokens.wrose.address,
    token1Address: tokens.bscTokens.usdt.address,
    feeTier: v3Sdk.FeeAmount.MEDIUM
  },
  {
    gid: 225,
    pairName: "INSP-BNB",
    address: "0x06aC8EE32BCdcE6bF2eA82D9Bfb932a84D45BFcb",
    chainId: chains.ChainId.BSC,
    type: 1 /* V3 */,
    token0Address: tokens.bscTokens.insp.address,
    token1Address: tokens.bscTokens.wbnb.address,
    feeTier: v3Sdk.FeeAmount.HIGH
  },
  {
    gid: 226,
    pairName: "FDUSD-BTC",
    address: "0x6AA9c4eDA3BF8ac038aD5C243133d6D25aA9cc73",
    chainId: chains.ChainId.BSC,
    type: 1 /* V3 */,
    token0Address: tokens.bscTokens.btcb.address,
    token1Address: tokens.bscTokens.fdusd.address,
    feeTier: v3Sdk.FeeAmount.LOW
  },
  {
    gid: 227,
    pairName: "FDUSD-ETH",
    address: "0x63393D036FEf3B187ca613a8E5D917697ade2cD5",
    chainId: chains.ChainId.BSC,
    type: 1 /* V3 */,
    token0Address: tokens.bscTokens.eth.address,
    token1Address: tokens.bscTokens.fdusd.address,
    feeTier: v3Sdk.FeeAmount.LOW
  },
  {
    gid: 228,
    pairName: "FDUSD-CAKE",
    address: "0xA62439A42fbeC9827a0B0452A5fD619d517F2D83",
    chainId: chains.ChainId.BSC,
    type: 1 /* V3 */,
    token0Address: tokens.bscTokens.cake.address,
    token1Address: tokens.bscTokens.fdusd.address,
    feeTier: v3Sdk.FeeAmount.MEDIUM
  },
  {
    gid: 229,
    pairName: "FDUSD-BNB",
    address: "0x0f3aDA81A32D8a7233fe9B1D04f0A8231AdB98F0",
    chainId: chains.ChainId.BSC,
    type: 1 /* V3 */,
    token0Address: tokens.bscTokens.bnb.address,
    token1Address: tokens.bscTokens.fdusd.address,
    feeTier: v3Sdk.FeeAmount.LOW
  },
  {
    gid: 230,
    pairName: "FDUSD-USDC",
    address: "0xf66A930Ed3b004BA16ee11b3A9B142EAf2259b0d",
    chainId: chains.ChainId.BSC,
    type: 1 /* V3 */,
    token0Address: tokens.bscTokens.usdc.address,
    token1Address: tokens.bscTokens.fdusd.address,
    feeTier: v3Sdk.FeeAmount.LOWEST
  },
  {
    gid: 231,
    pairName: "XAI-WETH",
    address: "0xf0B860d338E8B5199606322653B83A166d96E417",
    chainId: chains.ChainId.ARBITRUM_ONE,
    type: 1 /* V3 */,
    token0Address: tokens.arbitrumTokens.xai.address,
    token1Address: tokens.arbitrumTokens.weth.address,
    feeTier: v3Sdk.FeeAmount.MEDIUM
  },
  {
    gid: 232,
    pairName: "USDT+-USD+",
    address: "0xb9c2d906f94b27bC403Ab76B611D2C4490c2ae3F",
    chainId: chains.ChainId.ARBITRUM_ONE,
    type: 1 /* V3 */,
    token0Address: tokens.arbitrumTokens.usdtplus.address,
    token1Address: tokens.arbitrumTokens.usdplus.address,
    feeTier: v3Sdk.FeeAmount.LOWEST
  },
  {
    gid: 233,
    pairName: "USD+-ETH+",
    address: "0x06c75011479E47280e8B7E72E9e0315C8b3A634d",
    chainId: chains.ChainId.ARBITRUM_ONE,
    type: 1 /* V3 */,
    token0Address: tokens.arbitrumTokens.ethplus.address,
    token1Address: tokens.arbitrumTokens.usdplus.address,
    feeTier: v3Sdk.FeeAmount.MEDIUM
  },
  {
    gid: 234,
    pairName: "USD+-USDC.e",
    address: "0xd01075f7314a6436e8B74fc18069848229D0c555",
    chainId: chains.ChainId.ARBITRUM_ONE,
    type: 1 /* V3 */,
    token0Address: tokens.arbitrumTokens.usdplus.address,
    token1Address: tokens.arbitrumTokens.usdce.address,
    feeTier: v3Sdk.FeeAmount.LOWEST
  },
  {
    gid: 235,
    pairName: "WETH-ETH+",
    address: "0xdAA80a051E22A7f7b0cfC33Aa29572fbDE65183E",
    chainId: chains.ChainId.ARBITRUM_ONE,
    type: 1 /* V3 */,
    token0Address: tokens.arbitrumTokens.weth.address,
    token1Address: tokens.arbitrumTokens.ethplus.address,
    feeTier: v3Sdk.FeeAmount.LOWEST
  },
  {
    gid: 236,
    pairName: "CKP-BNB",
    address: "0x8b626Acfb32CDad0d2F3b493Eb9928BbA1BbBcCa",
    chainId: chains.ChainId.BSC,
    type: 1 /* V3 */,
    token0Address: tokens.bscTokens.ckp.address,
    token1Address: tokens.bscTokens.wbnb.address,
    feeTier: v3Sdk.FeeAmount.MEDIUM
  },
  {
    gid: 237,
    pairName: "IRL-USDT",
    address: "0xce44eBE42ABc496eACBd6582b6e14f3937116B23",
    chainId: chains.ChainId.BSC,
    type: 1 /* V3 */,
    token0Address: tokens.bscTokens.usdt.address,
    token1Address: tokens.bscTokens.irl.address,
    feeTier: v3Sdk.FeeAmount.HIGH
  },
  {
    gid: 238,
    pairName: "ORDS-WETH",
    address: "0xBEA29eE3bb5F025D3C7e107883cD002c420b389d",
    chainId: chains.ChainId.ETHEREUM,
    type: 1 /* V3 */,
    token0Address: tokens.ethereumTokens.ords.address,
    token1Address: tokens.ethereumTokens.weth.address,
    feeTier: v3Sdk.FeeAmount.MEDIUM
  },
  {
    gid: 239,
    pairName: "OSAK-WETH",
    address: "0xBc1a2e1B745497D214B99F359369d304D0aCf935",
    chainId: chains.ChainId.ETHEREUM,
    type: 1 /* V3 */,
    token0Address: tokens.ethereumTokens.osak.address,
    token1Address: tokens.ethereumTokens.weth.address,
    feeTier: v3Sdk.FeeAmount.HIGH
  },
  {
    gid: 240,
    pairName: "MGP-BNB",
    address: "0x2b3DBbA2D1F5158c7BA4b645B7ea187F7F1763af",
    chainId: chains.ChainId.BSC,
    type: 0 /* V2 */,
    token0Address: tokens.bscTokens.wbnb.address,
    token1Address: tokens.bscTokens.mgp.address,
    feeTier: v3Sdk.FeeAmount.MEDIUM
  },
  {
    gid: 241,
    pairName: "RDP-BNB",
    address: "0xc9B415b8331e1Fb0d2f3442Ac8413E279304090f",
    chainId: chains.ChainId.BSC,
    type: 0 /* V2 */,
    token0Address: tokens.bscTokens.rdp.address,
    token1Address: tokens.bscTokens.wbnb.address,
    feeTier: v3Sdk.FeeAmount.MEDIUM
  },
  {
    gid: 242,
    pairName: "PNP-BNB",
    address: "0x1C5bD1B4A4Fc05cC0Fb1a0f61136512744Ca4F34",
    chainId: chains.ChainId.BSC,
    type: 0 /* V2 */,
    token0Address: tokens.bscTokens.pnp.address,
    token1Address: tokens.bscTokens.wbnb.address,
    feeTier: v3Sdk.FeeAmount.MEDIUM
  },
  {
    gid: 243,
    pairName: "CKP-mCAKE",
    address: "0xdb92AD18eD18752a194b9D831413B09976B34AE1",
    chainId: chains.ChainId.BSC,
    type: 0 /* V2 */,
    token0Address: tokens.bscTokens.ckp.address,
    token1Address: tokens.bscTokens.mcake.address,
    feeTier: v3Sdk.FeeAmount.MEDIUM
  },
  {
    gid: 244,
    pairName: "HUAHUA-USDT",
    address: "0xE08078C1daACef415b2653e7256A70002F41Eeb6",
    chainId: chains.ChainId.BSC,
    type: 1 /* V3 */,
    token0Address: tokens.bscTokens.usdt.address,
    token1Address: tokens.bscTokens.huahua.address,
    feeTier: v3Sdk.FeeAmount.HIGH
  },
  {
    gid: 245,
    pairName: "ETH-USDC",
    address: "0xd5539D0360438a66661148c633A9F0965E482845",
    chainId: chains.ChainId.LINEA,
    type: 1 /* V3 */,
    token0Address: tokens.lineaTokens.usdc.address,
    token1Address: tokens.lineaTokens.weth.address,
    feeTier: v3Sdk.FeeAmount.LOW
  },
  {
    gid: 246,
    pairName: "USDT-USDC",
    address: "0x6a72F4F191720c411Cd1fF6A5EA8DeDEC3A64771",
    chainId: chains.ChainId.LINEA,
    type: 1 /* V3 */,
    token0Address: tokens.lineaTokens.usdc.address,
    token1Address: tokens.lineaTokens.usdt.address,
    feeTier: v3Sdk.FeeAmount.LOWEST
  },
  {
    gid: 247,
    pairName: "BTC-ETH",
    address: "0xbD3bc396C9393e63bBc935786Dd120B17F58Df4c",
    chainId: chains.ChainId.LINEA,
    type: 1 /* V3 */,
    token0Address: tokens.lineaTokens.wbtc.address,
    token1Address: tokens.lineaTokens.weth.address,
    feeTier: v3Sdk.FeeAmount.LOW
  },
  {
    gid: 248,
    pairName: "USDC-DAI",
    address: "0xA48E0630B7b9dCb250112143C9D0fe47d26CB1e4",
    chainId: chains.ChainId.LINEA,
    type: 1 /* V3 */,
    token0Address: tokens.lineaTokens.usdc.address,
    token1Address: tokens.lineaTokens.dai.address,
    feeTier: v3Sdk.FeeAmount.LOWEST
  },
  {
    gid: 249,
    pairName: "USDC-axlUSDC",
    address: "0x85164B6d8a74bA481AB6D02D2C4e779ECCBAF982",
    chainId: chains.ChainId.LINEA,
    type: 1 /* V3 */,
    token0Address: tokens.lineaTokens.usdc.address,
    token1Address: tokens.lineaTokens.axlusdc.address,
    feeTier: v3Sdk.FeeAmount.LOWEST
  },
  {
    gid: 250,
    pairName: "wstETH-ETH",
    address: "0x3f63a467C54c96538bD36A7DF1b9E7C4719DcaC9",
    chainId: chains.ChainId.LINEA,
    type: 1 /* V3 */,
    token0Address: tokens.lineaTokens.wstETH.address,
    token1Address: tokens.lineaTokens.weth.address,
    feeTier: v3Sdk.FeeAmount.LOWEST
  },
  {
    gid: 251,
    pairName: "AI-BNB",
    address: "0x85Bf2332c9033624B5d6f2607D8f07f22Bc86345",
    chainId: chains.ChainId.BSC,
    type: 1 /* V3 */,
    token0Address: tokens.bscTokens.anyInu.address,
    token1Address: tokens.bscTokens.wbnb.address,
    feeTier: v3Sdk.FeeAmount.HIGH
  },
  {
    gid: 252,
    pairName: "wROSE-USDT",
    address: "0x9dD70024FF211bA754c089CDee47BdeDc17C4CBe",
    chainId: chains.ChainId.BSC,
    type: 1 /* V3 */,
    token0Address: tokens.bscTokens.usdt.address,
    token1Address: tokens.bscTokens.wrose.address,
    feeTier: v3Sdk.FeeAmount.LOW
  },
  {
    gid: 253,
    pairName: "wstETH-ETH",
    address: "0x5631fE6d29E3CB717517DA05A9970e499DEF5e31",
    chainId: chains.ChainId.ZKSYNC,
    type: 1 /* V3 */,
    token0Address: tokens.zksyncTokens.weth.address,
    token1Address: tokens.zksyncTokens.wstETH.address,
    feeTier: v3Sdk.FeeAmount.LOW
  },
  {
    gid: 254,
    pairName: "OVN-USD+",
    address: "0x714D48cb99b87F274B33A89fBb16EaD191B40b6C",
    chainId: chains.ChainId.ARBITRUM_ONE,
    type: 1 /* V3 */,
    token0Address: tokens.arbitrumTokens.ovn.address,
    token1Address: tokens.arbitrumTokens.usdplus.address,
    feeTier: v3Sdk.FeeAmount.HIGH
  },
  {
    gid: 255,
    pairName: "OVN-USDT",
    address: "0xb624FE83Dfc393aAB921EbBc2Bf38Fdd238F2380",
    chainId: chains.ChainId.BSC,
    type: 1 /* V3 */,
    token0Address: tokens.bscTokens.ovn.address,
    token1Address: tokens.bscTokens.usdt.address,
    feeTier: v3Sdk.FeeAmount.HIGH
  },
  {
    gid: 256,
    pairName: "MANTA-BNB",
    address: "0x93bA6af467c7B46B44D5C0BB300270c732510C9C",
    chainId: chains.ChainId.BSC,
    type: 1 /* V3 */,
    token0Address: tokens.bscTokens.manta.address,
    token1Address: tokens.bscTokens.wbnb.address,
    feeTier: v3Sdk.FeeAmount.MEDIUM
  },
  {
    gid: 257,
    pairName: "USDC-wstETH",
    address: "0x16B3Bbd346eB864eD28B99cf89dDe59aD31A034F",
    chainId: chains.ChainId.ZKSYNC,
    type: 1 /* V3 */,
    token0Address: tokens.zksyncTokens.usdc.address,
    token1Address: tokens.zksyncTokens.wstETH.address,
    feeTier: v3Sdk.FeeAmount.LOW
  },
  {
    gid: 258,
    pairName: "pxETH-ETH",
    address: "0x3733493eC5D2C181Dcd7C54ed100641c0f07BB0e",
    chainId: chains.ChainId.ETHEREUM,
    type: 1 /* V3 */,
    token0Address: tokens.ethereumTokens.pxETH.address,
    token1Address: tokens.ethereumTokens.weth.address,
    feeTier: v3Sdk.FeeAmount.LOWEST
  },
  {
    gid: 259,
    pairName: "USDC.e-USDC",
    address: "0x849c0ae884bFDc14DDdeB7Cae95494f368414855",
    chainId: chains.ChainId.POLYGON_ZKEVM,
    type: 1 /* V3 */,
    token0Address: tokens.polygonZkEvmTokens.usdce.address,
    token1Address: tokens.polygonZkEvmTokens.usdc.address,
    feeTier: v3Sdk.FeeAmount.LOWEST
  },
  {
    gid: 260,
    pairName: "WETH-WBNB",
    address: "0x753bA05488Cac9B3f7D59Ff7D3f13F31bB5eDf22",
    chainId: chains.ChainId.ARBITRUM_ONE,
    type: 1 /* V3 */,
    token0Address: tokens.arbitrumTokens.weth.address,
    token1Address: tokens.arbitrumTokens.wbnb.address,
    feeTier: v3Sdk.FeeAmount.MEDIUM
  },
  {
    gid: 261,
    pairName: "mPENDLE-PENDLE",
    address: "0x183F325b33d190597D80d1B46D865d0250fD9BF2",
    chainId: chains.ChainId.BSC,
    type: -1 /* StableSwap */,
    tokenAddresses: [tokens.bscTokens.mpendle.address, tokens.bscTokens.pendle.address]
  },
  {
    gid: 262,
    pairName: "mDLP-DLP",
    address: "0xA2915ae3bc8C6C03f59496B6Dd26aa6a4335b788",
    chainId: chains.ChainId.BSC,
    type: -1 /* StableSwap */,
    tokenAddresses: [tokens.bscTokens.mdlp.address, tokens.bscTokens.dlp.address]
  },
  {
    gid: 263,
    pairName: "rBNB-BNB",
    address: "0x5b46fC8392cDEd6A91A79d85eFabFD51C7956cA0",
    chainId: chains.ChainId.BSC,
    type: 1 /* V3 */,
    token0Address: tokens.bscTokens.rbnb.address,
    token1Address: tokens.bscTokens.wbnb.address,
    feeTier: v3Sdk.FeeAmount.LOWEST
  },
  {
    gid: 264,
    pairName: "BNB-USDT",
    address: "0x172fcD41E0913e95784454622d1c3724f546f849",
    chainId: chains.ChainId.BSC,
    type: 1 /* V3 */,
    token0Address: tokens.bscTokens.usdt.address,
    token1Address: tokens.bscTokens.wbnb.address,
    feeTier: v3Sdk.FeeAmount.LOWEST
  },
  {
    gid: 265,
    pairName: "USD+-USDC",
    address: "0x721F37495cD70383B0A77Bf1eB8f97eef29498Bb",
    chainId: chains.ChainId.ARBITRUM_ONE,
    type: 1 /* V3 */,
    token0Address: tokens.arbitrumTokens.usdc.address,
    token1Address: tokens.arbitrumTokens.usdplus.address,
    feeTier: v3Sdk.FeeAmount.LOW
  },
  {
    gid: 266,
    pairName: "USD+-USDT+",
    address: "0x8a06339Abd7499Af755DF585738ebf43D5D62B94",
    chainId: chains.ChainId.ARBITRUM_ONE,
    type: 1 /* V3 */,
    token0Address: tokens.arbitrumTokens.usdtplus.address,
    token1Address: tokens.arbitrumTokens.usdplus.address,
    feeTier: v3Sdk.FeeAmount.LOW
  },
  {
    gid: 267,
    pairName: "weETH-WETH",
    address: "0x249CfCA66a4F6D02a12376D079E5d131423A6b7a",
    chainId: chains.ChainId.ETHEREUM,
    type: 1 /* V3 */,
    token0Address: tokens.ethereumTokens.weth.address,
    token1Address: tokens.ethereumTokens.weETH.address,
    feeTier: v3Sdk.FeeAmount.LOWEST
  },
  {
    gid: 268,
    pairName: "AITECH-USDT",
    address: "0x55458175c5F5D34B9bD01c81F172780ED4271b23",
    chainId: chains.ChainId.BSC,
    type: 1 /* V3 */,
    token0Address: tokens.bscTokens.aitech.address,
    token1Address: tokens.bscTokens.usdt.address,
    feeTier: v3Sdk.FeeAmount.MEDIUM
  },
  {
    gid: 269,
    pairName: "USDV-USD+",
    address: "0x35D85D531BE7159cB6f92E8B9CeaF04eC28c6ad9",
    chainId: chains.ChainId.ARBITRUM_ONE,
    type: 1 /* V3 */,
    token0Address: tokens.arbitrumTokens.usdv.address,
    token1Address: tokens.arbitrumTokens.usdplus.address,
    feeTier: v3Sdk.FeeAmount.LOWEST
  }
];
var CONFIG_TESTNET = [
  {
    gid: 0,
    address: "0x523405d3072368BEe373F04EE738f2Aa3e3718c6",
    chainId: chains.ChainId.BSC,
    type: 0 /* V2 */,
    token0Address: "0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82",
    token1Address: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
    pairName: "CAKE-WBNB",
    feeTier: v3Sdk.FeeAmount.MEDIUM
  },
  {
    gid: 1,
    address: "0x05739503273DbFd72240C6d854675E1c67a75ce4",
    chainId: chains.ChainId.ARBITRUM_ONE,
    type: 0 /* V2 */,
    token0Address: "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1",
    token1Address: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
    pairName: "WETH-USDC",
    feeTier: v3Sdk.FeeAmount.MEDIUM
  },
  {
    gid: 2,
    address: "0x36696169C63e42cd08ce11f5deeBbCeBae652050",
    chainId: chains.ChainId.BSC,
    type: 1 /* V3 */,
    token0Address: "0x55d398326f99059fF775485246999027B3197955",
    token1Address: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
    pairName: "USDT-WBNB",
    feeTier: v3Sdk.FeeAmount.LOW
  },
  {
    gid: 3,
    address: "0x803036AC78752EF599EC75c500ac8B0Ac0bE67dF",
    chainId: chains.ChainId.BSC,
    type: 1 /* V3 */,
    token0Address: "0x4268B8F0B87b6Eae5d897996E6b845ddbD99Adf3",
    token1Address: "0x55d398326f99059fF775485246999027B3197955",
    pairName: "alxUSDC-USDT",
    feeTier: v3Sdk.FeeAmount.LOWEST
  },
  {
    gid: 4,
    address: "0x0BaCc7a9717e70EA0DA5Ac075889Bd87d4C81197",
    chainId: chains.ChainId.ARBITRUM_ONE,
    type: 1 /* V3 */,
    token0Address: "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1",
    token1Address: "0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9",
    pairName: "WETH-USDC",
    feeTier: v3Sdk.FeeAmount.LOW
  },
  {
    gid: 5,
    address: "0x0d7c4b40018969f81750d0a164c3839a77353EFB",
    chainId: chains.ChainId.ARBITRUM_ONE,
    type: 1 /* V3 */,
    token0Address: "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1",
    token1Address: "0x912CE59144191C1204E64559FE8253a0e49E6548",
    pairName: "WETH-ARB",
    feeTier: v3Sdk.FeeAmount.LOW
  },
  {
    gid: 6,
    address: "0x7524Fe020EDcD072EE98126b49Fa65Eb85F8C44C",
    chainId: chains.ChainId.ETHEREUM,
    type: 1 /* V3 */,
    token0Address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
    token1Address: "0xAf5191B0De278C7286d6C7CC6ab6BB8A73bA2Cd6",
    pairName: "USDC-STG",
    feeTier: v3Sdk.FeeAmount.MEDIUM
  },
  {
    gid: 7,
    address: "0x799Ea58D15429fa7C42cc211e2181FD4EF54ec37",
    chainId: chains.ChainId.BSC,
    type: 2 /* ALM */,
    pairName: "USDT-WBNB (BRIL#2)",
    token0Address: "0x55d398326f99059fF775485246999027B3197955",
    token1Address: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c"
  },
  {
    gid: 8,
    address: "0xBfaa05CA3078912344491926Ff81F6a75AEFea8b",
    chainId: chains.ChainId.ETHEREUM,
    type: 2 /* ALM */,
    pairName: "USDC-USDT (RANGE#2)",
    token0Address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
    token1Address: "0xdAC17F958D2ee523a2206206994597C13D831ec7"
  },
  {
    gid: 9,
    address: "0x589e8bC919fF18fbF62c7C3d8E3fD86ecD7549C3",
    chainId: chains.ChainId.ETHEREUM,
    type: 2 /* ALM */,
    pairName: "rETH-WETH (RANGE#1)",
    token0Address: "0xae78736Cd615f374D3085123A210448E74Fc6393",
    token1Address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2"
  },
  {
    gid: 10,
    address: "0xa9B98C0cc70a7625aCB12B7dec5D278F317d4Cb0",
    chainId: chains.ChainId.ARBITRUM_ONE,
    type: 2 /* ALM */,
    pairName: "WETH-ARB (DEFIEDGE#1)",
    token0Address: "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1",
    token1Address: "0x912CE59144191C1204E64559FE8253a0e49E6548"
  },
  {
    gid: 11,
    address: "0x881Ed694980A03EE653508aeb9EF3ffD9f56aC99",
    chainId: chains.ChainId.BSC,
    type: 3 /* VeCakePool */,
    pairName: "Testnet RevenueSharingPool"
  }
];

// src/constants/config/index.ts
var GAUGES_CONFIG = {
  [chains.ChainId.BSC]: CONFIG_PROD,
  [chains.ChainId.BSC_TESTNET]: CONFIG_TESTNET
};
var getContract = (client) => {
  const chainId = client.chain?.id;
  if (!chainId || !Object.keys(GAUGES_ADDRESS).includes(String(chainId))) {
    throw new Error(`Invalid client chain ${client.chain?.id}`);
  }
  return viem.getContract({
    address: GAUGES_ADDRESS[chainId],
    abi: gaugesVotingABI,
    publicClient: client
  });
};
var getCalcContract = (client) => {
  const chainId = client.chain?.id;
  if (!chainId || !Object.keys(GAUGES_CALC_ADDRESS).includes(String(chainId))) {
    throw new Error(`Invalid client chain ${client.chain?.id}`);
  }
  return viem.getContract({
    address: GAUGES_CALC_ADDRESS[chainId],
    abi: calcGaugesVotingABI,
    publicClient: client
  });
};

// src/fetchGaugesCount.ts
var fetchGaugesCount = async (client) => {
  const contract = getContract(client);
  const count = await contract.read.gaugeCount();
  return Number(count || 0);
};
var getGaugeHash = (gaugeAddress = viem.zeroAddress, chainId = 0) => {
  return viem.keccak256(viem.encodePacked(["address", "uint256"], [gaugeAddress, BigInt(chainId || 0)]));
};

// src/fetchAllGauges.ts
var fetchAllGauges = async (client) => {
  const contract = getContract(client);
  const counts = await fetchGaugesCount(client);
  const multicalls = [];
  for (let i = 0; i < counts; i++) {
    multicalls.push({
      ...contract,
      functionName: "gauges",
      args: [BigInt(i)]
    });
  }
  const response = await client.multicall({
    contracts: multicalls,
    allowFailure: false
  });
  return response.reduce((prev, curr) => {
    const [pid, masterChef, chainId, pairAddress, boostMultiplier, maxVoteCap] = curr;
    return [
      ...prev,
      {
        pid: Number(pid),
        hash: getGaugeHash(pairAddress, Number(chainId)),
        pairAddress,
        masterChef,
        chainId: Number(chainId),
        boostMultiplier: Number(boostMultiplier),
        maxVoteCap: Number(maxVoteCap)
      }
    ];
  }, []);
};

// src/fetchAllKilledGauges.ts
var filterKilledGauges = async (client, gauges) => {
  const contract = getContract(client);
  const multicalls = [];
  for (let i = 0; i < gauges.length; i++) {
    multicalls.push({
      ...contract,
      functionName: "gaugeIsKilled_",
      args: [gauges[i].hash]
    });
  }
  const response = await client.multicall({
    contracts: multicalls,
    allowFailure: false
  });
  return gauges.filter((_, index) => {
    return !response[index];
  });
};

// src/fetchGaugeVoting.ts
var fetchAllGaugesVoting = async (client, gaugeInfos, inCap = true) => {
  const contract = getCalcContract(client);
  const weights = await contract.read.massGetGaugeWeight([inCap]);
  return gaugeInfos.map((gauge) => ({
    ...gauge,
    weight: weights[gauge.gid] ?? 0n
  }));
};

// src/getAllGauges.ts
var getAllGauges = async (client, options = {
  testnet: false,
  inCap: true,
  bothCap: false,
  killed: false
}) => {
  const { testnet, inCap, bothCap, killed } = options;
  const presets = testnet ? CONFIG_TESTNET : CONFIG_PROD;
  const allGaugeInfos = await fetchAllGauges(client);
  let allActiveGaugeInfos = allGaugeInfos;
  if (!killed)
    allActiveGaugeInfos = await filterKilledGauges(client, allGaugeInfos);
  const allGaugeInfoConfigs = allActiveGaugeInfos.reduce((prev, gauge) => {
    const filters = presets.filter((p) => p.address === gauge.pairAddress && Number(p.chainId) === gauge.chainId);
    let preset;
    if (!filters.length)
      return prev;
    if (filters.length > 1) {
      preset = filters[filters.length - 1];
    } else {
      preset = filters[0];
    }
    return [
      ...prev,
      {
        ...preset,
        ...gauge
      }
    ];
  }, []);
  if (!bothCap) {
    const allGaugesVoting = await fetchAllGaugesVoting(client, allGaugeInfoConfigs, inCap);
    return allGaugesVoting;
  }
  const inCapVoting = await fetchAllGaugesVoting(client, allGaugeInfoConfigs, true);
  const notInCapVoting = await fetchAllGaugesVoting(client, allGaugeInfoConfigs, false);
  return inCapVoting.reduce((prev, inCapGauge) => {
    const notInCapGauge = notInCapVoting.find((p) => p.hash === inCapGauge.hash);
    return [
      ...prev,
      {
        ...inCapGauge,
        weight: 0n,
        inCapWeight: inCapGauge.weight,
        notInCapWeight: notInCapGauge?.weight
      }
    ];
  }, []);
};

exports.GAUGES_ADDRESS = GAUGES_ADDRESS;
exports.GAUGES_CALC_ADDRESS = GAUGES_CALC_ADDRESS;
exports.GAUGES_CONFIG = GAUGES_CONFIG;
exports.GAUGE_TYPE_NAMES = GAUGE_TYPE_NAMES;
exports.GaugeType = GaugeType;
exports.calcGaugesVotingABI = calcGaugesVotingABI;
exports.gaugesVotingABI = gaugesVotingABI;
exports.getAllGauges = getAllGauges;
