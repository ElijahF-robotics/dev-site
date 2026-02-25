<script>
	let {isActive = true, text="Doesn't Exist", link="example.com"} = $props()
</script>


	<a href={link} class={`flex flex-col justify-center items-center pt-4 pb-4 w-full h-full rounded-lg m-2 ${isActive ? "bg-amber-100 hover:bg-amber-200" : "bg-slate-100 pointer-events-none"}`}>
		{text}
	</a>

