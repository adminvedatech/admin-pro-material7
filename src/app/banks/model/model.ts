
export class Bank {
    id: string;
    nameBank: string;
    accountNumber: string;
    phone: string;
    email: string;
    balance: number;
    balanceToday: number;


}

export class Check {

    id: string;
    nameBank: Bank;
    initialDate: Date;
    paymentDate: Date;
    checkNumber: string;
    paymentTo: string;
    checkValue: number;
    department: string;
    costType: string;

}