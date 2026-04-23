<script>
	let {children, color} = $props()
</script>

<div class={`w-fit flex px-2 py-1 text-sm rounded-2xl mx-1 my-0.5 ${color}`}>
	{@render children()}
</div>