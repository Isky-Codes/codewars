function getFirstPython(list) {
  let pythonDevelopers = list.filter(el => el.language === 'Python');
  console.log(pythonDevelopers);
  if(pythonDevelopers.length > 0) {
    return `${pythonDevelopers[0].firstName}, ${pythonDevelopers[0].country}`
  }else {
    return 'There will be no Python developers'
  }
}