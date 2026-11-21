import "./globals.css";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";

const sans = Space_Grotesk({ subsets: ["latin"], variable: "--font-sans" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata = {
  title: "Kim Janna I. Laya | BS IT Student, Cybersecurity",
  description:
    "Portfolio of a BS Information Technology student (Cybersecurity major) at De La Salle Lipa. Open for a 486-hour OJT.",
};

// Runs before first paint so the page never flashes the wrong theme.
const themeScript = `
var t = 'dark';
try {
  var savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light' || savedTheme === 'dark') t = savedTheme;
} catch (e) {}
document.documentElement.setAttribute('data-theme', t);
document.documentElement.classList.toggle('dark', t === 'dark');
`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="grid-bg font-sans antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
