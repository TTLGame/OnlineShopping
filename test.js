function findStringsInArrayByKeyword(keyword, strings) {
    var returnArr =[];
    for (var string of strings){
        console.log(string)
        if (string.includes(keyword)==true){
            returnArr.push(string)
        }
    }

}
console.log(findStringsInArrayByKeyword('PHP',['Javascript', 'PHP'] ))