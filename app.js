const printProfileData = profileDataArr => {
  console.log('================');
  profileDataArr.forEach(profileItem => console.log(profileItem));

};

var profileDataArgs = process.argv.slice(2, process.argv.length);
printProfileData(profileDataArgs);
