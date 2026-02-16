export function GridBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/80" />
      
      <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_200px,#0000,transparent)]" />
    </div>
  );
}