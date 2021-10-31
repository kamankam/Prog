import { DesktopLayout, MobileLayout } from 'components/header'
import { useState } from 'react'

export default function Header() {
  const [mobileLayout] = useState(true)

  return (
    <>
      <MobileLayout />
      <DesktopLayout />
    </>
  )
}
