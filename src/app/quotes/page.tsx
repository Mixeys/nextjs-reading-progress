interface Quote {
	author: string
	id: number
	quote: string
}

interface Quotes {
	limit: number
	quotes: Quote[]
	skip: number
	total: number
}

async function getQuotes(): Promise<Quotes> {
	const res = await fetch('https://dummyjson.com/quotes')

	if (!res.ok) {
		throw new Error('Failed to fetch data')
	}

	return res.json()
}

export default async function Quotes() {
	const quotes = await getQuotes()

	return (
		<section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-[73px]">
			{quotes.quotes.map((quote: Quote) => (
				<article key={quote.id} className="flex flex-col items-center justify-center">
					<h2 className="my-4 text-2xl">{quote.quote}</h2>
					<p>{quote.author}</p>
				</article>
			))}
		</section>
	)
}
