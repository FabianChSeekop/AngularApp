export interface Transaction {
  name: string;
  amount: number;
  isAdd: boolean;
  id_account: number;
  dateAt: Date;
}
