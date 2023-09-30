import {
  tGetTableRowsOutput,
  tQueryConfig,
  tUltra,
} from '@ultra-alliance/ultra-sdk';

class BaseService {
  ultra: tUltra | undefined;
  name: string;

  constructor(ultra: tUltra | undefined, name: string) {
    this.ultra = ultra;
    this.name = name;
  }

  public async getTable<TRow>(
    table: string,
    config?: tQueryConfig,
  ): Promise<tGetTableRowsOutput<TRow> | undefined> {
    const data = await this.ultra?.api.getTableRows<TRow>({
      code: this.name,
      scope: this.name,
      table,
      config,
    });

    return data;
  }

  public async signTransaction<TAction, TRes>(txObject: TAction) {
    try {
      const response = await this.ultra?.account.extension?.signTransaction(
        txObject,
      );
      if (response?.status !== 'success') {
        throw new Error('Failed to sign transaction');
      }

      return response.data as TRes;
    } catch (err) {
      console.error(err);
      throw new Error("Couldn't sign transaction");
    }
  }
}

export default BaseService;
