import { NextFetchEvent, NextResponse } from 'next/server'
import { shouldGeoBlock } from '@pancakeswap/utils/geoBlock'
import { ExtendedNextReq, MiddlewareFactory, NextMiddleware } from './types'

export const withGeoBlock: MiddlewareFactory = (next: NextMiddleware) => {
  return async (request: ExtendedNextReq, _next: NextFetchEvent) => {
    if (shouldGeoBlock(request.geo)) {
      return NextResponse.redirect(new URL('/451', request.url))
    }
    return next(request, _next)
  }
}
