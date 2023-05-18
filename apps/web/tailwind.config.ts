import type { Config } from 'tailwindcss'

// import plugins
import forms from '@tailwindcss/forms'
import aspectRatio from '@tailwindcss/aspect-ratio'
import typography from '@tailwindcss/typography'

export default <Partial<Config>>{
  theme: {
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
      sans: ['DM Sans', 'sans-serif'],
      mono: ['DM Mono', 'monospace']
    },
    screens: {
      tablet: '640px',
      laptop: '1024px',
      desktop: '1280px'
    },
    extend: {}
  },
  plugins: [forms, aspectRatio, typography]
}
