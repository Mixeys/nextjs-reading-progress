import Link from 'next/link'

export function SimpleHeader() {
	return (
		<header className="bg-gray-900 py-4 fixed w-full top-0">
			<div className="mx-auto px-4">
				<nav className="flex items-center justify-between">
					<div className="text-white text-2xl font-bold">Your Logo</div>
					<ul className="flex space-x-4">
						<li>
							<Link href="/" className="text-white hover:text-blue-300">
								Home
							</Link>
						</li>
						<li>
							<Link href="/quotes" className="text-white hover:text-blue-300">
								Quotes
							</Link>
						</li>
						<li>
							<Link href="/about" className="text-white hover:text-blue-300">
								About
							</Link>
						</li>
						<li>
							<Link href="/services" className="text-white hover:text-blue-300">
								Services
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	)
}
