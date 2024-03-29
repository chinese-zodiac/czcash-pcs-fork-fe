import { ChainId } from '@pancakeswap/chains';
import { StableSwapPool } from './types';
export type StableSwapPoolMap<TChainId extends number> = {
    [chainId in TChainId]: StableSwapPool[];
};
export declare const isStableSwapSupported: (chainId: number | undefined) => chainId is ChainId.BSC;
export declare const STABLE_SUPPORTED_CHAIN_IDS: readonly [ChainId.BSC];
export type StableSupportedChainId = (typeof STABLE_SUPPORTED_CHAIN_IDS)[number];
export declare const STABLE_POOL_MAP: {
    56: StableSwapPool[];
};
//# sourceMappingURL=pools.d.ts.map