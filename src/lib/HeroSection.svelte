<script>
	import Grid from '$lib/Grid.svelte'
	import { createDraggable } from '$lib/draggable.svelte.js'

	const square = createDraggable({ radius: 200 })
	const triangle = createDraggable({ radius: 200 })
	const circle = createDraggable({ radius: 200 })

</script>

<Grid>
	<!--	Name-->
	<div class="flex flex-col">
		<h1 class="font-handwriting pb-5 text-7xl">Elijah Flader</h1>
		<h3 class="font-handwriting text-4xl">Code and Maths</h3>
	</div>

	<!--	Shapes-->
	<div class="flex flex-col">


		<div class="m-40 flex items-center justify-center">
			<!-- Square -->
			<svg bind:this={square.svgEl} class="pointer-events-none absolute inset-0 h-full w-full overflow-visible">
				<line
					x1={square.originPx.x}
					y1={square.originPx.y}
					x2={square.originPx.x + square.offsetX}
					y2={square.originPx.y + square.offsetY}
					stroke="black" stroke-width="2" stroke-dasharray="6 4" opacity="0.4"
				/>
			</svg>
			<div
				bind:this={square.shapeEl}
				class={`shape h-32 w-32 rounded-3xl bg-blue-500 opacity-50 ease-in select-none ${square.dragging ? 'cursor-grabbing' : 'cursor-grab'}`}
				style={`transform: translateX(${square.offsetX}px) translateY(${square.offsetY}px) rotate(12deg) scale(${square.dragging ? 1.1 : 1})`}
				onpointerdown={square.onPointerDown}
				role="button"
				tabindex=0
				aria-label={`Draggable square`}
			>
				<h2 class="text-3xl m-2 translate-4 font-handwriting text-black">Drag Shapes</h2>
			</div>

			<!--		Triangle-->
			<svg bind:this={triangle.svgEl} class="pointer-events-none absolute inset-0 h-full w-full overflow-visible">
				<line
					x1={triangle.originPx.x}
					y1={triangle.originPx.y}
					x2={triangle.originPx.x + triangle.offsetX}
					y2={triangle.originPx.y + triangle.offsetY}
					stroke="black" stroke-width="2" stroke-dasharray="6 4" opacity="0.4"
				/>
			</svg>
			<svg bind:this={triangle.shapeEl} class={`h-40 w-40 translate-y-30 ${triangle.dragging ? 'cursor-grabbing' : 'cursor-grab'}`}
					 style={`transform: translateX(${triangle.offsetX}px) translateY(${triangle.offsetY}px) scale(${triangle.dragging ? 1.1 : 1})`}
					 onpointerdown={triangle.onPointerDown}
					 role="presentation"
			>
				<polygon
					points="80,10 150,150 10,150"
					fill="oklch(0.637 0.237 25.331 / 50%)"
					stroke="oklch(0.637 0.237 25.331 / 50%)"
					stroke-width="4"
					style="stroke-dasharray: 500; stroke-dashoffset: 500;"
				/>
			</svg>

			<!--		Circle-->
			<svg bind:this={circle.svgEl} class="pointer-events-none absolute inset-0 h-full w-full overflow-visible">
				<line
					x1={circle.originPx.x}
					y1={circle.originPx.y}
					x2={circle.originPx.x + circle.offsetX}
					y2={circle.originPx.y + circle.offsetY}
					stroke="black" stroke-width="2" stroke-dasharray="6 4" opacity="0.4"
				/>
			</svg>
			<div
				bind:this={circle.shapeEl}
				class={`shape h-32 w-32 bg-green-500 opacity-50 ${circle.dragging ? 'cursor-grabbing' : 'cursor-grab'}`}
				style={`border-radius: 200px; transform: translateX(${circle.offsetX}px) translateY(${circle.offsetY}px) scale(${circle.dragging ? 1.1 : 1})`}
				onpointerdown={circle.onPointerDown}
				role="button"
				tabindex=0
				aria-label={`Draggable circle`}
			></div>
		</div>
	</div>

</Grid>
