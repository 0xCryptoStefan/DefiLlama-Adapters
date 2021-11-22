const {calculateUsdUniTvl} = require('../helper/getUsdUniTvl')

module.exports={
    cronos:{
        tvl: calculateUsdUniTvl("0x7Aa2149fF9EF4A09D4ace72C49C26AaE8C89Fb48", "cronos", "0x5C7F8A570d578ED84E63fdFA7b1eE72dEae1AE23", [], "crypto-com-chain")
    }
}