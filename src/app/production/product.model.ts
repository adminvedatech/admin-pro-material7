export class Product {
    id: string;
    productName: string;
    description: string;
    averageCost: string;
    code: string;
    
}

export class RawMaterial {
    id: string;
    nameRawMaterial: string;
    description: string;
    averageCost: string;
    code: string;
    unitCost: string;
    
}

export class Raws {
    material: string;
    quantity: number;
    costo: string;
    total: string;
    
}

export class Produccion {

    id:string; 
    productName: string;
    initialDate: Date;
    finalDate: Date;
    productionNumber: string;
    observations: string;
    quantity: number;
    cost: number;
    totalCost: number;
    materials: RawMaterial[];
}