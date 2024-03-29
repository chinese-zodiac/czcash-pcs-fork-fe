import { CurrencyAmount, Price, BigintIsh } from '@pancakeswap/swap-sdk-core';
import { Address } from 'viem';
import { ERC20Token } from './token';
export declare const computePairAddress: ({ factoryAddress, tokenA, tokenB, }: {
    factoryAddress: Address;
    tokenA: ERC20Token;
    tokenB: ERC20Token;
}) => Address;
export declare class Pair {
    readonly liquidityToken: ERC20Token;
    private readonly tokenAmounts;
    static getAddress(tokenA: ERC20Token, tokenB: ERC20Token): Address;
    constructor(currencyAmountA: CurrencyAmount<ERC20Token>, tokenAmountB: CurrencyAmount<ERC20Token>);
    /**
     * Returns true if the token is either token0 or token1
     * @param token to check
     */
    involvesToken(token: ERC20Token): boolean;
    /**
     * Returns the current mid price of the pair in terms of token0, i.e. the ratio of reserve1 to reserve0
     */
    get token0Price(): Price<ERC20Token, ERC20Token>;
    /**
     * Returns the current mid price of the pair in terms of token1, i.e. the ratio of reserve0 to reserve1
     */
    get token1Price(): Price<ERC20Token, ERC20Token>;
    /**
     * Return the price of the given token in terms of the other token in the pair.
     * @param token token to return price of
     */
    priceOf(token: ERC20Token): Price<ERC20Token, ERC20Token>;
    /**
     * Returns the chain ID of the tokens in the pair.
     */
    get chainId(): number;
    get token0(): ERC20Token;
    get token1(): ERC20Token;
    get reserve0(): CurrencyAmount<ERC20Token>;
    get reserve1(): CurrencyAmount<ERC20Token>;
    reserveOf(token: ERC20Token): CurrencyAmount<ERC20Token>;
    getOutputAmount(inputAmount: CurrencyAmount<ERC20Token>): [CurrencyAmount<ERC20Token>, Pair];
    getInputAmount(outputAmount: CurrencyAmount<ERC20Token>): [CurrencyAmount<ERC20Token>, Pair];
    getLiquidityMinted(totalSupply: CurrencyAmount<ERC20Token>, tokenAmountA: CurrencyAmount<ERC20Token>, tokenAmountB: CurrencyAmount<ERC20Token>): CurrencyAmount<ERC20Token>;
    getLiquidityValue(token: ERC20Token, totalSupply: CurrencyAmount<ERC20Token>, liquidity: CurrencyAmount<ERC20Token>, feeOn?: boolean, kLast?: BigintIsh): CurrencyAmount<ERC20Token>;
}
//# sourceMappingURL=pair.d.ts.map