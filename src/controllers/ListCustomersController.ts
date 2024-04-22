import { FastifyReply, FastifyRequest } from 'fastify';
import { ListCustomersService } from '../services/listCustomersService';

export class ListCustomersController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const listCustomerService = new ListCustomersService();

    const customers = await listCustomerService.execute();

    reply.send(customers);
  }
}
