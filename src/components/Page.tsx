const Page = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex min-h-[100vh] flex-col justify-center gap-8 px-4 pb-8 pt-24">
      {children}
    </main>
  );
};

export default Page;
