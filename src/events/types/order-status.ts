export enum OrderStatus{
    //when the order has been created, but the
    //ticket it is trying to order has not been reserved
    Created = 'created',

    //The ticket the order is trying to reserve has already been reserved
    //or when the user has cancelled the order
    //The order expires before the payment
    Cancelled = 'cancelled',

    //The order has successfully reserved the ticket
    AwaitingPayment = 'awaiting:payment',

    //The order has reserved the ticket and user has provided the payment successfully
    Complete = 'complete'
}