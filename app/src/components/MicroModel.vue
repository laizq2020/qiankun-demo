<template>
	<div ref="warp"></div>
</template>

<script>
import { loadMicroApp } from "qiankun"

export default {
	name: "MicroModel",
	props: {
		label: {
			type: String,
			default: "",
		},
	},
	mounted() {
		this.microApp = loadMicroApp({
			container: this.$refs.warp,
			name: `micro_app`,
			entry: "http://localhost:8081/micro-app/index.html",
			props: {
				label: this.label,
			},
		})
	},
	beforeDestroy() {
		this.microApp
			.unmount()
			.then(() => {
				console.log("卸载成功")
			})
			.catch((e) => {
				console.error("卸载失败", e)
			})
		this.microApp = null
	},
}
</script>
