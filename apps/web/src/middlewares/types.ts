import { NextFetchEvent, NextRequest, NextResponse } from 'next/server'

export type MiddlewareResult = NextResponse | null | undefined | void
export type NextMiddleware = (
  request: NextRequest,
  event: NextFetchEvent,
) => MiddlewareResult | Promise<MiddlewareResult>

export type MiddlewareFactory = (middleware: NextMiddleware) => NextMiddleware

// Optional fields supplied by the existing hosting adapter, not trusted headers.
// Next 15 removed them from NextRequest; keep the current policy input contract.
export interface ExtendedNextReq extends NextRequest {
  geo?: { country?: string; region?: string }
  ip?: string
  userIp?: string | null
  clientId?: string | undefined
}
