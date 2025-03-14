import Employee from "./Employee";

export async function searchEmployees() {
  let url = import.meta.env.VITE_API_URL + 'employees'
  let response = await fetch(url, {
    "method": 'GET',
    "headers": {
      "Content-Type": 'application/json'
    }
  })

  return await response.json();
}

export async function removeEmployee(id: string) {
  let url = import.meta.env.VITE_API_URL + 'employees/' + id
  await fetch(url, {
    "method": 'DELETE',
    "headers": {
      "Content-Type": 'application/json'
    }
  })
}

export async function saveEmployee(employee: Employee) {
  let url = import.meta.env.VITE_API_URL + 'employees'
  await fetch(url, {
    "method": 'POST',
    "body": JSON.stringify(employee),
    "headers": {
      "Content-Type": 'application/json'
    }
  });
}

export async function searchEmployeeById(id: string) {
  let url = import.meta.env.VITE_API_URL + 'employees/' + id
  let response = await fetch(url, {
    "method": 'GET',
    "headers": {
      "Content-Type": 'application/json'
    }
  })

  return await response.json();
}