for (year = 1900; year <= 2100; year++) {
    if (year % 100 !== 0 && ((year % 4) == 0) || (year % 400) == 0){
        console.log(year);
    }
}