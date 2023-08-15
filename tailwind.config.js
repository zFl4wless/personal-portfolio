import plugin from 'tailwindcss/plugin.js';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary: {
					50: '#F0F2FD',
					100: '#E4E7FB',
					200: '#CFD4F6',
					300: '#B2B7EF',
					400: '#9293E7',
					500: '#7E78DC',
					600: '#6A5ACD',
					700: '#5E4DB5',
					800: '#4D4192',
					900: '#413A75',
				},
				neutral: {
					50: '#F6F6F7',
					100: '#E1E4E6',
					200: '#C2C8CD',
					300: '#9CA3AC',
					400: '#777F8A',
					500: '#5C6570',
					600: '#485059',
					700: '#3C4149',
					800: '#33373C',
					850: '#2e3236',
					900: '#202225',
				},
			},
			dropShadow: {
				image: '0 0 15px theme("colors.primary.500")',
			},
			fontFamily: {
				'open-sans': ['Open Sans', 'sans-serif'],
				koulen: ['Koulen', 'display'],
			},
			maxWidth: {
				'8xl': '120rem',
			},
		},
	},
	plugins: [
		plugin(function ({ matchUtilities, theme }) {
			matchUtilities(
				{
					'text-shadow': (value) => ({
						textShadow: value,
					}),
				},
				{ values: theme('textShadow') },
			);
		}),
	],
};
