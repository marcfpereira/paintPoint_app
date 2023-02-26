export class Employee {
  id: number;
  name: string;
  surname: string;
  surname2: string;
  sex: string;
  'country-id': number;
  phone: string;
  datebirthday: string;
  lastModification: string;
}

export class Population {
  person: Employee[]
}

export interface GetEmployeesResponse {
  population: Population
}
