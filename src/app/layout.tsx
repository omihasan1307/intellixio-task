// src/app/layout.tsx
import { UserAgentProvider } from "../components/providers/userAgentProvider";
import { Layout } from "@/components/layout";
import "./globals.css";
import { getUserAgent } from "@/utils/getUserAgent";

const RootLayout = ({ children }: { children: React.ReactNode }) => {

  const userAgent = getUserAgent(); 

  return (
    <html lang="en">
      <body>
        <UserAgentProvider userAgent={userAgent}>
          <Layout>{children}</Layout>
        </UserAgentProvider>
      </body>
    </html>
  );
};

export default RootLayout;
