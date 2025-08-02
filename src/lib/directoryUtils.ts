import directoryData from '@/data/directory.json';

export interface Contact {
  name: string;
  designation: string;
  phone: string;
  email?: string;
  address?: string;
  department: string;
  subCategory?: string;
  priority?: number;
  level?: string | string[];
  description?: string;
}

export function transformDirectoryData(): Contact[] {
  const contacts: Contact[] = [];
  let globalPriority = 1;

  // Define department order for consistent sorting
  const departmentOrder = [
    'General & Revenue Administration',
    'Planning & Development', 
    'Health & Social Services',
    'Agriculture & Allied Sectors',
    'Education',
    'Infrastructure & Utilities',
    'Commerce, Supplies & Cooperation',
    'Police & Security',
    'Forest & Environment',
    'Municipal Administration (Ieeja Municipality)'
  ];

  departmentOrder.forEach((deptKey) => {
    const department = directoryData[deptKey as keyof typeof directoryData];
    if (!department) return;

    department.departments.forEach((subDept) => {
      subDept.officials.forEach((official) => {
        // Skip officials without names or with null names
        if (!official.name || official.name === null) return;

        contacts.push({
          name: official.name,
          designation: official.designation,
          phone: official.phone || 'N/A',
          email: official.email || undefined,
          address: official.address || undefined,
          department: deptKey,
          subCategory: subDept.name,
          priority: globalPriority++,
          level: Array.isArray(official.level) ? official.level.join(', ') : official.level,
          description: official.description
        });
      });
    });
  });

  return contacts;
}

export function getDepartments(): string[] {
  return Object.keys(directoryData);
}

export function getContactsByDepartment(department: string): Contact[] {
  const allContacts = transformDirectoryData();
  return allContacts.filter(contact => contact.department === department);
}