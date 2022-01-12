const fastify = require('fastify')

const build = (options = {}) => {
  const app = fastify(options)

  app.get('/', (request, reply) => {
    reply.send({ hello: 'world' })
  })

  return app
}

module.exports = build
