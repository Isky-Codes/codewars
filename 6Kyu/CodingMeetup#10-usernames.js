function addUsername(list) {
  list.forEach(element => {
    const currentYear = new Date().getFullYear();
    let age = currentYear - element.age
    let fName = element.firstName.toLowerCase()
    let lName = element.lastName[0].toLowerCase()
    element.username = `${fName}${lName[0]}${age}`
  })
  return list;
}
