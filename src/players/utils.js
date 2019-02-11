// Function to convert the birthDate to age
export const dateToAge = (birthDate) => {
  var dateParts = birthDate.split('-');
  var date = new Date(dateParts[0], dateParts[1], dateParts[2]);
  var ageDifMs = Date.now() - date.getTime();
  var ageDate = new Date(ageDifMs); 
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}