export default {
  // TODO: 可置于数据库中
  app: {
    // key 代表你飞书应用的唯一标识，在下边飞书机器人事件订阅的前缀中会被使用到
    'shanyue-translation': {
      appId: 'cli_a692712a82799013',
      appSecret: 'X8qGkLY9jV5kRVhmsOcTEbP8lc7TGbv2',
      prompt: '以下我输入的语言，如果是任意语言则翻译其为中文，如果为中文则将其翻译为英文：\n'
    },
  },

  baseURL: process.env.BASE_URL || 'https://api.pumpkinaigc.online',
  apiKey: (process.env.OPEN_API_KEY ?? 'sk-nmTsYarpqoYg5eEwC05c1d062b224e89B3517931842e3fE7').split(','),
  model: process.env.GPT_MODEL || 'gpt-3.5-turbo',
}
