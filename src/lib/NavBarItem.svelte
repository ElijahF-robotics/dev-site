<script>
	let { text, link } = $props();
</script>

<a href={link}>
	<div class="flex items-center justify-center rounded-4xl px-10 py-4 hover:bg-green-200">
		<span>{text}</span>
	</div>
</a>

<style>
</style>
