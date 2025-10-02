import {fastify} from 'fastify'
// import { DatabaseMemory } from './database-memory.js'
import { DatabasePostgres } from './database-postgres.js'

const server = fastify()

// GET, POST, PUT, DELETE, PATCH -> métodos HTTP

// Criando o banco de dados em memória
// const database = new DatabaseMemory()

const database = new DatabasePostgres

// POST http://localhost:3333/videos
// Request Body -> enviar corpo para a requisição
server.post('/videos', async (request, reply) => {
  const { title, description, duration } = request.body

  await database.create({
    title,
    description,
    duration,
  })

  return reply.status(201).send()
})

// GET http://localhost:3333/videos
server.get('/videos', async (request) => {
  const search = request.query.search

  const videos = await database.list(search)

  return videos
})

// Route parameter
// PUT http://localhost:3333/videos/ID
server.put('/videos/:id', async (request, reply) => {
  const videoId = request.params.id
  const { title, description, duration } = request.body

  await database.update(videoId, {
    title,
    description,
    duration
  })

  return reply.status(204).send()
})

// Route parameter
// DELETE http://localhost:3333/videos/ID
server.delete('/videos/:id', async (request, reply) => {
  const videoId = request.params.id

  await database.delete(videoId)

  return reply.status(204).send()
})

server.listen({
  port: process.env.PORT ?? 3333
})