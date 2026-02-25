<script>
	import Grid from '$lib/Grid.svelte';

	function range(n) {
		let array = [];
		for (let i = 0; i < n; i++) {
			array.push(i);
		}
		return array;
	}

	let showShapes = true;

</script>

<Grid>
<!--	Name-->
	<div class="flex flex-col">
		<h1 class="text-7xl font-handwriting pb-5">Elijah Flader</h1>
		<h3 class="text-4xl font-handwriting">Code and Maths</h3>
	</div>

<!--	Shapes-->
	<div class="flex items-center justify-center m-40">

<!--		 Square-->
		<div class={`shape w-32 h-32 bg-blue-500 opacity-50 rounded-3xl  transition-all duration-500  ease-in -translate-y-15 rotate-12 hover:scale-110`}></div>

<!--		Triangle-->
		<svg class={`w-40 h-40 translate-y-30 hover:scale-110 ease-in transition-all duration-500`}>
			<polygon
				points="80,10 150,150 10,150"
				fill="oklch(0.637 0.237 25.331 / 50%)"
				stroke="oklch(0.637 0.237 25.331 / 50%)"
				stroke-width="4"
				style="stroke-dasharray: 500; stroke-dashoffset: 500;"
			/>
		</svg>

<!--		Circle-->
		<div style="border-radius: 200px" class={`shape w-32 h-32 bg-green-500 opacity-50 rotate-12 transition-all duration-500 hover:scale-110`}></div>
	</div>
</Grid>