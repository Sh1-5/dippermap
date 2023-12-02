import { IGroup } from '../../../types'
export const Weather: IGroup = {
  icon: 'icon-tianqi',
  name: '天气',
  en_name: 'Weather',
  order: 2,
  children: [
    {
      icon: 'https://mdn.alipayobjects.com/huamei_b5qxsh/afts/img/A*YoLURLhIs0wAAAAAAAAAAAAADrZ5AQ/original',
      name: 'Windy',
      en_name: 'Windy',
      description: '全球天气预报',
      en_description: 'Global weather forecast',
      site_url: 'https://www.windy.com/',
      order: 2,
      tags: ['GIS', 'Web', 'Data']
    },
    {
      icon: 'https://caiyunapp.com/imgs/logo.png',
      name: '彩云天气',
      en_name: 'Caiyunapp',
      description: '天气预报平台，提供api',
      en_description: 'Weather forecast platform, providing API',
      site_url: 'https://caiyunapp.com/map/',
      order: 2,
      tags: ['GIS', 'Web', 'Data']
    }
  ]
}
