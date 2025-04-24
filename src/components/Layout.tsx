import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen w-full flex flex-col">
      <main className="flex-grow section-spacing">
        {children}
      </main>
    </div>
  );
};

export default Layout;