'use strict';

var chains = require('@pancakeswap/chains');
var sdk = require('@pancakeswap/sdk');

// src/constants/arb.ts
var CAKE_MAINNET = new sdk.ERC20Token(
  chains.ChainId.BSC,
  "0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82",
  18,
  "CAKE",
  "PancakeSwap Token",
  "https://pancakeswap.finance/"
);
var CZRED_MAINNET = new sdk.ERC20Token(
  chains.ChainId.BSC,
  "0x5cd0c2C744caF04cda258Efc6558A3Ed3defE97b",
  18,
  "CZR",
  "CZRED",
  "https://czodiac.com/"
);
var CAKE_TESTNET = new sdk.ERC20Token(
  chains.ChainId.BSC_TESTNET,
  "0x8d008B313C1d6C7fE2982F62d32Da7507cF43551",
  18,
  "CAKE",
  "PancakeSwap Token",
  "https://pancakeswap.finance/"
);
var USDC_BSC = new sdk.ERC20Token(
  chains.ChainId.BSC,
  "0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d",
  18,
  "USDC",
  "Binance-Peg USD Coin",
  "https://www.centre.io/usdc"
);
var USDC_TESTNET = new sdk.ERC20Token(
  chains.ChainId.BSC_TESTNET,
  "0x64544969ed7EBf5f083679233325356EbE738930",
  18,
  "USDC",
  "Binance-Peg USD Coin",
  "https://www.centre.io/usdc"
);
var USDC_ETH = new sdk.ERC20Token(
  chains.ChainId.ETHEREUM,
  "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
  6,
  "USDC",
  "USD Coin"
);
var USDC_GOERLI = new sdk.ERC20Token(
  chains.ChainId.GOERLI,
  "0x07865c6E87B9F70255377e024ace6630C1Eaa37F",
  6,
  "tUSDC",
  "test USD Coin"
);
var USDT_BSC = new sdk.ERC20Token(
  chains.ChainId.BSC,
  "0x55d398326f99059fF775485246999027B3197955",
  18,
  "USDT",
  "Tether USD",
  "https://tether.to/"
);
var USDT_ETH = new sdk.ERC20Token(
  chains.ChainId.ETHEREUM,
  "0xdAC17F958D2ee523a2206206994597C13D831ec7",
  6,
  "USDT",
  "Tether USD",
  "https://tether.to/"
);
var BUSD_BSC = new sdk.ERC20Token(
  chains.ChainId.BSC,
  "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56",
  18,
  "BUSD",
  "Binance USD",
  "https://www.paxos.com/busd/"
);
var BUSD_TESTNET = new sdk.ERC20Token(
  chains.ChainId.BSC_TESTNET,
  "0xaB1a4d4f1D656d2450692D237fdD6C7f9146e814",
  18,
  "BUSD",
  "Binance USD",
  "https://www.paxos.com/busd/"
);
var BUSD_ETH = new sdk.ERC20Token(
  chains.ChainId.ETHEREUM,
  "0x4Fabb145d64652a948d72533023f6E7A623C7C53",
  18,
  "BUSD",
  "Binance USD",
  "https://www.paxos.com/busd/"
);
var BUSD_GOERLI = new sdk.ERC20Token(
  chains.ChainId.GOERLI,
  "0xb809b9B2dc5e93CB863176Ea2D565425B03c0540",
  18,
  "BUSD",
  "Binance USD",
  "https://www.paxos.com/busd/"
);
var BUSD = {
  [chains.ChainId.ETHEREUM]: BUSD_ETH,
  [chains.ChainId.GOERLI]: BUSD_GOERLI,
  [chains.ChainId.BSC]: BUSD_BSC,
  [chains.ChainId.BSC_TESTNET]: BUSD_TESTNET,
  [chains.ChainId.ZKSYNC]: new sdk.ERC20Token(
    chains.ChainId.ZKSYNC,
    "0x2039bb4116B4EFc145Ec4f0e2eA75012D6C0f181",
    18,
    "BUSD",
    "Binance USD"
  )
};
var CZRED = {
  [chains.ChainId.BSC]: CZRED_MAINNET
};
var CAKE = {
  [chains.ChainId.ETHEREUM]: new sdk.ERC20Token(
    chains.ChainId.ETHEREUM,
    "0x152649eA73beAb28c5b49B26eb48f7EAD6d4c898",
    18,
    "CAKE",
    "PancakeSwap Token",
    "https://pancakeswap.finance/"
  ),
  [chains.ChainId.GOERLI]: new sdk.ERC20Token(
    chains.ChainId.GOERLI,
    "0xc2C3eAbE0368a2Ea97f485b03D1098cdD7d0c081",
    18,
    "CAKE",
    "PancakeSwap Token",
    "https://pancakeswap.finance/"
  ),
  [chains.ChainId.BSC]: CAKE_MAINNET,
  [chains.ChainId.BSC_TESTNET]: CAKE_TESTNET,
  [chains.ChainId.POLYGON_ZKEVM]: new sdk.ERC20Token(
    chains.ChainId.POLYGON_ZKEVM,
    "0x0D1E753a25eBda689453309112904807625bEFBe",
    18,
    "CAKE",
    "PancakeSwap Token",
    "https://pancakeswap.finance/"
  ),
  [chains.ChainId.POLYGON_ZKEVM_TESTNET]: new sdk.ERC20Token(
    chains.ChainId.POLYGON_ZKEVM_TESTNET,
    "0x2B3C5df29F73dbF028BA82C33e0A5A6e5800F75e",
    18,
    "CAKE",
    "PancakeSwap Token",
    "https://pancakeswap.finance/"
  ),
  [chains.ChainId.ZKSYNC_TESTNET]: new sdk.ERC20Token(
    chains.ChainId.ZKSYNC_TESTNET,
    "0xFf2FA31273c1aedB67017B52C625633d2F021f67",
    18,
    "CAKE",
    "PancakeSwap Token",
    "https://pancakeswap.finance/"
  ),
  [chains.ChainId.ZKSYNC]: new sdk.ERC20Token(
    chains.ChainId.ZKSYNC,
    "0x3A287a06c66f9E95a56327185cA2BDF5f031cEcD",
    18,
    "CAKE",
    "PancakeSwap Token",
    "https://pancakeswap.finance/"
  ),
  [chains.ChainId.ARBITRUM_ONE]: new sdk.ERC20Token(
    chains.ChainId.ARBITRUM_ONE,
    "0x1b896893dfc86bb67Cf57767298b9073D2c1bA2c",
    18,
    "CAKE",
    "PancakeSwap Token",
    "https://pancakeswap.finance/"
  ),
  [chains.ChainId.ARBITRUM_GOERLI]: new sdk.ERC20Token(
    chains.ChainId.ARBITRUM_GOERLI,
    "0x62FF25CFD64E55673168c3656f4902bD7Aa5F0f4",
    18,
    "CAKE",
    "PancakeSwap Token",
    "https://pancakeswap.finance/"
  ),
  [chains.ChainId.LINEA]: new sdk.ERC20Token(
    chains.ChainId.LINEA,
    "0x0D1E753a25eBda689453309112904807625bEFBe",
    18,
    "CAKE",
    "PancakeSwap Token",
    "https://pancakeswap.finance/"
  ),
  [chains.ChainId.BASE]: new sdk.ERC20Token(
    chains.ChainId.BASE,
    "0x3055913c90Fcc1A6CE9a358911721eEb942013A1",
    18,
    "CAKE",
    "PancakeSwap Token",
    "https://pancakeswap.finance/"
  ),
  [chains.ChainId.BASE_TESTNET]: new sdk.ERC20Token(
    chains.ChainId.BASE_TESTNET,
    "0x052a99849Ef2e13a5CB28275862991671D4b6fF5",
    18,
    "CAKE",
    "PancakeSwap Token",
    "https://pancakeswap.finance/"
  ),
  [chains.ChainId.LINEA_TESTNET]: new sdk.ERC20Token(
    chains.ChainId.LINEA_TESTNET,
    "0x2B3C5df29F73dbF028BA82C33e0A5A6e5800F75e",
    18,
    "CAKE",
    "PancakeSwap Token",
    "https://pancakeswap.finance/"
  ),
  [chains.ChainId.OPBNB]: new sdk.ERC20Token(
    chains.ChainId.OPBNB,
    "0x2779106e4F4A8A28d77A24c18283651a2AE22D1C",
    18,
    "CAKE",
    "PancakeSwap Token",
    "https://pancakeswap.finance/"
  ),
  [chains.ChainId.OPBNB_TESTNET]: new sdk.ERC20Token(
    chains.ChainId.OPBNB_TESTNET,
    "0xa11B290B038C35711eB309268a2460754f730921",
    18,
    "CAKE",
    "PancakeSwap Token",
    "https://pancakeswap.finance/"
  )
};
var USDC = {
  [chains.ChainId.BSC]: USDC_BSC,
  [chains.ChainId.BSC_TESTNET]: USDC_TESTNET,
  [chains.ChainId.ETHEREUM]: USDC_ETH,
  [chains.ChainId.GOERLI]: USDC_GOERLI,
  [chains.ChainId.ZKSYNC]: new sdk.ERC20Token(chains.ChainId.ZKSYNC, "0x3355df6D4c9C3035724Fd0e3914dE96A5a83aaf4", 6, "USDC", "USD Coin"),
  [chains.ChainId.ZKSYNC_TESTNET]: new sdk.ERC20Token(
    chains.ChainId.ZKSYNC_TESTNET,
    "0x0faF6df7054946141266420b43783387A78d82A9",
    6,
    "USDC",
    "USD Coin"
  ),
  [chains.ChainId.ARBITRUM_ONE]: new sdk.ERC20Token(
    chains.ChainId.ARBITRUM_ONE,
    "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
    6,
    "USDC",
    "USD Coin"
  ),
  [chains.ChainId.ARBITRUM_GOERLI]: new sdk.ERC20Token(
    chains.ChainId.ARBITRUM_GOERLI,
    "0x179522635726710Dd7D2035a81d856de4Aa7836c",
    6,
    "USDC",
    "USD Coin"
  ),
  [chains.ChainId.POLYGON_ZKEVM]: new sdk.ERC20Token(
    chains.ChainId.POLYGON_ZKEVM,
    "0xA8CE8aee21bC2A48a5EF670afCc9274C7bbbC035",
    6,
    "USDC",
    "USD Coin"
  ),
  [chains.ChainId.LINEA]: new sdk.ERC20Token(chains.ChainId.LINEA, "0x176211869cA2b568f2A7D4EE941E073a821EE1ff", 6, "USDC", "USD Coin"),
  [chains.ChainId.LINEA_TESTNET]: new sdk.ERC20Token(
    chains.ChainId.LINEA_TESTNET,
    "0xf56dc6695cF1f5c364eDEbC7Dc7077ac9B586068",
    6,
    "USDC",
    "USD Coin"
  ),
  [chains.ChainId.BASE_TESTNET]: new sdk.ERC20Token(
    chains.ChainId.BASE_TESTNET,
    "0x853154e2A5604E5C74a2546E2871Ad44932eB92C",
    6,
    "USDC",
    "USD Coin"
  ),
  [chains.ChainId.BASE]: new sdk.ERC20Token(chains.ChainId.BASE, "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913", 6, "USDC", "USD Coin"),
  [chains.ChainId.OPBNB_TESTNET]: new sdk.ERC20Token(
    chains.ChainId.OPBNB_TESTNET,
    "0x845E27B8A4ad1Fe3dc0b41b900dC8C1Bb45141C3",
    6,
    "USDC",
    "USD Coin"
  ),
  [chains.ChainId.SCROLL_SEPOLIA]: new sdk.ERC20Token(
    chains.ChainId.SCROLL_SEPOLIA,
    "0x02a3e7E0480B668bD46b42852C58363F93e3bA5C",
    6,
    "USDC",
    "USD Coin"
  ),
  [chains.ChainId.SEPOLIA]: new sdk.ERC20Token(
    chains.ChainId.SEPOLIA,
    "0x6f14C02Fc1F78322cFd7d707aB90f18baD3B54f5",
    6,
    "USDC",
    "USD Coin"
  ),
  [chains.ChainId.ARBITRUM_SEPOLIA]: new sdk.ERC20Token(
    chains.ChainId.ARBITRUM_SEPOLIA,
    "0x75faf114eafb1BDbe2F0316DF893fd58CE46AA4d",
    6,
    "USDC",
    "USD Coin"
  ),
  [chains.ChainId.BASE_SEPOLIA]: new sdk.ERC20Token(
    chains.ChainId.BASE_SEPOLIA,
    "0x036CbD53842c5426634e7929541eC2318f3dCF7e",
    6,
    "USDC",
    "USD Coin"
  )
};
var USDT = {
  [chains.ChainId.BSC]: USDT_BSC,
  [chains.ChainId.ETHEREUM]: USDT_ETH,
  [chains.ChainId.ARBITRUM_ONE]: new sdk.ERC20Token(
    chains.ChainId.ARBITRUM_ONE,
    "0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9",
    6,
    "USDT",
    "Tether USD"
  ),
  [chains.ChainId.POLYGON_ZKEVM]: new sdk.ERC20Token(
    chains.ChainId.POLYGON_ZKEVM,
    "0x1E4a5963aBFD975d8c9021ce480b42188849D41d",
    6,
    "USDT",
    "Tether USD"
  ),
  [chains.ChainId.POLYGON_ZKEVM_TESTNET]: new sdk.ERC20Token(
    chains.ChainId.POLYGON_ZKEVM_TESTNET,
    "0x7379a261bC347BDD445484A91648Abf4A2BDEe5E",
    6,
    "USDT",
    "Tether USD"
  ),
  [chains.ChainId.ZKSYNC]: new sdk.ERC20Token(
    chains.ChainId.ZKSYNC,
    "0x493257fD37EDB34451f62EDf8D2a0C418852bA4C",
    6,
    "USDT",
    "Tether USD"
  ),
  [chains.ChainId.OPBNB_TESTNET]: new sdk.ERC20Token(
    chains.ChainId.OPBNB_TESTNET,
    "0xCF712f20c85421d00EAa1B6F6545AaEEb4492B75",
    6,
    "USDT",
    "Tether USD"
  ),
  [chains.ChainId.OPBNB]: new sdk.ERC20Token(
    chains.ChainId.OPBNB,
    "0x9e5AAC1Ba1a2e6aEd6b32689DFcF62A509Ca96f3",
    18,
    "USDT",
    "Tether USD"
  ),
  [chains.ChainId.LINEA]: new sdk.ERC20Token(chains.ChainId.LINEA, "0xA219439258ca9da29E9Cc4cE5596924745e12B93", 6, "USDT", "Tether USD")
};
var WBTC_ETH = new sdk.ERC20Token(
  chains.ChainId.ETHEREUM,
  "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
  8,
  "WBTC",
  "Wrapped BTC"
);
var STABLE_COIN = {
  [chains.ChainId.ETHEREUM]: USDT[chains.ChainId.ETHEREUM],
  [chains.ChainId.GOERLI]: USDC[chains.ChainId.GOERLI],
  [chains.ChainId.BSC]: USDT[chains.ChainId.BSC],
  [chains.ChainId.BSC_TESTNET]: BUSD[chains.ChainId.BSC_TESTNET],
  [chains.ChainId.ARBITRUM_ONE]: USDC[chains.ChainId.ARBITRUM_ONE],
  [chains.ChainId.ARBITRUM_GOERLI]: USDC[chains.ChainId.ARBITRUM_GOERLI],
  [chains.ChainId.ZKSYNC]: USDC[chains.ChainId.ZKSYNC],
  [chains.ChainId.ZKSYNC_TESTNET]: USDC[chains.ChainId.ZKSYNC_TESTNET],
  [chains.ChainId.POLYGON_ZKEVM]: USDT[chains.ChainId.POLYGON_ZKEVM],
  [chains.ChainId.POLYGON_ZKEVM_TESTNET]: USDT[chains.ChainId.POLYGON_ZKEVM_TESTNET],
  [chains.ChainId.LINEA]: USDC[chains.ChainId.LINEA],
  [chains.ChainId.LINEA_TESTNET]: USDC[chains.ChainId.LINEA_TESTNET],
  [chains.ChainId.OPBNB]: USDT[chains.ChainId.OPBNB],
  [chains.ChainId.OPBNB_TESTNET]: USDT[chains.ChainId.OPBNB_TESTNET],
  [chains.ChainId.BASE]: USDC[chains.ChainId.BASE],
  [chains.ChainId.BASE_TESTNET]: USDC[chains.ChainId.BASE_TESTNET],
  [chains.ChainId.SCROLL_SEPOLIA]: USDC[chains.ChainId.SCROLL_SEPOLIA],
  [chains.ChainId.SEPOLIA]: USDC[chains.ChainId.SEPOLIA],
  [chains.ChainId.ARBITRUM_SEPOLIA]: USDC[chains.ChainId.ARBITRUM_SEPOLIA],
  [chains.ChainId.BASE_SEPOLIA]: USDC[chains.ChainId.BASE_SEPOLIA]
};

// src/constants/arb.ts
var arbitrumTokens = {
  weth: sdk.WETH9[chains.ChainId.ARBITRUM_ONE],
  usdt: USDT[chains.ChainId.ARBITRUM_ONE],
  usdc: USDC[chains.ChainId.ARBITRUM_ONE],
  cake: CAKE[chains.ChainId.ARBITRUM_ONE],
  arb: new sdk.ERC20Token(
    chains.ChainId.ARBITRUM_ONE,
    "0x912CE59144191C1204E64559FE8253a0e49E6548",
    18,
    "ARB",
    "Arbitrum",
    "https://arbitrum.io/"
  ),
  gmx: new sdk.ERC20Token(
    chains.ChainId.ARBITRUM_ONE,
    "0xfc5A1A6EB076a2C7aD06eD22C90d7E710E35ad0a",
    18,
    "GMX",
    "GMX",
    "https://gmx.io/#/"
  ),
  wbtc: new sdk.ERC20Token(
    chains.ChainId.ARBITRUM_ONE,
    "0x2f2a2543B76A4166549F7aaB2e75Bef0aefC5B0f",
    8,
    "WBTC",
    "Wrapped BTC",
    "https://bitcoin.org/"
  ),
  alp: new sdk.ERC20Token(
    chains.ChainId.ARBITRUM_ONE,
    "0xBc76B3FD0D18C7496C0B04aeA0Fe7C3Ed0e4d9C9",
    18,
    "ALP",
    "ApolloX LP",
    "https://www.apollox.finance/en"
  ),
  lvl: new sdk.ERC20Token(
    chains.ChainId.ARBITRUM_ONE,
    "0xB64E280e9D1B5DbEc4AcceDb2257A87b400DB149",
    18,
    "LVL",
    "Level Token",
    "https://level.finance/"
  ),
  mgp: new sdk.ERC20Token(
    chains.ChainId.ARBITRUM_ONE,
    "0xa61F74247455A40b01b0559ff6274441FAfa22A3",
    18,
    "MGP",
    "Magpie Token",
    "https://www.magpiexyz.io/"
  ),
  dai: new sdk.ERC20Token(
    chains.ChainId.ARBITRUM_ONE,
    "0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1",
    18,
    "DAI",
    "Dai Stablecoin",
    "https://www.makerdao.com/"
  ),
  axlUSDC: new sdk.ERC20Token(
    chains.ChainId.ARBITRUM_ONE,
    "0xEB466342C4d449BC9f53A865D5Cb90586f405215",
    6,
    "axlUSDC",
    "Axelar Wrapped USDC",
    "https://axelarscan.io/assets/"
  ),
  stg: new sdk.ERC20Token(
    chains.ChainId.ARBITRUM_ONE,
    "0x6694340fc020c5E6B96567843da2df01b2CE1eb6",
    18,
    "STG",
    "StargateToken",
    "https://stargate.finance/"
  ),
  pendle: new sdk.ERC20Token(
    chains.ChainId.ARBITRUM_ONE,
    "0x0c880f6761F1af8d9Aa9C466984b80DAb9a8c9e8",
    18,
    "PENDLE",
    "Pendle",
    "https://www.pendle.finance/"
  ),
  mpendle: new sdk.ERC20Token(
    chains.ChainId.ARBITRUM_ONE,
    "0xB688BA096b7Bb75d7841e47163Cd12D18B36A5bF",
    18,
    "mPENDLE",
    "mPendle",
    "https://www.pendle.magpiexyz.io/stake"
  ),
  rdnt: new sdk.ERC20Token(
    chains.ChainId.ARBITRUM_ONE,
    "0x3082CC23568eA640225c2467653dB90e9250AaA0",
    18,
    "RDNT",
    "Radiant",
    "https://radiant.capital/"
  ),
  magic: new sdk.ERC20Token(
    chains.ChainId.ARBITRUM_ONE,
    "0x539bdE0d7Dbd336b79148AA742883198BBF60342",
    18,
    "MAGIC",
    "Magic Internet Money",
    "https://treasure.lol/"
  ),
  wstETH: new sdk.ERC20Token(
    chains.ChainId.ARBITRUM_ONE,
    "0x5979D7b546E38E414F7E9822514be443A4800529",
    18,
    "wstETH",
    "Wrapped liquid staked Ether 2.0",
    "https://lido.fi/"
  ),
  rETH: new sdk.ERC20Token(
    chains.ChainId.ARBITRUM_ONE,
    "0xEC70Dcb4A1EFa46b8F2D97C310C9c4790ba5ffA8",
    18,
    "rETH",
    "Rocket Pool ETH",
    "https://rocketpool.net/"
  ),
  link: new sdk.ERC20Token(
    chains.ChainId.ARBITRUM_ONE,
    "0xf97f4df75117a78c1A5a0DBb814Af92458539FB4",
    18,
    "LINK",
    "ChainLink Token",
    "https://chain.link/"
  ),
  stEUR: new sdk.ERC20Token(
    chains.ChainId.ARBITRUM_ONE,
    "0x004626A008B1aCdC4c74ab51644093b155e59A23",
    18,
    "stEUR",
    "Staked agEUR",
    "https://www.angle.money/"
  ),
  kuji: new sdk.ERC20Token(
    chains.ChainId.ARBITRUM_ONE,
    "0x3A18dcC9745eDcD1Ef33ecB93b0b6eBA5671e7Ca",
    6,
    "KUJI",
    "Kujira native asset",
    "https://kujira.network/"
  ),
  dmt: new sdk.ERC20Token(
    chains.ChainId.ARBITRUM_ONE,
    "0x8B0E6f19Ee57089F7649A455D89D7bC6314D04e8",
    18,
    "DMT",
    "DMT",
    "https://sankodreammachine.net/"
  ),
  eqb: new sdk.ERC20Token(
    chains.ChainId.ARBITRUM_ONE,
    "0xBfbCFe8873fE28Dfa25f1099282b088D52bbAD9C",
    18,
    "EQB",
    "Equilibria Token",
    "https://equilibria.fi/home"
  ),
  grai: new sdk.ERC20Token(
    chains.ChainId.ARBITRUM_ONE,
    "0x894134a25a5faC1c2C26F1d8fBf05111a3CB9487",
    18,
    "GRAI",
    "Gravita Debt Token",
    "https://www.gravitaprotocol.com/"
  ),
  swETH: new sdk.ERC20Token(
    chains.ChainId.ARBITRUM_ONE,
    "0xbc011A12Da28e8F0f528d9eE5E7039E22F91cf18",
    18,
    "swETH",
    "swETH",
    "https://www.swellnetwork.io/"
  ),
  xai: new sdk.ERC20Token(
    chains.ChainId.ARBITRUM_ONE,
    "0x4Cb9a7AE498CEDcBb5EAe9f25736aE7d428C9D66",
    18,
    "XAI",
    "Xai",
    "https://xai.games/"
  ),
  usdplus: new sdk.ERC20Token(
    chains.ChainId.ARBITRUM_ONE,
    "0xe80772Eaf6e2E18B651F160Bc9158b2A5caFCA65",
    6,
    "USD+",
    "USD+",
    "https://overnight.fi/"
  ),
  usdce: new sdk.ERC20Token(
    chains.ChainId.ARBITRUM_ONE,
    "0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8",
    6,
    "USDC.e",
    "USD Coin (Arb1)",
    "https://www.centre.io/"
  ),
  usdtplus: new sdk.ERC20Token(
    chains.ChainId.ARBITRUM_ONE,
    "0xb1084db8D3C05CEbd5FA9335dF95EE4b8a0edc30",
    6,
    "USDT+",
    "USDT+",
    "https://overnight.fi/"
  ),
  ethplus: new sdk.ERC20Token(
    chains.ChainId.ARBITRUM_ONE,
    "0xD4939D69B31fbE981ed6904A3aF43Ee1dc777Aab",
    18,
    "ETH+",
    "ETH+",
    "https://www.swellnetwork.io/"
  ),
  ovn: new sdk.ERC20Token(
    chains.ChainId.ARBITRUM_ONE,
    "0xA3d1a8DEB97B111454B294E2324EfAD13a9d8396",
    18,
    "OVN",
    "OVN",
    "https://overnight.fi/"
  ),
  wbnb: new sdk.ERC20Token(
    chains.ChainId.ARBITRUM_ONE,
    "0xa9004A5421372E1D83fB1f85b0fc986c912f91f3",
    18,
    "WBNB",
    "Wrapped BNB",
    "https://www.bnbchain.org/en"
  ),
  usdv: new sdk.ERC20Token(
    chains.ChainId.ARBITRUM_ONE,
    "0x323665443CEf804A3b5206103304BD4872EA4253",
    6,
    "USDV",
    "USDV",
    "https://usdv.money/"
  )
};
var arbitrumGoerliTokens = {
  weth: sdk.WETH9[chains.ChainId.ARBITRUM_GOERLI],
  usdc: USDC[chains.ChainId.ARBITRUM_GOERLI],
  cake: CAKE[chains.ChainId.ARBITRUM_GOERLI],
  mockA: new sdk.ERC20Token(chains.ChainId.ARBITRUM_GOERLI, "0x394d64eD40a6aF892D8562eE816D5e71D8999E52", 18, "A", "MOCK Token A")
};
var arbSepoliaTokens = {
  weth: sdk.WETH9[chains.ChainId.ARBITRUM_SEPOLIA],
  usdc: USDC[chains.ChainId.ARBITRUM_SEPOLIA]
};
var baseTokens = {
  weth: sdk.WETH9[chains.ChainId.BASE],
  usdc: USDC[chains.ChainId.BASE],
  cake: CAKE[chains.ChainId.BASE],
  cbETH: new sdk.ERC20Token(
    chains.ChainId.BASE,
    "0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22",
    18,
    "cbETH",
    "Coinbase Wrapped Staked ETH"
  ),
  usdbc: new sdk.ERC20Token(
    chains.ChainId.BASE,
    "0xd9aAEc86B65D86f6A7B5B1b0c42FFA531710b6CA",
    6,
    "USDbC",
    "USD Base Coin",
    "https://help.coinbase.com/en/coinbase/getting-started/crypto-education/usd-base-coin"
  ),
  dai: new sdk.ERC20Token(
    chains.ChainId.BASE,
    "0x50c5725949A6F0c72E6C4a641F24049A917DB0Cb",
    18,
    "DAI",
    "Dai Stablecoin",
    "https://www.makerdao.com/"
  ),
  tbtc: new sdk.ERC20Token(
    chains.ChainId.BASE,
    "0x236aa50979D5f3De3Bd1Eeb40E81137F22ab794b",
    18,
    "tBTC",
    "Base tBTC v2",
    "https://threshold.network/"
  ),
  axlusdc: new sdk.ERC20Token(
    chains.ChainId.BASE,
    "0xEB466342C4d449BC9f53A865D5Cb90586f405215",
    6,
    "axlUSDC",
    "Axelar Wrapped USDC",
    "https://axelarscan.io/assets/"
  )
};
var baseSepoliaTokens = {
  weth: sdk.WETH9[chains.ChainId.BASE_SEPOLIA],
  usdc: USDC[chains.ChainId.BASE_SEPOLIA]
};
var baseTestnetTokens = {
  weth: sdk.WETH9[chains.ChainId.BASE_TESTNET],
  usdc: USDC[chains.ChainId.BASE_TESTNET],
  cake: CAKE[chains.ChainId.BASE_TESTNET],
  mockA: new sdk.ERC20Token(chains.ChainId.BASE_TESTNET, "0x15571d4a7D08e16108b97cf7c80Ffd5C3fcb9657", 18, "A", "Mock A")
};
var bscTokens = {
  wbnb: sdk.WBNB[chains.ChainId.BSC],
  // bnb here points to the wbnb contract. Wherever the currency BNB is required, conditional checks for the symbol 'BNB' can be used
  bnb: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
    18,
    "BNB",
    "BNB",
    "https://www.binance.com/"
  ),
  cake: CAKE_MAINNET,
  czred: CZRED_MAINNET,
  czusd: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0xE68b79e51bf826534Ff37AA9CeE71a3842ee9c70",
    18,
    "CZUSD",
    "CZodiac USD",
    "https://czodiac.com/"
  ),
  gmi: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x93D8d25E3C9A847a5Da79F79ecaC89461FEcA846",
    18,
    "GMI",
    "Gamifi",
    "https://gamifi.gg/"
  ),
  tlos: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0xb6C53431608E626AC81a9776ac3e999c5556717c",
    18,
    "TLOS",
    "Telos",
    "https://www.telos.net/"
  ),
  beta: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0xBe1a001FE942f96Eea22bA08783140B9Dcc09D28",
    18,
    "BETA",
    "Beta Finance",
    "https://betafinance.org"
  ),
  nft: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x1fC9004eC7E5722891f5f38baE7678efCB11d34D",
    6,
    "NFT",
    "APENFT",
    "https://apenft.org"
  ),
  stephero: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0xE8176d414560cFE1Bf82Fd73B986823B89E4F545",
    18,
    "HERO",
    "StepHero",
    "https://stephero.io/"
  ),
  pros: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0xEd8c8Aa8299C10f067496BB66f8cC7Fb338A3405",
    18,
    "PROS",
    "Prosper",
    "https://prosper.so/"
  ),
  qbt: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x17B7163cf1Dbd286E262ddc68b553D899B93f526",
    18,
    "QBT",
    "Qubit Token",
    "https://qbt.fi/"
  ),
  cvp: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x5Ec3AdBDae549Dce842e24480Eb2434769e22B2E",
    18,
    "CVP",
    "Concentrated Voting Power Token",
    "https://powerpool.finance/"
  ),
  bscdefi: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x40E46dE174dfB776BB89E04dF1C47d8a66855EB3",
    18,
    "BSCDEFI",
    "ChainId.BSC Defi blue chips token",
    "https://powerpool.finance/"
  ),
  busd: BUSD_BSC,
  dai: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3",
    18,
    "DAI",
    "Dai Stablecoin",
    "https://www.makerdao.com/"
  ),
  usdt: USDT_BSC,
  btcb: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c",
    18,
    "BTCB",
    "Binance BTC",
    "https://bitcoin.org/"
  ),
  ust: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x23396cF899Ca06c4472205fC903bDB4de249D6fC",
    18,
    "UST",
    "Wrapped UST Token",
    "https://mirror.finance/"
  ),
  eth: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x2170Ed0880ac9A755fd29B2688956BD959F933F8",
    18,
    "ETH",
    "Binance-Peg Ethereum Token",
    "https://ethereum.org/en/"
  ),
  usdc: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d",
    18,
    "USDC",
    "Binance-Peg USD Coin",
    "https://www.centre.io/usdc"
  ),
  kalm: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x4BA0057f784858a48fe351445C672FF2a3d43515",
    18,
    "KALM",
    "Kalmar Token",
    "https://kalmar.io/"
  ),
  dkt: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x7Ceb519718A80Dd78a8545AD8e7f401dE4f2faA7",
    18,
    "DKT",
    "Duelist King",
    "https://duelistking.com/"
  ),
  hotcross: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x4FA7163E153419E0E1064e418dd7A99314Ed27b6",
    18,
    "HOTCROSS",
    "Hotcross Token",
    "https://www.hotcross.com/"
  ),
  belt: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0xE0e514c71282b6f4e823703a39374Cf58dc3eA4f",
    18,
    "BELT",
    "Belt Token",
    "https://beta.belt.fi/"
  ),
  watch: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x7A9f28EB62C791422Aa23CeAE1dA9C847cBeC9b0",
    18,
    "WATCH",
    "Yieldwatch Token",
    "https://yieldwatch.net/"
  ),
  bry: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0xf859Bf77cBe8699013d6Dbc7C2b926Aaf307F830",
    18,
    "BRY",
    "Berry Token",
    "https://berrydata.co/"
  ),
  wsote: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x541E619858737031A1244A5d0Cd47E5ef480342c",
    18,
    "wSOTE",
    "Soteria Token",
    "https://soteria.finance/"
  ),
  helmet: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x948d2a81086A075b3130BAc19e4c6DEe1D2E3fE8",
    18,
    "Helmet",
    "Helmet Token",
    "https://www.helmet.insure/"
  ),
  ten: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0xdFF8cb622790b7F92686c722b02CaB55592f152C",
    18,
    "TEN",
    "Tenet Token",
    "https://www.tenet.farm/"
  ),
  ditto: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x233d91A0713155003fc4DcE0AFa871b508B3B715",
    9,
    "DITTO",
    "Ditto Token",
    "https://ditto.money/"
  ),
  blink: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x63870A18B6e42b01Ef1Ad8A2302ef50B7132054F",
    6,
    "BLINK",
    "Blink Token",
    "https://blink.wink.org"
  ),
  syrup: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x009cF7bC57584b7998236eff51b98A168DceA9B0",
    18,
    "SYRUP",
    "SyrupBar Token",
    "https://pancakeswap.finance/"
  ),
  pha: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x0112e557d400474717056C4e6D40eDD846F38351",
    18,
    "PHA",
    "Phala Token",
    "https://phala.network"
  ),
  babycake: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0xdB8D30b74bf098aF214e862C90E647bbB1fcC58c",
    18,
    "BABYCAKE",
    "Baby Cake Token",
    "https://babycake.app/"
  ),
  bmon: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x08ba0619b1e7A582E0BCe5BBE9843322C954C340",
    18,
    "BMON",
    "Binamon Token",
    "https://binamon.org/"
  ),
  hero: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0xD40bEDb44C081D2935eebA6eF5a3c8A31A1bBE13",
    18,
    "HERO",
    "Metahero Token",
    "https://metahero.io/"
  ),
  wsg: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0xA58950F05FeA2277d2608748412bf9F802eA4901",
    18,
    "WSG",
    "Wall Street Games Token",
    "https://wsg.gg/"
  ),
  mcrn: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0xacb2d47827C9813AE26De80965845D80935afd0B",
    18,
    "MCRN",
    "Macaronswap Token",
    "https://www.macaronswap.finance/"
  ),
  revv: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x833F307aC507D47309fD8CDD1F835BeF8D702a93",
    18,
    "REVV",
    "REVV Token",
    "https://revvmotorsport.com/"
  ),
  skill: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x154A9F9cbd3449AD22FDaE23044319D6eF2a1Fab",
    18,
    "SKILL",
    "Cryptoblades Token",
    "https://www.cryptoblades.io/"
  ),
  if: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0xB0e1fc65C1a741b4662B813eB787d369b8614Af1",
    18,
    "IF",
    "Impossible Finance Token",
    "https://impossible.finance/"
  ),
  sps: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x1633b7157e7638C4d6593436111Bf125Ee74703F",
    18,
    "SPS",
    "Splinterlands Token",
    "https://splinterlands.com"
  ),
  chess: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x20de22029ab63cf9A7Cf5fEB2b737Ca1eE4c82A6",
    18,
    "CHESS",
    "Chess Token",
    "https://tranchess.com/"
  ),
  titan: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0xe898EDc43920F357A93083F1d4460437dE6dAeC2",
    18,
    "TITAN",
    "Titanswap Token",
    "https://titanswap.org"
  ),
  harmony: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x03fF0ff224f904be3118461335064bB48Df47938",
    18,
    "ONE",
    "Harmony ONE Token",
    "https://www.harmony.one/"
  ),
  mask: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x2eD9a5C8C13b93955103B9a7C167B67Ef4d568a3",
    18,
    "MASK",
    "Mask Token",
    "https://mask.io/"
  ),
  dvi: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x758FB037A375F17c7e195CC634D77dA4F554255B",
    18,
    "DVI",
    "Dvision Network Token",
    "https://dvision.network/"
  ),
  adx: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x6bfF4Fb161347ad7de4A625AE5aa3A1CA7077819",
    18,
    "ADX",
    "Adex Network Token",
    "https://www.adex.network"
  ),
  bscpad: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x5A3010d4d8D3B5fB49f8B6E57FB9E48063f16700",
    18,
    "BSCPAD",
    "Bscpad Token",
    "https://bscpad.com/"
  ),
  rabbit: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x95a1199EBA84ac5f19546519e287d43D2F0E1b41",
    18,
    "RABBIT",
    "Rabbit Finance Token",
    "https://rabbitfinance.io/earn"
  ),
  form: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x25A528af62e56512A19ce8c3cAB427807c28CC19",
    18,
    "FORM",
    "Formation Token",
    "https://formation.fi/"
  ),
  txl: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x1FFD0b47127fdd4097E54521C9E2c7f0D66AafC5",
    18,
    "TXL",
    "Tixl Token",
    "https://tixl.org/"
  ),
  orbs: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0xeBd49b26169e1b52c04cFd19FCf289405dF55F80",
    18,
    "ORBS",
    "Orbs Token",
    "https://www.orbs.com/"
  ),
  cos: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x96Dd399F9c3AFda1F194182F71600F1B65946501",
    18,
    "COS",
    "Contentos Token",
    "https://www.contentos.io/"
  ),
  bunny: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0xC9849E6fdB743d08fAeE3E34dd2D1bc69EA11a51",
    18,
    "BUNNY",
    "Pancakebunny Token",
    "https://pancakebunny.finance/"
  ),
  alice: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0xAC51066d7bEC65Dc4589368da368b212745d63E8",
    6,
    "ALICE",
    "My Neighbor Alice Token",
    "https://www.myneighboralice.com/"
  ),
  for: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x658A109C5900BC6d2357c87549B651670E5b0539",
    18,
    "FOR",
    "Fortube Token",
    "https://www.for.tube/home"
  ),
  bux: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x211FfbE424b90e25a15531ca322adF1559779E45",
    18,
    "BUX",
    "Bux Crypto Token",
    "https://getbux.com/bux-crypto/"
  ),
  nuls: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x8CD6e29d3686d24d3C2018CEe54621eA0f89313B",
    8,
    "NULS",
    "Nuls Token",
    "https://www.nuls.io/"
  ),
  ramp: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x8519EA49c997f50cefFa444d240fB655e89248Aa",
    18,
    "RAMP",
    "RAMP DEFI Token",
    "https://rampdefi.com/"
  ),
  bfi: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x81859801b01764D4f0Fa5E64729f5a6C3b91435b",
    18,
    "BFI",
    "bearn.fi Token",
    "https://bearn.fi/"
  ),
  dexe: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x039cB485212f996A9DBb85A9a75d898F94d38dA6",
    18,
    "DEXE",
    "DeXe Token",
    "https://dexe.network/"
  ),
  bel: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x8443f091997f06a61670B735ED92734F5628692F",
    18,
    "BEL",
    "Bella Protocol Token",
    "https://bella.fi/"
  ),
  tpt: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0xECa41281c24451168a37211F0bc2b8645AF45092",
    4,
    "TPT",
    "Tokenpocket Token",
    "https://www.tokenpocket.pro/"
  ),
  xmark: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x26A5dFab467d4f58fB266648CAe769503CEC9580",
    9,
    "xMARK",
    "Benchmark Protocol Token",
    "https://benchmarkprotocol.finance/"
  ),
  bmxx: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x4131b87F74415190425ccD873048C708F8005823",
    18,
    "bMXX",
    "Multiplier Token",
    "https://multiplier.finance/"
  ),
  iotx: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x9678E42ceBEb63F23197D726B29b1CB20d0064E5",
    18,
    "IOTX",
    "Binance-Peg IoTeX Network Token",
    "https://iotex.io/"
  ),
  bor: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x92D7756c60dcfD4c689290E8A9F4d263b3b32241",
    18,
    "BOR",
    "BoringDAO Token",
    "https://www.boringdao.com/"
  ),
  bopen: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0xF35262a9d427F96d2437379eF090db986eaE5d42",
    18,
    "bOPEN",
    "OPEN Governance Token",
    "https://opendao.io/"
  ),
  dodo: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x67ee3Cb086F8a16f34beE3ca72FAD36F7Db929e2",
    18,
    "DODO",
    "Dodo Token",
    "https://dodoex.io/"
  ),
  swingby: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x71DE20e0C4616E7fcBfDD3f875d568492cBE4739",
    18,
    "SWINGBY",
    "Swingby Network Token",
    "https://swingby.network/"
  ),
  zee: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x44754455564474A89358B2C2265883DF993b12F0",
    18,
    "ZEE",
    "Zeroswap Token",
    "https://zeroswap.io/"
  ),
  swgb: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0xE40255C5d7fa7ceEc5120408C78C787CECB4cfdb",
    18,
    "SWGb",
    "SWGb Token",
    "https://swirgepay.com/"
  ),
  swg: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0xe792f64C582698b8572AAF765bDC426AC3aEfb6B",
    18,
    "SWG",
    "SWG Token",
    "https://swirgepay.com/"
  ),
  sfp: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0xD41FDb03Ba84762dD66a0af1a6C8540FF1ba5dfb",
    18,
    "SFP",
    "Safepal Token",
    "https://www.safepal.io/"
  ),
  lina: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x762539b45A1dCcE3D36d080F74d1AED37844b878",
    18,
    "LINA",
    "Linear Finance Token",
    "https://linear.finance/"
  ),
  lit: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0xb59490aB09A0f526Cc7305822aC65f2Ab12f9723",
    18,
    "LIT",
    "Litentry Token",
    "https://www.litentry.com/"
  ),
  hget: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0xC7d8D35EBA58a0935ff2D5a33Df105DD9f071731",
    6,
    "HGET",
    "Hedget Token",
    "https://www.hedget.com/"
  ),
  bdo: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x190b589cf9Fb8DDEabBFeae36a813FFb2A702454",
    18,
    "BDO",
    "Bdollar Token",
    "https://bdollar.fi/"
  ),
  egld: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0xbF7c81FFF98BbE61B40Ed186e4AfD6DDd01337fe",
    18,
    "EGLD",
    "Elrond Token",
    "https://elrond.com/"
  ),
  front: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x928e55daB735aa8260AF3cEDadA18B5f70C72f1b",
    18,
    "FRONT",
    "Frontier Token",
    "https://frontier.xyz/"
  ),
  btcst: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x78650B139471520656b9E7aA7A5e9276814a38e9",
    17,
    "BTCST",
    "StandardBTCHashrate Token",
    "https://www.1-b.tc/"
  ),
  bscx: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x5Ac52EE5b2a633895292Ff6d8A89bB9190451587",
    18,
    "BSCX",
    "BSCX Token",
    "https://bscex.org/"
  ),
  balbt: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x72fAa679E1008Ad8382959FF48E392042A8b06f7",
    18,
    "bALBT",
    "AllianceBlock Token",
    "https://allianceblock.io/"
  ),
  asr: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x80D5f92C2c8C682070C95495313dDB680B267320",
    2,
    "ASR",
    "AS Roma Token",
    "https://www.chiliz.com"
  ),
  atm: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x25E9d05365c867E59C1904E7463Af9F312296f9E",
    2,
    "ATM",
    "Athletico Madrid Token",
    "https://www.chiliz.com"
  ),
  og: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0xf05E45aD22150677a017Fbd94b84fBB63dc9b44c",
    2,
    "OG",
    "OG Nice Token",
    "https://www.chiliz.com"
  ),
  reef: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0xF21768cCBC73Ea5B6fd3C687208a7c2def2d966e",
    18,
    "REEF",
    "Reef.finance Token",
    "https://reef.finance/"
  ),
  juv: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0xC40C9A843E1c6D01b7578284a9028854f6683b1B",
    2,
    "JUV",
    "Juventus Token",
    "https://www.chiliz.com"
  ),
  psg: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0xBc5609612b7C44BEf426De600B5fd1379DB2EcF1",
    2,
    "PSG",
    "Paris Saint-Germain Token",
    "https://www.chiliz.com"
  ),
  vai: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x4BD17003473389A42DAF6a0a729f6Fdb328BbBd7",
    18,
    "VAI",
    "VAI Stablecoin",
    "0x4BD17003473389A42DAF6a0a729f6Fdb328BbBd7"
  ),
  unfi: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x728C5baC3C3e370E372Fc4671f9ef6916b814d8B",
    18,
    "UNFI",
    "UNFI Token",
    "https://unifiprotocol.com"
  ),
  twt: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x4B0F1812e5Df2A09796481Ff14017e6005508003",
    18,
    "TWT",
    "Trust Wallet Token",
    "https://trustwallet.com/"
  ),
  hard: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0xf79037F6f6bE66832DE4E7516be52826BC3cBcc4",
    6,
    "HARD",
    "HARD Token",
    "https://hard.kava.io"
  ),
  broobee: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0xE64F5Cb844946C1F102Bd25bBD87a5aB4aE89Fbe",
    18,
    "bROOBEE",
    "ROOBEE Token",
    "https://roobee.io/"
  ),
  stax: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x0Da6Ed8B13214Ff28e9Ca979Dd37439e8a88F6c4",
    18,
    "STAX",
    "StableX Token",
    "https://stablexswap.com/"
  ),
  nar: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0xA1303E6199b319a891b79685F0537D289af1FC83",
    18,
    "NAR",
    "Narwhalswap Token",
    "https://narwhalswap.org/"
  ),
  nya: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0xbFa0841F7a90c4CE6643f651756EE340991F99D5",
    18,
    "NYA",
    "Nyanswop Token",
    "https://nyanswop.org/"
  ),
  ctk: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0xA8c2B8eec3d368C0253ad3dae65a5F2BBB89c929",
    6,
    "CTK",
    "Certik Token",
    "https://www.certik.foundation/"
  ),
  inj: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0xa2B726B1145A4773F68593CF171187d8EBe4d495",
    18,
    "INJ",
    "Injective Protocol Token",
    "https://injectiveprotocol.com/"
  ),
  sxp: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x47BEAd2563dCBf3bF2c9407fEa4dC236fAbA485A",
    18,
    "SXP",
    "Swipe Token",
    "https://swipe.io/"
  ),
  alpha: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0xa1faa113cbE53436Df28FF0aEe54275c13B40975",
    18,
    "ALPHA",
    "Alpha Finance Token",
    "https://alphafinance.io/"
  ),
  xvs: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0xcF6BB5389c92Bdda8a3747Ddb454cB7a64626C63",
    18,
    "XVS",
    "Venus Token",
    "https://venus.io/"
  ),
  sushi: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x947950BcC74888a40Ffa2593C5798F11Fc9124C4",
    18,
    "SUSHI",
    "Binance-Peg SushiToken",
    "https://sushi.com/"
  ),
  comp: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x52CE071Bd9b1C4B00A0b92D298c512478CaD67e8",
    18,
    "COMP",
    "Compound Finance Token",
    "https://compound.finance/"
  ),
  bifi: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0xCa3F508B8e4Dd382eE878A314789373D80A5190A",
    18,
    "BIFI",
    "Beefy Finance Token",
    "https://beefy.finance/"
  ),
  dusk: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0xB2BD0749DBE21f623d9BABa856D3B0f0e1BFEc9C",
    18,
    "DUSK",
    "Dusk Network Token",
    "https://dusk.network/"
  ),
  beth: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x250632378E573c6Be1AC2f97Fcdf00515d0Aa91B",
    18,
    "BETH",
    "Binance Beacon ETH",
    "https://ethereum.org/en/eth2/beacon-chain/"
  ),
  mamzn: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x3947B992DC0147D2D89dF0392213781b04B25075",
    18,
    "mAMZN",
    "Wrapped Mirror AMZN Token",
    "https://mirror.finance/"
  ),
  mgoogl: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x62D71B23bF15218C7d2D7E48DBbD9e9c650B173f",
    18,
    "mGOOGL",
    "Wrapped Mirror GOOGL Token",
    "https://mirror.finance/"
  ),
  mnflx: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0xa04F060077D90Fe2647B61e4dA4aD1F97d6649dc",
    18,
    "mNFLX",
    "Wrapped Mirror NFLX Token",
    "https://mirror.finance/"
  ),
  mtsla: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0xF215A127A196e3988C09d052e16BcFD365Cd7AA3",
    18,
    "mTSLA",
    "Wrapped Mirror TSLA Token",
    "https://mirror.finance/"
  ),
  ltc: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x4338665CBB7B2485A8855A139b75D5e34AB0DB94",
    18,
    "LTC",
    "Binance-Peg Litecoin Token",
    "https://litecoin.org/"
  ),
  ada: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x3EE2200Efb3400fAbB9AacF31297cBdD1d435D47",
    18,
    "ADA",
    "Binance-Peg Cardano Token",
    "https://www.cardano.org/"
  ),
  band: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0xAD6cAEb32CD2c308980a548bD0Bc5AA4306c6c18",
    18,
    "BAND",
    "Binance-Peg Band Protocol Token",
    "https://bandprotocol.com/"
  ),
  dot: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x7083609fCE4d1d8Dc0C979AAb8c869Ea2C873402",
    18,
    "DOT",
    "Binance-Peg Polkadot Token",
    "https://polkadot.network/"
  ),
  eos: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x56b6fB708fC5732DEC1Afc8D8556423A2EDcCbD6",
    18,
    "EOS",
    "Binance-Peg EOS Token",
    "https://eos.io/"
  ),
  link: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0xF8A0BF9cF54Bb92F17374d9e9A321E6a111a51bD",
    18,
    "LINK",
    "Binance-Peg Chainlink Token",
    "https://chain.link/"
  ),
  xrp: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x1D2F0da169ceB9fC7B3144628dB156f3F6c60dBE",
    18,
    "XRP",
    "Binance-Peg XRP Token",
    "https://ripple.com/xrp/"
  ),
  atom: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x0Eb3a705fc54725037CC9e008bDede697f62F335",
    18,
    "ATOM",
    "Binance-Peg Cosmos Token",
    "https://cosmos.network/"
  ),
  yfii: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x7F70642d88cf1C4a3a7abb072B53B929b653edA5",
    18,
    "YFII",
    "Binance-Peg YFII.finance Token",
    "https://dfi.money/#/"
  ),
  xtz: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x16939ef78684453bfDFb47825F8a5F714f12623a",
    18,
    "XTZ",
    "Binance-Peg Tezos Token",
    "https://www.tezos.com/"
  ),
  bch: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x8fF795a6F4D97E7887C79beA79aba5cc76444aDf",
    18,
    "BCH",
    "Binance-Peg Bitcoin Cash Token",
    "https://bch.info/"
  ),
  yfi: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x88f1A5ae2A3BF98AEAF342D26B30a79438c9142e",
    18,
    "YFI",
    "Binance-Peg yearn.finance Token",
    "https://yearn.finance/"
  ),
  uni: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0xBf5140A22578168FD562DCcF235E5D43A02ce9B1",
    18,
    "UNI",
    "Binance-Peg Uniswap Token",
    "https://uniswap.org/"
  ),
  fil: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x0D8Ce2A99Bb6e3B7Db580eD848240e4a0F9aE153",
    18,
    "FIL",
    "Binance-Peg Filecoin Token",
    "https://filecoin.io/"
  ),
  bake: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5",
    18,
    "BAKE",
    "Bakeryswap Token",
    "https://www.bakeryswap.org/"
  ),
  burger: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0xAe9269f27437f0fcBC232d39Ec814844a51d6b8f",
    18,
    "BURGER",
    "Burgerswap Token",
    "https://burgerswap.org/"
  ),
  bdigg: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x5986D5c77c65e5801a5cAa4fAE80089f870A71dA",
    18,
    "bDIGG",
    "Badger Sett Digg Token",
    "https://badger.finance/"
  ),
  bbadger: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x1F7216fdB338247512Ec99715587bb97BBf96eae",
    18,
    "bBadger",
    "Badger Sett Badger Token",
    "https://badger.finance/"
  ),
  trade: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x7af173F350D916358AF3e218Bdf2178494Beb748",
    18,
    "TRADE",
    "Unitrade Token",
    "https://unitrade.app/"
  ),
  pnt: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0xdaacB0Ab6Fb34d24E8a67BfA14BF4D95D4C7aF92",
    18,
    "PNT",
    "pNetwork Token",
    "https://ptokens.io/"
  ),
  mir: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x5B6DcF557E2aBE2323c48445E8CC948910d8c2c9",
    18,
    "MIR",
    "Mirror Protocol Token",
    "https://mirror.finance/"
  ),
  pbtc: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0xeD28A457A5A76596ac48d87C0f577020F6Ea1c4C",
    18,
    "pBTC",
    "pTokens BTC Token",
    "https://ptokens.io/"
  ),
  lto: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x857B222Fc79e1cBBf8Ca5f78CB133d1b7CF34BBd",
    18,
    "LTO",
    "LTO Network Token",
    "https://ltonetwork.com/"
  ),
  pcws: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0xbcf39F0EDDa668C58371E519AF37CA705f2bFcbd",
    18,
    "pCWS",
    "PolyCrowns Token",
    "https://game.seascape.network/"
  ),
  zil: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0xb86AbCb37C3A4B64f74f59301AFF131a1BEcC787",
    12,
    "ZIL",
    "Zilliqa Token",
    "https://www.zilliqa.com/"
  ),
  lien: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x5d684ADaf3FcFe9CFb5ceDe3abf02F0Cdd1012E3",
    8,
    "LIEN",
    "Lien Finance Token",
    "https://lien.finance/"
  ),
  swth: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x250b211EE44459dAd5Cd3bCa803dD6a7EcB5d46C",
    8,
    "SWTH",
    "Switcheo Network Token",
    "https://switcheo.network/"
  ),
  dft: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x42712dF5009c20fee340B245b510c0395896cF6e",
    18,
    "DFT",
    "Dfuture Token",
    "https://www.dfuture.com/home"
  ),
  gum: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0xc53708664b99DF348dd27C3Ac0759d2DA9c40462",
    18,
    "GUM",
    "GourmetGalaxy Token",
    "https://gourmetgalaxy.io/"
  ),
  dego: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x3FdA9383A84C05eC8f7630Fe10AdF1fAC13241CC",
    18,
    "DEGO",
    "Dego Finance Token",
    "https://bsc.dego.finance/home"
  ),
  nrv: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x42F6f551ae042cBe50C739158b4f0CAC0Edb9096",
    18,
    "NRV",
    "Nerve Finance Token",
    "https://nerve.fi/"
  ),
  easy: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x7C17c8bED8d14bAccE824D020f994F4880D6Ab3B",
    18,
    "EASY",
    "EASY Token",
    "https://easyfi.network/"
  ),
  oddz: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0xCD40F2670CF58720b694968698A5514e924F742d",
    18,
    "ODDZ",
    "Oddz Token",
    "https://oddz.fi/"
  ),
  hoo: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0xE1d1F66215998786110Ba0102ef558b22224C016",
    8,
    "HOO",
    "Hoo Token",
    "https://hoo.com/"
  ),
  apys: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x37dfACfaeDA801437Ff648A1559d73f4C40aAcb7",
    18,
    "APYS",
    "APY Swap Token",
    "https://apyswap.com/"
  ),
  bondly: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x96058f8C3e16576D9BD68766f3836d9A33158f89",
    18,
    "BONDLY",
    "Bondly Token",
    "https://www.bondly.finance/"
  ),
  tko: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x9f589e3eabe42ebC94A44727b3f3531C0c877809",
    18,
    "TKO",
    "Tokocrypto Token",
    "https://www.tokocrypto.com/"
  ),
  itam: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x04C747b40Be4D535fC83D09939fb0f626F32800B",
    18,
    "ITAM",
    "Itam Network Token",
    "https://itam.network/"
  ),
  arpa: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x6F769E65c14Ebd1f68817F5f1DcDb61Cfa2D6f7e",
    18,
    "ARPA",
    "Arpachain Token",
    "https://arpachain.io/"
  ),
  eps: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0xA7f552078dcC247C2684336020c03648500C6d9F",
    18,
    "EPS",
    "Ellipsis Finance Token",
    "https://ellipsis.finance/"
  ),
  jgn: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0xC13B7a43223BB9Bf4B69BD68Ab20ca1B79d81C75",
    18,
    "JGN",
    "Juggernaut DeFi Token",
    "https://jgndefi.com/"
  ),
  tlm: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x2222227E22102Fe3322098e4CBfE18cFebD57c95",
    4,
    "TLM",
    "Alien Worlds Trilium Token",
    "https://alienworlds.io/"
  ),
  perl: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x0F9E4D49f25de22c2202aF916B681FBB3790497B",
    18,
    "PERL",
    "Perlin",
    "https://perlinx.finance/"
  ),
  alpa: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0xc5E6689C9c8B02be7C49912Ef19e79cF24977f03",
    18,
    "ALPA",
    "AlpaToken",
    "https://bsc.alpaca.city/"
  ),
  hzn: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0xC0eFf7749b125444953ef89682201Fb8c6A917CD",
    18,
    "HZN",
    "Horizon Protocol Token",
    "https://horizonprotocol.com/"
  ),
  suter: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x4CfbBdfBd5BF0814472fF35C72717Bd095ADa055",
    18,
    "SUTER",
    "Suterusu Token",
    "https://shield.suterusu.io/"
  ),
  cgg: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x1613957159E9B0ac6c80e824F7Eea748a32a0AE2",
    18,
    "CGG",
    "pTokens CGG Token",
    "https://chainguardians.io/"
  ),
  mix: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0xB67754f5b4C704A24d2db68e661b2875a4dDD197",
    18,
    "MIX",
    "Mix Token",
    "https://mixie.chainguardians.io/"
  ),
  hakka: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x1D1eb8E8293222e1a29d2C0E4cE6C0Acfd89AaaC",
    18,
    "HAKKA",
    "Hakka Token",
    "https://hakka.finance/"
  ),
  xed: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x5621b5A3f4a8008c4CCDd1b942B121c8B1944F1f",
    18,
    "XED",
    "Exeedme Token",
    "https://www.exeedme.com/"
  ),
  \u03C4btc: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x2cD1075682b0FCCaADd0Ca629e138E64015Ba11c",
    9,
    "\u03C4BTC",
    "\u03C4Bitcoin Token",
    "https://www.btcst.finance/"
  ),
  alpaca: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x8F0528cE5eF7B51152A59745bEfDD91D97091d2F",
    18,
    "ALPACA",
    "AlpacaToken",
    "https://www.alpacafinance.org/"
  ),
  dfd: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x9899a98b222fCb2f3dbee7dF45d943093a4ff9ff",
    18,
    "DFD",
    "DefiDollar DAO",
    "https://dusd.finance/"
  ),
  lmt: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x9617857E191354dbEA0b714d78Bc59e57C411087",
    18,
    "LMT",
    "Lympo Market Token",
    "https://lympo.io/lmt/"
  ),
  bttold: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x8595F9dA7b868b1822194fAEd312235E43007b49",
    18,
    "BTTOLD",
    "Binance-Peg BitTorrent Token (Old)",
    "https://www.bittorrent.com/"
  ),
  trx: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x85EAC5Ac2F758618dFa09bDbe0cf174e7d574D5B",
    18,
    "TRX",
    "TRON Token",
    "https://tron.network/"
  ),
  trxv2: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0xCE7de646e7208a4Ef112cb6ed5038FA6cC6b12e3",
    6,
    "TRX",
    "TRON Token v2",
    "https://tron.network/"
  ),
  win: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0xaeF0d72a118ce24feE3cD1d43d383897D05B4e99",
    18,
    "WIN",
    "WIN Token",
    "https://winklink.org/"
  ),
  mcoin: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x49022089e78a8D46Ec87A3AF86a1Db6c189aFA6f",
    18,
    "MCOIN",
    "Wrapped Mirror COIN Token",
    "https://mirror.finance/"
  ),
  math: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0xF218184Af829Cf2b0019F8E6F0b2423498a36983",
    18,
    "MATH",
    "MATH Token",
    "https://mathwallet.org/"
  ),
  kun: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x1A2fb0Af670D0234c2857FaD35b789F8Cb725584",
    18,
    "KUN",
    "QIAN governance token",
    "https://chemix.io/home"
  ),
  qsd: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x07AaA29E63FFEB2EBf59B33eE61437E1a91A3bb2",
    18,
    "QSD",
    "QIAN second generation dollar",
    "https://chemix.io/home"
  ),
  hyfi: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x9a319b959e33369C5eaA494a770117eE3e585318",
    18,
    "HYFI",
    "HYFI Token",
    "https://hyfi.pro/#/"
  ),
  oin: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x658E64FFcF40D240A43D52CA9342140316Ae44fA",
    8,
    "OIN",
    "oinfinance Token",
    "https://oin.finance/"
  ),
  doge: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0xbA2aE424d960c26247Dd6c32edC70B295c744C43",
    8,
    "DOGE",
    "Binance-Peg Dogecoin",
    "https://dogecoin.com/"
  ),
  fine: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x4e6415a5727ea08aAE4580057187923aeC331227",
    18,
    "FINE",
    "Refinable Token",
    "https://refinable.com/"
  ),
  one: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x04BAf95Fd4C52fd09a56D840bAEe0AB8D7357bf0",
    18,
    "ONE",
    "BigONE Token",
    "https://www.bigone.com/"
  ),
  pmon: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x1796ae0b0fa4862485106a0de9b654eFE301D0b2",
    18,
    "PMON",
    "Polkamon Token",
    "https://polkamon.com/"
  ),
  \u03C4doge: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0xe550a593d09FBC8DCD557b5C88Cea6946A8b404A",
    8,
    "\u03C4DOGE",
    "\u03C4Dogecoin",
    "https://www.btcst.finance/"
  ),
  btr: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x5a16E8cE8cA316407c6E6307095dc9540a8D62B3",
    18,
    "BTR",
    "Bitrue Token",
    "https://www.bitrue.com/"
  ),
  ubxt: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0xBbEB90cFb6FAFa1F69AA130B7341089AbeEF5811",
    18,
    "UBXT",
    "UpBots Token",
    "https://upbots.com/"
  ),
  wmass: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x7e396BfC8a2f84748701167c2d622F041A1D7a17",
    8,
    "WMASS",
    "Wrapped MASS Token",
    "https://massnet.org/en/"
  ),
  rfox: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x0a3A21356793B49154Fd3BbE91CBc2A16c0457f5",
    18,
    "RFOX",
    "RFOX Token",
    "https://www.redfoxlabs.io/"
  ),
  xend: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x4a080377f83D669D7bB83B3184a8A5E61B500608",
    18,
    "XEND",
    "XEND Token",
    "https://xend.finance/"
  ),
  cyc: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x810EE35443639348aDbbC467b33310d2AB43c168",
    18,
    "CYC",
    "CYC Token",
    "https://cyclone.xyz/"
  ),
  chr: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0xf9CeC8d50f6c8ad3Fb6dcCEC577e05aA32B224FE",
    6,
    "CHR",
    "Chroma Token",
    "https://chromia.com/"
  ),
  deri: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0xe60eaf5A997DFAe83739e035b005A33AfdCc6df5",
    18,
    "DERI",
    "Deri Token",
    "https://deri.finance/#/index"
  ),
  well: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0xf07a32Eb035b786898c00bB1C64d8c6F8E7a46D5",
    18,
    "WELL",
    "BitWell Token",
    "https://www.bitwellex.com/"
  ),
  wex: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0xa9c41A46a6B3531d28d5c32F6633dd2fF05dFB90",
    18,
    "WEX",
    "WaultSwap Token",
    "https://wault.finance/"
  ),
  waultx: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0xB64E638E60D154B43f660a6BF8fD8a3b249a6a21",
    18,
    "WAULTx",
    "Wault Token",
    "https://wault.finance/"
  ),
  popen: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0xaBaE871B7E3b67aEeC6B46AE9FE1A91660AadAC5",
    18,
    "pOPEN",
    "OPEN Governance Token",
    "https://opendao.io/"
  ),
  ez: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x5512014efa6Cd57764Fa743756F7a6Ce3358cC83",
    18,
    "EZ",
    "Easy V2 Token",
    "https://easyfi.network/"
  ),
  vrt: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x5F84ce30DC3cF7909101C69086c50De191895883",
    18,
    "VRT",
    "Venus Reward Token",
    "https://venus.io/"
  ),
  deprecated_tusd: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x14016E85a25aeb13065688cAFB43044C2ef86784",
    18,
    "TUSDOLD",
    "Binance-Peg TrueUSD Token",
    "https://www.trueusd.com/"
  ),
  mtrg: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0xBd2949F67DcdC549c6Ebe98696449Fa79D988A9F",
    18,
    "MTRG",
    "Wrapped MTRG Token",
    "https://www.meter.io/"
  ),
  ktn: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0xDAe6c2A48BFAA66b43815c5548b10800919c993E",
    18,
    "KTN",
    "Kattana Token",
    "https://kattana.io/"
  ),
  qkc: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0xA1434F1FC3F437fa33F7a781E041961C0205B5Da",
    18,
    "QKC",
    "QuarkChain Token",
    "https://quarkchain.io/"
  ),
  bcfx: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x045c4324039dA91c52C55DF5D785385Aab073DcF",
    18,
    "bCFX",
    "ChainId.BSC Conflux Token",
    "https://www.confluxnetwork.org/"
  ),
  mx: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x9F882567A62a5560d147d64871776EeA72Df41D3",
    18,
    "MX",
    "MX Token",
    "https://www.mxc.com/"
  ),
  ata: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0xA2120b9e674d3fC3875f415A7DF52e382F141225",
    18,
    "ATA",
    "Automata Token",
    "https://www.ata.network/"
  ),
  mbox: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x3203c9E46cA618C8C1cE5dC67e7e9D75f5da2377",
    18,
    "MBOX",
    "Mobox Token",
    "https://www.mobox.io/#/"
  ),
  boring: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0xffEecbf8D7267757c2dc3d13D730E97E15BfdF7F",
    18,
    "BORING",
    "BoringDAO Token",
    "https://www.boringdao.com/"
  ),
  marsh: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x2FA5dAF6Fe0708fBD63b1A7D1592577284f52256",
    18,
    "MARSH",
    "Unmarshal Token",
    "https://unmarshal.io/"
  ),
  ampl: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0xDB021b1B247fe2F1fa57e0A87C748Cc1E321F07F",
    9,
    "AMPL",
    "AMPL Token",
    "https://www.ampleforth.org/"
  ),
  o3: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0xEe9801669C6138E84bD50dEB500827b776777d28",
    18,
    "O3",
    "O3 Swap Token",
    "https://o3swap.com/"
  ),
  hai: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0xaA9E582e5751d703F85912903bacADdFed26484C",
    8,
    "HAI",
    "Hacken Token",
    "https://hacken.io/"
  ),
  htb: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x4e840AADD28DA189B9906674B4Afcb77C128d9ea",
    18,
    "HTB",
    "Hotbit Token",
    "https://www.hotbit.io/"
  ),
  woo: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x4691937a7508860F876c9c0a2a617E7d9E945D4B",
    18,
    "WOO",
    "Wootrade Network Token",
    "https://woo.network/"
  ),
  $dg: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x9Fdc3ae5c814b79dcA2556564047C5e7e5449C19",
    18,
    "$DG",
    "Decentral Games Token",
    "https://decentral.games/"
  ),
  axs: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x715D400F88C167884bbCc41C5FeA407ed4D2f8A0",
    18,
    "AXS",
    "Binance-Pegged Axie Infinity Shard",
    "https://axieinfinity.com/"
  ),
  c98: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0xaEC945e04baF28b135Fa7c640f624f8D90F1C3a6",
    18,
    "c98",
    "Coin98 Token",
    "https://coin98.com/"
  ),
  pots: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x3Fcca8648651E5b974DD6d3e50F61567779772A8",
    18,
    "POTS",
    "Moonpot Token",
    "https://moonpot.com/"
  ),
  gnt: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0xF750A26EB0aCf95556e8529E72eD530f3b60f348",
    18,
    "GNT",
    "GreenTrust Token",
    "https://www.greentrusttoken.com/"
  ),
  rusd: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x07663837218A003e66310a01596af4bf4e44623D",
    18,
    "rUSD",
    "rUSD Token",
    "https://appv2.rampdefi.com/#/"
  ),
  bp: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0xACB8f52DC63BB752a51186D1c55868ADbFfEe9C1",
    18,
    "BP",
    "BunnyPark Token",
    "https://www.bunnypark.com/"
  ),
  sfund: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x477bC8d23c634C154061869478bce96BE6045D12",
    18,
    "SFUND",
    "Seedify Fund Token",
    "https://seedify.fund/"
  ),
  naos: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x758d08864fB6cCE3062667225ca10b8F00496cc2",
    18,
    "NAOS",
    "NAOSToken",
    "https://naos.finance/"
  ),
  cart: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x5C8C8D560048F34E5f7f8ad71f2f81a89DBd273e",
    18,
    "CART",
    "CryptoArt.ai",
    "https://cryptoart.ai/"
  ),
  light: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x037838b556d9c9d654148a284682C55bB5f56eF4",
    18,
    "LIGHT",
    "Lightning",
    "https://lightningprotocol.finance/"
  ),
  mcb: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x5fE80d2CD054645b9419657d3d10d26391780A7B",
    18,
    "MCB",
    "MCDEX",
    "https://mcdex.io/homepage/"
  ),
  lazio: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x77d547256A2cD95F32F67aE0313E450Ac200648d",
    8,
    "LAZIO",
    "FC Lazio Fan Token",
    "https://launchpad.binance.com/en/subscription/LAZIO_BNB"
  ),
  arv: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x6679eB24F59dFe111864AEc72B443d1Da666B360",
    8,
    "ARV",
    "ARIVA",
    "https://ariva.digital"
  ),
  moni: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x9573c88aE3e37508f87649f87c4dd5373C9F31e0",
    18,
    "MONI",
    "Monsta Infinite",
    "https://monstainfinite.com/"
  ),
  xms: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x7859B01BbF675d67Da8cD128a50D155cd881B576",
    18,
    "XMS",
    "Mars Ecosystem",
    "https://marsecosystem.com/"
  ),
  zoo: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x1D229B958D5DDFca92146585a8711aECbE56F095",
    18,
    "ZOO",
    "ZOO Crypto World",
    "https://zoogame.finance/"
  ),
  fina: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x426c72701833fdDBdFc06c944737C6031645c708",
    18,
    "FINA",
    "Defina Finance",
    "https://defina.finance/"
  ),
  dar: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x23CE9e926048273eF83be0A3A8Ba9Cb6D45cd978",
    6,
    "DAR",
    "Mines of Dalarnia",
    "https://www.minesofdalarnia.com/"
  ),
  xwg: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x6b23C89196DeB721e6Fd9726E6C76E4810a464bc",
    18,
    "XWG",
    "X World Games",
    "https://xwg.games/"
  ),
  eternal: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0xD44FD09d74cd13838F137B590497595d6b3FEeA4",
    18,
    "ETERNAL",
    "CryptoMines Eternal",
    "https://cryptomines.app/"
  ),
  porto: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x49f2145d6366099e13B10FbF80646C0F377eE7f6",
    8,
    "PORTO",
    "FC Porto Fan Token",
    "https://launchpad.binance.com/en/subscription/PORTO_BNB"
  ),
  kart: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x8BDd8DBcBDf0C066cA5f3286d33673aA7A553C10",
    18,
    "KART",
    "Dragon Kart",
    "https://dragonkart.com/"
  ),
  qi: new sdk.ERC20Token(chains.ChainId.BSC, "0x8729438EB15e2C8B576fCc6AeCdA6A148776C0F5", 18, "QI", "BENQI", "https://benqi.fi/"),
  sheesha: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x232FB065D9d24c34708eeDbF03724f2e95ABE768",
    18,
    "SHEESHA",
    "Sheesha Finance",
    "https://www.sheeshafinance.io/"
  ),
  bcoin: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x00e1656e45f18ec6747F5a8496Fd39B50b38396D",
    18,
    "BCOIN",
    "Bomb Crypto",
    "https://bombcrypto.io/"
  ),
  quidd: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x7961Ade0a767c0E5B67Dd1a1F78ba44F727642Ed",
    18,
    "QUIDD",
    "Quidd Token",
    "https://www.quiddtoken.com/"
  ),
  santos: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0xA64455a4553C9034236734FadDAddbb64aCE4Cc7",
    8,
    "SANTOS",
    "FC Santos Fan Token",
    "https://launchpad.binance.com/en/launchpool/SANTOS_BNB"
  ),
  nabox: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x755f34709E369D37C6Fa52808aE84A32007d1155",
    18,
    "NABOX",
    "Nabox Token",
    "https://nabox.io/"
  ),
  xcv: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x4be63a9b26EE89b9a3a13fd0aA1D0b2427C135f8",
    18,
    "XCV",
    "XCarnival",
    "https://xcarnival.fi/"
  ),
  idia: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x0b15Ddf19D47E6a86A56148fb4aFFFc6929BcB89",
    18,
    "IDIA",
    "Impossible Decentralized Incubator Access Token",
    "https://impossible.finance/"
  ),
  tt: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x990E7154bB999FAa9b2fa5Ed29E822703311eA85",
    18,
    "TT",
    "ThunderCore",
    "https://www.thundercore.com/"
  ),
  gmee: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x84e9a6F9D240FdD33801f7135908BfA16866939A",
    18,
    "GMEE",
    "GAMEE",
    "https://www.gamee.com/token"
  ),
  htd: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x5E2689412Fae5c29BD575fbe1d5C1CD1e0622A8f",
    18,
    "HTD",
    "HeroesTD",
    "https://heroestd.io/"
  ),
  dpt: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0xE69cAef10A488D7AF31Da46c89154d025546e990",
    18,
    "DPT",
    "Diviner Protocol",
    "https://diviner.finance/"
  ),
  thg: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x9fD87aEfe02441B123c3c32466cD9dB4c578618f",
    18,
    "THG",
    "Thetan Gem",
    "https://thetanarena.com/"
  ),
  ccar: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x50332bdca94673F33401776365b66CC4e81aC81d",
    18,
    "CCAR",
    "CryptoCars",
    "https://cryptocars.me/"
  ),
  high: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x5f4Bde007Dc06b867f86EBFE4802e34A1fFEEd63",
    18,
    "HIGH",
    "Highstreet Token",
    "https://highstreet.market/"
  ),
  sdao: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x90Ed8F1dc86388f14b64ba8fb4bbd23099f18240",
    18,
    "SDAO",
    "Singularity Dao",
    "https://app.singularitydao.ai/"
  ),
  antex: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0xCA1aCAB14e85F30996aC83c64fF93Ded7586977C",
    8,
    "ANTEX",
    "Antex",
    "https://antex.org/"
  ),
  bbt: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0xD48474E7444727bF500a32D5AbE01943f3A59A64",
    8,
    "BBT",
    "BitBook",
    "https://www.bitbook.network/"
  ),
  woop: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x8b303d5BbfBbf46F1a4d9741E491e06986894e18",
    18,
    "WOOP",
    "Woonkly Power",
    "https://www.woonkly.com/"
  ),
  gm: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0xe2604C9561D490624AA35e156e65e590eB749519",
    18,
    "GM",
    "GoldMiner",
    "https://goldminer.games/"
  ),
  aog: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x40C8225329Bd3e28A043B029E0D07a5344d2C27C",
    18,
    "AOG",
    "AgeOfGods",
    "https://ageofgods.net/"
  ),
  deprecated_8pay: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0xFeea0bDd3D07eb6FE305938878C0caDBFa169042",
    18,
    "8PAY",
    "8PAY Network",
    "https://8pay.network/"
  ),
  "8payV2": new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x6EaDc05928ACd93eFB3FA0DFbC644D96C6Aa1Df8",
    18,
    "8PAY v2",
    "8PAY Network v2",
    "https://8pay.network/"
  ),
  bath: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x0bc89aa98Ad94E6798Ec822d0814d934cCD0c0cE",
    18,
    "BATH",
    "Battle Hero",
    "https://battlehero.io/"
  ),
  insur: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x3192CCDdf1CDcE4Ff055EbC80f3F0231b86A7E30",
    18,
    "INSUR",
    "Bsc-Peg INSUR Token",
    "https://www.insurace.io/"
  ),
  froyo: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0xe369fec23380f9F14ffD07a1DC4b7c1a9fdD81c9",
    18,
    "FROYO",
    "Froyo Games",
    "https://froyo.games/"
  ),
  apx: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x78F5d389F5CDCcFc41594aBaB4B0Ed02F31398b3",
    18,
    "APX",
    "ApolloX Token",
    "https://www.apollox.finance/"
  ),
  prl: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0xd07e82440A395f3F3551b42dA9210CD1Ef4f8B24",
    18,
    "PRL",
    "Parallel Token",
    "https://theparallel.io"
  ),
  fuse: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x5857c96DaE9cF8511B08Cb07f85753C472D36Ea3",
    18,
    "FUSE",
    "Fuse Token",
    "https://fuse.io/"
  ),
  ertha: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x62823659d09F9F9D2222058878f89437425eB261",
    18,
    "ERTHA",
    "Ertha Token",
    "https://ertha.io/"
  ),
  raca: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x12BB890508c125661E03b09EC06E404bc9289040",
    18,
    "RACA",
    "Radio Caca V2",
    "https://www.radiocaca.com/#/home"
  ),
  gear: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0xb4404DaB7C0eC48b428Cf37DeC7fb628bcC41B36",
    18,
    "GEAR",
    "MetaGear Token",
    "https://metagear.game/"
  ),
  ach: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0xBc7d6B50616989655AfD682fb42743507003056D",
    8,
    "ACH",
    "Alchemy Token",
    "https://alchemytech.io/"
  ),
  btt: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x352Cb5E19b12FC216548a2677bD0fce83BaE434B",
    18,
    "BTT",
    "BitTorrent",
    "https://bittorrent.com/"
  ),
  era: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x6f9F0c4ad9Af7EbD61Ac5A1D4e0F2227F7B0E5f9",
    18,
    "ERA",
    "Era Token",
    "https://www.era7.io/"
  ),
  fight: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x4f39c3319188A723003670c3F9B9e7EF991E52F3",
    18,
    "FIGHT",
    "Fight Token",
    "https://www.cryptofightclub.io/"
  ),
  loa: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x94b69263FCA20119Ae817b6f783Fc0F13B02ad50",
    18,
    "LOA",
    "League Of Ancients",
    "https://www.leagueofancients.com/"
  ),
  duet: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x95EE03e1e2C5c4877f9A298F1C0D6c98698FAB7B",
    18,
    "DUET",
    "Duet Governance Token",
    "https://duet.finance"
  ),
  gmt: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x3019BF2a2eF8040C242C9a4c5c4BD4C81678b2A1",
    8,
    "GMT",
    "Green Metaverse Token",
    "https://www.stepn.com/"
  ),
  bsw: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x965F527D9159dCe6288a2219DB51fc6Eef120dD1",
    18,
    "BSW",
    "Biswap",
    "https://biswap.org/"
  ),
  tem: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x19e6BfC1A6e4B042Fb20531244D47E252445df01",
    9,
    "TEM",
    "TemplarDAO",
    "https://templar.finance/"
  ),
  pex: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x6a0b66710567b6beb81A71F7e9466450a91a384b",
    18,
    "PEX",
    "PearDAO",
    "https://peardao.io/"
  ),
  yel: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0xD3b71117E6C1558c1553305b44988cd944e97300",
    18,
    "YEL",
    "YEL",
    "https://yel.finance/"
  ),
  tinc: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x05aD6E30A855BE07AfA57e08a4f30d00810a402e",
    18,
    "TINC",
    "Tiny Coin",
    "https://tinyworlds.io/"
  ),
  happy: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0xF5d8A096CcCb31b9D7bcE5afE812BE23e3D4690d",
    18,
    "Happy",
    "HappyFans",
    "https://happyfans.club/"
  ),
  wzrd: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0xFa40d8FC324bcdD6Bbae0e086De886c571C225d4",
    18,
    "WZRD",
    "Wizardia Token",
    "https://wizardia.io/"
  ),
  ceek: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0xe0F94Ac5462997D2BC57287Ac3a3aE4C31345D66",
    18,
    "CEEK",
    "CEEK",
    "https://www.ceek.com/"
  ),
  abnbc: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0xE85aFCcDaFBE7F2B096f268e31ccE3da8dA2990A",
    18,
    "aBNBc",
    "Ankr BNB Reward Bearing Certificate",
    "https://www.ankr.com/"
  ),
  ankr: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0xf307910A4c7bbc79691fD374889b36d8531B08e3",
    18,
    "ANKR",
    "Ankr",
    "https://www.ankr.com/"
  ),
  gal: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0xe4Cc45Bb5DBDA06dB6183E8bf016569f40497Aa5",
    18,
    "GAL",
    "Galxe",
    "https://galaxy.eco/"
  ),
  xcn: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x7324c7C0d95CEBC73eEa7E85CbAac0dBdf88a05b",
    18,
    "XCN",
    "Chain",
    "https://chain.com/"
  ),
  metis: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0xe552Fb52a4F19e44ef5A967632DBc320B0820639",
    18,
    "Metis",
    "Metis Token",
    "https://www.metis.io/"
  ),
  peak: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x630d98424eFe0Ea27fB1b3Ab7741907DFFEaAd78",
    8,
    "PEAK",
    "PEAKDEFI",
    "https://peakdefi.com/"
  ),
  nbt: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x1D3437E570e93581Bd94b2fd8Fbf202d4a65654A",
    18,
    "NBT",
    "NanoByte Token",
    "https://www.nanobyte.finance/"
  ),
  trivia: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0xb465f3cb6Aba6eE375E12918387DE1eaC2301B05",
    3,
    "TRIVIA",
    "Trivian Token",
    "https://trivians.io/"
  ),
  mhunt: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x2C717059b366714d267039aF8F59125CAdce6D8c",
    18,
    "MHUNT",
    "MetaShooter",
    "https://metashooter.gg/"
  ),
  ole: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0xa865197A84E780957422237B5D152772654341F3",
    18,
    "OLE",
    "OpenLeverage",
    "https://openleverage.finance/"
  ),
  xcad: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0xa026Ad2ceDa16Ca5FC28fd3C72f99e2C332c8a26",
    18,
    "XCAD",
    "Chainport.io-Peg XCAD Token",
    "https://xcadnetwork.com/"
  ),
  shell: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x208cfEc94d2BA8B8537da7A9BB361c6baAD77272",
    18,
    "SHELL",
    "Meta Apes Shell",
    "https://metaapesgame.com/"
  ),
  peel: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x734548a9e43d2D564600b1B2ed5bE9C2b911c6aB",
    18,
    "PEEL",
    "Meta Apes Peel",
    "https://metaapesgame.com/"
  ),
  stkbnb: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0xc2E9d07F66A89c44062459A47a0D2Dc038E4fb16",
    18,
    "stkBNB",
    "Staked BNB",
    "https://pstake.finance/bnb"
  ),
  pstake: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x4C882ec256823eE773B25b414d36F92ef58a7c0C",
    18,
    "PSTAKE",
    "pStake Finance",
    "https://pstake.finance/"
  ),
  wom: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0xAD6742A35fB341A9Cc6ad674738Dd8da98b94Fb1",
    18,
    "WOM",
    "Wombat Token",
    "https://www.wombat.exchange/"
  ),
  hay: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x0782b6d8c4551B9760e74c0545a9bCD90bdc41E5",
    18,
    "HAY",
    "Hay Destablecoin",
    "https://helio.money/"
  ),
  spin: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x6AA217312960A21aDbde1478DC8cBCf828110A67",
    18,
    "SPIN",
    "Spintop",
    "https://spintop.network/"
  ),
  snfts: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x6f51A1674BEFDD77f7ab1246b83AdB9f13613762",
    18,
    "SNFTS",
    "Seedify NFT Space",
    "https://snfts.seedify.fund/"
  ),
  gq: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0xF700D4c708C2be1463E355F337603183D20E0808",
    18,
    "GQ",
    "Galactic Quadrant",
    "https://outerringmmo.com/"
  ),
  hoop: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0xF19cfb40B3774dF6Eed83169Ad5aB0Aaf6865F25",
    18,
    "HOOP",
    "Chibi Dinos",
    "https://www.chibidinos.io/"
  ),
  co: new sdk.ERC20Token(chains.ChainId.BSC, "0x936B6659Ad0C1b244Ba8Efe639092acae30dc8d6", 6, "CO", "CO", "https://corite.com/"),
  krs: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x37b53894e7429f794B56F22a32E1695567Ee9913",
    18,
    "KRS",
    "Kingdom Raids",
    "https://kingdomraids.io/"
  ),
  wmx: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0xa75d9ca2a0a1D547409D82e1B06618EC284A2CeD",
    18,
    "WMX",
    "Wombex Token",
    "https://wombex.finance/"
  ),
  mgp: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0xD06716E1Ff2E492Cc5034c2E81805562dd3b45fa",
    18,
    "MGP",
    "Magpie Token",
    "https://www.magpiexyz.io/"
  ),
  hook: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0xa260E12d2B924cb899AE80BB58123ac3fEE1E2F0",
    18,
    "HOOK",
    "Hook Token",
    "https://hooked.io/"
  ),
  hft: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x44Ec807ce2F4a6F2737A92e985f318d035883e47",
    18,
    "HFT",
    "Hashflow",
    "https://www.hashflow.com/"
  ),
  squad: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x724A32dFFF9769A0a0e1F0515c0012d1fB14c3bd",
    18,
    "SQUAD",
    "Token SQUAD",
    "https://ssquad.games/"
  ),
  zbc: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x37a56cdcD83Dce2868f721De58cB3830C44C6303",
    9,
    "ZBC",
    "ZEBEC",
    "https://zebec.io/"
  ),
  primal: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0xCb5327Ed4649548e0d73E70b633cdfd99aF6Da87",
    18,
    "PRIMAL",
    "PRIMAL Token",
    "https://www.getprimal.com/"
  ),
  ankrbnb: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x52F24a5e03aee338Da5fd9Df68D2b6FAe1178827",
    18,
    "ankrBNB",
    "Ankr Staked BNB",
    "https://www.ankr.com/staking-crypto/"
  ),
  arena: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0xCfFD4D3B517b77BE32C76DA768634dE6C738889B",
    18,
    "ARENA",
    "ESPL ARENA",
    "https://espl.co/"
  ),
  champ: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x7e9AB560d37E62883E882474b096643caB234B65",
    18,
    "CHAMP",
    "Ultimate Champions Token",
    "https://beta.ultimate-champions.com/"
  ),
  axlusdc: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x4268B8F0B87b6Eae5d897996E6b845ddbD99Adf3",
    6,
    "axlUSDC",
    "Axelar Wrapped USDC",
    "https://axelarscan.io/assets/"
  ),
  csix: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x04756126F044634C9a0f0E985e60c88a51ACC206",
    18,
    "CSIX",
    "Carbon",
    "https://carbon.website/"
  ),
  bnbx: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x1bdd3Cf7F79cfB8EdbB955f20ad99211551BA275",
    18,
    "BNBx",
    "Liquid Staking BNB",
    "https://www.staderlabs.com/bnb/liquid-staking/bnbx/"
  ),
  sd: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x3BC5AC0dFdC871B365d159f728dd1B9A0B5481E8",
    18,
    "SD",
    "Stader (Wormhole)",
    "https://www.staderlabs.com/"
  ),
  ageur: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x12f31B73D812C6Bb0d735a218c086d44D5fe5f89",
    18,
    "agEUR",
    "agEUR",
    "https://app.angle.money/#/"
  ),
  caps: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0xFfBa7529AC181c2Ee1844548e6D7061c9A597dF4",
    18,
    "CAPS",
    "Capsule Coin",
    "https://www.ternoa.network/en"
  ),
  lvl: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0xB64E280e9D1B5DbEc4AcceDb2257A87b400DB149",
    18,
    "LVL",
    "Level Token",
    "https://level.finance/"
  ),
  unw: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x5b65cd9feb54F1Df3D0C60576003344079f8Dc06",
    18,
    "UNW",
    "Uniwhale Token",
    "https://www.uniwhale.co/"
  ),
  id: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x2dfF88A56767223A5529eA5960Da7A3F5f766406",
    18,
    "ID",
    "SPACE ID",
    "https://space.id/"
  ),
  rdnt: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0xf7DE7E8A6bd59ED41a4b5fe50278b3B7f31384dF",
    18,
    "RDNT",
    "Radiant",
    "https://radiant.capital/"
  ),
  sis: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0xF98b660AdF2ed7d9d9D9dAACC2fb0CAce4F21835",
    18,
    "SIS",
    "Symbiosis",
    "https://symbiosis.finance/"
  ),
  ankrETH: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0xe05A08226c49b636ACf99c40Da8DC6aF83CE5bB3",
    18,
    "ankrETH",
    "Ankr Staked ETH",
    "https://www.ankr.com/"
  ),
  axl: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x8b1f4432F943c465A973FeDC6d7aa50Fc96f1f65",
    6,
    "AXL",
    "Axelar",
    "https://axelar.network/"
  ),
  ush: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x91d6d6aF7635B7b23A8CED9508117965180e2362",
    18,
    "USH",
    "unshETHing_Token",
    "https://unsheth.xyz/"
  ),
  unshETH: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x0Ae38f7E10A43B5b2fB064B42a2f4514cbA909ef",
    18,
    "unshETH",
    "unshETH Ether",
    "https://unsheth.xyz/"
  ),
  wbeth: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0xa2E3356610840701BDf5611a53974510Ae27E2e1",
    18,
    "wBETH",
    "Wrapped Binance Beacon ETH",
    "https://ethereum.org/en/roadmap/beacon-chain/"
  ),
  edu: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0xBdEAe1cA48894A1759A8374D63925f21f2Ee2639",
    18,
    "EDU",
    "EDU Coin",
    "https://www.opencampus.xyz/"
  ),
  pepe: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x25d887Ce7a35172C62FeBFD67a1856F20FaEbB00",
    18,
    "PEPE",
    "Pepe",
    "https://www.pepe.vip/"
  ),
  cgpt: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x9840652DC04fb9db2C43853633f0F62BE6f00f98",
    18,
    "CGPT",
    "ChainGPT",
    "https://www.chaingpt.org/"
  ),
  play: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0xD069599E718f963bD84502b49ba8F8657fAF5B3a",
    18,
    "PLAY",
    "PLAY",
    "https://xcadnetwork.com/play"
  ),
  tusd: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x40af3827F39D0EAcBF4A168f8D4ee67c121D11c9",
    18,
    "TUSD",
    "TrueUSD",
    "https://tusd.io/"
  ),
  xalgo: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x0034719300501B06E10Ebb1D07ea5967301F0941",
    6,
    "xALGO",
    "Governance xAlgo",
    "https://folks.finance/"
  ),
  pendle: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0xb3Ed0A426155B79B898849803E3B36552f7ED507",
    18,
    "PENDLE",
    "Pendle",
    "https://www.pendle.finance/"
  ),
  mpendle: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x0465aad9da170798433F4aB7fa7Ec8b9b9bf0Bb1",
    18,
    "mPENDLE",
    "mPendle",
    "https://www.pendle.magpiexyz.io/stake"
  ),
  usdd: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0xd17479997F34dd9156Deef8F95A52D81D265be9c",
    18,
    "USDD",
    "Decentralized USD",
    "https://usdd.io/"
  ),
  eqb: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x374Ca32fd7934c5d43240E1e73fa9B2283468609",
    18,
    "EQB",
    "Equilibria Token",
    "https://equilibria.fi/home"
  ),
  sable: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x1eE098cBaF1f846d5Df1993f7e2d10AFb35A878d",
    18,
    "SABLE",
    "SABLE",
    "https://sable.finance/"
  ),
  snbnb: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0xB0b84D294e0C75A6abe60171b70edEb2EFd14A1B",
    18,
    "SnBNB",
    "Synclub Staked BNB",
    "https://www.synclub.io/"
  ),
  planet: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0xCa6d678e74f553f0E59cccC03ae644a3c2c5EE7d",
    18,
    "PLANET",
    "PLANET",
    "https://joinourplanet.com/"
  ),
  dck: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x16faF9DAa401AA42506AF503Aa3d80B871c467A3",
    18,
    "DCK",
    "DexCheck",
    "https://dexcheck.ai/"
  ),
  cyber: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x14778860E937f509e651192a90589dE711Fb88a9",
    18,
    "CYBER",
    "CyberConnect",
    "https://cyberconnect.me/"
  ),
  wncg: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x52242cbAb41e290E9E17CCC50Cc437bB60020a9d",
    18,
    "WNCG",
    "WrappedNCG",
    "https://nine-chronicles.com/"
  ),
  rpg: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x61dc650C10Ec3c758d251Cd2D1Ab45AF1A43e941",
    18,
    "RPG",
    "Rangers Protocol",
    "https://www.rangersprotocol.com/"
  ),
  deprecated_rpg: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0xc2098a8938119A52B1F7661893c0153A6CB116d5",
    18,
    "RPGOLD",
    "Rangers Protocol(Deprecated)",
    "https://www.rangersprotocol.com/"
  ),
  MIX: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0xCF1B55D79E824da0Ae0652F96C66fe33263d743f",
    18,
    "MIX",
    "MixMarvel Token",
    "https://www.mixmarvel.com/"
  ),
  deprecated_MIX: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x398f7827DcCbeFe6990478876bBF3612D93baF05",
    18,
    "MIXOLD",
    "MixMarvel Token(Deprecated)",
    "https://www.mixmarvel.com/"
  ),
  mbx: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0xF95a5532D67C944dfa7EDDD2f8c358Fe0dc7FAc2",
    18,
    "MBX",
    "MARBLEX on BNB",
    "https://www.marblex.io/tc"
  ),
  esRDNT: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x016aBB5E48A7B64C2014f8834ecbE56CD72BF13D",
    18,
    "esRDNT",
    "Radpie esRDNT",
    "https://radiant.capital/"
  ),
  fdusd: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0xc5f0f7b66764F6ec8C8Dff7BA683102295E16409",
    18,
    "FDUSD",
    "First Digital USD",
    "https://firstdigitallabs.com/"
  ),
  stg: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0xB0D502E938ed5f4df2E681fE6E419ff29631d62b",
    18,
    "STG",
    "StargateToken",
    "https://stargate.finance/"
  ),
  deprecated_sdcake: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0xF79B275e0B602D82B822895074552e487412A41a",
    18,
    "sdCAKE",
    "Stake DAO CAKE",
    "https://lockers.stakedao.org/"
  ),
  sdcake: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x6a1c1447F97B27dA23dC52802F5f1435b5aC821A",
    18,
    "sdCAKE",
    "Stake DAO CAKE",
    "https://lockers.stakedao.org/"
  ),
  kuji: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x073690e6CE25bE816E68F32dCA3e11067c9FB5Cc",
    6,
    "KUJI",
    "Kujira native asset",
    "https://kujira.network/"
  ),
  bonk: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0xA697e272a73744b343528C3Bc4702F2565b2F422",
    5,
    "Bonk",
    "Bonk",
    "https://bonkcoin.com"
  ),
  ace: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0xc27A719105A987b4c34116223CAE8bd8F4B5def4",
    18,
    "ACE",
    "ACEToken",
    "https://ace.fusionist.io/"
  ),
  aioz: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x33d08D8C7a168333a85285a68C0042b39fC3741D",
    18,
    "AIOZ",
    "AIOZ Network",
    "https://aioz.network/"
  ),
  usdv: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x323665443CEf804A3b5206103304BD4872EA4253",
    6,
    "USDV",
    "USDV",
    "https://usdv.money/"
  ),
  rdp: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x27c073e8427aa493a90b8dC8b73A89e670FD77bB",
    18,
    "RDP",
    "Radpie",
    "https://www.radiant.magpiexyz.io/stake"
  ),
  sats: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x143D7A700a533B4baF6D693449b278A8A2F5927d",
    18,
    "sats",
    "sats",
    "https://satscoin.vip/"
  ),
  ordi: new sdk.ERC20Token(chains.ChainId.BSC, "0xe2aE1a99bBd2eFab0a5C38f2146B7aCE61aBC5cE", 18, "ordi", "ordi", ""),
  mubi: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x38e382F74dfb84608F3C1F10187f6bEf5951DE93",
    18,
    "MUBI",
    "MUBI",
    "https://multibit.exchange/"
  ),
  nfp: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x75E8ddB518bB757b4282cd5b83bb70d4101D12FB",
    18,
    "NFP",
    "NFPrompt Token",
    "https://nfprompt.io/"
  ),
  ckp: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x2B5D9ADea07B590b638FFc165792b2C610EdA649",
    18,
    "CKP",
    "Cakepie",
    "https://www.pancake.magpiexyz.io/"
  ),
  pnp: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x5012c90F14d190607662CA8344120812Aaa2639D",
    18,
    "PNP",
    "Penpie Token",
    "https://www.pendle.magpiexyz.io/stake"
  ),
  mcake: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x581FA684D0Ec11ccb46B1d92F1F24C8A3F95C0CA",
    18,
    "mCAKE",
    "mCake Token",
    "https://www.pancake.magpiexyz.io/stake"
  ),
  insp: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x8D279274789CceC8af94a430A5996eAaCE9609A9",
    18,
    "INSP",
    "INSPECT",
    "https://www.inspect.xyz/"
  ),
  wrose: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0xF00600eBC7633462BC4F9C61eA2cE99F5AAEBd4a",
    18,
    "WROSE",
    "Wrapped ROSE",
    "https://overnight.fi"
  ),
  irl: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0xa80221D067603e30060F75E2458AA361f8eE5402",
    18,
    "IRL",
    "Rebase (IRL)",
    "https://rebase.gg/"
  ),
  huahua: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x9fD470124903957f299a1C90fEdA9043A4619cc6",
    6,
    "HUAHUA",
    "Chihuahua native asset",
    "https://www.chihuahua.wtf/"
  ),
  anyInu: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x2598c30330D5771AE9F983979209486aE26dE875",
    18,
    "AI",
    "Any Inu",
    "https://www.anyinu.xyz/"
  ),
  ovn: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x259B30C916e440FB79747cD559207FfdaBBae057",
    18,
    "OVN",
    "OVN",
    "https://overnight.fi/"
  ),
  manta: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x8581cc815e40615998F4561F3e24e68066293595",
    18,
    "MANTA",
    "Manta",
    "https://manta.network/"
  ),
  dlp: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x346575fC7f07E6994D76199E41D13dC1575322E1",
    18,
    "DLP",
    "WBNB-RDNT Pancake LP",
    "https://pancakeswap.finance"
  ),
  mdlp: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x11727E5b7Fa33FF4D380F3E7E877F19876c25b97",
    18,
    "mDLP",
    "Magpie locked DLP",
    "https://www.radiant.magpiexyz.io/stake"
  ),
  rbnb: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0xF027E525D491ef6ffCC478555FBb3CFabB3406a6",
    18,
    "rBNB",
    "StaFi rBNB",
    "https://www.stafi.io/"
  ),
  aitech: new sdk.ERC20Token(
    chains.ChainId.BSC,
    "0x2D060Ef4d6BF7f9e5edDe373Ab735513c0e4F944",
    18,
    "AITECH",
    "AITECH",
    "https://www.aitech.vision/"
  )
};
var bscTestnetTokens = {
  wbnb: sdk.WBNB[chains.ChainId.BSC_TESTNET],
  cake: CAKE_TESTNET,
  busd: BUSD_TESTNET,
  syrup: new sdk.ERC20Token(
    chains.ChainId.BSC_TESTNET,
    "0xfE1e507CeB712BDe086f3579d2c03248b2dB77f9",
    18,
    "SYRUP",
    "SyrupBar Token",
    "https://pancakeswap.finance/"
  ),
  hbtc: new sdk.ERC20Token(chains.ChainId.BSC_TESTNET, "0x3Fb6a6C06c7486BD194BB99a078B89B9ECaF4c82", 18, "HBTC", "Huobi BTC"),
  wbtc: new sdk.ERC20Token(chains.ChainId.BSC_TESTNET, "0xfC8bFbe9644e1BC836b8821660593e7de711e564", 8, "WBTC", "Wrapped BTC"),
  usdc: new sdk.ERC20Token(
    chains.ChainId.BSC_TESTNET,
    "0xCA8eB2dec4Fe3a5abbFDc017dE48E461A936623D",
    18,
    "USDC",
    "Binance-Peg USD Coin"
  ),
  usdt: new sdk.ERC20Token(chains.ChainId.BSC_TESTNET, "0x0fB5D7c73FA349A90392f873a4FA1eCf6a3d0a96", 18, "USDT", "Tether USD"),
  mockBusd: new sdk.ERC20Token(
    chains.ChainId.BSC_TESTNET,
    "0x3304dd20f6Fe094Cb0134a6c8ae07EcE26c7b6A7",
    18,
    "BUSD",
    "Binance USD"
  ),
  mockB: new sdk.ERC20Token(chains.ChainId.BSC_TESTNET, "0x828E3FC56dD48E072e3B6F3C4FD4DDB4733c2C5e", 18, "MOCK B", "MOCK B"),
  mockA: new sdk.ERC20Token(chains.ChainId.BSC_TESTNET, "0xc1eD9955C11585F47d0d6BfBC29034349A746a81", 18, "MOCK A", "MOCK A"),
  msix: new sdk.ERC20Token(chains.ChainId.BSC_TESTNET, "0xE4a9f36B61a84Dc2495dAf46417bd258a56bDfdD", 6, "MSIX", "MSIX"),
  cake2: new sdk.ERC20Token(
    chains.ChainId.BSC_TESTNET,
    "0x8d008B313C1d6C7fE2982F62d32Da7507cF43551",
    18,
    "CAKE2",
    "PancakeSwap Token",
    "https://pancakeswap.finance/"
  )
};
var ethereumTokens = {
  weth: sdk.WETH9[chains.ChainId.ETHEREUM],
  usdt: USDT[chains.ChainId.ETHEREUM],
  usdc: USDC[chains.ChainId.ETHEREUM],
  wbtc: WBTC_ETH,
  sdao: new sdk.ERC20Token(
    chains.ChainId.ETHEREUM,
    "0x993864E43Caa7F7F12953AD6fEb1d1Ca635B875F",
    18,
    "SDAO",
    "Singularity Dao",
    "https://www.singularitydao.ai/"
  ),
  stg: new sdk.ERC20Token(
    chains.ChainId.ETHEREUM,
    "0xAf5191B0De278C7286d6C7CC6ab6BB8A73bA2Cd6",
    18,
    "STG",
    "StargateToken",
    "https://stargate.finance/"
  ),
  fuse: new sdk.ERC20Token(
    chains.ChainId.ETHEREUM,
    "0x970B9bB2C0444F5E81e9d0eFb84C8ccdcdcAf84d",
    18,
    "FUSE",
    "Fuse Token",
    "https://fuse.io/"
  ),
  caps: new sdk.ERC20Token(
    chains.ChainId.ETHEREUM,
    "0x03Be5C903c727Ee2C8C4e9bc0AcC860Cca4715e2",
    18,
    "CAPS",
    "Capsule Coin",
    "https://www.ternoa.network/en"
  ),
  cake: CAKE[chains.ChainId.ETHEREUM],
  dai: new sdk.ERC20Token(
    chains.ChainId.ETHEREUM,
    "0x6B175474E89094C44Da98b954EedeAC495271d0F",
    18,
    "DAI",
    "Dai Stablecoin",
    "https://www.makerdao.com/"
  ),
  ldo: new sdk.ERC20Token(
    chains.ChainId.ETHEREUM,
    "0x5A98FcBEA516Cf06857215779Fd812CA3beF1B32",
    18,
    "LDO",
    "Lido DAO Token",
    "https://lido.fi/"
  ),
  wstETH: new sdk.ERC20Token(
    chains.ChainId.ETHEREUM,
    "0x7f39C581F595B53c5cb19bD0b3f8dA6c935E2Ca0",
    18,
    "wstETH",
    "Wrapped liquid staked Ether 2.0",
    "https://lido.fi/"
  ),
  link: new sdk.ERC20Token(
    chains.ChainId.ETHEREUM,
    "0x514910771AF9Ca656af840dff83E8264EcF986CA",
    18,
    "LINK",
    "ChainLink Token",
    "https://chain.link/"
  ),
  matic: new sdk.ERC20Token(
    chains.ChainId.ETHEREUM,
    "0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0",
    18,
    "MATIC",
    "Matic Token",
    "https://polygon.technology/"
  ),
  cbEth: new sdk.ERC20Token(
    chains.ChainId.ETHEREUM,
    "0xBe9895146f7AF43049ca1c1AE358B0541Ea49704",
    18,
    "cbETH",
    "Coinbase Wrapped Staked ETH",
    "https://www.coinbase.com/cbeth"
  ),
  ape: new sdk.ERC20Token(
    chains.ChainId.ETHEREUM,
    "0x4d224452801ACEd8B2F0aebE155379bb5D594381",
    18,
    "APE",
    "ApeCoin",
    "https://apecoin.com/"
  ),
  alcx: new sdk.ERC20Token(
    chains.ChainId.ETHEREUM,
    "0xdBdb4d16EdA451D0503b854CF79D55697F90c8DF",
    18,
    "ALCX",
    "Alchemix",
    "https://alchemix.fi/"
  ),
  alETH: new sdk.ERC20Token(
    chains.ChainId.ETHEREUM,
    "0x0100546F2cD4C9D97f798fFC9755E47865FF7Ee6",
    18,
    "alETH",
    "Alchemix ETH",
    "https://alchemix.fi/"
  ),
  fxs: new sdk.ERC20Token(
    chains.ChainId.ETHEREUM,
    "0x3432B6A60D23Ca0dFCa7761B7ab56459D9C964D0",
    18,
    "FXS",
    "Frax Share",
    "https://frax.finance/"
  ),
  frxETH: new sdk.ERC20Token(
    chains.ChainId.ETHEREUM,
    "0x5E8422345238F34275888049021821E8E08CAa1f",
    18,
    "frxETH",
    "Frax Ether",
    "https://frax.finance/"
  ),
  rpl: new sdk.ERC20Token(
    chains.ChainId.ETHEREUM,
    "0xD33526068D116cE69F19A9ee46F0bd304F21A51f",
    18,
    "RPL",
    "Rocket Pool",
    "https://rocketpool.net/"
  ),
  rETH: new sdk.ERC20Token(
    chains.ChainId.ETHEREUM,
    "0xae78736Cd615f374D3085123A210448E74Fc6393",
    18,
    "rETH",
    "Rocket Pool ETH",
    "https://rocketpool.net/"
  ),
  ankrETH: new sdk.ERC20Token(
    chains.ChainId.ETHEREUM,
    "0xE95A203B1a91a908F9B9CE46459d101078c2c3cb",
    18,
    "ankrETH",
    "Ankr Staked ETH",
    "https://www.ankr.com/"
  ),
  axl: new sdk.ERC20Token(
    chains.ChainId.ETHEREUM,
    "0x467719aD09025FcC6cF6F8311755809d45a5E5f3",
    6,
    "AXL",
    "Axelar",
    "https://axelar.network/"
  ),
  mask: new sdk.ERC20Token(
    chains.ChainId.ETHEREUM,
    "0x69af81e73A73B40adF4f3d4223Cd9b1ECE623074",
    18,
    "MASK",
    "Mask Network",
    "https://mask.io/"
  ),
  wncg: new sdk.ERC20Token(
    chains.ChainId.ETHEREUM,
    "0xf203Ca1769ca8e9e8FE1DA9D147DB68B6c919817",
    18,
    "WNCG",
    "Wrapped NCG",
    "https://nine-chronicles.com/"
  ),
  ush: new sdk.ERC20Token(
    chains.ChainId.ETHEREUM,
    "0xE60779CC1b2c1d0580611c526a8DF0E3f870EC48",
    18,
    "USH",
    "unshETHing_Token",
    "https://unsheth.xyz/"
  ),
  unshETH: new sdk.ERC20Token(
    chains.ChainId.ETHEREUM,
    "0x0Ae38f7E10A43B5b2fB064B42a2f4514cbA909ef",
    18,
    "unshETH",
    "unshETH Ether",
    "https://unsheth.xyz/"
  ),
  wbeth: new sdk.ERC20Token(
    chains.ChainId.ETHEREUM,
    "0xa2E3356610840701BDf5611a53974510Ae27E2e1",
    18,
    "wBETH",
    "Wrapped Binance Beacon ETH",
    "https://ethereum.org/en/roadmap/beacon-chain/"
  ),
  pepe: new sdk.ERC20Token(
    chains.ChainId.ETHEREUM,
    "0x6982508145454Ce325dDbE47a25d4ec3d2311933",
    18,
    "PEPE",
    "Pepe",
    "https://www.pepe.vip/"
  ),
  blur: new sdk.ERC20Token(
    chains.ChainId.ETHEREUM,
    "0x5283D291DBCF85356A21bA090E6db59121208b44",
    18,
    "BLUR",
    "Blur",
    "https://blur.io/"
  ),
  ens: new sdk.ERC20Token(
    chains.ChainId.ETHEREUM,
    "0xC18360217D8F7Ab5e7c516566761Ea12Ce7F9D72",
    18,
    "ENS",
    "Ethereum Name Service",
    "https://ens.domains/"
  ),
  tusd: new sdk.ERC20Token(
    chains.ChainId.ETHEREUM,
    "0x0000000000085d4780B73119b644AE5ecd22b376",
    18,
    "TUSD",
    "TrueUSD",
    "https://tusd.io/"
  ),
  canto: new sdk.ERC20Token(
    chains.ChainId.ETHEREUM,
    "0x56C03B8C4FA80Ba37F5A7b60CAAAEF749bB5b220",
    18,
    "CANTO",
    "Canto",
    "https://tusd.io/"
  ),
  pendle: new sdk.ERC20Token(
    chains.ChainId.ETHEREUM,
    "0x808507121B80c02388fAd14726482e061B8da827",
    18,
    "PENDLE",
    "Pendle",
    "https://www.pendle.finance/"
  ),
  wld: new sdk.ERC20Token(
    chains.ChainId.ETHEREUM,
    "0x163f8C2467924be0ae7B5347228CABF260318753",
    18,
    "WLD",
    "Worldcoin",
    "https://worldcoin.org/"
  ),
  wom: new sdk.ERC20Token(
    chains.ChainId.ETHEREUM,
    "0xc0B314a8c08637685Fc3daFC477b92028c540CFB",
    18,
    "WOM",
    "Wombat Token",
    "https://www.wombat.exchange/"
  ),
  cyber: new sdk.ERC20Token(
    chains.ChainId.ETHEREUM,
    "0x14778860E937f509e651192a90589dE711Fb88a9",
    18,
    "CYBER",
    "CyberConnect",
    "https://cyberconnect.me/"
  ),
  woo: new sdk.ERC20Token(
    chains.ChainId.ETHEREUM,
    "0x4691937a7508860F876c9c0a2a617E7d9E945D4B",
    18,
    "WOO",
    "Wootrade Network",
    "https://woo.network"
  ),
  pyusd: new sdk.ERC20Token(
    chains.ChainId.ETHEREUM,
    "0x6c3ea9036406852006290770BEdFcAbA0e23A0e8",
    6,
    "PYUSD",
    "PayPal USD",
    "https://www.paypal.com/pyusd"
  ),
  roci: new sdk.ERC20Token(
    chains.ChainId.ETHEREUM,
    "0xF51092Fe93B4E9282f42c459F05D93D2D079549e",
    18,
    "ROCI",
    "RociFi",
    "https://roci.fi/"
  ),
  ethx: new sdk.ERC20Token(
    chains.ChainId.ETHEREUM,
    "0xA35b1B31Ce002FBF2058D22F30f95D405200A15b",
    18,
    "ETHx",
    "ETHx",
    "https://www.staderlabs.com/"
  ),
  meme: new sdk.ERC20Token(
    chains.ChainId.ETHEREUM,
    "0xb131f4A55907B10d1F0A50d8ab8FA09EC342cd74",
    18,
    "MEME",
    "Memecoin",
    "https://www.memecoin.org/"
  ),
  btrfly: new sdk.ERC20Token(
    chains.ChainId.ETHEREUM,
    "0xc55126051B22eBb829D00368f4B12Bde432de5Da",
    18,
    "BTRFLY",
    "BTRFLY",
    "https://www.redactedcartel.xyz/"
  ),
  sdt: new sdk.ERC20Token(
    chains.ChainId.ETHEREUM,
    "0x73968b9a57c6E53d41345FD57a6E6ae27d6CDB2F",
    18,
    "SDT",
    "Stake DAO Token",
    "https://www.stakedao.org/"
  ),
  agEUR: new sdk.ERC20Token(
    chains.ChainId.ETHEREUM,
    "0x1a7e4e63778B4f12a199C062f3eFdD288afCBce8",
    18,
    "agEUR",
    "agEUR",
    "https://angle.money/"
  ),
  insp: new sdk.ERC20Token(
    chains.ChainId.ETHEREUM,
    "0x186eF81fd8E77EEC8BfFC3039e7eC41D5FC0b457",
    18,
    "INSP",
    "Inspect",
    "https://www.inspect.xyz/"
  ),
  id: new sdk.ERC20Token(
    chains.ChainId.ETHEREUM,
    "0x2dfF88A56767223A5529eA5960Da7A3F5f766406",
    18,
    "ID",
    "SPACE ID",
    "https://space.id/"
  ),
  bonk: new sdk.ERC20Token(
    chains.ChainId.ETHEREUM,
    "0x1151CB3d861920e07a38e03eEAd12C32178567F6",
    5,
    "BONK",
    "BONK",
    "https://bonkcoin.com"
  ),
  aioz: new sdk.ERC20Token(
    chains.ChainId.ETHEREUM,
    "0x626E8036dEB333b408Be468F951bdB42433cBF18",
    18,
    "AIOZ",
    "AIOZ Network",
    "https://aioz.network/"
  ),
  swETH: new sdk.ERC20Token(
    chains.ChainId.ETHEREUM,
    "0xf951E335afb289353dc249e82926178EaC7DEd78",
    18,
    "swETH",
    "swETH",
    "https://www.swellnetwork.io/"
  ),
  osak: new sdk.ERC20Token(
    chains.ChainId.ETHEREUM,
    "0xa21Af1050F7B26e0cfF45ee51548254C41ED6b5c",
    18,
    "OSAK",
    "Osaka Protocol",
    "https://osaka.win/"
  ),
  ords: new sdk.ERC20Token(
    chains.ChainId.ETHEREUM,
    "0x8AB2ff0116A279a99950C66A12298962D152B83c",
    18,
    "ORDS",
    "Ordiswap",
    "https://ordiswap.fi/"
  ),
  pxETH: new sdk.ERC20Token(
    chains.ChainId.ETHEREUM,
    "0x04C154b66CB340F3Ae24111CC767e0184Ed00Cc6",
    18,
    "pxETH",
    "Pirex Ether",
    "https://dineroismoney.com/"
  ),
  weETH: new sdk.ERC20Token(
    chains.ChainId.ETHEREUM,
    "0xCd5fE23C85820F7B72D0926FC9b05b43E359b7ee",
    18,
    "weETH",
    "Wrapped eETH",
    "https://www.ether.fi/"
  )
};
var goerliTestnetTokens = {
  cake: CAKE[chains.ChainId.GOERLI],
  weth: sdk.WETH9[chains.ChainId.GOERLI],
  celr: new sdk.ERC20Token(chains.ChainId.GOERLI, "0x5D3c0F4cA5EE99f8E8F59Ff9A5fAb04F6a7e007f", 18, "CELR", "CelerToken", ""),
  leet: new sdk.ERC20Token(chains.ChainId.GOERLI, "0xBd509651E6374c327d24b9d7E3Ea46704f6F31E8", 18, "LEET", "Leet Token", ""),
  usdc: USDC_GOERLI,
  mockB: new sdk.ERC20Token(chains.ChainId.GOERLI, "0xB8DA084D035C9c38518D86A9D079ba6A0Aec4327", 18, "MOCK B", "MOCK B"),
  mockA: new sdk.ERC20Token(chains.ChainId.GOERLI, "0xD134B434682dF091E398a844Dc3c613fe728cE2D", 18, "MOCK A", "MOCK A")
};
var lineaTokens = {
  weth: sdk.WETH9[chains.ChainId.LINEA],
  usdc: USDC[chains.ChainId.LINEA],
  wbtc: new sdk.ERC20Token(
    chains.ChainId.LINEA,
    "0x3aAB2285ddcDdaD8edf438C1bAB47e1a9D05a9b4",
    8,
    "WBTC",
    "Wrapped BTC",
    "https://bitcoin.org/"
  ),
  usdt: USDT[chains.ChainId.LINEA],
  dai: new sdk.ERC20Token(
    chains.ChainId.LINEA,
    "0x4AF15ec2A0BD43Db75dd04E62FAA3B8EF36b00d5",
    18,
    "DAI",
    "Dai Stablecoin",
    "https://www.makerdao.com/"
  ),
  cake: CAKE[chains.ChainId.LINEA],
  axlusdc: new sdk.ERC20Token(
    chains.ChainId.LINEA,
    "0xEB466342C4d449BC9f53A865D5Cb90586f405215",
    6,
    "axlUSDC",
    "Axelar Wrapped USDC",
    "https://axelarscan.io/assets/"
  ),
  wstETH: new sdk.ERC20Token(
    chains.ChainId.LINEA,
    "0xB5beDd42000b71FddE22D3eE8a79Bd49A568fC8F",
    18,
    "wstETH",
    "Wrapped liquid staked Ether 2.0",
    "https://lido.fi/"
  )
};
var lineaTestnetTokens = {
  weth: sdk.WETH9[chains.ChainId.LINEA_TESTNET],
  usdc: USDC[chains.ChainId.LINEA_TESTNET],
  cake: CAKE[chains.ChainId.LINEA_TESTNET],
  mockA: new sdk.ERC20Token(chains.ChainId.BASE_TESTNET, "0x6cc56b20bf8C4FfD58050D15AbA2978A745CC691", 18, "A", "Mock A")
};
var opBnbTokens = {
  wbnb: sdk.WBNB[chains.ChainId.OPBNB],
  usdt: USDT[chains.ChainId.OPBNB],
  cake: CAKE[chains.ChainId.OPBNB],
  alp: new sdk.ERC20Token(
    chains.ChainId.OPBNB,
    "0xC8424F526553ac394E9020DB0a878fAbe82b698C",
    18,
    "ALP",
    "ApolloX LP",
    "https://www.apollox.finance/en"
  ),
  eth: new sdk.ERC20Token(
    chains.ChainId.OPBNB,
    "0xE7798f023fC62146e8Aa1b36Da45fb70855a77Ea",
    18,
    "ETH",
    "Ethereum",
    "https://opbnb.bnbchain.org/en"
  ),
  fdusd: new sdk.ERC20Token(
    chains.ChainId.OPBNB,
    "0x50c5725949A6F0c72E6C4a641F24049A917DB0Cb",
    18,
    "FDUSD",
    "First Digital USD",
    "https://firstdigitallabs.com/"
  )
};
var opBnbTestnetTokens = {
  wbnb: sdk.WBNB[chains.ChainId.OPBNB_TESTNET],
  weth: sdk.WETH9[chains.ChainId.OPBNB_TESTNET],
  usdc: USDC[chains.ChainId.OPBNB_TESTNET],
  usdt: USDT[chains.ChainId.OPBNB_TESTNET],
  mockA: new sdk.ERC20Token(chains.ChainId.OPBNB_TESTNET, "0x394d64eD40a6aF892D8562eE816D5e71D8999E52", 18, "A", "MOCK Token A"),
  mockB: new sdk.ERC20Token(chains.ChainId.OPBNB_TESTNET, "0x232e111381abc519777BD9f09b2A38B60e244D06", 18, "B", "MOCK Token B"),
  mockC: new sdk.ERC20Token(chains.ChainId.OPBNB_TESTNET, "0x2B01BD26B57f2A4E3d715ccCD9e954A52b4C855E", 18, "C", "MOCK Token C")
};
var polygonZkEvmTokens = {
  weth: sdk.WETH9[chains.ChainId.POLYGON_ZKEVM],
  usdc: USDC[chains.ChainId.POLYGON_ZKEVM],
  usdt: USDT[chains.ChainId.POLYGON_ZKEVM],
  cake: CAKE[chains.ChainId.POLYGON_ZKEVM],
  matic: new sdk.ERC20Token(
    chains.ChainId.POLYGON_ZKEVM,
    "0xa2036f0538221a77A3937F1379699f44945018d0",
    18,
    "MATIC",
    "Matic Token",
    "https://polygon.technology/polygon-zkevm"
  ),
  grai: new sdk.ERC20Token(
    chains.ChainId.POLYGON_ZKEVM,
    "0xCA68ad4EE5c96871EC6C6dac2F714a8437A3Fe66",
    18,
    "GRAI",
    "Gravita Debt Token",
    "https://www.gravitaprotocol.com/"
  ),
  wbtc: new sdk.ERC20Token(
    chains.ChainId.POLYGON_ZKEVM,
    "0xEA034fb02eB1808C2cc3adbC15f447B93CbE08e1",
    8,
    "WBTC",
    "Wrapped BTC",
    "https://bitcoin.org/"
  ),
  usdce: new sdk.ERC20Token(
    chains.ChainId.POLYGON_ZKEVM,
    "0x37eAA0eF3549a5Bb7D431be78a3D99BD360d19e5",
    6,
    "USDC.E",
    "USD Coin",
    "https://www.centre.io/"
  )
};
var polygonZkEvmTestnetTokens = {
  weth: sdk.WETH9[chains.ChainId.POLYGON_ZKEVM_TESTNET],
  usdt: USDT[chains.ChainId.POLYGON_ZKEVM_TESTNET],
  cake: CAKE[chains.ChainId.POLYGON_ZKEVM_TESTNET],
  mockA: new sdk.ERC20Token(chains.ChainId.POLYGON_ZKEVM_TESTNET, "0xa8209d33Bfc9cA15138dDaB6A637f6c4617379c9", 18, "MOCKA"),
  mockB: new sdk.ERC20Token(chains.ChainId.POLYGON_ZKEVM_TESTNET, "0x62d907974C0b72334373f34b8272467857402Ec3", 18, "MOCKB"),
  mockC: new sdk.ERC20Token(chains.ChainId.POLYGON_ZKEVM_TESTNET, "0xf317eD77Baed624d0EA2384AA88D91B774a9b009", 18, "MOCKC")
};
var scrollSepoliaTokens = {
  weth: sdk.WETH9[chains.ChainId.SCROLL_SEPOLIA],
  usdc: USDC[chains.ChainId.SCROLL_SEPOLIA]
};
var sepoliaTokens = {
  weth: sdk.WETH9[sdk.ChainId.SEPOLIA],
  usdc: USDC[sdk.ChainId.SEPOLIA]
};
var zksyncTokens = {
  weth: sdk.WETH9[chains.ChainId.ZKSYNC],
  usdc: USDC[chains.ChainId.ZKSYNC],
  usdt: USDT[chains.ChainId.ZKSYNC],
  cake: CAKE[chains.ChainId.ZKSYNC],
  tes: new sdk.ERC20Token(
    chains.ChainId.ZKSYNC,
    "0xCab3F741Fa54e79E34753B95717b23018332b8AC",
    18,
    "TES",
    "Tiny Era Shard",
    "https://tinyworlds.io/"
  ),
  wbtc: new sdk.ERC20Token(chains.ChainId.ZKSYNC, "0xBBeB516fb02a01611cBBE0453Fe3c580D7281011", 8, "WBTC", "Wrapped BTC"),
  busd: new sdk.ERC20Token(
    chains.ChainId.ZKSYNC,
    "0x2039bb4116B4EFc145Ec4f0e2eA75012D6C0f181",
    18,
    "BUSD",
    "Binance USD",
    "https://www.paxos.com/busd/"
  ),
  reth: new sdk.ERC20Token(
    chains.ChainId.ZKSYNC,
    "0x32Fd44bB869620C0EF993754c8a00Be67C464806",
    18,
    "rETH",
    "Rocket Pool ETH",
    "https://www.paxos.com/busd/"
  ),
  usdPlus: new sdk.ERC20Token(
    chains.ChainId.ZKSYNC,
    "0x8E86e46278518EFc1C5CEd245cBA2C7e3ef11557",
    6,
    "USD+",
    "USD Plus",
    "http://usdplus.co"
  ),
  wstETH: new sdk.ERC20Token(
    chains.ChainId.ZKSYNC,
    "0x703b52F2b28fEbcB60E1372858AF5b18849FE867",
    18,
    "wstETH",
    "Wrapped liquid staked Ether 2.0",
    "https://lido.fi/"
  ),
  meow: new sdk.ERC20Token(
    chains.ChainId.ZKSYNC,
    "0x79db8c67d0c33203da4Efb58F7D325E1e0d4d692",
    18,
    "MEOW",
    "Zeek Coin",
    "https://zeekcoin.com/"
  )
};
var zkSyncTestnetTokens = {
  weth: sdk.WETH9[chains.ChainId.ZKSYNC_TESTNET],
  usdc: USDC[chains.ChainId.ZKSYNC_TESTNET],
  cake: CAKE[chains.ChainId.ZKSYNC_TESTNET],
  mock: new sdk.ERC20Token(chains.ChainId.ZKSYNC_TESTNET, "0x923AD8C9183A76B1DC341F23B8822AB4f7eBf9E0", 18, "MOCK", "MOCK"),
  mockC: new sdk.ERC20Token(chains.ChainId.ZKSYNC_TESTNET, "0x6Ea0330F4342cc322F56b3f80D328fDFA5E83DD9", 18, "MOCKC", "MOCKC"),
  mockD: new sdk.ERC20Token(chains.ChainId.ZKSYNC_TESTNET, "0x1067FF0B6827a2ee58Bc8A6Aa74d0EeDb147A93C", 18, "MOCKD", "MOCKD")
};

// ../utils/enumValues.ts
function* enumValues(enumObj) {
  let isStringEnum = true;
  for (const property in enumObj) {
    if (typeof enumObj[property] === "number") {
      isStringEnum = false;
      break;
    }
  }
  for (const property in enumObj) {
    if (isStringEnum || typeof enumObj[property] === "number") {
      yield enumObj[property];
    }
  }
}
var allTokens = {
  [chains.ChainId.GOERLI]: goerliTestnetTokens,
  [chains.ChainId.BSC]: bscTokens,
  [chains.ChainId.BSC_TESTNET]: bscTestnetTokens,
  [chains.ChainId.ETHEREUM]: ethereumTokens,
  [chains.ChainId.ARBITRUM_ONE]: arbitrumTokens,
  [chains.ChainId.POLYGON_ZKEVM]: polygonZkEvmTokens,
  [chains.ChainId.POLYGON_ZKEVM_TESTNET]: polygonZkEvmTestnetTokens,
  [chains.ChainId.ZKSYNC]: zksyncTokens,
  [chains.ChainId.ZKSYNC_TESTNET]: zkSyncTestnetTokens,
  [chains.ChainId.LINEA_TESTNET]: lineaTestnetTokens,
  [chains.ChainId.LINEA]: lineaTokens,
  [chains.ChainId.ARBITRUM_GOERLI]: arbitrumGoerliTokens,
  [chains.ChainId.OPBNB]: opBnbTokens,
  [chains.ChainId.OPBNB_TESTNET]: opBnbTestnetTokens,
  [chains.ChainId.BASE]: baseTokens,
  [chains.ChainId.BASE_TESTNET]: baseTestnetTokens,
  [chains.ChainId.SCROLL_SEPOLIA]: scrollSepoliaTokens,
  [chains.ChainId.SEPOLIA]: sepoliaTokens,
  [chains.ChainId.ARBITRUM_SEPOLIA]: arbSepoliaTokens,
  [chains.ChainId.BASE_SEPOLIA]: baseSepoliaTokens
};

// src/helpers/getTokensByChain.ts
function getTokensByChain(chainId) {
  if (!chainId) {
    return [];
  }
  const tokenMap = allTokens[chainId];
  return Object.values(tokenMap);
}

// src/helpers/index.ts
var createEmptyList = () => {
  const list = {};
  for (const chainId of enumValues(chains.ChainId)) {
    list[chainId] = {};
  }
  return list;
};
var EMPTY_LIST = createEmptyList();
function serializeTokens(unserializedTokens) {
  const serializedTokens = Object.keys(unserializedTokens).reduce((accum, key) => {
    return { ...accum, [key]: unserializedTokens[key].serialize };
  }, {});
  return serializedTokens;
}
function unwrappedToken(token) {
  if (token && token.equals(sdk.WNATIVE[token.chainId]))
    return sdk.Native.onChain(token.chainId);
  return token;
}

exports.BUSD = BUSD;
exports.BUSD_BSC = BUSD_BSC;
exports.BUSD_ETH = BUSD_ETH;
exports.BUSD_GOERLI = BUSD_GOERLI;
exports.BUSD_TESTNET = BUSD_TESTNET;
exports.CAKE = CAKE;
exports.CAKE_MAINNET = CAKE_MAINNET;
exports.CAKE_TESTNET = CAKE_TESTNET;
exports.CZRED = CZRED;
exports.CZRED_MAINNET = CZRED_MAINNET;
exports.EMPTY_LIST = EMPTY_LIST;
exports.STABLE_COIN = STABLE_COIN;
exports.USDC = USDC;
exports.USDC_BSC = USDC_BSC;
exports.USDC_ETH = USDC_ETH;
exports.USDC_GOERLI = USDC_GOERLI;
exports.USDC_TESTNET = USDC_TESTNET;
exports.USDT = USDT;
exports.USDT_BSC = USDT_BSC;
exports.USDT_ETH = USDT_ETH;
exports.WBTC_ETH = WBTC_ETH;
exports.arbSepoliaTokens = arbSepoliaTokens;
exports.arbitrumGoerliTokens = arbitrumGoerliTokens;
exports.arbitrumTokens = arbitrumTokens;
exports.baseSepoliaTokens = baseSepoliaTokens;
exports.baseTestnetTokens = baseTestnetTokens;
exports.baseTokens = baseTokens;
exports.bscTestnetTokens = bscTestnetTokens;
exports.bscTokens = bscTokens;
exports.ethereumTokens = ethereumTokens;
exports.getTokensByChain = getTokensByChain;
exports.goerliTestnetTokens = goerliTestnetTokens;
exports.lineaTestnetTokens = lineaTestnetTokens;
exports.lineaTokens = lineaTokens;
exports.opBnbTestnetTokens = opBnbTestnetTokens;
exports.opBnbTokens = opBnbTokens;
exports.polygonZkEvmTestnetTokens = polygonZkEvmTestnetTokens;
exports.polygonZkEvmTokens = polygonZkEvmTokens;
exports.scrollSepoliaTokens = scrollSepoliaTokens;
exports.sepoliaTokens = sepoliaTokens;
exports.serializeTokens = serializeTokens;
exports.unwrappedToken = unwrappedToken;
exports.zkSyncTestnetTokens = zkSyncTestnetTokens;
exports.zksyncTokens = zksyncTokens;
