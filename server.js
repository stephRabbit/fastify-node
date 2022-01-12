const PORT = process.env.PORT || 5005

const server = require('./src/app')({
  logger: {
    level: 'info',
    prettyPrint: true,
  },
})

const start = async () => {
  try {
    await server.listen(PORT)
  } catch (err) {
    server.log.error(err)
    process.exit(1)
  }
}

start()
