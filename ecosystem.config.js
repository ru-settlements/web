module.exports = {
  apps: [
    {
      name: 'NashaGora',
      exec_mode: 'cluster',
      instances: 'max',
      script: './.output/server/index.mjs',
      port: 5000
    }
  ]
}
