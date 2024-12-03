import SearchHeader from "@/components/SearchHeader";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <SearchHeader />
      {children}
    </div>
  );
}
