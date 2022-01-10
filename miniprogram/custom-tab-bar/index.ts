// custom-tab-bar/index.ts
Component({

  data: {
		active: 0,
		list: [
			{
				icon: 'wap-home',
				text: '首页',
				url: '/pages/index/index'
			},
			{
				icon: 'todo-list',
				text: '作业',
				url: '/pages/tabs-pages/homework/index'
			},
			{
				icon: 'fire',
				text: 'PK台',
				url: '/pages/tabs-pages/pkplaform/index'
			},
			{
				icon: 'manager',
				text: '我的',
				url: '/pages/tabs-pages/me/index'
			}
		]
	},

	methods: {
		onChange(event:any) {
			this.setData({ active: event.detail });
			wx.switchTab({
				url: this.data.list[event.detail].url
			});
		},

		init() {
			const page = getCurrentPages().pop();
			this.setData({
				active: this.data.list.findIndex(item => item.url === `/${page.route}`)
			});
		}
	},
  /**
   * Component properties
   */
  properties: {

  },

  /**
   * Component initial data
   */

  /**
   * Component methods
   */
})
