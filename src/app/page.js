import { PortfolioComponent } from "@/components/portfolio";
import Image from "next/image";
import { ThemeProvider } from 'next-themes';

export default function Home() {
  return (

    <ThemeProvider attribute="class" enableSystem={false} defaultTheme="dark">
          <PortfolioComponent/> 
    </ThemeProvider>

  );
}
