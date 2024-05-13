/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                xl: "1200px",
                "2xl": "1300px",
            },
        },
    },
    plugins: [],
};
