/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				rubik: ['Rubik', 'sans-serif'],
				lobster2: ['Lobster Two ', 'cursive']
			},
			backgroundImage: {
				warp: 'linear-gradient(359.23deg, rgba(0, 0, 0, 0.7) 0.74%, rgba(0, 0, 0, 0.212344) 42.39%, rgba(0, 0, 0, 0) 99.45%)'
			},
			colors: {
				'red-primary': '#EB0029',
				'base-black-1': '#010F1C',
				'base-black-2': '#333333',
				'base-black-3': '#828282',
				'yellow-primary': '#F2C94C'
			},
			animation: {
				'spin-slow': 'spin 3s linear infinite'
			}
		}
	},
	plugins: []
};
