export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-[#6b7280]">© {new Date().getFullYear()} Alidiamond. All rights reserved.</p>
        <div className="text-sm text-[#6b7280]">
          Contact: <a href="mailto:hello@alidiamond.com" className="text-[#2563eb] hover:underline">hello@alidiamond.com</a>
        </div>
      </div>
    </footer>
  )
}
