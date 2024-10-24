import { UserAgentProvider } from "../components/providers/userAgentProvider";
import { Layout } from "@/components/layout";
import "./globals.css";
import { getUserAgent } from "@/utils/getUserAgent";

const RootLayout = async ({
  children,
  request,
}: {
  children: React.ReactNode;
  request: Request;
}) => {
  const userAgent = getUserAgent(request?.headers);

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
