<template>
	<div id="app">
		<p>我是{{ label }}的内容</p>
	</div>
</template>

<script>
export default {
	name: "App",
	props: {
		label: {
			type: String,
			default: "",
		},
	},
}
</script>
