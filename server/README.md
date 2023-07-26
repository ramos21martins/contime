# SERVER

### Local
```bash
nvm i
npm i
npm dev
```

### OBJECTS
```
Person:
  Name: String
  Email: String
  PhoneNumber: Number
```
```
Manager: Person[password]
``````
```
Employee: Person[managerId]
```
```
Sheet:
  Hours: Number
  ...Dynamic
```
