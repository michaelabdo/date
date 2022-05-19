function calculateDates(valueOne, valueTwo, testing) {
  var startDate = new Date(valueOne);
  var endDate = new Date(valueTwo);
  var diff = endDate.getTime() - startDate.getTime();   //Calculates difference in milliseconds
  var diffDays = Math.ceil(diff / (1000 * 3600 * 24));  //Calculates difference in days (diff / millisecInYear)

  if (diffDays < 0) {                                   //If the difference is negative, slightly different
    return testing                                      //proccessing - Along with 'testing' flag due to data input
      ? Math.abs(diffDays + 1).toString()
      : diffDays === -1
      ? 0
      : Math.abs(diffDays).toString();
  }

  return diffDays > 0 ? (diffDays - 1).toString() : diffDays.toString();
}

export default calculateDates;
