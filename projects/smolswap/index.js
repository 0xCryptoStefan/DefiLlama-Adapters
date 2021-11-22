const {calculateUsdUniTvl} = require('../helper/getUsdUniTvl')

module.exports={
    cronos:{
        tvl: calculateUsdUniTvl("0x7Aa2149fF9EF4A09D4ace72C49C26AaE8C89Fb48", "cronos", "0x2Ad63Da83d6ff5dA9E716DcaE844D4f157405BDd", [], "ethereum")
    }
}