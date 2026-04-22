<script>
	import LinkButton from '$lib/LinkButton.svelte';
	var { project, offset = 0, zIndex = 0 } = $props();
</script>

<div
	id="card"
	class="absolute flex h-full w-full flex-row items-center justify-center rounded-2xl border-10 border-blue-100 bg-white p-5"
	style:transform="translateY({offset * 20}px) scale({1 - Math.abs(offset) * 0.005})"
	style:z-index={zIndex}
	style:transition="transform 0.4s ease, opacity 0.4s ease"
	style:opacity={zIndex < -2 ? 0 : 1}
>
	<img alt="logo" src={project.image} class="h-auto w-2/3 rounded-lg border border-gray-200" />
	<div class="m-2 flex flex-col space-y-10">
		<h1 class="mb-0 text-2xl">{project.title}</h1>
		<hr />
		<p>{project.description}</p>
		<div class="flex h-full w-full flex-row">
			<LinkButton isActive={!isNaN(project.link)} text="Website" link={project.link} />
			<LinkButton text="GitHub" link={project.github} />
		</div>
	</div>
</div>

<style>
</style>
