import Supplier from "./Supplier";

export async function searchSuppliers() {
  let url =  import.meta.env.VITE_API_URL  + 'suppliers'
  let response = await fetch(url, {
    "method": 'GET',
    "headers": {
      "Content-Type": 'application/json'
    }
  })

  return await response.json();
}

export async function removeSupplier(id: string) {
  let url = import.meta.env.VITE_API_URL  + 'suppliers/' + id
  await fetch(url, {
    "method": 'DELETE',
    "headers": {
      "Content-Type": 'application/json'
    }
  })
}

export async function saveSupplier(supplier: Supplier) {
  let url = import.meta.env.VITE_API_URL  + 'suppliers'
  await fetch(url, {
    "method": 'POST',
    "body": JSON.stringify(supplier),
    "headers": {
      "Content-Type": 'application/json'
    }
  });
}

export async function searchSupplierById(id: string) {
  let url = import.meta.env.VITE_API_URL  + 'suppliers/' + id
  let response = await fetch(url, {
    "method": 'GET',
    "headers": {
      "Content-Type": 'application/json'
    }
  })

  return await response.json();
}