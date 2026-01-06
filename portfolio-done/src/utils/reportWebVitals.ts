import { onCLS, onFID, onFCP, onLCP, onTTFB } from 'web-vitals'

const vitalsUrl = 'https://vitals.vercel-analytics.com/v1/vitals'

function getConnectionSpeed() {
  const nav = navigator as any
  return nav?.connection?.effectiveType || ''
}

export function reportWebVitals() {
  try {
    onCLS(sendToAnalytics)
    onFID(sendToAnalytics)
    onFCP(sendToAnalytics)
    onLCP(sendToAnalytics)
    onTTFB(sendToAnalytics)
  } catch (err) {
    console.error('Failed to report web vitals:', err)
  }
}

function sendToAnalytics(metric: any) {
  const body = {
    dsn: process.env.VITE_ANALYTICS_ID || 'development',
    id: metric.id,
    page: window.location.pathname,
    href: window.location.href,
    event_name: metric.name,
    value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
    speed: getConnectionSpeed(),
  }

  // Only send in production
  if (process.env.NODE_ENV === 'production') {
    const blob = new Blob([JSON.stringify(body)], { type: 'application/json' })
    if (navigator.sendBeacon) {
      navigator.sendBeacon(vitalsUrl, blob)
    } else {
      fetch(vitalsUrl, {
        body: JSON.stringify(body),
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      })
    }
  } else {
    console.log('Web Vitals:', metric)
  }
}
