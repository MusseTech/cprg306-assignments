import './globals.css';

export const metadata = {
  title: "Shopping List",
  description: "Web Development 2 Week 3 Assignment",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <div className="bg-gray-900 text-white min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}