import { ChainId } from '@pancakeswap/chains';
import { Address } from 'viem';
import { SupportedChainId } from './supportedChains';
export type ContractAddresses<T extends ChainId = SupportedChainId> = {
    [chainId in T]: Address;
};
export declare const ICAKE: {
    readonly 56: "0x3C458828D1622F5f4d526eb0d24Da8C4Eb8F07b1";
};
export declare const CAKE_VAULT: {
    readonly 56: "0x45c54210128a065de780C4B0Df3d16664f7f859e";
};
export declare const CAKE_FLEXIBLE_SIDE_VAULT: {
    readonly 56: "0x615e896A8C2CA8470A2e9dc2E9552998f8658Ea0";
};
//# sourceMappingURL=contracts.d.ts.map