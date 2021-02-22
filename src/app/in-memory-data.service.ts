import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
  const notes = [
    { id: 1, name: 'Make notes', des:'Its in the folder CS520' },
    { id: 2, name: 'Weeks Schedule', des: 'Note it down from the calender in teams '},
    { id: 3, name: 'Project Work', des: 'Angular' },
    { id: 4, name: 'Assignment', des:'do' },
    { id: 5, name: 'Trip booking', des:'check flights' },
    { id: 6, name: 'Online Courses', des: 'Statistics, R, Python, ML' },
    { id: 7, name: 'Movie ', des: ' Uppena' },
    { id: 8, name: 'Magicians', des:'Complete the series' },
    { id: 9, name: 'Netflix', des:'Star trek' }
];
    return {notes};
  }
}