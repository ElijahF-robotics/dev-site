<script>
	let { isActive = true, text = "Doesn't Exist", link = 'example.com' } = $props();
</script>

<a
	href={link}
	class={`m-2 flex h-full w-full flex-col items-center justify-center rounded-lg pt-4 pb-4 ${isActive ? 'bg-amber-100 hover:bg-amber-200' : 'pointer-events-none bg-slate-100'}`}
>
	{text}
</a>
