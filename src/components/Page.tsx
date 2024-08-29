const Page = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex min-h-[86vh] flex-col items-center justify-center gap-8 px-4 py-8 relative">
      {children}
    </main>
  );
};

export default Page;
