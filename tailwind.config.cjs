/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				rubik: ['Rubik', 'sans-serif'],
				lobster2: ['Lobster Two ', 'cursive']
			},
			colors: {
				'red-primary': '#EB0029',
				'base-black-1': '#010F1C',
				'base-black-2': '#333333'
			}
		}
	},
	plugins: []
};
