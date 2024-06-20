import ReadingProgress from '@/components/ReadingProgress'
import { promises as fs } from 'fs'

interface Post {
	body: string
	id: number
	reactions: number
	tags: string[]
	title: string
	userId: number
}

interface Posts {
	limit: number
	posts: Post[]
	skip: number
	total: number
}

async function getPosts(): Promise<Posts> {
	const res = await fetch('https://dummyjson.com/posts')

	if (!res.ok) {
		throw new Error('Failed to fetch data')
	}

	return res.json()
}

export default async function Home() {
	const posts = await getPosts()

	const file = await fs.readFile('./README.md', 'utf-8')

	return (
		<main className="mt-16">
			<ReadingProgress />
			<div>{file}</div>
			<section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
				{posts.posts.map((post) => (
					<article key={post.id} className="flex flex-col items-center justify-center">
						<h2 className="my-4 text-2xl">{post.title}</h2>
						<p>{post.body}</p>
					</article>
				))}
			</section>
		</main>
	)
}
