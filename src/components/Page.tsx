import { cn } from "@/lib/utils"

type PageProps = {
  children: React.ReactNode;
  className?: string;
}

const Page: React.FC<PageProps> = ({ children, className }) => {
  return (
    <main className={cn("flex min-h-[100vh] flex-col justify-center gap-8 px-4 pb-28 pt-24", className)}>
      {children}
    </main>
  );
};

export default Page;
