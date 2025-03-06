import Customer from "./Customer";
//Busqueda de clientes
export async function searchCustomers() {
  let url = import.meta.env.VITE_API_URL + 'customers'
  let response = await fetch(url, {
    "method": 'GET',
    "headers": {
      "Content-Type": 'application/json'
    }
  })

  return await response.json();
}

export async function removeCustomer(id: string) {
  let url = import.meta.env.VITE_API_URL + 'customers/' + id
  await fetch(url, {
    "method": 'DELETE',
    "headers": {
      "Content-Type": 'application/json'
    }
  })
}

export async function saveCustomer(customer: Customer) {
  let url = import.meta.env.VITE_API_URL + 'customers'
  await fetch(url, {
    "method": 'POST',
    "body": JSON.stringify(customer),
    "headers": {
      "Content-Type": 'application/json'
    }
  });
}

export async function searchCustomerById(id: string) {
  let url = import.meta.env.VITE_API_URL + 'customers/' + id
  let response = await fetch(url, {
    "method": 'GET',
    "headers": {
      "Content-Type": 'application/json'
    }
  })

  return await response.json();
}