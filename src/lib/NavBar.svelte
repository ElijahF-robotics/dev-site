<script>
	import NavBarItem from '$lib/NavBarItem.svelte';
</script>

<div role="navigation" class="fixed bottom-0 md:top-0 md:bottom-full z-50 flex w-screen items-center justify-center p-10">
	<div
		class={`flex rounded-4xl bg-blue-200 opacity-50 shadow-md backdrop-blur-2xl`}
	>
		<NavBarItem text="Home" link="/" />
		<NavBarItem text="About" link="/about" />
		<NavBarItem text="Projects" link="/projects" />
	</div>
</div>
