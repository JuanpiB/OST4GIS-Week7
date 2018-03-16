_.chain(list).value(); // chain calls a list of steps that are chained and value gives you the output of that list of steps*//
_.map(list,addOne);
_.chain(list).map(addOne).value();
