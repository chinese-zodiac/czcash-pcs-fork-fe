import { ChainId } from '@pancakeswap/chains';
import { Token } from '@pancakeswap/sdk';
import { ChainMap, ChainTokenList } from '../types';
export declare const SMART_ROUTER_ADDRESSES: {
    readonly 1: "0x13f4EA83D0bd40E75C8222255bc855a974568Dd4";
    readonly 5: "0x9a489505a00cE272eAa5e07Dba6491314CaE3796";
    readonly 56: "0x13f4EA83D0bd40E75C8222255bc855a974568Dd4";
    readonly 97: "0x9a489505a00cE272eAa5e07Dba6491314CaE3796";
    readonly 42161: "0x32226588378236Fd0c7c4053999F88aC0e5cAc77";
    readonly 421613: "0xBee35e9Cbd9595355Eaf5DE2055EF525adB41bE6";
    readonly 1101: "0x678Aa4bF4E210cf2166753e054d5b7c31cc7fa86";
    readonly 1442: "0x365C5F0B816828936320ea143e337fbA7D1b911E";
    readonly 324: "0xf8b59f3c3Ab33200ec80a8A58b2aA5F5D2a8944C";
    readonly 280: "0x4DC9186c6C5F7dd430c7b6D8D513076637902241";
    readonly 59144: "0x678Aa4bF4E210cf2166753e054d5b7c31cc7fa86";
    readonly 59140: "0x21d809FB4052bb1807cfe2418bA638d72F4aEf87";
    readonly 204: "0x678Aa4bF4E210cf2166753e054d5b7c31cc7fa86";
    readonly 5611: "0xf317eD77Baed624d0EA2384AA88D91B774a9b009";
    readonly 8453: "0x678Aa4bF4E210cf2166753e054d5b7c31cc7fa86";
    readonly 84531: "0xDDC44b8507B4Ca992fB60F0ECdF5651A87668509";
    readonly 534351: "0xDDC44b8507B4Ca992fB60F0ECdF5651A87668509";
    readonly 11155111: "0x678Aa4bF4E210cf2166753e054d5b7c31cc7fa86";
    readonly 421614: "0x678Aa4bF4E210cf2166753e054d5b7c31cc7fa86";
    readonly 84532: "0x678Aa4bF4E210cf2166753e054d5b7c31cc7fa86";
};
export declare const V2_ROUTER_ADDRESS: ChainMap<string>;
export declare const STABLE_SWAP_INFO_ADDRESS: ChainMap<string>;
export declare const BASES_TO_CHECK_TRADES_AGAINST: ChainTokenList;
/**
 * Additional bases for specific tokens
 * @example { [WBTC.address]: [renBTC], [renBTC.address]: [WBTC] }
 */
export declare const ADDITIONAL_BASES: {
    [chainId in ChainId]?: {
        [tokenAddress: string]: Token[];
    };
};
/**
 * Some tokens can only be swapped via certain pairs, so we override the list of bases that are considered for these
 * tokens.
 * @example [AMPL.address]: [DAI, WNATIVE[ChainId.BSC]]
 */
export declare const CUSTOM_BASES: {
    [chainId in ChainId]?: {
        [tokenAddress: string]: Token[];
    };
};
//# sourceMappingURL=exchange.d.ts.map