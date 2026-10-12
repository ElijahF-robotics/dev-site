<script>
	let { svgUrl, onclick } = $props();
</script>

<button
	{onclick}
	class="ml-10 flex h-13 w-13 flex-col items-center justify-center rounded-full bg-amber-100 opacity-50 hover:opacity-100"
>
	<img src={svgUrl} alt="arrow" class="w-1/2" />
</button>
