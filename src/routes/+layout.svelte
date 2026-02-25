<script>
	import './layout.css';
	import NavBar from '$lib/NavBar.svelte';

	let { children } = $props();

	let isDown = $state(false)

	function lowerBar() {
		isDown = !isDown;
	}

	// Debug Code
	function onKeyDown(e) {
		if (e.key === 'Enter') {
			lowerBar();
		}
	}

	function onScroll() {
		if (!isDown) {
			isDown = true;
		}
	}

</script>

<NavBar {isDown} {lowerBar}/>
<div class="flex flex-col h-fit w-screen items-center font-sans">
	{@render children()}
</div>


<style>
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Shadows+Into+Light&display=swap');
    @import "tailwindcss";

    @theme {
        --font-sans: 'Montserrat', sans-serif;
        --font-handwriting: 'Shadows Into Light', cursive;
    }

</style>

<svelte:window on:keydown|preventDefault={onKeyDown} on:scroll|preventDefault={onScroll}/>
