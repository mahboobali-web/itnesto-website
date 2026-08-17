import { clsx } from 'clsx'

interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  href?: string
  onClick?: () => void
}

export default function Button({ children, variant = 'primary', size = 'md', className, href, onClick }: ButtonProps) {
  const base = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 cursor-pointer'
  const variants = {
    primary: 'bg-electric-500 text-white hover:bg-electric-600 active:scale-95',
    outline: 'border border-electric-300 text-electric-300 hover:bg-electric-500 hover:text-white hover:border-electric-500',
    ghost:   'text-electric-300 hover:text-white hover:bg-white/10',
  }
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  }
  const cls = clsx(base, variants[variant], sizes[size], className)
  if (href) return <a href={href} className={cls}>{children}</a>
  return <button onClick={onClick} className={cls}>{children}</button>
}
