import './globals.css';
export const metadata = {
  title: "Shopping List", // Update this line
  description: "We Development 2 Week 3 Assignment",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className="bg-gray-900 text-white">
      {children}
      </body>
    </html>
  );
}