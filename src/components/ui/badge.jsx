import React from 'react'
export function Badge({ className = '', children, variant = 'default', ...props }) {
  const base = 'inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium'
  const styles = variant === 'secondary' ? 'bg-gray-100 text-gray-800' : 'bg-gray-900 text-white'
  return <span className={`${base} ${styles} ${className}`} {...props}>{children}</span>
}
export default Badge
