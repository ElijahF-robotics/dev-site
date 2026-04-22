<script>
	import Grid from '$lib/Grid.svelte';
	import profilePic from '$lib/assets/ProfilePicture.jpg';
</script>

<Grid>
	<div class="flex h-full w-full flex-row items-center justify-center rounded-3xl bg-slate-100 p-4">
		<!--		The Profile Picture-->
		<img
			class="m-4 h-full w-auto rounded-2xl"
			src={profilePic}
			alt="Elijah Flader next to his dog, Birch"
		/>

		<!--		Text Box-->
		<div class="flex h-full w-full flex-col items-center justify-start rounded-2xl bg-white p-4">
			<h1 class="text-3xl">About Me</h1>
			<p>This is about</p>
		</div>
	</div>
</Grid>
