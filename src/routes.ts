import { FastifyPluginOptions, FastifyReply, FastifyRequest } from 'fastify';
import { FastifyInstance } from 'fastify';
import { createCustomerController } from './controllers/createCustomerController';
import { ListCustomersController } from './controllers/listCustomersController';
import { DeleteCustomerController } from './controllers/DeleteCustomerController';

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {
  // db test
  fastify.get('/teste', async (request: FastifyRequest, reply: FastifyReply) => {});

  // create
  fastify.post('/customer', async (request: FastifyRequest, reply: FastifyReply) => {
    return new createCustomerController().handle(request, reply);
  });

  // get all
  fastify.get('/customers', async (request: FastifyRequest, reply: FastifyReply) => {
    return new ListCustomersController().handle(request, reply);
  });

  // delete
  fastify.delete('/customer', async (request: FastifyRequest, reply: FastifyReply) => {
    return new DeleteCustomerController().handle(request, reply);
  });
}
