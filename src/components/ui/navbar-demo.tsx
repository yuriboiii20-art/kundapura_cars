import { Search, Heart, Phone, Car } from 'lucide-react'
import { NavBar } from "@/components/ui/tubelight-navbar"

export function NavBarDemo() {
  const navItems = [
    { name: 'Buy Cars', url: '#car-catalog', icon: Car },
    { name: 'Search', url: '#', icon: Search },
    { name: 'Shortlisted', url: '#', icon: Heart },
    { name: 'Call Us', url: 'tel:+918047259900', icon: Phone }
  ]

  return <NavBar items={navItems} />
}
