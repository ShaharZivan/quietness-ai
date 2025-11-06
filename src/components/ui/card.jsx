import React from 'react'
export function Card({ className = '', children, ...props }) {
  return <div className={`bg-white border border-gray-200 rounded-2xl ${className}`} {...props}>{children}</div>
}
export function CardHeader({ className = '', children, ...props }) {
  return <div className={`p-4 border-b border-gray-200 ${className}`} {...props}>{children}</div>
}
export function CardTitle({ className = '', children, ...props }) {
  return <h3 className={`text-lg font-semibold ${className}`} {...props}>{children}</h3>
}
export function CardDescription({ className = '', children, ...props }) {
  return <p className={`text-sm text-gray-600 ${className}`} {...props}>{children}</p>
}
export function CardContent({ className = '', children, ...props }) {
  return <div className={`p-4 ${className}`} {...props}>{children}</div>
}
export default Card
