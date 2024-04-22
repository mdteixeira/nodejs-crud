import prismaClient from '../prisma';

interface DeleteCustomerProps {
  id: string;
}

export class DeleteCustomerService {
  async execute({ id }: DeleteCustomerProps) {
    if (!id) {
      throw new Error('Solicitação inválida. Faltou Id');
    }

    const findCustomer = await prismaClient.customer.findFirst({
      where: {
        id: id,
      },
    });

    if (!findCustomer) {
      throw new Error("Cliente não existe!");
    }

    await prismaClient.customer.delete({
      where: {
        id: id,
      },
    });

    return { message: 'Deletado com sucesso.' };
  }
}
