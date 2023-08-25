// PDF creator service


// Your code in here!
function createPDF(application, user) {
// This function should create a PDF based on application and user data 

}

// Example User
const user = {
    first_name: 'Pierre',
    last_name: 'de Fermat',
    address: {
        line_1: '123 Main St',
        city: 'SF',
        state: 'CA',
        zip: 94122
    },
    email: 'pierre@example.com',
    phone: '123-456-7890'
};

// Example Application
const application = {
    type: 'installment_loan',
    amount: 100000,
    apr: 316,
    finance_charge: 20000,
    total_of_payments: 10000,
    number_of_payments: 14,
    payment_amount: 71429,
    payment_period: 'monthly',
    first_payment_date: '2023-09-30',
    last_payment_date: '2024-10-30',
    amount_given_to_you: 980000,
    amount_paid_to_others: 0,
    amount_provided_total: 980000,
    custom_credit_agreement: null
};



createPDF(application, user);