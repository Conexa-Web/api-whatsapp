module.exports = {
    apps: [
      {
        name: 'api-wtsp',
        script: 'npx',
        args: 'tsm ./src/app.ts',
        interpreter: 'none',
        watch: true,
        env: {
          NODE_ENV: 'development'
        },
        env_production: {
          NODE_ENV: 'production'
        }
      }
    ]
  };
  