<script lang="ts">
  import {onMount} from 'svelte';
	import type { TopAppBarComponentDev } from '@smui/top-app-bar';
	import TopAppBar, { Row, Section, Title, AutoAdjust } from '@smui/top-app-bar';
	import IconButton, { Icon } from '@smui/icon-button';
	import { mdiMenu, mdiWeatherSunny, mdiWeatherNight } from '@mdi/js';
	import { Svg } from '@smui/common/elements';
  import { base } from '$app/paths';

	let topAppBar: TopAppBarComponentDev;

	let darkTheme: boolean | undefined = undefined;

  onMount(() => {
    darkTheme = window.matchMedia('(prefers-color-scheme: dark)');
  });
</script>

<svelte:head>
	<!-- SMUI Styles -->
	{#if darkTheme === undefined}
		<link rel="stylesheet" href="{base}/smui.css" media="(prefers-color-scheme: light)" />
		<link rel="stylesheet" href="{base}/smui-dark.css" media="screen and (prefers-color-scheme: dark)" />
	{:else if darkTheme}
		<link rel="stylesheet" href="{base}/smui.css" />
		<link rel="stylesheet" href="{base}/smui-dark.css" media="screen" />
	{:else}
		<link rel="stylesheet" href="{base}/smui.css" />
	{/if}
</svelte:head>

<TopAppBar bind:this={topAppBar} variant="short">
	<Row>
		<Section>
			<IconButton>
				<Icon component={Svg} viewBox="0 0 24 24">
					<path fill="currentColor" d={mdiMenu} />
				</Icon>
			</IconButton>
			<Title>cakraocha</Title>
		</Section>
		<Section align="end" toolbar>
			<IconButton on:click={() => (darkTheme = !darkTheme)}>
        <Icon component={Svg} viewBox="0 0 24 24">
					<path fill="currentColor" d={darkTheme ? mdiWeatherSunny : mdiWeatherNight} />
				</Icon>
      </IconButton>
		</Section>
	</Row>
</TopAppBar>
<AutoAdjust {topAppBar}>
	<slot />
</AutoAdjust>

<style>
	/* Hide everything above this component. */
	:global(app),
	:global(body),
	:global(html) {
		display: block !important;
		height: auto !important;
		width: auto !important;
		position: static !important;
	}
</style>
