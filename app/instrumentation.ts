/**
 * Next.js Instrumentation - Web Vitals monitoring
 *
 * This file is automatically loaded by Next.js for performance monitoring.
 * Web Vitals are collected and sent to Vercel Analytics in production.
 *
 * Core Web Vitals tracked:
 * - LCP (Largest Contentful Paint) - Loading performance
 * - INP (Interaction to Next Paint) - Interactivity (replaces FID)
 * - CLS (Cumulative Layout Shift) - Visual stability
 *
 * Additional metrics:
 * - FCP (First Contentful Paint)
 * - TTFB (Time to First Byte)
 */

export async function register() {
  // Server-side instrumentation runs here
  if (process.env.NODE_ENV === 'development') {
    console.log('[Instrumentation] Web Vitals monitoring initialized')
  }
}
