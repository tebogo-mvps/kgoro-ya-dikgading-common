export const toDateString = (date: Date, separator: string = '-'): string => `${date.getFullYear()}${separator}${date.getMonth() < 9 ? '0' : ''}${date.getMonth() + 1}${separator}${date.getDate() < 9 ? '0' : ''}${date.getDate()}`
export const toPaymentString = (amount: number): string => `R ${amount}${Math.floor(amount) === amount ? '.00' : ''}`
