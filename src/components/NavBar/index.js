const navigation = [
  { name: 'About', href: '#About' },
  { name: 'Experience', href: '#Experience' },
  { name: 'Projects', href: '#Projects' },
]

export default function NavBar() {
  return (
    <nav className="w-full py-2 px-8 md:px-12">
      <ul className="flex justify-center gap-12 md:gap-20 items-center mx-auto">
        {navigation.map((item) => (
          <li key={item.name}>
            <a
              href={item.href}
              className="text-gray-400 uppercase tracking-[0.2em] text-xs md:text-sm font-semibold hover:text-white transition-colors font-serif"
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
