module.exports = {
	content: ["./**/*.html"],
	theme: {
		extend: {
			fontFamily: {
				lora: "'Lora', serif",
				playfair: "'Playfair', serif"
			}
		}
	},
	plugins: [require("@tailwindcss/typography")]
};
