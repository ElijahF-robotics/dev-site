<script>
	  import NavBarItem from '$lib/NavBarItem.svelte';
</script>

<div role="navigation" class="w-screen flex items-center justify-center p-10 fixed top-0 z-50">
	<div class={`bg-blue-200 opacity-50 backdrop-blur-2xl rounded-4xl flex transition-all duration-500 shadow-md translate-y-0`}>
		<NavBarItem text="Home" link="/"/>
		<NavBarItem text="About" link="/about"/>
		<NavBarItem text="Projects" link="/projects"/>
	</div>
</div>

