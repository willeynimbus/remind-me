import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

// Define which routes to protect
const isProtectedRoute = createRouteMatcher(["/", "/credits(.*)"]);

export default clerkMiddleware((auth, req) => {
    if (isProtectedRoute(req)) {
        auth().protect();
    }
});

export const config = {
    matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};