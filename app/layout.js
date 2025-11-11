import './globals.css'; 
import { AuthContextProvider } from './contexts/AuthContext';

export const metadata = {
  title: "Shopping List",
  description: "Web Development 2 Week 9 Assignment",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <div className="bg-gray-900 text-white min-h-screen">
          <AuthContextProvider>
            {children}
          </AuthContextProvider>
        </div>
      </body>
    </html>
  );
}