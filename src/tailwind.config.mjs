/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}', './public/**/*.html'],
    theme: {
        extend: {
            fontSize: {
                xs: ['0.75rem', { lineHeight: '1', letterSpacing: '0.05em', fontWeight: '400' }],
                sm: ['0.875rem', { lineHeight: '1.25', letterSpacing: '0.025em', fontWeight: '400' }],
                base: ['1rem', { lineHeight: '1.5', letterSpacing: '0em', fontWeight: '400' }],
                lg: ['1.125rem', { lineHeight: '1.75', letterSpacing: '-0.01em', fontWeight: '400' }],
                xl: ['1.25rem', { lineHeight: '1.75', letterSpacing: '-0.015em', fontWeight: '400' }],
                '2xl': ['1.5rem', { lineHeight: '2', letterSpacing: '-0.02em', fontWeight: '500' }],
                '3xl': ['1.875rem', { lineHeight: '2.25', letterSpacing: '-0.025em', fontWeight: '500' }],
                '4xl': ['2.25rem', { lineHeight: '2.5', letterSpacing: '-0.03em', fontWeight: '600' }],
                '5xl': ['3rem', { lineHeight: '1', letterSpacing: '-0.035em', fontWeight: '700' }],
                '6xl': ['3.75rem', { lineHeight: '1', letterSpacing: '-0.04em', fontWeight: '700' }],
                '7xl': ['4.5rem', { lineHeight: '1', letterSpacing: '-0.045em', fontWeight: '800' }],
                '8xl': ['6rem', { lineHeight: '1', letterSpacing: '-0.05em', fontWeight: '800' }],
                '9xl': ['8rem', { lineHeight: '1', letterSpacing: '-0.05em', fontWeight: '900' }],
            },
            fontFamily: {
                heading: "'Orbitron', 'Syncopate', sans-serif",
                paragraph: "roboto"
            },
            colors: {
                'light-gray': '#E0E0E0',
                'dark-gray': '#666666',
                destructive: '#FF4136',
                'destructive-foreground': '#FFFFFF',
                background: '#F5F5F5',
                secondary: '#B8860B',
                foreground: '#333333',
                'secondary-foreground': '#000000',
                'primary-foreground': '#FFFFFF',
                primary: '#A52A2A',
                // Synthwave colors
                'synthwave-midnight': '#00172D',
                'synthwave-dark': '#1a1f3a',
                'synthwave-neon-pink': '#FF007F',
                'synthwave-neon-cyan': '#00FFFF',
                'synthwave-neon-blue': '#0080FF',
                'synthwave-purple': '#8338ec',
                'synthwave-light': '#f0f0f0',
            },
        },
    },
    future: {
        hoverOnlyWhenSupported: true,
    },
    plugins: [require('@tailwindcss/container-queries'), require('@tailwindcss/typography')],
}
