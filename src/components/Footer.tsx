export default function Footer() {
  return (
    <footer className="w-full bg-white">
      <div className="container mx-auto px-6 md:px-16">
        <div className="py-6 md:py-8 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-black/40 text-xs md:text-sm">
            © 2026 Active Pilates. Todos os direitos reservados.
          </p>
          <p className="text-black/40 text-xs md:text-sm flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-[#CF9D2F] rounded-full" />
            Pilates Clássico em Salvador, BA
          </p>
        </div>
      </div>
    </footer>
  );
}
