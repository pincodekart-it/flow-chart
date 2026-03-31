import { LayoutFooter } from "./footer";
import { LayoutHeader } from "./header";

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col h-screen">
      <LayoutHeader />
      <main className="flex-1 p-4">{children}</main>

      <LayoutFooter />
    </div>
  );
};
