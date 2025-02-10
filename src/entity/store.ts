import { Product } from './product';

export class Store {
  private inventory: Map<Product, number> = new Map<Product, number>();

  public addInventory(product: Product, quantity: number): void {
    this.inventory.set(product, quantity);
  }

  public getInventory(product: Product): number {
    return this.inventory.get(product) || 0;
  }

  public hasEnoughInventory(product: Product, quantity: number): boolean {
    return this.getInventory(product) >= quantity;
  }

  public removeInventory(
    success: boolean,
    product: Product,
    quantity: number,
  ): void {
    if (success) {
      const current: number = this.getInventory(product);
      this.addInventory(product, current - quantity);
    }
  }
}
