
export default interface IDatabase<T> {
    insert(tableName: string, item: T): Promise<void>;
    get(key: Record<string, any>): Promise<T | null>;
    // update
    // delete
  }
  