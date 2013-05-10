module.exports = function(fixture) {
  return {
    users: {
      nandreasson: {
        id: 'nandreasson',
        name: 'Niklas Andréasson',
        contacts: [
          {
            name: 'John Doe',
            groups: [
            'school'
            ]
          }
        ],
        groups: {
          school: {
            id: 'school',
            name: 'School'
          }
        }
      }
    }
  };
};