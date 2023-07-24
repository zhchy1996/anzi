var str = `地域	国家	认证A	认证B	认证C	认证D	认证E	认证F	认证G
亚洲	A	◯	◯					
亚洲	B							
亚洲	C		◯					◯
亚洲	D			◯				
非洲	E						◯	
非洲	F	◯						
北美洲	G					◯		
北美洲	H							◯
`;
const row = str.split('\n');
const table = row.map(v => {
    return v.split('\t');
})
console.log(table)
const res = {};
for (let i = 1; i < table.length; i++) {
    const row = table[i];
    if (!row[0]) continue;
    const continent = row[0];
    const country = row[1];
    if (!res[continent]) {
        res[continent] = {};
    }
    if (!res[continent][country]) {
        res[continent][country] = {};
    }
    for (let j = 2; j < row.length; j++) {
        if (row[j]) {
            res[continent][country][table[0][j]] = true;
        } else {
            res[continent][country][table[0][j]] = true;
        }
    }
}
console.log(JSON.stringify(res));