const express = require('express')

function calculateSum(n){
    let ans = 0;
    for(let i = 0; i<=n ; i++){
        ans = ans + i;
    }
    return ans;
}

const app = express();

app.get('/',(req,res)=>{
    const n = req.query.n;
    const ans = calculateSum(n);
    res.json({ans})
})

app.listen(3000)