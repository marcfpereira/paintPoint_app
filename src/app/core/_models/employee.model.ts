export class Employee extends Object{
  id: number;
  name: string;
  surname: string;
  surname2: string;
  sex: string;
  'country-id': number; // This attribute is probably poorly defined in the API response
  phone: string;
  datebirthday: string; // This attribute is probably poorly defined in the API response
  lastModification: string;
}

export class Population {
  person: Employee[]
}

export interface GetEmployeesResponse {
  population: Population
}
