'use client'

import { createContext, useContext, useState } from 'react'

type Theme = {
  primary: string
  secondary: string
  background: string
  text: string
}

const themes: Record<string, Theme> = {
  default: {
    primary: '#be123c',
    secondary: '#e11d48',
    background: '#fff1f2',
    text: '#9f1239'
  },
  // Bleus
  navy: {
    primary: '#1e3a8a',
    secondary: '#1e40af',
    background: '#eff6ff',
    text: '#1e3a8a'
  },
  azure: {
    primary: '#0369a1',
    secondary: '#0284c7',
    background: '#f0f9ff',
    text: '#0c4a6e'
  },
  skyBlue: {
    primary: '#0284c7',
    secondary: '#0ea5e9',
    background: '#f0f9ff',
    text: '#075985'
  },
  // Verts
  emerald: {
    primary: '#047857',
    secondary: '#059669',
    background: '#ecfdf5',
    text: '#064e3b'
  },
  forest: {
    primary: '#166534',
    secondary: '#15803d',
    background: '#f0fdf4',
    text: '#14532d'
  },
  mint: {
    primary: '#0f766e',
    secondary: '#0d9488',
    background: '#f0fdfa',
    text: '#134e4a'
  },
  // Rouges
  ruby: {
    primary: '#9f1239',
    secondary: '#be123c',
    background: '#fff1f2',
    text: '#881337'
  },
  coral: {
    primary: '#be123c',
    secondary: '#fb7185',
    background: '#fff1f2',
    text: '#881337'
  },
  // Violets
  purple: {
    primary: '#6b21a8',
    secondary: '#7e22ce',
    background: '#faf5ff',
    text: '#581c87'
  },
  lavender: {
    primary: '#7e22ce',
    secondary: '#9333ea',
    background: '#faf5ff',
    text: '#6b21a8'
  },
  grape: {
    primary: '#801148FF',
    secondary: '#A71A9BFF',
    background: '#faf5ff',
    text: '#4c1d95'
  },
  // Oranges
  sunset: {
    primary: '#c2410c',
    secondary: '#ea580c',
    background: '#fff7ed',
    text: '#9a3412'
  },
  tangerine: {
    primary: '#ea580c',
    secondary: '#f97316',
    background: '#fff7ed',
    text: '#c2410c'
  },
  amber: {
    primary: '#d97706',
    secondary: '#f59e0b',
    background: '#fffbeb',
    text: '#b45309'
  },
  // Roses
  rose: {
    primary: '#be185d',
    secondary: '#db2777',
    background: '#fdf2f8',
    text: '#9d174d'
  },
  pink: {
    primary: '#db2777',
    secondary: '#ec4899',
    background: '#fdf2f8',
    text: '#be185d'
  },
  fuchsia: {
    primary: '#a21caf',
    secondary: '#c026d3',
    background: '#fdf4ff',
    text: '#86198f'
  },
  // Marrons
  chocolate: {
    primary: '#7c2d12',
    secondary: '#9a3412',
    background: '#fef3c7',
    text: '#78350f'
  },
  coffee: {
    primary: '#854d0e',
    secondary: '#a16207',
    background: '#fef3c7',
    text: '#713f12'
  },
  caramel: {
    primary: '#a16207',
    secondary: '#ca8a04',
    background: '#fef3c7',
    text: '#854d0e'
  },
  // Gris
  slate: {
    primary: '#334155',
    secondary: '#475569',
    background: '#f8fafc',
    text: '#1e293b'
  },
  steel: {
    primary: '#475569',
    secondary: '#64748b',
    background: '#f8fafc',
    text: '#334155'
  },
  pewter: {
    primary: '#64748b',
    secondary: '#94a3b8',
    background: '#f8fafc',
    text: '#475569'
  },
  // Modes sombres
  nightBlue: {
    primary: '#1e3a8a',
    secondary: '#1e40af',
    background: '#0f172a',
    text: '#f8fafc'
  },
  nightPurple: {
    primary: '#6b21a8',
    secondary: '#7e22ce',
    background: '#2e1065',
    text: '#faf5ff'
  },
  nightGreen: {
    primary: '#047857',
    secondary: '#059669',
    background: '#022c22',
    text: '#ecfdf5'
  },
  // Thèmes spéciaux
  ocean: {
    primary: '#0891b2',
    secondary: '#06b6d4',
    background: '#ecfeff',
    text: '#164e63'
  },
  sunset2: {
    primary: '#c026d3',
    secondary: '#db2777',
    background: '#fff1f2',
    text: '#831843'
  },
  forest2: {
    primary: '#15803d',
    secondary: '#16a34a',
    background: '#f0fdf4',
    text: '#14532d'
  },
  galaxy: {
    primary: '#6d28d9',
    secondary: '#7c3aed',
    background: '#2e1065',
    text: '#ddd6fe'
  },
  desert: {
    primary: '#b45309',
    secondary: '#d97706',
    background: '#fffbeb',
    text: '#92400e'
  },
  arctic: {
    primary: '#0369a1',
    secondary: '#0891b2',
    background: '#ecfeff',
    text: '#164e63'
  },
  tropical: {
    primary: '#047857',
    secondary: '#059669',
    background: '#f0fdfa',
    text: '#134e4a'
  },
  volcanic: {
    primary: '#991b1b',
    secondary: '#b91c1c',
    background: '#450a0a',
    text: '#fef2f2'
  },
  autumn: {
    primary: '#b45309',
    secondary: '#d97706',
    background: '#fff7ed',
    text: '#9a3412'
  },
  spring: {
    primary: '#15803d',
    secondary: '#16a34a',
    background: '#f0fdf4',
    text: '#166534'
  }
}

const ThemeContext = createContext<{
  theme: Theme
  setTheme: (theme: keyof typeof themes) => void
}>({
  theme: themes.default,
  setTheme: () => {}
})

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(themes.default)

  const setTheme = (themeName: keyof typeof themes) => {
    setThemeState(themes[themeName])
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)

