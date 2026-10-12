<script>
	let { children, color } = $props();
</script>

<div class={`mx-1 my-0.5 flex w-fit rounded-2xl px-2 py-1 text-sm ${color}`}>
	{@render children()}
</div>
