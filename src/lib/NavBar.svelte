<script>
	import NavBarItem from '$lib/NavBarItem.svelte';
</script>

<div role="navigation" class="fixed top-0 z-50 flex w-screen items-center justify-center p-10">
	<div
		class={`flex translate-y-0 rounded-4xl bg-blue-200 opacity-50 shadow-md backdrop-blur-2xl transition-all duration-500`}
	>
		<NavBarItem text="Home" link="/" />
		<NavBarItem text="About" link="/about" />
		<NavBarItem text="Projects" link="/projects" />
	</div>
</div>
