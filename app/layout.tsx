import "@fancyapps/ui/dist/fancybox/fancybox.css";

import '../app/ui/global.css';
import '../public/fonts/stylesheet.css';
import { HeaderPage } from "@/app/header/headerPage";
import { Footer } from "@/app/footer";
import {Navigation} from "@/app/breadCrumbs/Navigation";
import { LatestVideo } from './latestVideo/LatestVideo';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <html lang="en">
      <body className="m-0">
      <Navigation />
      <HeaderPage />
      {children}
      <Footer />
      </body>
      </html>
  );
}
