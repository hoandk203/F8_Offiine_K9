import { NextResponse } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request) {
    const isLogin= false
    const pathname= request.nextUrl.pathname;
    if(pathname.startsWith("/admin") && !isLogin){
        const urlLogin= `${request.nextUrl.origin}/login`
        return NextResponse.redirect(urlLogin)
    }

    // const cookies= request.headers.get("cookie")
    // const name= request.cookies.get("name")
    //
    // const response = NextResponse.next()
    // response.headers.set("X-Api-Key", "aihi")
    // response.cookies.set({
    //     name: 'vercel',
    //     value: 'fast',
    //     path: '/',
    //     httpOnly: true,
    //     maxAge: 86400
    // })
    // response.cookies.delete("vercel")
    // return response
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: [
        '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',

    ],
}