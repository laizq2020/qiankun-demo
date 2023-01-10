<template>
	<div>
		<div style="margin-bottom: 20px">
			<el-button size="small" @click="addTab()">添加新页签 </el-button>
		</div>
		<el-tabs v-model="activeTab" type="card" closable @tab-remove="removeTab">
			<el-tab-pane
				v-for="item in tabs"
				:key="item.name"
				:label="item.label"
				:name="item.name"
			>
				<MicroModel :label="item.label" />
			</el-tab-pane>
		</el-tabs>
	</div>
</template>
<script>
import MicroModel from "./MicroModel"

export default {
	data() {
		return {
			activeTab: "",
			tabs: [],
			tabIndex: 0,
		}
	},
	methods: {
		addTab() {
			const name = Math.random().toString(32).slice(2)
			this.tabIndex++
			this.tabs.push({
				label: "动态页签" + this.tabIndex,
				name: name,
			})
			this.activeTab = name
		},
		removeTab(name) {
			const tabs = this.tabs
			let index = tabs.findIndex((item) => item.name === name)
			if (index > -1) {
				tabs.splice(index, 1)
			}
			if (name === this.activeTab) {
				this.activeTab = tabs[tabs.length - 1].name
			}
		},
	},
	components: {
		MicroModel,
	},
}
</script>
