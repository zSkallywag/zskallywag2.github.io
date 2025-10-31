export const Footer = () => {
  return (
    <footer className="py-12 px-6 bg-background border-t border-border">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo */}
          <div className="text-2xl font-black">
            cyber<span className="text-accent">nest</span>
          </div>

          {/* Tagline */}
          <div className="text-center md:text-right">
            <p className="text-lg font-semibold text-secondary">
              © CyberNest — Real security, not buzzwords.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
