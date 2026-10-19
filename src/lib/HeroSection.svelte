<script>
	import Grid from '#lib/Grid.svelte';
	import { createDraggable } from '#lib/draggable.svelte.js';
	import PhysicsLayer from "#lib/PhysicsLayer.svelte"

	const square = createDraggable({ radius: 200 });
	const triangle = createDraggable({ radius: 200 });
	const circle = createDraggable({ radius: 200 });
</script>


<PhysicsLayer></PhysicsLayer>

<Grid>
	<!--	Name-->
	<div class="pointer-events-none z-20 flex flex-col">
		<h1 class="font-handwriting pb-5 text-7xl">Elijah Flader</h1>
		<h3 class="font-handwriting text-4xl">Code and Maths</h3>
	</div>
</Grid>
