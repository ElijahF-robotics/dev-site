<script>

	import LinkButton from '$lib/LinkButton.svelte';
	var {project, offset = 0, zIndex = 0} = $props()
</script>


<div id="card"
		 class="absolute flex flex-row items-center justify-center bg-white border-10 border-blue-100 rounded-2xl w-full h-full p-5"
		 style:transform="translateY({offset * 20}px) scale({1 - Math.abs(offset) * 0.005})"
		 style:z-index={zIndex}
		 style:transition="transform 0.4s ease, opacity 0.4s ease"
		 style:opacity={zIndex < -2 ? 0 : 1}>
	<img alt="logo" src={project.image} class="w-2/3 h-auto rounded-lg border border-gray-200" />
	<div class="flex flex-col m-2 space-y-10">
		<h1>{project.title}</h1>
		<p>{project.description}</p>
		<div class="flex flex-row w-full h-full">
			<LinkButton isActive={!isNaN(project.link)} text="Website" link={project.link} />
			<LinkButton text="GitHub" link={project.github}/>
		</div>
	</div>

</div>


<style>

</style>