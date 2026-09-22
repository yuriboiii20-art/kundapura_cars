import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

export interface NavItem {
  name: string
  url?: string
  icon: LucideIcon
  onClick?: () => void
  badge?: number
}

export interface NavBarProps {
  items: NavItem[]
  className?: string
  activeItem?: string
  onSelect?: (name: string) => void
}

export function NavBar({ items, className, activeItem, onSelect }: NavBarProps) {
  const [activeTab, setActiveTab] = useState(activeItem || items[0]?.name)

  useEffect(() => {
    if (activeItem) {
      setActiveTab(activeItem)
    }
  }, [activeItem])

  return (
    <div
      className={cn(
        "flex items-center",
        className,
      )}
    >
      <div className="flex items-center gap-1.5 sm:gap-2 bg-[#FBF0E6] border border-[#ECC4A6] backdrop-blur-lg p-1 rounded-full shadow-subtle">
        {items.map((item) => {
          const Icon = item.icon
          const isActive = activeTab === item.name

          return (
            <a
              key={item.name}
              href={item.url || "#"}
              onClick={(e) => {
                if (item.onClick) {
                  e.preventDefault()
                }
                setActiveTab(item.name)
                if (onSelect) onSelect(item.name)
              }}
              className={cn(
                "relative cursor-pointer text-xs sm:text-sm font-semibold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full transition-colors flex items-center gap-2",
                "text-[#74351B] hover:text-[#2E271F]",
                isActive && "bg-[#D27848] text-white shadow-xs",
              )}
            >
              <Icon size={16} strokeWidth={2.2} className={isActive ? "text-white" : "text-[#D27848]"} />
              <span>{item.name}</span>
              {item.badge !== undefined && item.badge > 0 && (
                <span className={cn(
                  "w-4 h-4 rounded-full text-[9px] font-bold flex items-center justify-center",
                  isActive ? "bg-white text-[#D27848]" : "bg-[#D27848] text-white"
                )}>
                  {item.badge}
                </span>
              )}
              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className="absolute inset-0 w-full bg-[#D27848]/10 rounded-full -z-10"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-8 h-1 bg-[#D27848] rounded-t-full">
                    <div className="absolute w-10 h-4 bg-[#D27848]/30 rounded-full blur-md -top-2 -left-1" />
                    <div className="absolute w-6 h-4 bg-[#D27848]/40 rounded-full blur-sm -top-1" />
                  </div>
                </motion.div>
              )}
            </a>
          )
        })}
      </div>
    </div>
  )
}

