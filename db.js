import 'dotenv/config'
import postgres from 'postgres'

const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, PGSSLMODE, PGCHANNELBINDING } = process.env
const URL = `postgres://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}?sslmode=${PGSSLMODE}&channel_binding=${PGCHANNELBINDING}`

export const sql = postgres(URL, { ssl: 'require' })
