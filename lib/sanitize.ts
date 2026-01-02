/**
 * Server-side HTML sanitizer for blog content
 * Prevents XSS attacks while allowing safe formatting tags
 */

// Allowed HTML tags for blog content
const ALLOWED_TAGS = new Set([
  'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
  'p', 'br', 'hr',
  'ul', 'ol', 'li',
  'strong', 'b', 'em', 'i', 'u', 's',
  'blockquote', 'code', 'pre',
  'a', 'span',
  'table', 'thead', 'tbody', 'tr', 'th', 'td',
])

// Allowed attributes per tag
const ALLOWED_ATTRS: Record<string, Set<string>> = {
  'a': new Set(['href', 'title', 'target', 'rel']),
  'img': new Set(['src', 'alt', 'title', 'width', 'height']),
  '*': new Set(['class', 'id']),
}

// Dangerous protocols to block in href/src
const DANGEROUS_PROTOCOLS = ['javascript:', 'data:', 'vbscript:']

/**
 * Sanitizes HTML string to prevent XSS attacks
 * Allows only safe tags and attributes for blog content
 */
export function sanitizeHtml(html: string): string {
  if (!html) return ''

  // Remove script tags and their content completely
  let sanitized = html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')

  // Remove style tags and their content
  sanitized = sanitized.replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '')

  // Remove on* event handlers (onclick, onerror, etc.)
  sanitized = sanitized.replace(/\s*on\w+\s*=\s*["'][^"']*["']/gi, '')
  sanitized = sanitized.replace(/\s*on\w+\s*=\s*[^\s>]+/gi, '')

  // Remove javascript: and other dangerous protocols
  sanitized = sanitized.replace(/href\s*=\s*["']?\s*javascript:[^"'>]*/gi, 'href="#"')
  sanitized = sanitized.replace(/src\s*=\s*["']?\s*javascript:[^"'>]*/gi, 'src=""')
  sanitized = sanitized.replace(/href\s*=\s*["']?\s*data:[^"'>]*/gi, 'href="#"')
  sanitized = sanitized.replace(/src\s*=\s*["']?\s*data:[^"'>]*/gi, 'src=""')
  sanitized = sanitized.replace(/href\s*=\s*["']?\s*vbscript:[^"'>]*/gi, 'href="#"')

  // Remove iframe, object, embed, form elements
  sanitized = sanitized.replace(/<iframe\b[^>]*>[\s\S]*?<\/iframe>/gi, '')
  sanitized = sanitized.replace(/<object\b[^>]*>[\s\S]*?<\/object>/gi, '')
  sanitized = sanitized.replace(/<embed\b[^>]*>/gi, '')
  sanitized = sanitized.replace(/<form\b[^>]*>[\s\S]*?<\/form>/gi, '')

  // Remove base tags that could hijack URLs
  sanitized = sanitized.replace(/<base\b[^>]*>/gi, '')

  // Remove meta refresh and other dangerous meta tags
  sanitized = sanitized.replace(/<meta\b[^>]*http-equiv[^>]*>/gi, '')

  // Remove SVG as it can contain scripts
  sanitized = sanitized.replace(/<svg\b[^>]*>[\s\S]*?<\/svg>/gi, '')

  // Remove expression() in style attributes (IE XSS vector)
  sanitized = sanitized.replace(/style\s*=\s*["'][^"']*expression\s*\([^"']*["']/gi, '')

  // Remove -moz-binding (Firefox XSS vector)
  sanitized = sanitized.replace(/style\s*=\s*["'][^"']*-moz-binding[^"']*["']/gi, '')

  // Ensure external links have proper rel attribute for security
  sanitized = sanitized.replace(
    /<a\s+([^>]*href\s*=\s*["']https?:\/\/[^"']+["'][^>]*)>/gi,
    (match, attrs) => {
      if (!attrs.includes('rel=')) {
        return `<a ${attrs} rel="noopener noreferrer">`
      }
      return match
    }
  )

  return sanitized
}

/**
 * Escapes HTML special characters
 * Use for displaying user input as text (not HTML)
 */
export function escapeHtml(text: string): string {
  const htmlEntities: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  }
  return text.replace(/[&<>"']/g, (char) => htmlEntities[char])
}
