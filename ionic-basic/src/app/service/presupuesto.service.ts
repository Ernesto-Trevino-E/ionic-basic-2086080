import { Injectable } from '@angular/core';
import { Gasto } from '../interface/gasto';

@Injectable({
  providedIn: 'root'
})
export class PresupuestoService {

  gastos: Gasto[]=[];

  constructor() { }

  public agregarGastos(monto: number, gasto: string) {

  }
}
