<script>
	import Grid from '$lib/Grid.svelte';
	import ProjectCard from '$lib/ProjectCard.svelte';
	import RoundedButton from '$lib/RoundedButton.svelte';

	import upArrow from '$lib/assets/upArrow.svg';
	import downArrow from '$lib/assets/DownArrow.svg';

	import websiteImg from '$lib/assets/website.png';
	import attoImg from '$lib/assets/atto.png';
	import homepageImg from '$lib/assets/homepage.png';
	import colorgameImg from '$lib/assets/colorgame.png';

	const projects = [
		// { title: 'Current Project - Task-Timer', github: '/project1', link: "", image: websiteImg,
		// 	description: "This website! It's built in svelte and hosted on Vercel." },

		{ title: 'Atto', github: 'https://github.com/ElijahF-robotics/atto', link: NaN, image: attoImg,
			description: "This is a terminal editor. It was a chance for me to learn the basics of Rust and terminal" +
				" management. It's built entirely and Rust and can be downloaded using crates and" +
				" the github. I created it to be a simpler alternative to nano for when I'm editing" +
				" simply config files and don't need all nano offers." },

		{ title: 'Homepage', github: 'https://github.com/ElijahF-robotics/Homepage', link: "https://homepage.elijahflader.dev", image: homepageImg,
			description: "While Safari's default homepage is fine, I wanted to build something" +
				" a little more lively and tuned to what I need. Therefore I built this. It's" +
				" accessible via a live website and can quite easily be used in Safari" +
				" on Mac. It's built using plain old HTML, CSS, and JS. It's hosted in Vercel." },

		{ title: 'Color Game', github: 'https://github.com/ElijahF-robotics/color-game', link: "https://colors.elijahflader.dev", image: colorgameImg,
			description: "I wanted to learn React, so I built this little game. It's fairly simple" +
				" to play, just try to get the highest score, but I find it enjoyable. You're goal" +
				" is to match the color the best you can. It was fun to make and I learned quite a lot" +
				" about how React works. It is also hosted on Vercel."},

		{ title: 'This Website!', github: '', link: NaN, image: websiteImg,
			description: "This website! It's built in svelte and hosted on Vercel. It holds" +
				" some personal information about me and my projects." },
	];


	import { fly } from 'svelte/transition';

	let currentIndex = $state(0);
	let direction = $state(1); // 1 = going down, -1 = going up

	function next() {
		if (currentIndex < projects.length - 1) {
			direction = 1;
			currentIndex++;
		}
	}

	function prev() {
		if (currentIndex > 0) {
			direction = -1;
			currentIndex--;
		}
	}

		let visibleProjects = $derived(projects.slice(currentIndex, currentIndex + 3));
</script>

<Grid>
	<div class="relative w-full h-full overflow-hidden">
		{#each visibleProjects as project, i (currentIndex + i)}
			<div
				in:fly={{ y: direction * -60, duration: 400, delay: i * 50 }}
				out:fly={{ y: direction * 60, duration: 400 }}
				class="absolute w-full h-full"
				style:z-index={-i}
			>
				<ProjectCard project={project} offset={i} zIndex={-i} />
			</div>
		{/each}
	</div>
	<div class="flex flex-col justify-center items-center pt-4 pb-4 h-full space-y-10">
		<RoundedButton svgUrl={upArrow} onclick={prev} disabled={currentIndex === 0} />
		<RoundedButton svgUrl={downArrow} onclick={next} disabled={currentIndex >= projects.length - 1} />
	</div>
</Grid>
