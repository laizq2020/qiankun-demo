import "./public-path"
import Vue from "vue"
import App from "./App.vue"

Vue.config.productionTip = false

if (!window.__POWERED_BY_QIANKUN__) {
	new Vue({
		el: "#app",
		render: (h) => h(App),
	})
}
export async function bootstrap() {}

export async function mount({ container, label }) {
	new Vue({
		el: container.querySelector("#app"),
		render: (h) =>
			h(App, {
				attrs: {
					label,
				},
			}),
	})
}

export function unmount({ container }) {
	const elem = container.querySelector("#app")
	const app = elem ? elem.__vue__ : null

	if (app) {
		app.$destroy()
		app.$el.innerHTML = ""
	}
	return Promise.resolve()
}
