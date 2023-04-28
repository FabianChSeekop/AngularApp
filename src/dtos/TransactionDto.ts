import { Transaction } from '../models/Transaction.model';

export class TransactionDto implements Transaction {
  name: string;
  amount: number;
  isAdd: boolean;
  id_account: number;
  dateAt: Date;

  Transactions: TransactionDto[] = [];

  getAll() {
    return this.Transactions.forEach((item) => {
      item;
    });
  }
}
