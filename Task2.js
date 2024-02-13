// Mock patient data
const patients = [
  { id: 1, name: 'Alice Smith', age: 32, medicalHistory: 'Diabetes' },
  { id: 2, name: 'Bob Jones', age: 45, medicalHistory: 'Hypertension' }
];

app.get('/patients', (req, res) => res.json(patients));
