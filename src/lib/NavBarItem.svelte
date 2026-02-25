<script>
	let {text, link} = $props()
</script>
<a href={link}>
	<div class="hover:bg-green-200 rounded-4xl flex items-center justify-center px-10 py-4">
		<span>{text}</span>
	</div>
</a>

<style>

</style>