const { fastify } = require("fastify")

const data = require("./data.json")
const schema = require("./schema.json")

const options = {
	schema: {
		response: {
			200: schema
		}
	}
}

const instance = fastify({ logger: true })
	.post("/with", options, (request, reply) => {
		reply.status(200).send(data)
	})
	.post("/without", (request, reply) => {
		reply.status(200).send(data)
	})

// Run the server!
const start = async () => {
	try {
		await instance.listen(3000)
	} catch (err) {
		instance.log.error(err)
		process.exit(1)
	}
}
start()
