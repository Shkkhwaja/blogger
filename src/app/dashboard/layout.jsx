export default function DashboardLayout({ children }) {
    return (
      <div>
        <h2 className="bg-cyan-400 text-[2em]">This is dashboard Navbar</h2>
          {children}
          <h2 className="bg-cyan-400 text-[2em]">This is dashboard Footer</h2>
        </div>
    );
  }