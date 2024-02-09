import { AbortControl } from '@pancakeswap/utils/abortControl';
import { GetGasLimitParams } from './getGasLimit';
import { MulticallRequestWithGas } from './types';
export type CallByGasLimitParams = AbortControl & GetGasLimitParams & {
    blockConflictTolerance?: number;
    dropUnexecutedCalls?: boolean;
};
export declare function multicallByGasLimit(calls: MulticallRequestWithGas[], { chainId, gasBuffer, client, dropUnexecutedCalls, signal, ...rest }: CallByGasLimitParams): Promise<CallResult>;
export type SingleCallResult = {
    result: string;
    gasUsed: bigint;
    success: boolean;
};
export type CallResult = {
    results: SingleCallResult[];
    blockNumber: bigint;
};
export type MulticallReturn = CallResult & {
    lastSuccessIndex: number;
};
//# sourceMappingURL=multicall.d.ts.map