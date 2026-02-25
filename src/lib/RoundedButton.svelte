<script>
	let {svgUrl, onclick} = $props()
</script>

<button {onclick} class="rounded-full w-13 h-13 bg-amber-100 hover:opacity-100 opacity-50 flex flex-col justify-center items-center ml-10">
	<img src={svgUrl} alt="arrow" class="w-1/2"/>
</button>