
function isAnagram(s: string, t: string): boolean {

    if(s.length !== t.length) {
        return false; 
    }

    const sortedFirstString = s.split('').sort(); 
    const sortedSecondString = t.split('').sort(); 

    return sortedFirstString.join('') === sortedSecondString.join('');
};


