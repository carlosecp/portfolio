<script context="module">
	export const load = async ({ fetch }) => {
		const res = await fetch('https://api.github.com/users/carlosecp/repos');

		if (!res.ok) {
			return {
				status: res.status,
				error: new Error('Could not fetch the repos')
			};
		}

		// TODO: Should really consider using GraphQL.
		const repos = await res.json();
		const portfolioProjects = repos
			.filter((repo) => repo.topics.includes('portfolio-project'))
			.map((repo) => ({
				description: repo.description,
				homepage: repo.homepage,
				language: repo.language,
				name: repo.name,
				url: repo.url
			}));

		return {
			props: { portfolioProjects }
		};
	};
</script>

<script>
	export let portfolioProjects;
</script>

<section>
	<h1 class="text-5xl">Carlos Castillo</h1>
	<p>
		Developer from Nicaragua, currently living in Argentina and studying computer engineering @
		University of Buenos Aires. I'm a creative person, someone who is passionate about text editors,
		CLI based applications, and just programming languages overall. I'm also starting to fall in
		love with core computer science concepts and I'm trying to dig a little bit more into those
		kinds of topics.
	</p>
</section>
<section>
	<h2 class="text-4xl">Projects</h2>
	<p>
		Usually something pretty small but entertaining enough for me. I like to build apps that help me
		out on tasks I perform daily, or grab a programming book and try to complete it while learning a
		new language from scratch or something like that. These are some of the projects I've built that
		I'm most proud about:
	</p>
	<div class="flex flex-col gap-3">
		{#each portfolioProjects as project}
			<a href={project.url}>
				<article class="project">
					<h3 class="text-xl">{project.name}</h3>
					<p>{project.description}</p>
				</article>
			</a>
		{/each}
	</div>
</section>
