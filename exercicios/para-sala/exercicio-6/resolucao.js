function Account(numero, agencia, saldo) {
    let account = Object.create(Account.prototype);
    account.numero = numero;
    account.agencia = agencia;
    account.saldo = saldo;

    return account;
}

Account.prototype.credit = function Credit(amount) {
    this.saldo += amount;
    console.log(`[${this.numero}-${this.agencia}] Foi adicionado R$${amount} ao saldo. O novo saldo é de R$${this.saldo}`);
}

Account.prototype.debit = function Debit(amount) {
    this.saldo -= amount;
    console.log(`[${this.numero}-${this.agencia}] Foi removido R$${amount} do saldo. O novo saldo é de R$${this.saldo}`);
}

Account.prototype.transferTo = function TransferTo(anotherAccount, amount) {
    if(this.saldo < amount) throw new Error(`Saldo insuficiente.`);
    this.debit(amount);
    anotherAccount.credit(amount);
}

module.exports = {Account}